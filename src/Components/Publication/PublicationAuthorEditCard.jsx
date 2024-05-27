// import { CardCapsule, DeleteButton, useDispatch,SearchInput,CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src'
import { CardCapsule, DeleteButton, Dialog, useDispatch, CreateAsyncQueryValidator, SelectInput, SearchInput} from '@hrbolek/uoisfrontend-shared/src'
import { PublicationLink } from './PublicationLink'
import { InsertPublicationAuthorAsyncAction } from '../../Queries/InsertPublicationAuthorAsyncAction'
import { DeletePublicationAuthorAsyncAction } from '../../Queries/DeletePublicationAuthorAsyncAction'
import { FetchPublicationByIdAsyncAction } from '../../Queries/FetchPublicationByIdAsyncAction'
import { useCallback, useState } from 'react'
import { FetchSearchUserAsyncAction } from '../../Queries/FetchSearchUserAsyncAction'
import { TextInput } from '@hrbolek/uoisfrontend-shared/src'

const AddAuthorDialog = ({onCreate}) => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        share: 50,        
    })
    const onOk = () => {
        setVisible(false)
        onCreate({...data, share:Number(data.share)})
    }

    const onCancel = () => {
        setVisible(false)
    }
    const onOpen = () => {
        setVisible(true)
    }
    const onChange = useCallback((atributeName) => (value) => {
        setData(oldData => {
            const newData =  {...oldData}
            newData[atributeName] = value
            console.log(newData)
            return newData
        })
    }, [setData])

    if (visible) {
        return (
            <Dialog title="Výběr autora" onOk={onOk} onCancel={onCancel}>
                {/* <div className="form-floating">
                    <SelectInput FetchAsyncAction={FetchRoleTypesAsyncAction} id="select" value={data.roletype_id} onChange={onChange("roletype_id")} />
                    <label htmlFor={"select"}>Typ role</label>
                </div>                 */}
                {/* <div className="form-floating">
                    <TextInput type={"text"} id={"order"} value={data.order} onChange={onChange("order")} />
                    <label htmlFor={"order"}>order</label>
                </div> */}
                <div className="form-floating">
                    <TextInput type={"number"} id={"share"} value={data.share} onChange={onChange("share")} />
                    <label htmlFor={"share"}>share</label>
                </div>
                {/* <div className="form-floating">
                    <TextInput type={"date"} id={"enddate"} value={data.enddate} onChange={onChange("enddate")} />
                    <label htmlFor={"enddate"}>enddate</label>
                </div> */}
                <SearchInput title="Výběr uživatele" onSelect={onChange("user_id")} FetchByPatternAsyncAction={FetchSearchUserAsyncAction} />
            </Dialog>
        )
    } else {
        return (
            <button className='btn btn-success form-control' onClick={onOpen}>+</button>
        )
    }
}







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

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat autora", success: "Přidání autora se povedlo"})
export const PublicationAuthorEditCard = ({publication, filterFunc=(p)=>true}) => {
    const dispatch=useDispatch()
    const authors = publication?.authors || []
    const filtered = authors.filter(filterFunc)

    const onCreate = (data) => {
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {...data, id: crypto.randomUUID(),publication_id: publication.id,order:authors.length+1}
        console.log("fullRecord", fullRecord)
        dispatch(
            InsertPublicationAuthorAsyncAction(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            // dispatch(GroupAsyncActions.read({id: group.id}))
            dispatch(FetchPublicationByIdAsyncAction(publication))
        })
    }

    const onClick=()=>{
        const updater = async () => {
            const variables={id: crypto.randomUUID(), user_id: "89d1f48a-ae0f-11ed-9bd8-0242ac110002", publication_id: "cb3c3978-e716-46ac-9a3b-bb8f9d806a46", share: 15, order: 2}
            await dispatch(InsertPublicationAuthorAsyncAction(variables))
            await dispatch(FetchPublicationByIdAsyncAction(publication))
        }
        updater()
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
                        {/* <td colSpan={5}><button className='btn btn-success form-control' onClick={onClick}>+</button></td> */}
                        <td colSpan={5}><AddAuthorDialog publication={publication} onCreate={onCreate}/></td>
                    </tr>
                </tbody>
            </table>
        </CardCapsule>

    )
}