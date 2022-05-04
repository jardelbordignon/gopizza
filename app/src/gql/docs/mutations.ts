import { gql } from '@apollo/client'

gql`
  # Account
  mutation CreateUser(
    $email: String!
    $name: String!
    $password: String!
    $isAdmin: Boolean!
  ) {
    createOneUser(
      input: {
        user: {
          email: $email
          name: $name
          password: $password
          isAdmin: $isAdmin
        }
      }
    ) {
      id
      isAdmin
      name
      email
      createdAt
    }
  }

  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
        isAdmin
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }

  mutation logout($userId: String!) {
    logout(input: { userId: $userId })
  }

  mutation resetPassword($refreshToken: String!, $password: String!) {
    resetPassword(input: { refreshToken: $refreshToken, password: $password })
  }

  mutation sendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(input: { email: $email })
  }

  # Product
  mutation CreateProduct(
    $description: String!
    $imageFiles: [UploadScalar!]!
    $name: String!
    $priceSizeL: Float!
    $priceSizeM: Float!
    $priceSizeS: Float!
  ) {
    createProduct(
      input: {
        imageFiles: $imageFiles
        name: $name
        description: $description
        priceSizeL: $priceSizeL
        priceSizeM: $priceSizeM
        priceSizeS: $priceSizeS
      }
    ) {
      id
      name
      imageDirs
      priceSizeL
      priceSizeM
      priceSizeS
    }
  }

  mutation UpdateProduct(
    $id: String!
    $imageFiles: [UploadScalar!]
    $currentImageDirs: [String!]
    $name: String
    $description: String
    $priceSizeL: Float
    $priceSizeM: Float
    $priceSizeS: Float
  ) {
    updateProduct(
      input: {
        id: $id
        imageFiles: $imageFiles
        currentImageDirs: $currentImageDirs
        name: $name
        description: $description
        priceSizeL: $priceSizeL
        priceSizeM: $priceSizeM
        priceSizeS: $priceSizeS
      }
    ) {
      description
      id
      imageDirs
      name
      priceSizeL
      priceSizeM
      priceSizeS
    }
  }

  mutation DeleteProduct($id: String!, $isSoft: Boolean) {
    deleteProduct(input: { id: $id, isSoft: $isSoft })
  }
`
