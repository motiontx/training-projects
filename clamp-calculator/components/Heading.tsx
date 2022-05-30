import {
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
      borderColor:
        colorMode === "light" ? theme.colors.blue[100] : theme.colors.blue[900],
    }),
    [colorMode]
  );

  return (
    <ChakraHeading
      fontSize={["5xl", "5xl", "7xl", "7xl"]}
      marginBottom={12}
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
        color={
          colorMode === "light"
            ? theme.colors.blue[600]
            : theme.colors.blue[200]
        }
      >
        Calculator
      </Text>
    </ChakraHeading>
  );
};
