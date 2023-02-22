import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
