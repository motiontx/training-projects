import Head from "next/head";
import Script from "next/script";
import { useColorMode } from "@chakra-ui/react";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

interface MetaProps {
  title?: string;
  page?: string;
}

export const Meta = ({ page }: MetaProps) => {
  const { colorMode } = useColorMode();

  const title = page ? `Clamp Calculator | ${page}` : "Clamp Calculator";
  const description =
    "Finding the perfect clamp() function for a font-size, padding, or margin to precisely match your design can be challenging. This app automatically calculates the optimal clamp() function for you!";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="CSS, design, preferred value, clamp function, clamp calculator, web development"
        />
        <meta lang="en" />
        <meta name="author" content="Vittorio Retrivi" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href={
            colorMode === "light" ? "favicon-light.png" : "favicon-dark.png"
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@vittoretrivi" />
        <meta name="twitter:creator" content="@vittoretrivi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments)} 
              gtag('js', new Date()); 
              gtag('config', '${gaId}');`,
            }}
          />
        </>
      ) : null}
    </>
  );
};
