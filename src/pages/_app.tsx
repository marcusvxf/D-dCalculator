/* eslint-disable import/extensions */
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { Context } from "../context/context";
import { Context2 } from "../context/context2";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Context>
        <Context2>
          <Component {...pageProps} />
        </Context2>
        <GlobalStyle />
      </Context>
    </ThemeProvider>
  );
}

export default MyApp;
