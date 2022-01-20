import styled from "styled-components"

export const BodyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
margin: 45px;
`
export const ProductsContainer = styled.div`
display: flex;
flex-direction: column ;
align-items:center;
padding-bottom:60px;
width: 328px;
padding: 16px;
p{
    align-self: flex-start;
}
`
export const Line = styled.div`
width:328px;
border: 0.1px solid #000;
margin-bottom:2%;
`
export const DetailContainer = styled.div`
padding-top: 20px;
width: 328px;
`
export const TextContainer = styled.div`
padding:3%;
`
export const ImgContainer = styled.div`
display:flex;
justify-content:center;
width: 328px;
`
export const Img = styled.img`
border-radius: 25px 25px 0 0 ;
width: 97%;
height: 30vh;
`
export const FreteContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right:40%;
`

export const PageTittleContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 56px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;

`

export const TittleNavContainer = styled.div`
    width: 360px;
    height: 44px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    p{
        padding-left: 110px;
    }
`