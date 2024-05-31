import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: userById(id: $id) {        
      id
      authorPublications {
        id
        publication {
          id
          name
          publicationtype {
            name
          }
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