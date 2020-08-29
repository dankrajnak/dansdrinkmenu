import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string }[];
  title: string;
};

const site = {
  siteMetadata: {
    description: "ok",
    title: "title",
  },
};

const SEO: React.FunctionComponent<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
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
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default SEO;
