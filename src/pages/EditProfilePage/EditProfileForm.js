import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, IconButton, Typography } from '@mui/material';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCPF } from 'validations-br';

import { updateProfile } from "../../services/user";
import InputRHF from '../../components/RHF/InputRHF';
import InputMaskRHF from '../../components/RHF/InputMaskRHF';
import { useGetProfileInfo } from '../../hooks/useGetProfileInfo';
import { GlobalContext } from '../../contexts/GlobalStateContext';
import { goToProfilePage } from '../../routes/coordinator';

const mode = 'onSubmit';

const defaultValues = {
    name: '',
    email: '',
    cpf: '',
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
        }).required()
    )
};

const EditProfileForm = () => {
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const { states } = useContext(GlobalContext)

    const form = useForm(schema);
    const { control, handleSubmit } = form;
    useGetProfileInfo()

    const onSubmit = () => {
        updateProfile(form.getValues(), history, setIsLoading);
    }

    useEffect(() => {
        if (states.profile) {
            form.setValue('name', states.profile.name);
            form.setValue('cpf', states.profile.cpf);
            form.setValue('email', states.profile.email);
        }
    }, [states.profile])

    return (
        <>
            <Toolbar sx={{ width: '-webkit-fill-available', bgcolor: 'background.paper', boxShadow: 1, }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 15 }}
                    onClick={() => goToProfilePage(history)}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Editar
                </Typography>
            </Toolbar>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '84%',
                    gap: '16px',
                    mt: 4
                }}
            >

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

                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
                </Button>
            </Box>
        </>
    );
};

export default EditProfileForm;