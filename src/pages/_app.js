import "../styles/globals.css";
import { storeWrapper } from "../store";
import { useSelector } from "react-redux";
import { ApiClientProvider } from "../contexts/ApiClientContext";

function MyApp({ Component, pageProps }) {
  const { isLoading } = useSelector((state) => state.loading);

  if (isLoading) return;

  return (
    <ApiClientProvider>
      {isLoading ? <div>...loading</div> : <Component {...pageProps} />}
    </ApiClientProvider>
  );
}

export default storeWrapper.withRedux(MyApp);
