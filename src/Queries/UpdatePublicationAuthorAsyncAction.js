import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation ($lastchange: DateTime!, $order: Int, $share: Float, $userid: UUID!, $id: UUID!) {
  result: publicationAuthorUpdate(
    author: {id: $id, lastchange: $lastchange, order: $order, share: $share, userId: $userid}
  ) {
    msg
    result: author {
      lastchange
      id
      order
      share
      user {
        id
        fullname
      }
    }
  }
}
`
export const UpdatePublicationAuthorAsyncAction = CreateAsyncActionFromMutation(mutation)
// const RawUpdatePublicationAsyncAction = CreateAsyncActionFromMutation(mutation)
// export const UpdatePublicationAsyncAction = (item) => {
//   const changedItem={...item,value: Number(item?.value)}
//   return RawUpdatePublicationAsyncAction(changedItem)
// }
