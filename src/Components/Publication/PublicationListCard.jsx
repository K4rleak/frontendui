import { CardCapsule, DeleteButton,useFreshItem,CreateAsyncQueryValidator, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import {UserLink} from "@hrbolek/uoisfrontend-users/src"
import { PublicationLink } from './PublicationLink'
import { useParams } from "react-router-dom"
import { FetchUserPublicationsAsyncAction } from '../../Queries/FetchUserPublicationsAsyncAction'


const PublicationRow = ({index, publication}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><PublicationLink publication={publication}/></td>
            <td>{publication.place}</td>
            <td><a href={publication?.reference}>{publication?.reference}</a></td>
            <td>{publication?.publicationtype.name}</td>
            <td>{publication?.publishedDate}</td>
        </tr>
    )
}
export const UserPublicationListCard = ()=>{
    const [user, userPromise] = useFreshItem({id:"89d1f638-ae0f-11ed-9bd8-0242ac110002"}, FetchUserPublicationsAsyncAction)
    const auhtorpublications = user?.authorPublications||[]
    const publications = auhtorpublications.map(item => item.publication)
    if(publications){console.log(publications)}
    return<PublicationListCard publications={publications}/>
}

export const PublicationListCard = ({publications}) => {

    return (
        <CardCapsule title={"Publikace "}>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Název</th>
                        <th>Místo</th>
                        <th>Odkaz</th>
                        <th>Typ</th>
                        <th>Datum</th>
                    </tr>
                </thead>
                <tbody>
                    {publications.map(
                        (p, i) => <PublicationRow index={i+1} key={p.id} publication={p} />
                    )}
                    {/* <tr>
                        <td colSpan={3}><button className='btn btn-success form-control'>+</button></td>
                    </tr> */}
                </tbody>
            </table>
        </CardCapsule>

    )
}