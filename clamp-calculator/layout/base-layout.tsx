import { ReactNode } from "react";
import { Button, Container, HStack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Meta from "../components/Meta";

export default function BaseLayout({ children }: { children: ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Meta title="Clamp Calculator" description="Clamp Calculator" />
      <Container
        as="main"
        maxWidth={768}
        minHeight="100vh"
        pos="relative"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        py="12"
      >
        <HStack pos="absolute" right={3} top={3} border="ButtonHighlight">
          <Button variant="ghost" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
        {children}
      </Container>
    </>
  );
}
