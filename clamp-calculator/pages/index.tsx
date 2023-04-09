import React, { useState } from "react";
import type { NextPage } from "next";
import { Divider } from "@chakra-ui/react";
import { Heading } from "../components/Heading";
import { Settings } from "../components/Settings";
import { Result } from "../components/Result";

const Home: NextPage = () => {
  const [clampProperty, setClampProperty] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <Heading />
      <Settings setClampProperty={setClampProperty} setError={setError} />
      <Divider mb="8" />
      <Result clampProperty={clampProperty} error={error} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
