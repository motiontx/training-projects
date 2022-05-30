import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Fonts, theme } from "../components/theme";
import BaseLayout from "../layout/base-layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
