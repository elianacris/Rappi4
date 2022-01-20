import React from 'react'

import { ScreenContainer } from '../SignUp/styled'
import SignAddressForm from './SignAddressForm'
import useProtectedPage from '../../hooks/useProtectedPage'

const SignAddressPage = () => {
    useProtectedPage()
    return (

        <ScreenContainer>
            <SignAddressForm />
        </ScreenContainer>

    )
}

export default SignAddressPage