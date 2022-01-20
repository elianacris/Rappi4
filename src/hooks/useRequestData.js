import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalStateContext'
import axios from 'axios'

const useRequestData = (initialData, url) => {

  const { states, setters } = useContext(GlobalContext)
  const [data, setData] = useState(initialData)
  const token = localStorage.getItem('token')

  useEffect(() => {
    setters.setIsLoading(true)
    axios.get(url, {
      headers:
      {
        auth: token
      }
    })
      .then((response) => {
        setData(response.data)
        setters.setIsLoading(false)
      })
      .catch((error) => {
        alert('Ocorreu um erro, tente novamente')
        setters.setIsLoading(false)
      })
  }, [url])


  return (data)
}

export default useRequestData