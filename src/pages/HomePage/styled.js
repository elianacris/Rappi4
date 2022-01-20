import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
margin: 50px;
h4{
    margin-top: 70px;
}
`

export const Input = styled.input`
width: 308px;
border: none;
font-size: 15px;
padding-left: 10px;
`

export const InputContainer = styled.div`
width: 328px;
display: flex;
justify-content: center;
border: 1px solid #b8b8b8;
height: 58px;
padding-left: 10px;
border-radius: 3px;
textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
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
    width: 175px;
    height: 44px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`
