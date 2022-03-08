import { createContext } from "react";

export const LoadingContext = createContext({});

export function LoadingProvider({ children }) {
  const isLoading = false;

  function setLoading(isLoading) {
    console.log(isLoading);
  }

  return (
    <LoadingContext.Provider value={{ setLoading, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
