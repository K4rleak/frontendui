// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { FetchPublicationByIdAsyncAction } from "../Queries/FetchPublicationByIdAsyncAction"
import { PublicationLargeCard } from "../Components/Publication/PublicationLargeCard"
import { PublicationEditCard } from "../Components/Publication/PublicationEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst publikaci", success: "Načtení publikace se povedlo"})
export const PublicationEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [publication, userPromise] = useFreshItem({id}, FetchPublicationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (publication) {
        return (
            <PublicationLargeCard publication={publication}>
                <PublicationEditCard publication={publication} />
            </PublicationLargeCard>
        )
    } else {
        return (
            <div>Nahrávám publikaci...</div>
        )
    }
    
}