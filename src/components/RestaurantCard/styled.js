import styled from 'styled-components'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

export const ImageContainer = styled(CardMedia)`
width: 100%;
height: 130px;
object-fit: contain;
`
export const RestaurantContainer = styled(CardActionArea)`
width: 328px;
height: 188px;
border: solid 1px #b8b8b8;
`
export const MainContainer = styled(Card)`
width: 328px;
height: 188px;
margin: 16px 0 0;
padding: 0 0 16px;
`
export const DescriptionContainer = styled(CardContent)`
display: flex;
justify-content: space-between;
`
export const ShippingContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
`

