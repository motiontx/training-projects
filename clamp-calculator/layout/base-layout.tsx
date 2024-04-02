import { ReactNode } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
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
  page,
}: {
  children: ReactNode;
  aboutOpen?: boolean;
  page?: string;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleAboutClose = () => {
    router.push("/", undefined, { shallow: true });
  };

  return (
    <>
      <Meta page={page} />
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
        <HStack
          pos="absolute"
          top={3}
          px={3}
          border="ButtonHighlight"
          justify="space-between"
          w="full"
        >
          <Link href="https://www.vittoretrivi.dev/" passHref legacyBehavior>
            <Heading
              as="a"
              size="lg"
              color={colorMode === "light" ? "primary.600" : "primary.200"}
            >
              Vitto
              <Box
                as="span"
                color={colorMode === "light" ? "primary.200" : "primary.600"}
              >
                .
              </Box>
            </Heading>
          </Link>
          <HStack spacing={2}>
            <Tooltip
              label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
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
        </HStack>
        {children}
        <Text
          textAlign="center"
          pt={6}
          position="absolute"
          bottom={6}
          translateY={12}
        >
          Made with ❤️ by{" "}
          <Link href="https://vittoretrivi.dev/" target="_blank">
            <Box
              color={colorMode === "light" ? "primary.600" : "primary.200"}
              as="span"
              fontWeight="bold"
            >
              me
            </Box>
          </Link>
        </Text>
      </Container>
      <About isOpen={aboutOpen} onClose={handleAboutClose} />
    </>
  );
}
