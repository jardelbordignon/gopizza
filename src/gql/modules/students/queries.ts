import { gql } from '@apollo/client'

export const GET_STUDENTS = gql`
  query getStudents {
    students {
      nodes {
        id
        key
        name
      }
      totalCount
    }
  }
`
