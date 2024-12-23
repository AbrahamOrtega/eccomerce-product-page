import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kumbh_Sans } from "next/font/google";
import { store } from "../store";
import { Provider } from "react-redux";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={kumbhSans.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
