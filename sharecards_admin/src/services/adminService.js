import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

export const getDashboardData = () => {
  return axios.get(`${API_URL}/dashboard`);
};