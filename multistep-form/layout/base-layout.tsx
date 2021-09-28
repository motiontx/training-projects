import { ReactNode } from "react";
import { Flex, Button, useColorMode } from "@chakra-ui/react";
import Meta from "../component/Meta";

export default function BaseLayout({ children }: { children: ReactNode }) {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Meta title="Multistep Form" />
      <main>
        <Flex
          height="100vh"
          width="100vw"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {children}
        </Flex>
      </main>
      <Button pos="absolute" right={3} top={3} onClick={toggleColorMode}>
        Toggle Color Mode
      </Button>
    </>
  );
}
