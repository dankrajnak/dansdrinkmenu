import * as React from "react";
import { AppProps } from "next/app";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";

import "../styles/global.css";

Bugsnag.start({
  apiKey: "85abec4484bb1467714b2b2a4e5af606",
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary =
  Bugsnag.getPlugin("react")?.createErrorBoundary(React) || React.Fragment;

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default App;
