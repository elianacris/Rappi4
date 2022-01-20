import React, { useEffect, useContext } from "react";
import { 
    ProfileMainContainer, 
    ProfileHeaderContainer, 
    ProfileHeaderTextContainer, 
    ProfileInfoContainer, 
    ProfileInfoAndIconContainer, 
    ProfileAddressContainer,
    ProfileAddressTextContainer,
    ProfileAddressIconContainer,
    ProfileOrderHistoryContainer
    } from './styled'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import OrderHistoryItem from "../../components/OrderHistoryItem/OrderHistoryItem"
import { GlobalContext } from "../../contexts/GlobalStateContext"
import LoadingText from '../../components/Loading/LoadingText'
import {goToEditProfilePage, goToEditAddressPage} from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";
import { useGetProfileInfo } from '../../hooks/useGetProfileInfo'

export default function ProfilePage() {
    const history = useNavigate()
    const { states } = useContext(GlobalContext)

    useGetProfileInfo()

    return (
        <ProfileMainContainer>
            <ProfileHeaderContainer>
                <ProfileHeaderTextContainer>
                    Meu perfil
                </ProfileHeaderTextContainer>
            </ProfileHeaderContainer>
            <ProfileInfoContainer>
                <ProfileInfoAndIconContainer>
                    <p>{states.isLoading ? <LoadingText /> : states.profile && states.profile.name}</p>
                    <EditOutlinedIcon onClick={() => {goToEditProfilePage(history)}}/>
                </ProfileInfoAndIconContainer>
                <p>{states.isLoading ? <LoadingText /> : states.profile && states.profile.email}</p>
                <p>{states.isLoading ? <LoadingText /> : states.profile && states.profile.cpf}</p>
            </ProfileInfoContainer>
            <ProfileAddressContainer>
                <ProfileAddressTextContainer>
                    <h3>Endereço Cadastrado</h3>
                    <p>{states.isLoading ? <LoadingText /> : states.profile && states.profile.address}</p>
                </ProfileAddressTextContainer>
                <ProfileAddressIconContainer>
                    <EditOutlinedIcon onClick={() => {goToEditAddressPage(history)}}/>
                </ProfileAddressIconContainer>
            </ProfileAddressContainer>
            <ProfileOrderHistoryContainer>
                Histórico de Pedidos
            </ProfileOrderHistoryContainer>
            <OrderHistoryItem />
        </ProfileMainContainer>
    )
}