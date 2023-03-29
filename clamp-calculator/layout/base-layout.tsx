import { ReactNode } from "react";
import {
  Button,
  Container,
  HStack,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, InfoIcon } from "@chakra-ui/icons";
import { Meta } from "../components/Meta";
import { About } from "../components/About";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BaseLayout({
  children,
  aboutOpen = false,
}: {
  children: ReactNode;
  aboutOpen?: boolean;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleAboutClose = () => {
    router.push("/", undefined, { shallow: true });
  };

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
            <Link href="/about" passHref legacyBehavior>
              <Button as="a" variant="ghost" aria-label="About this tool">
                <InfoIcon />
              </Button>
            </Link>
          </Tooltip>
        </HStack>
        {children}
      </Container>
      <About isOpen={aboutOpen} onClose={handleAboutClose} />
    </>
  );
}
