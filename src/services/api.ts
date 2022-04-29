import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://gorest.co.in/',
})

export default instance
