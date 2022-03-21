// https://dev.to/harrisonhenri/creating-a-react-native-app-using-apollo-graphql-v3-gj5
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { HttpLink } from '@apollo/client/link/http'
import { API_ENDPOINT, NODE_ENV } from 'react-native-dotenv'

const isDev = NODE_ENV === 'development'

const createHttpLink = () => {
  const uri = `${API_ENDPOINT}/graphql`
  if (isDev) console.log('Endpoint uri:', uri)
  return new HttpLink({ uri })
}

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        console.error(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
          operation,
          response
        )
      }
    }
    if (networkError) {
      console.error(
        `[Network error]: ${JSON.stringify(networkError, null, 2)}`,
        operation,
        response
      )
    }
  }
)

export const createClient = (accessToken: string) => {
  const httpLink = createHttpLink()

  const apolloClient = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    connectToDevTools: isDev,
    cache: new InMemoryCache(),
    assumeImmutableResults: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return apolloClient
}
