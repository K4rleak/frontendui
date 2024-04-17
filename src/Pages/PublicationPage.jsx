// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
//import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { PublicationLargeCard} from "..//Components/Publication/PublicationLargeCard"
import { FetchPublicationByIdAsyncAction } from "../Queries/FetchPublicationByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst publikaci", success: "Načtení publikace se povedlo"})
export const PublicationPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [publication, userPromise] = useFreshItem({id}, FetchPublicationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (publication) {
        return (
            <PublicationLargeCard publication={publication} />
        )
    } else {
        return (
            <div>Nahrávám publikaci...</div>
        )
    }
    
}