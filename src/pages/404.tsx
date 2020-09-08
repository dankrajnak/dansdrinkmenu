import React from "react";

import { useRouter } from "next/dist/client/router";

const NotFoundPage: React.FunctionComponent = () => {
  const router = useRouter();
  React.useEffect(() => {
    // Redirect to index.
    router.replace("/");
  });

  return null;
};

export default NotFoundPage;
