import styled from 'styled-components'

export const ProfileMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
`

export const ProfileHeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const ProfileHeaderTextContainer = styled.div`
    width: 175px;
    height: 44px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const ProfileInfoContainer = styled.div`
    margin: 15px;
    margin-top: calc(15px + 64px);
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        margin: 5px 4.44%;
    }
`

export const ProfileInfoAndIconContainer = styled.div`
    width: 95.56%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProfileAddressContainer = styled.div`
    background-color: #EEE;
    width: 100%;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProfileAddressTextContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        margin: 5px 4.44%;
    }
    h3{
        margin: 5px 4.44%;
        font-size: 16px;
        font-weight: 400;
        color: #b8b8b8;
    } 
`

export const ProfileAddressIconContainer = styled.div`
    margin-right: 4.44%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProfileOrderHistoryContainer = styled.div`
    width: 91.12%;
    height: 34px;
    margin-top: 7px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
`