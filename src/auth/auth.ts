import axios from "axios";
import { Credentials } from "../models/credentials";

export const login = async (credentials: Credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:3030/api/auth/login",
      credentials
    );
    const token = response.data;
    localStorage.setItem("jwt", token);
    return token;
  } catch (error:any) {
    if (error.response) {
      alert(error.response.data);
      
    }
  }
};

export const register = async (credentials: Credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:3030/api/auth/register",
      credentials
    );
    console.log(response.data);
    
    const token = response.data;
    localStorage.removeItem("jwt");
    localStorage.setItem("jwt", token);
    return token;
  } catch (error:any) {
    console.log(error);
    if (error.response) {
      alert(error.response.data);
    } else {
      alert("An error occurred. Please try again.");
    }
  }
};

export const logout = () => {
  localStorage.removeItem("jwt")
}