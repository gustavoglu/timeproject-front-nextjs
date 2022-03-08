import { LoadingContext } from "../contexts/LoadingContext";
import { useContext } from "react";

export  function useLoading() {
  const value = useContext(LoadingContext);
  return value
}
