import { useMemo } from "react";
import {
  Text,
  HStack,
  VStack,
  Code,
  Badge,
  useToast,
  useClipboard,
  useBoolean,
} from "@chakra-ui/react";

export const Result = ({
  clampProperty,
  error,
}: {
  clampProperty: { label: string; value: string } | null;
  error: string | null;
}) => {
  const [copyOnlyProp, setCopyOnlyProp] = useBoolean(false);

  const toast = useToast({
    title: "Copied!",
    position: "top-right",
    duration: 2000,
    isClosable: true,
    status: "success",
  });

  const clampValue = useMemo(() => {
    return `${!copyOnlyProp ? clampProperty?.label + ": " : ""}${
      clampProperty?.value
    }`;
  }, [clampProperty, copyOnlyProp]);

  const { onCopy: copyProperty } = useClipboard(clampValue);
  const copyToClipboardFunction = () => {
    if (!error) {
      copyProperty();
      toast({
        title: `Copied ${copyOnlyProp ? "value" : "property"} to clipboard`,
      });
    }
  };

  return (
    <VStack fontWeight="bold" whiteSpace="nowrap" maxW="100%">
      <Code
        cursor={error ? "unset" : "pointer"}
        borderRadius="md"
        overflow="hidden"
        padding={6}
        w="100%"
        pos="relative"
        variant="outline"
        onClick={() => copyToClipboardFunction()}
        sx={{
          "> .chakra-badge": {
            visibility: "hidden",
          },
          "&:hover": {
            ":before": {
              visibility: copyOnlyProp ? "hidden" : "visible",
            },
            "> .chakra-badge": {
              visibility: copyOnlyProp ? "hidden" : "visible",
            },
          },
        }}
      >
        {!error ? (
          <>
            <HStack w="100%" fontSize={["small", "small", "large", "large"]}>
              <Text>{clampProperty?.label}:</Text>
              <Code
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setCopyOnlyProp.on();
                }}
                onMouseLeave={(e) => {
                  e.preventDefault();
                  setCopyOnlyProp.off();
                }}
                cursor="pointer"
                borderRadius="md"
                padding={6}
                fontWeight="bold"
                overflow="hidden"
                fontSize={["small", "small", "large", "large"]}
                position="relative"
                zIndex={1}
              >
                <Text textOverflow="ellipsis" overflow="hidden">
                  {clampProperty?.value}
                </Text>
                <Badge
                  variant="solid"
                  fontSize={["x-small", "x-small", "small", "small"]}
                  pos="absolute"
                  right={0}
                  bottom={0}
                  visibility={copyOnlyProp ? "visible" : "hidden"}
                >
                  Copy to clipboard
                </Badge>
              </Code>
            </HStack>
            <Badge
              variant="outline"
              fontSize={["x-small", "x-small", "small", "small"]}
              pos="absolute"
              right={0}
              bottom={0}
            >
              Copy to clipboard
            </Badge>
          </>
        ) : (
          <Code
            borderRadius="md"
            padding={6}
            fontWeight="bold"
            overflow="hidden"
            fontSize={["small", "small", "large", "large"]}
            display="flex"
            colorScheme="red"
          >
            <Text textOverflow="ellipsis" overflow="hidden">
              {error}
            </Text>
          </Code>
        )}
      </Code>
    </VStack>
  );
};
