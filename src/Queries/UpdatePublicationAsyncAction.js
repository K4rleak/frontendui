import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $publishedDate: DateTime, $place: String, $reference: String, $publication_type_id: UUID, $valid: Boolean) {
  result: publicationUpdate(publication: {id: $id, lastchange: $lastchange, name: $name, publishedDate: $publishedDate, place: $place, reference: $reference, publicationTypeId: $publication_type_id, valid: $valid}
  ) {
    id
    msg
    result: publication {
      __typename
      id
      lastchange
      name
      publishedDate
      place
      reference
      publicationtype { id name }
      valid
    }
  }
}
`
export const UpdatePublicationAsyncAction = CreateAsyncActionFromMutation(mutation)
// const RawUpdatePublicationAsyncAction = CreateAsyncActionFromMutation(mutation)
// export const UpdatePublicationAsyncAction = (item) => {
//   const changedItem={...item,value: Number(item?.value)}
//   return RawUpdatePublicationAsyncAction(changedItem)
// }
