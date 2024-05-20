import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result:   publicationById(id: $id) {
      __typename
      id
      lastchange
      valid
      name
      publishedDate
      place
      reference
      authors {
        id
        order
        share
        user {
          id
          fullname
        }
      }
      publicationtype {
        id
        name
      }
      subjects {
        id
        name
      }
    }
  }`
      

export const FetchPublicationByIdAsyncAction = CreateAsyncActionFromQuery(query)