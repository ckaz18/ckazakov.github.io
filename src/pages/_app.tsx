import { ThemeProvider } from "@emotion/react";
import CustomHeader from "components/header/customHeader";
import { AppProps } from "next/app";
import theme from 'theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CustomHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}