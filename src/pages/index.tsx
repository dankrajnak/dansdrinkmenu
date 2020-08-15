import React from "react";
import ScrollTransitions from "react-scroll-transitions";

import Layout from "../components/layout";
import SEO from "../components/seo";

const drinks: Record<string, { title: string; content: React.ReactNode }> = {
  junglebird: {
    title: "Jungle Bird",
    content: <div>Pot still jamaican rum, Campari, pineapple, lime</div>,
  },
  threedots: {
    title: "Three Dots and a Dash",
    content: (
      <div>
        Rhum agricole, allspice dram, falernum, honey syrup, orange, lime
      </div>
    ),
  },
  piscosour: {
    title: "Pisco Sour",
    content: <div>Pisco, lemon, egg white, sugar, bitters</div>,
  },
  maitai: {
    title: "Mai Tai",
    content: <div>Aged rum, dry cura&#xE7;ao, orgeat, lime, mint</div>,
  },
};

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Menu" />
    <ScrollTransitions
      sections={[
        {
          id: "start",
          inTransition: "easeIn",
          outTransition: "easeOut",
        },
        ...Object.keys(drinks).map((key) => ({
          id: key,
          inTransition: "easeIn",
          outTransition: "solid",
        })),
      ]}
      render={(id, transitionData) => {
        let percent = transitionData.transitionPercent;
        if (id === "start") {
          percent = transitionData.leavingPercent;
        } else if (
          Object.keys(drinks).findIndex((key) => key === id) ===
          Object.keys(drinks).length - 1
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
                <>
                  <h1>{drinks[id].title}</h1>
                  <div>{drinks[id].content}</div>
                </>
              )}
            </div>
          </div>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
