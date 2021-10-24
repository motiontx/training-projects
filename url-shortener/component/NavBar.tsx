import Link from "next/link";
import { Flex, Button, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justify="space-between"
      align="center"
      w="100%"
      position="sticky"
      top={0}
      shadow="xl"
      p={4}
      backdropFilter="blur(10px)"
      backgroundColor="whiteAlpha.50"
      zIndex={1}
    >
      <Link href="/" passHref>
        <Text as="a" fontSize="2xl" fontWeight="bold">
          URL Shortener
        </Text>
      </Link>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
      </Button>
    </Flex>
  );
}

export default NavBar;
