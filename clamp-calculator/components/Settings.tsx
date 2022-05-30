import { useState, useEffect, useMemo, Dispatch, SetStateAction } from "react";
import { Text, HStack, VStack, Select } from "@chakra-ui/react";
import { NumberInput } from "./inputs/numberInput";
import { cssProperties } from "../shared/cssProperties";

export const Settings = ({
  setClampProperty,
  setError,
}: {
  setClampProperty: Dispatch<
    SetStateAction<{ label: string; value: string } | null>
  >;
  setError: Dispatch<SetStateAction<string | null>>;
}) => {
  const [minViewport, setminViewport] = useState(375);
  const [maxViewport, setmaxViewport] = useState(1440);
  const [pixelsPerRem, setPixelsPerRem] = useState(16);
  const [minValue, setminValue] = useState(1);
  const [maxValue, setmaxValue] = useState(4);
  const [stringMinValue, setStringMinValue] = useState("1");
  const [stringMaxValue, setStringMaxValue] = useState("4");

  const [cssProperty, setCssProperty] = useState(cssProperties["font size"]);

  const errors = useMemo(() => {
    return [
      {
        condition: minViewport === 0,
        message: "Min viewport must be greater than 0",
      },
      {
        condition: maxViewport === 0,
        message: "Max viewport must be greater than 0",
      },
      {
        condition: pixelsPerRem === 0,
        message: "Pixels per rem must be greater than 0",
      },
      {
        condition: minViewport === maxViewport,
        message: "Min viewport cannot be equal to max viewport",
      },
      {
        condition: minValue > maxValue,
        message: "Min value cannot be greater than max value",
      },
    ];
  }, [minViewport, maxViewport, pixelsPerRem, minValue, maxValue]);

  useEffect(() => {
    for (const error of errors) {
      if (error.condition) {
        setError(error.message);
        return;
      }
    }

    setError(null);

    const minWidth = minViewport / pixelsPerRem;
    const maxWidth = maxViewport / pixelsPerRem;
    const slope = (maxValue - minValue) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minValue;

    const value = `clamp(${minValue}rem, ${yAxisIntersection.toFixed(
      4
    )}rem + ${(slope * 100).toFixed(4)}vw, ${maxValue}rem);`;

    setClampProperty({
      label: cssProperty,
      value,
    });
  }, [
    minViewport,
    maxViewport,
    pixelsPerRem,
    minValue,
    maxValue,
    cssProperty,
    setClampProperty,
    errors,
    setError,
  ]);

  return (
    <>
      <HStack marginBottom={12}>
        <VStack
          spacing={4}
          textAlign="center"
          fontSize={["small", "small", "large", "large"]}
          whiteSpace="nowrap"
        >
          <HStack w="100%">
            <Text>Viewport =</Text>
            <NumberInput
              maxW={20}
              value={minViewport}
              onChange={(value: string) =>
                setminViewport(isNaN(Number(value)) ? 1 : Number(value))
              }
              min={1}
              max={3839}
            />
            <Text>px to</Text>
            <NumberInput
              maxW={20}
              value={maxViewport}
              onChange={(value: string) =>
                setmaxViewport(isNaN(Number(value)) ? 1 : Number(value))
              }
              min={1}
              max={3840}
            />
            <Text>px</Text>
          </HStack>

          <HStack>
            <Text>1 rem =</Text>
            <NumberInput
              maxW={16}
              placeholder="16"
              value={pixelsPerRem}
              onChange={(value: string) =>
                setPixelsPerRem(isNaN(Number(value)) ? 1 : Number(value))
              }
              min={1}
              max={96}
            />
            <Text>px</Text>
          </HStack>
        </VStack>
      </HStack>

      <VStack
        marginBottom={8}
        spacing={4}
        textAlign="center"
        fontSize={["small", "small", "large", "large"]}
        whiteSpace="nowrap"
      >
        <HStack>
          <Select
            display="inline-block"
            maxW={48}
            fontSize={["small", "small", "large", "large"]}
            value={cssProperty}
            onChange={(e) => setCssProperty(e.target.value)}
          >
            {Object.keys(cssProperties).map((name, i) => (
              <option
                key={i}
                value={cssProperties[name as keyof typeof cssProperties]}
              >
                {name}
              </option>
            ))}
          </Select>
          <Text>:</Text>
          <NumberInput
            maxW={20}
            value={stringMinValue}
            onChange={(value: string) => {
              setStringMinValue(value === "" ? "0" : value);
              setminValue(isNaN(Number(value)) ? 0 : Number(value));
            }}
            min={0}
            max={99999}
            precision={2}
          />
          <Text>rem to</Text>
          <NumberInput
            maxW={20}
            value={stringMaxValue}
            onChange={(value: string) => {
              setStringMaxValue(value === "" ? "0" : value);
              setmaxValue(isNaN(Number(value)) ? 0 : Number(value));
            }}
            min={0}
            max={99999}
            precision={2}
          />
          <Text>rem</Text>
        </HStack>
      </VStack>
    </>
  );
};
