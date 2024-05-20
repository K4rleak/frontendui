import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation ($id: UUID!, $user_id: UUID!, $publication_id: UUID!, $share: Float!, $order: Int!){
  result: publicationAuthorInsert(author: {id: $id, publicationId: $publication_id, userId: $user_id, share: $share, order: $order}) {
    id
    msg
    result: author{
      id
      lastchange
      order
      user{
        id
        fullname
      }
    }
  }
}
`
export const InsertPublicationAuthorAsyncAction = CreateAsyncActionFromMutation(mutation)
// const RawUpdatePublicationAsyncAction = CreateAsyncActionFromMutation(mutation)
// export const UpdatePublicationAsyncAction = (item) => {
//   const changedItem={...item,value: Number(item?.value)}
//   return RawUpdatePublicationAsyncAction(changedItem)
// }
