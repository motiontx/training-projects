import { VStack, Badge, Box, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const ErrorPage = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack maxW="100%">
      <Link href="/" passHref legacyBehavior>
        <Box
          as="a"
          position="relative"
          display="flex"
          borderRadius="lg"
          padding={[8, 8, 8, 10]}
          w="100%"
          overflow="hidden"
          borderColor={colorMode === "light" ? "blue.500" : "blue.200"}
          borderWidth={1}
        >
          <Box
            borderRadius="lg"
            padding={[2, 3, 4, 6]}
            fontWeight="bold"
            fontFamily="mono"
            fontSize={["small", "small", "large", "large"]}
            display="flex"
            textOverflow="ellipsis"
            overflow="hidden"
            bg={colorMode === "light" ? "blue.100" : "gray.700"}
            color={colorMode === "light" ? "blue.800" : "blue.100"}
          >
            Oops. Looks like we lost this page.
          </Box>
          <Badge
            variant="outline"
            pos="absolute"
            px={2}
            py={1}
            left={-0.5}
            top={-0.5}
          >
            404
          </Badge>
          <Badge
            variant="outline"
            pos="absolute"
            px={2}
            py={1}
            right={-0.5}
            bottom={-0.5}
          >
            Return to Home →
          </Badge>
        </Box>
      </Link>
    </VStack>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default ErrorPage;
