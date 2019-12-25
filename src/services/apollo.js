import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { resolvers, typeDefs } from '../resolvers';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  
  const token = "ADICIONE_AQUI_SEU_TOKEN" // Não possui um token ? ACESSE: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  return forward(operation);
});

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    favorites: [],
  },
});

export default client;