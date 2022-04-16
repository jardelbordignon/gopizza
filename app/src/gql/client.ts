// https://dev.to/harrisonhenri/creating-a-react-native-app-using-apollo-graphql-v3-gj5
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'

import { env } from 'src/config/environment'

const createLink = () => {
  const uri = `${env.apiUrl}/graphql`
  // console.log('uri', uri)
  return createUploadLink({ uri })
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
      console.error('[Network error]:', networkError, operation, response)
    }
  }
)

export const createClient = (accessToken: string) => {
  const link = createLink()

  const apolloClient = new ApolloClient({
    link: ApolloLink.from([errorLink, link]),
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return apolloClient
}
