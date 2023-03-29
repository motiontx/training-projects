import { ReactNode } from "react";
import {
  Button,
  Container,
  HStack,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, InfoIcon } from "@chakra-ui/icons";
import { Meta } from "../components/Meta";
import { About } from "../components/About";

export default function BaseLayout({ children }: { children: ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Meta
        title="Clamp Calculator"
        description="Automatically calculates the optimal preferred value for your CSS size to match your design."
      />
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
          <Tooltip
            label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
          >
            <Button
              variant="ghost"
              onClick={toggleColorMode}
              aria-label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Tooltip>
          <Tooltip label="About this tool">
            <Button
              variant="ghost"
              onClick={onOpen}
              aria-label="About this tool"
            >
              <InfoIcon />
            </Button>
          </Tooltip>
        </HStack>
        {children}
      </Container>
      <About isOpen={isOpen} onClose={onClose} />
    </>
  );
}
