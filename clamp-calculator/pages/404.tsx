import { VStack, Text, Code, Badge } from "@chakra-ui/react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <VStack maxW="100%">
      <Link href="/" passHref>
        <Code
          as="a"
          position="relative"
          borderRadius="md"
          padding={8}
          w="100%"
          variant="outline"
          overflow="hidden"
        >
          <Code
            borderRadius="md"
            padding={6}
            fontWeight="bold"
            fontSize={["small", "small", "large", "large"]}
            display="flex"
          >
            <Text textOverflow="ellipsis" overflow="hidden">
              Oops. Looks like we lost this page.
            </Text>
          </Code>
          <Badge variant="outline" pos="absolute" left={0} top={0}>
            404
          </Badge>
          <Badge variant="outline" pos="absolute" right={0} bottom={0}>
            Return to Home →
          </Badge>
        </Code>
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
