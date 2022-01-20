import React from "react";
import splash from '../assets/splash.png'
import { SplashScr } from '../pages/LoginPage/styled'

const SplashScreen = () => {

    return (
        <SplashScr>
            <img src={splash} alt='logo' />
        </SplashScr>
    )

}
export default SplashScreen; 
