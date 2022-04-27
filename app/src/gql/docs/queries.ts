import { gql } from '@apollo/client'

gql`
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
        imageDirs
        priceSizeL
        priceSizeM
        priceSizeS
      }
    }
  }
`
