import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text as ChakraText,
  Code as ChakraCode,
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorMode,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import NextLink from "next/link";

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const About = ({ isOpen, onClose }: AboutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay bg={colorMode === "light" ? "gray.100" : "gray.900"} />
      <ModalContent mx={2}>
        <ModalCloseButton />
        <ModalBody>
          <Heading as="h1" size="xl" my={6}>
            What is the CSS{" "}
            <Box
              as="span"
              color={colorMode === "light" ? "primary.900" : "primary.100"}
            >
              clamp()
            </Box>{" "}
            function?
          </Heading>
          <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
            <Section title="How it works">
              <Text>
                The CSS <Highlight>clamp()</Highlight> function clamps a middle
                value within a range of values between a defined minimum bound
                and a maximum bound. The function takes three parameters: a{" "}
                <b>minimum value</b>, a <b>preferred value</b>, and a{" "}
                <b>maximum allowed value</b>.
              </Text>
              <Text>
                <Code>clamp(minimum, preferred, maximum)</Code>
              </Text>
              <Text>
                <List spacing={1} pl={2}>
                  <ListItem>
                    <ListIcon
                      as={CheckCircleIcon}
                      color={colorMode === "light" ? "primary.900" : "primary.100"}
                    />
                    The <b>minimum</b> is the smallest value that the function
                    will return.
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={CheckCircleIcon}
                      color={colorMode === "light" ? "primary.900" : "primary.100"}
                    />
                    The <b>preferred</b> is the value that the function will
                    return if it falls within the specified range.
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={CheckCircleIcon}
                      color={colorMode === "light" ? "primary.900" : "primary.100"}
                    />
                    The <b>maximum</b> is the largest value that the function
                    will return.
                  </ListItem>
                </List>
              </Text>
              <Text>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">
                  Read more about clamp() on MDN
                </Link>
              </Text>
            </Section>
            <Section title="Examples">
              <Text>
                The <Highlight>clamp()</Highlight> function is often used to set
                the size of an element or font size based on the size of the
                viewport or parent container. For example, consider the
                following CSS code:
              </Text>
              <Text>
                <Code>font-size: clamp(14px, 2.5vw, 20px);</Code>
              </Text>
              <Text>
                This specifies that the font size should be between <b>14px</b>{" "}
                and <b>20px</b>, but it should also scale based on the viewport
                width. The preferred value of <b>2.5vw</b> specifies that the
                font size should be <b>2.5%</b> of the viewport width. If the
                viewport is too narrow, the font size will be at least{" "}
                <b>14px</b>, and if the viewport is too wide, the font size will
                not exceed <b>20px</b>.
              </Text>
            </Section>
            <Section title="About this Tool!">
              <Text>
                While it may sound straightforward in theory, finding the ideal{" "}
                <b>preferred value</b> for a font-size, padding, or margin to
                precisely match your design can be challenging in practice.
              </Text>
              <Text>
                To address this issue, this tool aims to simplify the process by
                automatically computing the optimal preferred value for you. By
                providing a few key inputs, such as the{" "}
                <b>minimum and maximum values for your size</b> and the{" "}
                <b>maximum and minimum viewport size of your design</b>, the app
                generates the appropriate clamp function and preferred value,
                ensuring your font-sizes, paddings, and margins aligns perfectly
                with your design.
              </Text>
              <Text>
                <Link href="https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport">
                  Read more about the math behind this tool on CSS-Tricks
                </Link>
              </Text>
            </Section>
          </Accordion>
          <ChakraText textAlign="center" mt={6}>
            Made with ❤️ by <Link href="https://vittoretrivi.dev/">me</Link>
          </ChakraText>
          <Divider mt={6} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="primary" mr={3} onClick={onClose}>
            Got it!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Text = ({ children }: { children: ReactNode }) => (
  <ChakraText mb={4} lineHeight="tall">
    {children}
  </ChakraText>
);

const Code = ({ children }: { children: string }) => {
  const { colorMode } = useColorMode();

  const highlightColor = {
    light: {
      bg: "gray.700",
    },
    dark: {
      bg: "gray.600",
    },
  };

  return (
    <Box>
      <ChakraText
        bg={highlightColor[colorMode].bg}
        color="primary.50"
        px={2}
        py={2}
        roundedTop="md"
        fontFamily="mono"
        fontSize="xs"
        fontWeight="bold"
      >
        <HStack>
          <Box as="span" rounded="full" bg="red.400" w="2.5" h="2.5" />
          <Box as="span" rounded="full" bg="yellow.400" w="2.5" h="2.5" />
          <Box as="span" rounded="full" bg="green.400" w="2.5" h="2.5" />
        </HStack>
      </ChakraText>
      <ChakraCode
        px="2"
        py="1"
        roundedBottom="md"
        bg="gray.900"
        color="primary.50"
        fontSize="md"
        w="full"
        fontWeight="bold"
      >
        {children}
      </ChakraCode>
    </Box>
  );
};

const Highlight = ({ children }: { children: string }) => {
  const { colorMode } = useColorMode();

  const highlightColor = {
    light: {
      bg: "primary.100",
      color: "primary.800",
    },
    dark: {
      bg: "primary.700",
      color: "primary.50",
    },
  };

  return (
    <Box
      as="span"
      px="2"
      py="1"
      rounded="full"
      bg={highlightColor[colorMode].bg}
      color={highlightColor[colorMode].color}
      fontSize="xs"
      fontWeight="bold"
    >
      {children}
    </Box>
  );
};

const Link = ({ children, href }: { children: ReactNode; href: string }) => {
  const { colorMode } = useColorMode();

  const highlightColor = {
    light: {
      color: "primary.800",
    },
    dark: {
      color: "primary.50",
    },
  };

  return (
    <NextLink href={href} target="_blank" rel="noopener noreferrer" passHref>
      <Box
        as="a"
        fontWeight="bold"
        color={highlightColor[colorMode].color}
        rounded="full"
      >
        {children}
      </Box>
    </NextLink>
  );
};
const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <AccordionItem>
    <Heading as="h2">
      <AccordionButton px={2}>
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel px={2}>{children}</AccordionPanel>
  </AccordionItem>
);
