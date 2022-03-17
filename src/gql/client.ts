// https://dev.to/harrisonhenri/creating-a-react-native-app-using-apollo-graphql-v3-gj5
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { HttpLink } from '@apollo/client/link/http'
import { API_ENDPOINT } from 'react-native-dotenv'

const createHttpLink = () =>
  new HttpLink({
    uri: `${API_ENDPOINT}/graphql`,
  })

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (process.env.NODE_ENV === 'production') {
      return
    }

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
    connectToDevTools: process.env.NODE_ENV !== 'production',
    cache: new InMemoryCache(),
    assumeImmutableResults: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return apolloClient
}
