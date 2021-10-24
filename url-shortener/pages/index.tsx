import { useState } from "react";
import {
  Button,
  Flex,
  Input,
  Text,
  Heading,
  FormLabel,
  FormControl,
  useColorModeValue,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import Container from "../component/Container";

const getFormValues = (formData?: FormData) => {
  if (!formData) return {};

  const values: { [k: string]: any } = {};
  formData.forEach((value, key) => {
    values[key] = value;
  });
  return values;
};

const HomePage = () => {
  const [urlShort, setUrlShort] = useState<string>("");
  const { hasCopied, onCopy } = useClipboard(urlShort);
  const formBackground = useColorModeValue("gray.200", "gray.800");
  const toast = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = getFormValues(new FormData(e.currentTarget));
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.error) {
      toast({
        title: "Error",
        description: data.error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      setUrlShort(data.url);
      toast({
        title: "Success",
        description: "Your shortened URL is ready",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      // @ts-ignore
      e.target.reset();
    }
  }

  return (
    <>
      <Container>
        <Heading size="2xl" mb={6}>
          URL Shortener
        </Heading>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Flex direction="column">
            <FormControl isRequired>
              <FormLabel htmlFor="url" mb={1}>
                URL
              </FormLabel>
              <Input
                id="url"
                name="url"
                type="url"
                variant="filled"
                placeholder="https://example.com/[extremely-long-url]"
                mb={3}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="alias" mb={1}>
                Alias
              </FormLabel>
              <Input
                id="alias"
                name="alias"
                type="text"
                variant="filled"
                placeholder="example"
                mb={3}
              />
            </FormControl>
            <Button mt={3} type="submit" colorScheme="yellow">
              Shorten
            </Button>
          </Flex>
        </form>
      </Container>
      {urlShort && (
        <Container marginTop="6">
          <Heading size="xl" mb={6}>
            Here is your short URL:
          </Heading>
          <Flex
            align="center"
            flexDirection={["column", "row"]}
            justify="space-between"
            background={formBackground}
            p={6}
            rounded={6}
          >
            <Text
              pb={[3, 0]}
              width={["100%", "unset"]}
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
              fontSize="lg"
              fontStyle="italic"
            >
              {urlShort}
            </Text>
            <Button
              variant="outline"
              colorScheme="yellow"
              onClick={onCopy}
              ml={2}
            >
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Flex>
        </Container>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
