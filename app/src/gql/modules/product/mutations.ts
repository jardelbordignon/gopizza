import { gql } from '@apollo/client'

export const CUSTOM_CREATE_ONE_PRODUCT_MUTATION = gql`
  mutation CustomCreateOneProduct(
    $name: String!
    $description: String!
    $imageFile: UploadScalar!
    $priceSizeP: Float!
    $priceSizeM: Float!
    $priceSizeG: Float!
  ) {
    customCreateOneProduct(
      input: {
        name: $name
        description: $description
        imageFile: $imageFile
        priceSizeP: $priceSizeP
        priceSizeM: $priceSizeM
        priceSizeG: $priceSizeG
      }
    ) {
      description
      id
      imageUrl
      name
      priceSizeP
      priceSizeM
      priceSizeG
    }
  }
`

export const CUSTOM_UPDATE_ONE_PRODUCT_MUTATION = gql`
  mutation CustomUpdateOneProduct(
    $id: String!
    $imageFile: UploadScalar
    $name: String
    $description: String
    $priceSizeP: Float
    $priceSizeM: Float
    $priceSizeG: Float
  ) {
    customUpdateOneProduct(
      input: {
        id: $id
        imageFile: $imageFile
        name: $name
        description: $description
        priceSizeP: $priceSizeP
        priceSizeM: $priceSizeM
        priceSizeG: $priceSizeG
      }
    ) {
      description
      id
      imageUrl
      name
      priceSizeP
      priceSizeM
      priceSizeG
    }
  }
`
