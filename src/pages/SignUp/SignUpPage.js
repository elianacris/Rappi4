import React from 'react';
import { IconButton, Toolbar } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import logo from '../../assets/logo.png';
import { ScreenContainer } from './styled';
import SignUpForm from './SignUpForm';
import { Img } from './styled';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useNavigate()
    return (

        <ScreenContainer>
            <Toolbar sx={{ width: '-webkit-fill-available', bgcolor: 'background.paper', boxShadow: 1, }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 15 }}
                    onClick={() => goToLogin(history)}
                >
                    <ArrowBackIosIcon />
                </IconButton>
            </Toolbar>
            <Img src={logo} alt='logo' />
            <SignUpForm />
        </ScreenContainer>
    );
};

export default SignUpPage;