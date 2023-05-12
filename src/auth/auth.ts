import axios from "axios";
import { Credentials } from "../models/credentials";

export const login = async (credentials:Credentials) => {
const response = await axios.post("http://localhost:3030/api/auth/login", credentials)
const token = response.data
localStorage.setItem("jwt", token)
return token
}
export const register = async (credentials:Credentials) => {
const response = await axios.post("http://localhost:3030/api/auth/register", credentials)
const token = response.data
localStorage.removeItem("jwt")
localStorage.setItem("jwt", token)

return token
}

