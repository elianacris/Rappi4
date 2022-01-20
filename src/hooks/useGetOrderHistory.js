import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { useEffect } from 'react'

export const useGetOrderHistory = (setOrderHistory, setLoadingHist) => {

    const url = `${BASE_URL}orders/history`
    const token = localStorage.getItem('token')

    useEffect(() => {
        setLoadingHist(true)
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setOrderHistory(res.data.orders)
                setLoadingHist(false)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setLoadingHist(false)
            })
    }, [])

}