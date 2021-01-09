import React from "react";
import ScrollTransitions from "react-scroll-transitions";
import { graphql } from "react-relay";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { GetStaticProps } from "next";
import { fetchQuery } from "relay-runtime";
import environment from "../relay/environment";
import { pagesIndexQueryResponse } from "../__generated__/pagesIndexQuery.graphql";

const query = graphql`
  query pagesIndexQuery {
    allDrink(sort: { order: ASC }) {
      _id
      name
      description
      instructions
      order
    }
  }
`;

const IndexPage: React.FunctionComponent<{ data: pagesIndexQueryResponse }> = ({
  data,
}) => {
  const drinks = data.allDrink;
  return (
    <Layout>
      <SEO title="Menu" />
      <ScrollTransitions
        sections={[
          {
            id: "start",
            inTransition: "easeIn",
            outTransition: "easeOut",
            height: 1,
          },
          ...drinks.slice(0, drinks.length - 1).map((drink, drinkIndex) => ({
            id: drink._id || drinkIndex.toString(),
            inTransition: "easeIn" as const,
            outTransition: "easeOut" as const,
            height: 1.5,
          })),
          ...drinks.slice(drinks.length - 1).map((drink) => ({
            id: drink._id || drinks.length.toString(),
            inTransition: "easeIn" as const,
          })),
        ]}
        render={(id, transitionData) => {
          const drink = drinks.find((drink) => drink._id === id);

          let percent = transitionData.transitionPercent;
          if (id === "start") {
            percent = transitionData.leavingPercent;
          } else if (
            drinks.findIndex((drink) => drink._id === id) ===
            drinks.length - 1
          ) {
            percent = transitionData.enteringPercent;
          }

          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "white",
              }}
            >
              <div
                className="card"
                style={{
                  width: "70%",
                  opacity: percent,
                }}
              >
                {id === "start" ? (
                  <h1>Thanks, Julia</h1>
                ) : (
                  drink && (
                    <>
                      <h1>{drink.name}</h1>
                      <div>{drink.description}</div>
                    </>
                  )
                )}
              </div>
            </div>
          );
        }}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const env = environment();
  return {
    props: {
      data: await fetchQuery(env, query, []),
    },
    revalidate: 1,
  };
};

export default IndexPage;
