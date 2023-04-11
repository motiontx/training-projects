import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { hexToRgb } from "../../utils/hexToRgb";

interface variantProps {
  colorScheme: any;
  colorMode: any;
}

const fieldsProps = ({ colorScheme, colorMode }: variantProps) => {
  return {
    fontWeight: "bold",
    color: `${colorScheme}.${colorMode === "light" ? "600" : "100"}`,
    bg:
      colorMode === "light"
        ? `${colorScheme}.50`
        : //@ts-ignore
          `rgba(${hexToRgb(baseTheme.colors[colorScheme][800])}, 0.2)`,
    _hover: {
      bg: `${colorScheme}.${colorMode === "light" ? "100" : "900"}`,
    },
    _focus: {
      bg: "transparent",
    },
  };
};

const NumberInput: Record<string, any> = {
  variants: {
    filled: (props: variantProps) => ({
      field: {
        ...fieldsProps(props),
      },
    }),
  },
};

const Select: Record<string, any> = {
  variants: {
    filled: (props: variantProps) => ({
      field: {
        ...fieldsProps(props),
      },
    }),
  },
  defaultProps: {
    variant: "filled",
  },
};

export const theme = extendTheme(
  {
    fonts: {
      heading: "Lobster Bold, sans-serif",
      body: "Inter, sans-serif",
    },
    colors: {
      primary: {
        ...baseTheme.colors.blue,
      },
    },
    components: {
      Select,
      NumberInput,
    },
  },

  withDefaultColorScheme({
    colorScheme: "blue",
  })
);
