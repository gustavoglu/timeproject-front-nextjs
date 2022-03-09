import { createContext, useContext, useState } from "react";
import client from "../api/client";
import authService from "../services/AuthService";

export const ApiClientContext = createContext({});

export function ApiClientProvider({ children }) {
  const [isBusy, setIsBusy] = useState(false);

  client.interceptors.request.use(async (request) => {
    setIsBusy(true);

    const params = await authService.getUserParams();
    if (params != null) {
      request.headers.authorization = "bearer " + params.tokenAccess;
    }
    return request;
  });

  client.interceptors.response.use(
    (response) => {
      setIsBusy(false);
      return response;
    },
    (error) => {
      setIsBusy(false);
      return error;
    }
  );

  function getIsBusy() {
    return isBusy;
  }

  return (
    <ApiClientContext.Provider value={{ client, isBusy, getIsBusy }}>
      {children}
    </ApiClientContext.Provider>
  );
}

export function useApiClient() {
  return useContext(ApiClientContext);
}
