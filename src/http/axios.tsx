import axios from "axios"

export default axios.create({
  baseURL: `http://localhost:8000/`,
  // baseURL: `${process.env.HOST_URL}${process.env.BE_PORT}/`,
  headers: {
    "Content-type": "application/json"
  }
})


