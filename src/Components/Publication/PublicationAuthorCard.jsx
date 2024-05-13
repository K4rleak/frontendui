import { CardCapsule, DeleteButton } from '@hrbolek/uoisfrontend-shared/src'

//import { GroupMediumCard } from './GroupMediumCard'
import { PublicationLink } from './PublicationLink'


const PublicationRow = ({index, publication}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><PublicationLink publication={publication} /></td>
            <td><DeleteButton>D</DeleteButton></td>
        </tr>
    )
}

export const PublicationAuthorCard = ({publication, filterFunc=(g)=>g?.valid===true}) => {
    const authors = publication?.authors || []
    const filtered = authors.filter(filterFunc)
    return (
        <CardCapsule title={<>Autoři <PublicationLink publication={publication} /></>}>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Podíl</th>
                        <th>Jméno</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(
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