import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
  result:userById(id: $id) {
    authorPublications {
      publication {
        id
        name
        publishedDate
        place
        reference
        authors {
          id
          share
          user {
            id
            fullname
          }
        }
      }
    }
  }
}`

export const FetchUserPublicationsAsyncAction = CreateAsyncActionFromQuery(query)