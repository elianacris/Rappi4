import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { login } from "../../services/user";
import InputRHF from "../../components/RHF/InputRHF";
import InputPasswordRHF from "../../components/RHF/InputPasswordRHF";
import { Box, Typography } from "@mui/material";

const mode = 'onSubmit';

const defaultValues = {
    email: '',
    password: '',
};

const schema = {
    mode,
    defaultValues,
    resolver: yupResolver(
        yup.object().shape({
            email: yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
            password: yup.string().min(6, 'Tamanho mínimo 6 caracteres').required('Senha é obrigatória'),
        }).required()
    )
};
const LoginForm = () => {
    const form = useForm(schema);
    const { control, handleSubmit } = form;
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = () => {
        login(form.getValues(), history, setIsLoading)
    };

    return (

        <Box
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            component='form'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '84%',
                gap: '16px',
                pb: '28px'
            }}
        >
            <Typography
                variant="h6"
                textAlign={'center'}
            >
                Entrar
            </Typography>

            <InputRHF
                name='email'
                label={'E-mail'}
                control={control}
                placeholder={'email@email.com'}
            />
            <InputPasswordRHF
                name='password'
                label={'Senha'}
                control={control}
                placeholder={'Mínimo 6 caracteres'}

            />

            <Button
                type={"submit"}
                variant={"contained"}
                color={"primary"}
            >
                {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
            </Button>

        </Box>



    );
};

export default LoginForm;