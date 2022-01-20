import React from "react";
import { DetailContainer, Img, ImgContainer, FreteContainer, TextContainer } from "./styled";
import LoadingText from '../../components/Loading/LoadingText'
import LoadingCard from "../../components/Loading/LoadingCard";
import Typography from '@mui/material/Typography';

export default function RestaurantDetail({ restaurant, isLoading }) {
 return (
  <DetailContainer>
   <ImgContainer>
    {isLoading ? <LoadingCard /> : <Img src={restaurant.logoUrl}></Img>}
   </ImgContainer>
   <TextContainer>
    <Typography variant="h6" color="primary">{isLoading ? <LoadingText /> : restaurant.name}</Typography>
    <Typography color="gray">{isLoading ? <LoadingText /> : restaurant.category}</Typography>
    <FreteContainer>
     <Typography color="gray">{isLoading ? <LoadingText /> : `${restaurant.deliveryTime}-${restaurant.deliveryTime - (10)} min`}</Typography>
     <Typography color="gray">{isLoading ? <LoadingText /> : `Frete: R$${restaurant.shipping},00`}</Typography>
    </FreteContainer>
    <Typography color="gray">{isLoading ? <LoadingText /> : restaurant.address}</Typography>
   </TextContainer>
  </DetailContainer>
 )
}