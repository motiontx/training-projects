import Head from "next/head";

interface MetaProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Meta({ title, subtitle, description }: MetaProps) {
  return (
    <Head>
      <title>
        {title}
        {subtitle && ` - ${subtitle}`}
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
