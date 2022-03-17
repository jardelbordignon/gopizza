import {
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client'

type QueryType = DocumentNode | TypedDocumentNode<any, OperationVariables>

export const UseQuery = (query: QueryType) => {
  const { loading, error, data } = useQuery(query)

  if (error) {
    return `Error! ${error.message}`
  }

  return { loading, data }
}
