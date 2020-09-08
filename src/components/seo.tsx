import React from "react";
import Head from "next/head";

type Props = {
  meta?: { name: string; content: string }[];
  title: string;
};

const site = {
  title: `Dan's Drink Menu`,
  description: `What you can drink at Dan's.`,
  author: `daniel.krajank`,
};

const defaultMeta = [
  {
    name: `description`,
    content: site.description,
  },
  {
    property: `og:title`,
    content: site.title,
  },
  {
    property: `og:description`,
    content: site.description,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:title`,
    content: site.title,
  },
  {
    name: `twitter:description`,
    content: site.description,
  },
];

const SEO: React.FunctionComponent<Props> = ({ meta = [], title }) => {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon-32x32.png" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
        rel="stylesheet"
      ></link>
      <title>{site.title}</title>
      {[...meta, ...defaultMeta].map((info, key) => (
        <meta {...info} key={key} />
      ))}
    </Head>
  );
};

export default SEO;
