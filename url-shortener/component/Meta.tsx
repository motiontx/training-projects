import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
}

export default function Meta({ title, description }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
