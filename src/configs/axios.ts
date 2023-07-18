import axios from "axios";

export const apiCourses = axios.create({
  baseURL: "/api/products",
});
