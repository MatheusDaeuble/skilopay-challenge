import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    favorites: [ID!]!
  }
`;

export const resolvers = {};


