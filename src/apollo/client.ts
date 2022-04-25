import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import possibleTypes from './possibleTypes.json';
import { setContext } from '@apollo/client/link/context';
import { localStore } from '../utils/localStorage';
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
  includeExtensions: true,
});

const setAuthorizationLink = setContext((_request, _previousContext) => {
  const token = window.localStorage.getItem(localStore.GRAPHQL_TOKEN);

  if (token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
  return null;
});

// setup your client
export const client = new ApolloClient({
  link: setAuthorizationLink.concat(httpLink),
  cache: new InMemoryCache({ possibleTypes: possibleTypes.possibleTypes }),
  name: 'web-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
  connectToDevTools: process.env.NODE_ENV !== 'production',
});
