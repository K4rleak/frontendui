import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
  result: publicationTypePage(limit: 100) {
    __typename
    id
    name
  }
}`

export const FetchPublicationTypesAsyncAction = CreateAsyncActionFromQuery(query)