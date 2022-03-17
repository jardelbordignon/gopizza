import { gql } from '@apollo/client'

export const QUERY_FIND_USERS = gql`
  query findUsers {
    users {
      totalCount
      nodes {
        id
        name
        email
      }
    }
  }
`
