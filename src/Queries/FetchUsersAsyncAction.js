import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
  userPage(limit: 100) {
    __typename
    id
    name
  }
}`

export const FetchUsersAsyncAction = CreateAsyncActionFromQuery(query)