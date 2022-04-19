import { gql } from '@apollo/client'

export const PRODUCTS_QUERY = gql`
  query products($limit: Int!, $offset: Int!, $filter: String) {
    products(
      paging: { limit: $limit, offset: $offset }
      filter: { name: { like: $filter } }
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        description
        imageUrl
      }
    }
  }
`
