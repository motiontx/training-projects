import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import Meta from "../component/Meta";
import NavBar from "../component/NavBar";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta title="URL Shortener" description="Shorten your URL" />
      <Flex flexDir="column" as="main" minH="100vh">
        <NavBar />
        <Flex
          flex={1}
          py={6}
          width="100vw"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
}
