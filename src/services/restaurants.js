import axios from "axios"
import { BASE_URL } from "../constants/url"

export const getRestaurantDetail = (id, setRestaurant, token, getCategorys, setCategorys, setIsLoading) => {
 setIsLoading(true)
 axios.get(`${BASE_URL}restaurants/${id}`, {
  headers: {
   auth: token,
  }
 })
  .then((res) => {
   setRestaurant(res.data.restaurant)
   setCategorys(getCategorys(res.data.restaurant))
   setIsLoading(false)
  })
  .catch((err) => {
   setIsLoading(false)
  })
}

export const getRestaurants = (setRestaurants) => {
  axios.get(`${BASE_URL}restaurants`, {
      headers: {
          auth: localStorage.getItem("token")
      }
  })
      .then((response) => {
          setRestaurants(response.data.restaurants)
      })
      .catch((error) => {
      })


}

