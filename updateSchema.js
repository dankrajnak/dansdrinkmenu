// Update schema
/* eslint-disable */
const SanityClient = require("@sanity/client");
const fs = require("fs");
const emoji = require("node-emoji");
const sanityConfig = require("./sanity.config.json");

const client = new SanityClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  useCdn: false,
});

console.info(emoji.emojify(":telescope:  Fetching api..."));
client
  .request({
    url: `/apis/graphql/${sanityConfig.dataset}/${sanityConfig.tag}`,
    headers: { Accept: "application/graphql" },
  })
  .then((api) => {
    console.info(emoji.emojify(":floppy_disk:  Writing to file..."));
    fs.writeFileSync("./schema.graphql", api);
    console.info(emoji.emojify(":white_check_mark:  Success"));
  })
  .catch((err) => console.error(err));
