import React from "react";
import ScrollTransitions from "react-scroll-transitions";
import { DrinksQuery } from "../../graphql-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FunctionComponent<{ data: DrinksQuery }> = ({ data }) =>
  !data ? (
    <Layout>hi</Layout>
  ) : (
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
          ...data.allSanityDrink.nodes
            .slice(0, data.allSanityDrink.nodes.length - 1)
            .map((drink) => ({
              id: drink.id,
              inTransition: "easeIn" as const,
              outTransition: "easeOut" as const,
              height: 1.5,
            })),
          ...data.allSanityDrink.nodes
            .slice(data.allSanityDrink.nodes.length - 1)
            .map((drink) => ({
              id: drink.id,
              inTransition: "easeIn" as const,
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
