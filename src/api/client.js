import axios from "axios";
import authService from "../services/authService";
import { setLoading } from "../store/actions/loading";
import { makeStore } from "../store";


const store = makeStore();

const client = axios.create({
  baseURL: process.env.API_URL,
  validateStatus: function (number) {
    // if (number === 403) {
    //   router.push({ name: "NotAuthorized" });
    // }
    return number;
  },
});

client.interceptors.request.use(async (request) => {
  store.dispatch(setLoading(true));

  const params = await authService.getUserParams();
  if (params != null) {
    request.headers.authorization = "bearer " + params.tokenAccess;
  }
  return request;
});

client.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));
    return error;
  }
);
export default client;
