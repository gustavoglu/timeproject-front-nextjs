import { createContext, useContext, useState } from "react";
import client from "../api/client";
import authService from "../services/AuthService";
import {  useDispatch } from "react-redux";
import { setLoading } from "../store/actions/loading";

export const ApiClientContext = createContext({});

export function ApiClientProvider({ children }) {
  const [isBusy, setIsBusy] = useState(false);

  const dispatch = useDispatch();
  client.interceptors.request.use(async (request) => {
    dispatch(setLoading(true));
    console.log("context isbusy: " + isBusy);

    const params = await authService.getUserParams();
    if (params != null) {
      request.headers.authorization = "bearer " + params.tokenAccess;
    }
    return request;
  });

  client.interceptors.response.use(
    (response) => {
      dispatch(setLoading(false));
      console.log("context isbusy: " + isBusy);
      return response;
    },
    (error) => {
      dispatch(setLoading(false));
      console.log("context isbusy: " + isBusy);
      return error;
    }
  );

  function getIsBusy() {
    return isBusy;
  }

  return (
    <ApiClientContext.Provider value={{ client, isBusy, getIsBusy, setIsBusy }}>
      {children}
    </ApiClientContext.Provider>
  );
}

export function useApiClient() {
  return useContext(ApiClientContext);
}
