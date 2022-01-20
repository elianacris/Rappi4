import styled from 'styled-components'

export const OrderHistoryMainContainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const OrderHistoryItemContainer = styled.div`
    width: calc(91.12% - 8.88vw);
    height: calc(102px - 8.88vw);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    padding: 4.4%;
    h1{
        margin: 0;
        font-size: 16px;
        color: #e86e5a;
        font-weight: 400;
    }
    h2{
        margin: 0;
        font-size: 16px;
    }
    p{
        margin: 0;
        font-size: 12px;
    }
`

export const BlankOrderHistoryContainer = styled.div`
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`