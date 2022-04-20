import { Product } from 'src/gql/generated/endpointTypes'

export type ProductNavigationProps = {
  product?: Product
}

export type OrderNavigationProps = {
  id: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      product: ProductNavigationProps
      order: OrderNavigationProps
      orders: undefined
    }
  }
}
