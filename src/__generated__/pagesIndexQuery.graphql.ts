/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pagesIndexQueryVariables = {};
export type pagesIndexQueryResponse = {
    readonly allDrink: ReadonlyArray<{
        readonly _id: string | null;
        readonly name: string | null;
        readonly description: string | null;
        readonly instructions: string | null;
        readonly order: number | null;
    }>;
};
export type pagesIndexQuery = {
    readonly response: pagesIndexQueryResponse;
    readonly variables: pagesIndexQueryVariables;
};



/*
query pagesIndexQuery {
  allDrink(sort: {order: ASC}) {
    _id
    name
    description
    instructions
    order
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "sort",
        "value": {
          "order": "ASC"
        }
      }
    ],
    "concreteType": "Drink",
    "kind": "LinkedField",
    "name": "allDrink",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "instructions",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "order",
        "storageKey": null
      }
    ],
    "storageKey": "allDrink(sort:{\"order\":\"ASC\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "00e75a99a0bf6bddc04195d4e3f62f73",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery {\n  allDrink(sort: {order: ASC}) {\n    _id\n    name\n    description\n    instructions\n    order\n  }\n}\n"
  }
};
})();
(node as any).hash = '640f26466b369475da64c484be78da8d';
export default node;
