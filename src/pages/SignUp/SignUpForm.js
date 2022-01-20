import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCPF } from 'validations-br';

import { signUp } from "../../services/user";
import InputRHF from '../../components/RHF/InputRHF';
import InputMaskRHF from '../../components/RHF/InputMaskRHF';
import InputPasswordRHF from '../../components/RHF/InputPasswordRHF';
import { Box, Typography } from '@mui/material';

const mode = 'onSubmit';

const defaultValues = {
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: ''
};

const schema = {
    mode,
    defaultValues,
    resolver: yupResolver(
        yup.object().shape({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
            cpf: yup.string().required('CPF é obrigatório')
                .test('cpf', 'CPF inválido.', value => value && value.replace(/[^0-9]/g, '').length === 11 ? validateCPF(value) : true),
            password: yup.string().min(6, 'Tamanho mínimo 6 caracteres').required('Senha é obrigatória'),
            confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Deve ser a mesma que a anterior')
        }).required()
    )
};

const SignUpForm = () => {
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm(schema);
    const { control, handleSubmit } = form;

    const onSubmit = () => {
        signUp(form.getValues(), history, setIsLoading);
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
            >Cadastrar</Typography>

            <InputRHF
                name="name"
                label="Nome"
                control={control}

            />
            <InputRHF
                name='email'
                label={'E-mail'}
                control={control}
            />

            <InputMaskRHF
                name='cpf'
                label={'CPF'}
                mask="999.999.999-99"
                control={control}
            />

            <InputPasswordRHF
                name='password'
                label={'Senha'}
                control={control}
            />


            <InputPasswordRHF
                name='confirmPassword'
                label={'Confirm. Senha'}
                control={control}
            />

            <Button
                color={'primary'}
                variant={'contained'}
                type={'submit'}
                fullWidth
            >
                {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Criar</>}
            </Button>
        </Box>
    );
};

export default SignUpForm;