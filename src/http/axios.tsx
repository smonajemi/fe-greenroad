import axios from "axios"

export default axios.create({
  // baseURL: `http://localhost:8000/`,
  baseURL: `${process.env.REACT_APP_LOCAL_URL}${process.env.REACT_APP_BE_PORT}/`,
  headers: {
    "Content-type": "application/json"
  }
})


