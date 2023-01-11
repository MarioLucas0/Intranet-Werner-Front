import axios from "axios";

export const api = axios.create({
  baseURL: "http://169.57.150.59:8025",
});
export const createUser = async (email, password) => {
  return api.post("/auth/registro")
};
export const loginUser = async (email, password) => {
  return api.post("/auth/login", {email, password})
};
export const getPosts = async () => {
  return api.get("/posts")
};



/* export const ecommerceAPI = axios.create({
    baseURL: "https://backend-webdev.herokuapp.com"
}) */

export default api;