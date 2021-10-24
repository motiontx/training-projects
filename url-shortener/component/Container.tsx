import { Flex, FlexProps } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

interface ContainerProps extends FlexProps {
  children: React.ReactNode;
}

export default function Container({ children, ...props }: ContainerProps) {
  const formBackground = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex
      width="95%"
      maxW={900}
      direction="column"
      background={formBackground}
      p={12}
      rounded={6}
      position="relative"
      {...props}
    >
      {children}
    </Flex>
  );
}
