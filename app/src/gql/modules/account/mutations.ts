import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createOneUser(
      input: { user: { name: $name, email: $email, password: $password } }
    ) {
      id
      name
      email
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation logout($userId: String!) {
    logout(input: { userId: $userId })
  }
`
