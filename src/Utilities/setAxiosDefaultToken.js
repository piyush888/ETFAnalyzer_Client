import axios from "axios";
const setAxiosDefaultToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};

export default setAxiosDefaultToken;
