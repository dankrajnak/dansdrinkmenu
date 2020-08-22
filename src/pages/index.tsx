import React from "react";
import { graphql } from "gatsby";
import ScrollTransitions from "react-scroll-transitions";
import { DrinksQuery } from "../../graphql-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query Drinks {
    allSanityDrink(sort: { fields: order }) {
      nodes {
        id
        name
        description
        order
      }
    }
  }
`;

const IndexPage: React.FunctionComponent<{ data: DrinksQuery }> = ({
  data,
}) => (
  <Layout>
    <SEO title="Menu" />
    <ScrollTransitions
      sections={[
        {
          id: "start",
          inTransition: "easeIn",
          outTransition: "easeOut",
        },
        ...data.allSanityDrink.nodes.map((drink) => ({
          id: drink.id,
          inTransition: "easeIn" as const,
          outTransition: "easeOut" as const,
        })),
      ]}
      render={(id, transitionData) => {
        const drink = data.allSanityDrink.nodes.find(
          (drink) => drink.id === id
        );

        let percent = transitionData.transitionPercent;
        if (id === "start") {
          percent = transitionData.leavingPercent;
        } else if (
          data.allSanityDrink.nodes.findIndex((drink) => drink.id === id) ===
          data.allSanityDrink.nodes.length - 1
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
                <h1>Menu</h1>
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

export default IndexPage;
