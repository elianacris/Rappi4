import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalStateContext"
import { DivAdress, DivHeader, DivMain, DivRestaurant, DivItems, DivItem, DivImage, DivDescription, DivDelivery, DivSubTotal, DivPaymentMethods, ImG, Span1, Span2, Span3, Span4, Span5, Span6, Span7, Span8, Span9, DivButton, Button, DivScroll, SpanRest1, SpanRest2, SpanRest3, SpanRest4, ButtonRest, DivRadio, Span10, DisabledButton, DivButtonRemover } from "./styled";
import { goToHomePage } from "../../routes/coordinator";
import { BASE_URL } from '../../constants/url'

export default function CartPage() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [restaurantData, setRestaurantData] = useState("")
    const [qtd, setQnd] = useState(0)
    const [address, setAddress] = useState()
    const [paymentMethod, setPaymentMethod] = useState("money")
    let order = {
        products: [],
        paymentMethod: paymentMethod
    }
    const { states, setters, requests } = useContext(GlobalContext);
    const [cart, setCart] = useState(states.cart)
    let total = 0

    useEffect(() => {
        cart.length > 0 && getRestaurant()
        getAddress()
    }, [])

    useEffect(() => {
        if (cart.length === 0) {
            setters.setIdRestaurant(null)
        }
    }, [qtd])

    useEffect(() => {
        renderCart()
    }, [qtd])

    const getRestaurant = () => {
        axios.get(`${BASE_URL}restaurants/${states.idRestaurant}`, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                setRestaurantData(res.data.restaurant)
            })
            .catch((err) => {
                alert('Ocorreu um erro. =/\n Tente novamente mais tarde.')
            })
    }

    const getAddress = () => {
        axios.get(`${BASE_URL}profile/address`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setAddress(res.data.address)
            })
            .catch((err) => {
            })
    }

    const placeOrder = () => {
        cart.forEach((item) => {
            const prod = { id: item.id, quantity: item.quantity }
            order.products.push(prod)
        })
        const body = order

        axios.post(`${BASE_URL}restaurants/${states.idRestaurant}/order`, body, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                alert("Pedido efetuado com sucesso!")
                setters.setCart([])
                goToHomePage(navigate)
                localStorage.setItem('activeOrder', true)
                localStorage.setItem('expiration', res.data.order.expiresAt)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setters.setCart([])
                goToHomePage(navigate)
            })
    }

    const renderCart = () => {

        cart.forEach((rest) => {
            total += rest.quantity * rest.price
        })

        return (cart.map((item) => {

            return (

                <DivItem key={item.id}>
                    <DivImage>
                        <ImG src={item.photoUrl} alt="item.name" />
                    </DivImage>
                    <DivDescription>
                        <SpanRest1>{item.quantity}</SpanRest1>
                        <SpanRest2>{item.name}</SpanRest2>
                        <SpanRest3>{item.description}</SpanRest3>
                        <SpanRest4>{Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</SpanRest4>
                        <ButtonRest onClick={() => deleteItemCart(item.id)}>Remover</ButtonRest>
                    </DivDescription>
                </DivItem>
            )
        }))
    }

    const deleteItemCart = (id) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                if (cart[i].quantity !== 1) {
                    cart[i].quantity -= 1
                    setQnd(qtd + 1)
                } else {
                    cart.splice(cart[i], 1)
                    setQnd(qtd + 1)
                }
            }
        }
    }

    const onChangePaymentMethods = (e) => {
        setPaymentMethod(e.target.value)
    }

    return (
        <DivMain>
            <DivHeader>
                Meu carrinho
            </DivHeader>

            <DivScroll>
                <DivAdress>
                    <Span1>Endereco de entrega</Span1>
                    <Span2>{address && address.street}, {address && address.number}</Span2>
                </DivAdress>

                <DivRestaurant>
                    {cart.length > 0 &&
                        <>
                            <Span3>{restaurantData.name}</Span3>
                            <Span4>{restaurantData.address}</Span4>
                            <Span5>{restaurantData.deliveryTime - 10} - {restaurantData.deliveryTime} min</Span5>
                        </>}
                </DivRestaurant>

                <DivItems>
                    {cart.length > 0 ? renderCart() : 'Seu carrinho está vazio'}
                </DivItems>

                <DivDelivery>
                    <Span6>Frete {cart.length > 0 ? Number(restaurantData.shipping).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : (0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Span6>
                </DivDelivery>

                <DivSubTotal>
                    <Span7>SUBTOTAL</Span7>
                    <Span8>{Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Span8>
                </DivSubTotal>

                <DivPaymentMethods>
                    <Span9>Forma de pagamento</Span9>
                    <Span10></Span10>
                    <DivRadio>
                        <input type="radio" defaultChecked name="checked" value="money" onChange={onChangePaymentMethods} />
                        <label>Dinheiro</label>
                    </DivRadio>

                    <DivRadio>
                        <input type="radio" name="checked" value="creditcard" onChange={onChangePaymentMethods} />
                        <label>Cartao de credito</label>
                    </DivRadio>
                </DivPaymentMethods>

                <DivButton>
                    {cart.length > 0 ?
                        <Button onClick={placeOrder} disabled={false}>Confirmar</Button>
                        :
                        <DisabledButton onClick={placeOrder} disabled={true}>Confirmar</DisabledButton>
                    }
                </DivButton>
            </DivScroll>
        </DivMain>
    )
}