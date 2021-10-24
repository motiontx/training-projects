import Link from "next/link";
import { Heading, Button } from "@chakra-ui/react";
import Container from "../component/Container";

const ErrorPage = () => {
  return (
    <Container>
      <Heading size="2xl" mb={3}>
        Oops
      </Heading>
      <Heading size="xs" mb={6}>
        Looks like we lost this page.
      </Heading>
      <Link href="/" passHref>
        <Button colorScheme="yellow">Go back to home</Button>
      </Link>
    </Container>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default ErrorPage;
