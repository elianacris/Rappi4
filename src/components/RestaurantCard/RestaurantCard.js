import React from 'react';
import Typography from '@mui/material/Typography';
import {ImageContainer, RestaurantContainer, MainContainer, DescriptionContainer, ShippingContainer } from './styled'

export default function RestaurantCard(props) {

 const { name, shipping, deliveryTime, logoUrl, onClickCard } = props

  return (
    <MainContainer variant="outlined" style={{ borderRadius: 10 }}>
      <RestaurantContainer onClick={onClickCard}>
        <ImageContainer
          image={logoUrl}
          title={name}
        />
        <DescriptionContainer>
          <div>
          <Typography color={"primary"} gutterBottom variant="body2" component="p">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {deliveryTime - 10} - {deliveryTime} min
          </Typography>
          </div>
          <ShippingContainer>
            <Typography variant="body2" color="textSecondary" component="p">
              Frete {shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </ShippingContainer>
        </DescriptionContainer>
      </RestaurantContainer>
    </MainContainer>
  );
}
