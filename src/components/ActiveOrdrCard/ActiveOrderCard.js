import React from 'react'
import ClockIcon from '../../assets/clock.svg'
import { CardContainer, OrderContainer, ClockContainer, OrderInProgress } from './styled'

export default function ActiveOrderCard(props) {

    const { restaurantName = '', totalPrice = 0 } = props.order
    
    
    return (
        <CardContainer>
            <ClockContainer>
                <img src={ClockIcon} alt="Relógio" />
            </ClockContainer>
            <OrderContainer>
                <OrderInProgress>Pedido em andamento</OrderInProgress>
                <p>{restaurantName}</p>
                <p>
                    <strong>
                        SUBTOTAL: {Number(totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </strong>
                </p>
            </OrderContainer>
        </CardContainer>
    )
}