import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function signin(data) {
  const token = await axios.post(`${REACT_APP_BASE_URL}/sign-in`, data);
  return token;
}

async function sendService(body, token) {
  const config = createConfig(token);
  await axios.post(`${REACT_APP_BASE_URL}/services`, body, config);
}

async function deleteService(id, token) {
  const config = createConfig(token);
  await axios.delete(`${REACT_APP_BASE_URL}/services/${id}`, config);
}

async function getServices(token) {
  const config = createConfig(token);
  const response = await axios.get(`${REACT_APP_BASE_URL}/services`, config);
  return response;
}

async function getServiceById(id) {
  const response = await axios.get(`${REACT_APP_BASE_URL}/services/${id}`);
  return response;
}

const api = {
  signin,
  sendService,
  getServices,
  deleteService,
  getServiceById,
};

export default api;
