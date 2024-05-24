import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"


const query = `query($pattern: String!, $limit: Int) {
  result: userPage(limit: $limit, where: {fullname: {_ilike: $pattern}}) {
    __typename
    id
    name
    surname
    fullname
    email
  }
}`

export const FetchSearchUserAsyncAction_ = ({str}) => {
    return async (dispatch) => {
        const json = await CreateFetchQuery(query)({phrase: `%${str}%`})   
        return json
        // const data = json?.data
        // if (data) {
        //     const {result} = data
        //     const resultall = [...result]
        //     // for(const item of resultall) {
        //     //     dispatch(ItemActions.item_update(item))
        //     // }

        //     return {data: {...data, resultall: resultall}}
        // } else {
        //     return {data: {...data, resultall: []}}
        // }
    }
}
export const FetchSearchUserAsyncAction = CreateAsyncActionFromQuery(query)