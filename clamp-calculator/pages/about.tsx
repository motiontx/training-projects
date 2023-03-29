import type { NextPage } from "next";
import BaseLayout from "../layout/base-layout";

const About: NextPage = () => {
  return null;
};

// @ts-ignore
About.getLayout = (page) => {
  return <BaseLayout aboutOpen>{page}</BaseLayout>;
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default About;
