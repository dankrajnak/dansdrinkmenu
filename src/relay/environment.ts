import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import * as sanityConfig from "../../sanity.config.json";

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch(
    `https://${sanityConfig.projectId}.api.sanity.io/v1/graphql/${sanityConfig.dataset}/${sanityConfig.tag}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }
  ).then((response) => {
    return response.json();
  });
};

export default (records?: RecordMap): Environment =>
  new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource(records)),
  });
