import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation ($id:UUID!){
  result:publicationAuthorDelete(id: $id) {
    id
    msg
    result:author {
      valid
    }
  }
}
`
export const DeletePublicationAuthorAsyncAction = CreateAsyncActionFromMutation(mutation)
// const RawUpdatePublicationAsyncAction = CreateAsyncActionFromMutation(mutation)
// export const UpdatePublicationAsyncAction = (item) => {
//   const changedItem={...item,value: Number(item?.value)}
//   return RawUpdatePublicationAsyncAction(changedItem)
// }
