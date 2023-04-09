import {
  Alert,
  AlertDescription,
  Heading as ChakraHeading,
  Text,
  theme,
  useColorMode,
} from "@chakra-ui/react";
import { useMemo } from "react";

export const Heading = () => {
  const { colorMode } = useColorMode();

  const baseBorderStyles = useMemo(
    () => ({
      content: "''",
      width: "1rem",
      height: "100%",
      position: "absolute",
      borderTop: "2px solid",
      borderBottom: "2px solid",
      borderColor: colorMode === "light" ? "primary.100" : "primary.900",
    }),
    [colorMode]
  );

  return (
    <>
      <ChakraHeading
        as="h1"
        fontSize={["5xl", "5xl", "7xl", "7xl"]}
        mb={12}
        sx={{
          position: "relative",
          _after: {
            borderLeft: "2px solid",
            left: "-20px",
            ...baseBorderStyles,
          },
          _before: {
            borderRight: "2px solid",
            right: "-20px",
            ...baseBorderStyles,
          },
        }}
      >
        Clamp{" "}
        <Text
          as="span"
          color={colorMode === "light" ? "primary.600" : "primary.200"}
        >
          Calculator
        </Text>
      </ChakraHeading>

      <Alert mb={10} size="sm" variant="top-accent" w="fit-content" colorScheme="primary">
        <AlertDescription fontSize="sm" px="12" textAlign="center">
          Automatically calculates the optimal clamp() function!
        </AlertDescription>
      </Alert>
    </>
  );
};
