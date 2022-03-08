import "../styles/globals.css";
import {LoadingProvider} from "../contexts/LoadingContext"

function MyApp({ Component, pageProps }) {
  return(
  <LoadingProvider>
    <Component {...pageProps} />
  </LoadingProvider>);
}

export default MyApp;
