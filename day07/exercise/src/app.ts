import axios from 'axios'
const BASE_URL = 'https://fakestoreapi.com'
const PRODUCT_URL = `${BASE_URL}/products`

function fetchProducts() {
  return axios.get(PRODUCT_URL)
    .then (res => {
      console.log(res.data)
      return res.data
    }).catch(e => {
      console.error(e.message)
      return []
    })
}

fetchProducts()
  .then(products => console.log(products))
  .catch(products => console.log(products))