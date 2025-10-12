import "@/styles/globals.css";
import '@fontsource/jetbrains-mono'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
