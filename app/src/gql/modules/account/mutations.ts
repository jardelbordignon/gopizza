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

export const SEND_PASSWORD_RESET_EMAIL_MUTATION = gql`
  mutation sendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(input: { email: $email })
  }
`

export const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($refreshToken: String!, $password: String!) {
    resetPassword(input: { refreshToken: $refreshToken, password: $password })
  }
`
