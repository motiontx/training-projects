import Head from "next/head";
import { useColorMode } from "@chakra-ui/react";

interface MetaProps {
  title?: string;
  description?: string;
}

export const Meta = ({ title, description }: MetaProps) => {
  const { colorMode } = useColorMode();

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="CSS, design, preferred value, clamp function, clamp calculator, web development"
      ></meta>
      <meta lang="en" />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href={colorMode === "light" ? "favicon-light.png" : "favicon-dark.png"}
      />
    </Head>
  );
};
