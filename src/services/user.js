import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToHomePage, goToSignAddressPage } from '../routes/coordinator';

export const login = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            if (res.data.user.hasAddress) {
                goToHomePage(history)
            } else {
                goToSignAddressPage(history)
            }
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.message)
        });
};

export const signUp = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToSignAddressPage(history)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.message)
        });
};

export const signAddress = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.put(`${BASE_URL}address`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            setIsLoading(false)
            goToHomePage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.message)
        });
};

export const updateProfile = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios.put(`${BASE_URL}profile`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then((res) => {
            setIsLoading(false)
            goToHomePage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.message)
        });
};
