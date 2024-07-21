import axios from "axios";
const instance = axios.create({
  baseURL: "http://64.227.116.98/api/",
});

export default instance;
