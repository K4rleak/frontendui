// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { FetchPublicationByIdAsyncAction } from "../Queries/FetchPublicationByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const AuthorEditPage = ()  => {
    const {publication_id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [publication, userPromise] = useFreshItem({publication_id}, FetchPublicationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (publication) {
        return (
            // <UserLargeCard user={user} />
            // <div>Události nahrány
            //     {JSON.stringify(event)}
            // </div>
            <PublicationAuthorCard publication={publication} />
        )
    } else {
        return (
            <div>Nahrávám publikaci...</div>
        )
    }
    
}