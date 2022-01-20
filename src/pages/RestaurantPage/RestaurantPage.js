import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from "../../contexts/GlobalStateContext";
import { getRestaurantDetail } from "../../services/restaurants"
import LoadingCard from "../../components/Loading/LoadingCard";
import { goToHomePage } from "../../routes/coordinator";
import { BodyContainer, ProductsContainer, Line, PageTittleContainer, TittleNavContainer, ImageContainer } from "./styled";
import RestaurantDetail from "./RestaurantsDetail";
import CardProduct from "../../components/CardProduct/CardProduct";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useProtectedPage from "../../hooks/useProtectedPage"
import ArrowIcon from "../../assets/back.svg"

export default function RestaurantPage() {
  useProtectedPage()
  const history = useNavigate()
  const params = useParams()
  const { states, setters, requests } = useContext(GlobalContext);
  const [prodInCart, setProdInCart] = useState()
  const [qnt, setQnt] = useState(1)
  const token = localStorage.getItem('token')
  const [open, setOpen] = useState(false);

  const handleOpen = (prod) => {
    setProdInCart(prod)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const putProductInCart = (product) => {

    let quant
    let newProduct
    let newArray

    const index = states.cart.findIndex((item) => item.id === product.id)
    if (index !== -1) {
      quant = states.cart[index].quantity + qnt
      newProduct = { ...states.cart[index], quantity: quant }
      newArray = [...states.cart, newProduct]
      newArray.splice(index, 1)
      setters.setCart(newArray)
    } else {
      newProduct = { ...product, quantity: qnt }
      newArray = [...states.cart, newProduct]
      setters.setCart(newArray)
    }
    alert("produto adicionado no carrinho")
    setters.setIdRestaurant(params.id)
    handleClose()
  }


  const getCategorys = (array) => {
    let arr = [];
    array.products.map((prod) => {
      if (!arr.includes(prod.category)) {
        arr.push(prod.category)
      }
    })
    return arr
  }

  const handleChange = (event) => {
    setQnt(event.target.value);
  };

  const filterCards = (array, param) => {
    return (array.filter((prodFilter) => {
      return (prodFilter.category === param)
    })
      .map((prod) => {
        return (
          <div key={prod.id}>
            <CardProduct
              product={prod}
              functionButton={handleOpen}
            />
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Box sx={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <Typography sx={{ margin: "10% 0 10% 0" }}>Selecione a quantidade desejada</Typography>
                <FormControl fullWidth>
                  <Select
                    sx={{ mb: "10%" }}
                    value={qnt}
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                  <Button>
                    <Typography onClick={() => putProductInCart(prodInCart)} color={"#4a90e2"}>Adicionar no carrinho</Typography>
                  </Button>
                </FormControl>
              </Box>
            </Modal>
          </div>
        )
      }))
  }

  useEffect(() => {
    getRestaurantDetail(
      params.id,
      setters.setRestaurant,
      token, getCategorys,
      setters.setCategorys,
      setters.setIsLoading
    )
    states.cart.length === 0 && setters.setIdRestaurant(null)
  }, [])

  return (
    <BodyContainer>
      <PageTittleContainer>
        <TittleNavContainer>
        <img src={ArrowIcon} onClick={() => goToHomePage(history)}/>
        <p>Restaurante</p>
        </TittleNavContainer>
      </PageTittleContainer>
      {states.restaurant && (
        <RestaurantDetail
          isLoading={states.isLoading}
          restaurant={states.restaurant}
        />
      )}
      {states.isLoading ? <LoadingCard /> : states.categorys.map((cat) => {
        return (
          <ProductsContainer key={cat}>
            <p>{cat}</p>
            <Line></Line>
            {filterCards(states.restaurant.products, cat)}
          </ProductsContainer>
        )
      })}
    </BodyContainer>
  )
}