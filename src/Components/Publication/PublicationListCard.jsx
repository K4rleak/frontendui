import { CardCapsule, DeleteButton } from '@hrbolek/uoisfrontend-shared/src'
import {UserLink} from "@hrbolek/uoisfrontend-users/src"
import { PublicationLink } from './PublicationLink'
import { FetchUserPublicationsAsyncAction } from '../../Queries/FetchUserPublicationsAsyncAction'


const PublicationRow = ({index, publication}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{publication.id}</td>
            {/* <td>{author.order}</td>
            <td>{author.share}%</td>
            <td><UserLink user={author.user}/></td> */}
            {/* <td>{JSON.stringify(author)}</td> */}
        </tr>
    )
}

export const UserPublicationListCard = ()=>{
    const [authorPublications, userPromise] = useFreshItem({id}, FetchUserPublicationsAsyncAction)
    console.log(authorPublications)
    return<PublicationListCard publications={publications}/>
}

export const PublicationListCard = ({publications}) => {
    // const publications = user?.authorPublications || []
    // const filtered = authors.filter(filterFunc)
    return (
        <CardCapsule title={<>Autoři <PublicationLink publication={publication} /></>}>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pořadí</th>
                        <th>Podíl</th>
                        <th>Jméno</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(
                        (a, i) => <AuthorRow index={i+1} key={a.id} author={a} />
                    )}
                    {/* <tr>
                        <td colSpan={3}><button className='btn btn-success form-control'>+</button></td>
                    </tr> */}
                </tbody>
            </table>
        </CardCapsule>

    )
}