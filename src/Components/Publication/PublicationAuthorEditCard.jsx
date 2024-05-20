import { CardCapsule, DeleteButton, useDispatch } from '@hrbolek/uoisfrontend-shared/src'

//import { GroupMediumCard } from './GroupMediumCard'
import { PublicationLink } from './PublicationLink'
import { InsertPublicationAuthorAsyncAction } from '../../Queries/InsertPublicationAuthorAsyncAction'
import { DeletePublicationAuthorAsyncAction } from '../../Queries/DeletePublicationAuthorAsyncAction'
import { FetchPublicationByIdAsyncAction } from '../../Queries/FetchPublicationByIdAsyncAction'


const AuthorRow = ({index, author,publication}) => {
    const dispatch=useDispatch()
    const onClick=()=>{
        const updater = async () => {
            const variables={id: author.id}
            await dispatch(DeletePublicationAuthorAsyncAction(variables))
            await dispatch(FetchPublicationByIdAsyncAction(publication))
        }
        updater()
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{author.order}</td>
            <td>{author.share}%</td>
            <td>{author.user.fullname}</td>
            {/* <td>{JSON.stringify(author)}</td> */}
            <td><DeleteButton onClick={onClick}>D</DeleteButton></td>
        </tr>
    )
}

export const PublicationAuthorEditCard = ({publication, filterFunc=(p)=>true}) => {
    const dispatch=useDispatch()
    const authors = publication?.authors || []
    const filtered = authors.filter(filterFunc)
    const onClick=()=>{
        const variables={id: "22222222-2222-2222-2222-222222222222", user_id: "89d1f48a-ae0f-11ed-9bd8-0242ac110002", publication_id: "cb3c3978-e716-46ac-9a3b-bb8f9d806a46", share: 15, order: 2}
        dispatch(InsertPublicationAuthorAsyncAction(variables))

    }
    return (
        <CardCapsule title={<>Autoři <PublicationLink publication={publication} /></>}>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pořadí</th>
                        <th>Podíl</th>
                        <th>Jméno</th>
                        <th>Smazat</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(
                        (a, i) => <AuthorRow index={i+1} key={a.id} author={a} publication={publication} />
                    )}
                    <tr>
                        <td colSpan={5}><button className='btn btn-success form-control' onClick={onClick}>+</button></td>
                        {/* <td colSpan={5}><button className='btn btn-success form-control'>+</button></td> */}
                    </tr>
                </tbody>
            </table>
        </CardCapsule>

    )
}