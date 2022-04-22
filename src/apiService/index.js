import axios from "axios";
const baseURL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/";

export const postDataToServer = (data) => {
  return axios.post(`${baseURL}products/`, data);
};

export const fetchList = async (url) => {
  const response = await axios.get(`${baseURL}${url}`);
  return response.data;
};
