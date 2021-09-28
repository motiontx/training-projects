import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  const formBackground = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex
      width="95%"
      maxW={500}
      direction="column"
      background={formBackground}
      p={12}
      rounded={6}
      position="relative"
    >
      {children}
    </Flex>
  );
}
