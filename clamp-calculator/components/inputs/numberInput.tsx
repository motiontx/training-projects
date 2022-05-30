import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
} from "@chakra-ui/react";

export const NumberInput = ({ ...props }) => {
  return (
    <ChakraNumberInput variant="filled" {...props}>
      <NumberInputField
        textAlign="right"
        paddingRight={2}
        fontSize={["small", "small", "large", "large"]}
      />
    </ChakraNumberInput>
  );
};
