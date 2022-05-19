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

const api = {
  signin,
  sendService,
};

export default api;
