import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import { goToSignUpPage } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import { ScreenContainer, SignUpButtonContainer, Img } from "./styled";
import logo from "../../assets/logo.png";
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SplashScreen from "../../components/SplashScreen";

const LoginPage = () => {
    useUnprotectedPage()
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return isLoading ?
        <SplashScreen /> :
        <ScreenContainer>
            <Img src={logo} alt='logo' />
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUpPage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui cadastro? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>


};

export default LoginPage;