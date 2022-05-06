import { gql } from '@apollo/client'

gql`
  query Users {
    users {
      totalCount
      nodes {
        id
        name
        email
      }
    }
  }

  query Orders($limit: Int!, $offset: Int!, $filter: String) {
    orders(
      paging: { limit: $limit, offset: $offset }
      filter: { pizza: { like: $filter } }
    ) {
      nodes {
        amount
        createdAt
        deletedAt
        id
        image
        pizza
        quantity
        size
        status
        table
        updatedAt
        userId
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }

  query Products($limit: Int!, $offset: Int!, $filter: String) {
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
