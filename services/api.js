import axios from 'axios'


const api = axios.create({
  baseURL:
    'https://sys-dev.searchandstay.com/api/admin',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api