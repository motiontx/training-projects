import React, { useContext, ReactElement, useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import Router from "next/router";
import {
  Button,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Circle,
  useColorModeValue,
} from "@chakra-ui/react";
import { Step as StepType } from "../../types/form-types";
import FormLayout from "../../layout/form-layout";
import { FormContext } from "../../component/FormProvider";
import Container from "../../component/Container";
import Meta from "../../component/Meta";
import Data from "../../data/data";

const getFormValues = (formData?: FormData) => {
  if (!formData) return {};

  const values: { [k: string]: any } = {};
  formData.forEach((value, key) => {
    values[key] = value;
  });
  return values;
};

interface StepPageProps {
  step: StepType;
  next?: string;
}

const StepPage = ({ step, next }: StepPageProps) => {
  const form = useContext(FormContext);
  const positionBackground = useColorModeValue("gray.400", "gray.600");
  const positionColor = useColorModeValue("gray.100", "gray.900");
  const submited = useRef(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    form.dispatch({
      type: "add",
      step: step.slug,
      payload: getFormValues(new FormData(e.currentTarget)),
    });
    submited.current = true;
  }

  useEffect(() => {
    if (submited.current) {
      submited.current = false;
      if (next) {
        Router.push(`/form/${next}`);
      } else {
        if (form.formData.missingSteps.length !== 0) {
          Router.push(`/form/${form.formData.missingSteps[0]}`);
        } else {
          Router.push("/form/submit");
        }
      }
    }
  }, [form.formData, next]);

  return (
    <Container>
      <Meta title="Multistep Form" subtitle={step.title} />

      <Circle
        position="absolute"
        top={3}
        right={3}
        size="7"
        bg={positionBackground}
        color={positionColor}
      >
        <Heading size="md">{step.position}</Heading>
      </Circle>
      <Flex direction="column" mb={6}>
        <Heading size="xl">{step.title}</Heading>
        {step.description && (
          <Heading size="xs" mt={3}>
            {step.description}
          </Heading>
        )}
      </Flex>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex direction="column">
          {step.fields.map((field) => (
            <FormControl
              key={field.label}
              id={field.label}
              isRequired={field.required}
            >
              <FormLabel mb={1}>{field.label}</FormLabel>
              <Input
                variant="filled"
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                defaultValue={
                  form.formData.steps[step.slug]?.[field.name] || null
                }
                mb={3}
              />
            </FormControl>
          ))}
          <Button mt={3} type="submit" colorScheme="pink">
            {next ? "Next step" : "Submit"}
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

StepPage.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export const getStaticPaths = async () => {
  return {
    paths: Data.steps.map((step) => ({ params: { slug: step.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const step = Data.steps.find((step) => step.slug === context?.params?.slug);

  const next =
    Data.steps.find((s) => step && s.position === step.position + 1)?.slug ||
    null;

  return {
    props: {
      step,
      next,
    },
  };
};

export default StepPage;
