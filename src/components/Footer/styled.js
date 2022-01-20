import styled from 'styled-components'

export const FooterMainContainer = styled.div`
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    display: flex;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #FFF;
    z-index: 1;
`

export const FooterNavContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`