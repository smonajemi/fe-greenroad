import axios from "axios"

export default axios.create({
  baseURL: `${process.env.REACT_APP_HOST_URL}${process.env.REACT_APP_BE_PORT}/`,
  headers: {
    "Content-type": "application/json"
  }
})


