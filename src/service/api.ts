import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://www.dnd5eapi.co/graphql", {
  headers: {}
});

export default client;
