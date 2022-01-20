import React from "react";
import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import SignAddressPage from "../pages/SignAddressPage/SignAddressPage"
import HomePage from "../pages/HomePage/HomePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function Router() {

    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/perfil/cadastro' element={<SignUpPage />} />
            <Route path='/endereco/cadastro' element={<SignAddressPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path='/restaurante/:id' element={<RestaurantPage />} />
            <Route path='/carrinho' element={<CartPage />} />
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='/perfil/editar' element={<EditProfilePage />} />
            <Route path='/endereco/editar' element={<EditAddressPage />} />
            <Route element={<ErrorPage />} />
        </Routes>
    )
}