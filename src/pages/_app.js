import "../styles/globals.css";
import {
  ApiClientProvider,
  useApiClient,
} from "../contexts/ApiClientContext";

function MyApp({ Component, pageProps }) {
  const { isBusy } = useApiClient();
  return (
    <ApiClientProvider>
      {isBusy ? <div>...loading</div> : <Component {...pageProps} />}
    </ApiClientProvider>
  );
}

export default MyApp;
