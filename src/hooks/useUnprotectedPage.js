import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator'

const useUnprotectedPage = () => {
    const history = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToHomePage(history)
        }
    }, [history])
}

export default useUnprotectedPage