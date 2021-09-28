import Link from "next/link";
import { Flex, Heading, Button, useColorModeValue } from "@chakra-ui/react";
import Data from "../data/data";

interface homePageProps {
  firstStep: string;
}

const HomePage = ({ firstStep }: homePageProps) => {
  const formBackground = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      maxW={500}
      width="95%"
      direction="column"
      background={formBackground}
      p={12}
      rounded={6}
    >
      <Heading size="2xl" mb={12}>
        Welcome to the multistep form!
      </Heading>
      <Link href={firstStep || ""} passHref>
        <Button colorScheme="pink" size="lg" disabled={!firstStep}>
          {firstStep ? "Start" : "The form will be available soon"}
        </Button>
      </Link>
    </Flex>
  );
};

export const getStaticProps = async () => {
  const firstSlug = Data?.steps?.find((step) => step.position === 1)?.slug;
  return {
    props: {
      firstStep: firstSlug ? `/form/${firstSlug}` : null,
    },
  };
};

export default HomePage;
