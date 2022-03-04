import axios from "axios";
import authService from "../services/authService";


const client = axios.create({
  baseURL: process.env.API_URL,
  validateStatus: function(number) {
    // if (number === 403) {
    //   router.push({ name: "NotAuthorized" });
    // }
    return number;
  },
});

client.interceptors.request.use(async (request) => {
 
  const params = await authService.getUserParams();
  if (params != null) {
    request.headers.authorization = "bearer " + params.tokenAccess;
  }
  return request;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);
export default client;
