import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result:   publicationById(id: $id) {
    __typename
    id
    name
    publicationtype {
      id
      name
    }
    authors {
      id
      order
      lastchange
      share
      user {
        id
        name
        surname
        email
      }
      valid
    }
    place
    publishedDate
    valid
    reference
    subjects {
      name
      id
      }
    }
  }`
      

export const FetchPublicationByIdAsyncAction = CreateAsyncActionFromQuery(query)