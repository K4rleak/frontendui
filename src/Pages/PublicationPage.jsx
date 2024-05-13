// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { PublicationLargeCard} from "..//Components/Publication/PublicationLargeCard"

import { FetchPublicationByIdAsyncAction } from "../Queries/FetchPublicationByIdAsyncAction"
import { PublicationAuthorCard } from "../Components/Publication/PublicationAuthorCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst publikaci", success: "Načtení publikace se povedlo"})
export const PublicationPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [publication, pubPromise] = useFreshItem({id}, FetchPublicationByIdAsyncAction)
    pubPromise.then(onResolve, onReject)

    if (publication) {
        return (
            <PublicationLargeCard publication={publication}>
                <PublicationAuthorCard publication={publication} />
            </PublicationLargeCard>
        )
    } else {
        return (
            <div>Nahrávám publikaci...</div>
        )
    }
    
}