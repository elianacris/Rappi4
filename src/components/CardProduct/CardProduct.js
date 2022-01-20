import React, { useContext } from "react"
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalStateContext'
import { MainContainer } from "./styled"

export default function CardProduct({ product, functionButton }) {

 const params = useParams()
 const {states} = useContext(GlobalContext)

 return (
  <MainContainer>
   <CardMedia
    component="img"
    sx={{ width: 100 }}
    image={product.photoUrl}
    alt={product.name}
   />
   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
     <Typography color="primary">{product.name}</Typography>
     <Typography>{product.description}</Typography>
     <Typography>{`${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</Typography>
    </CardContent>
    <Button onClick={() => functionButton(product)} disabled={states.idRestaurant !== null && params.id !== states.idRestaurant}>Adicionar</Button>
   </Box>
  </MainContainer>
 )
}