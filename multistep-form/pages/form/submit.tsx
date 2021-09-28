import React, { useContext, ReactElement, useEffect } from "react";
import { Heading, Code } from "@chakra-ui/react";
import Router from "next/router";
import FormLayout from "../../layout/form-layout";
import { FormContext } from "../../component/FormProvider";
import Container from "../../component/Container";
import Meta from "../../component/Meta";

const SubmitPage = () => {
  const form = useContext(FormContext);

  useEffect(() => {
    form.formData.missingSteps.length !== 0 &&
      Router.push(`/form/${form.formData.missingSteps[0]}`);
  }, [form.formData]);

  return (
    form.formData.missingSteps.length === 0 && (
      <>
        <Meta title="Multistep Form" subtitle="Submit" />
        <Container>
          <Heading size="2xl" mb={3}>
            We are done!
          </Heading>
          <Heading size="xs" mb={6}>
            This is the complete information that you have submitted in the
            form:
          </Heading>
          <Code whiteSpace="pre-wrap" p={6} rounded={6}>
            {JSON.stringify(form.formData.steps, null, 2)}
          </Code>
        </Container>
      </>
    )
  );
};

SubmitPage.getLayout = function getLayout(page: ReactElement) {
  return <FormLayout>{page}</FormLayout>;
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default SubmitPage;
