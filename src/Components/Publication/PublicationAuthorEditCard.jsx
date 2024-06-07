// import { CardCapsule, DeleteButton, useDispatch,SearchInput,CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src'
import { CardCapsule, DeleteButton, Dialog, useDispatch, CreateAsyncQueryValidator, SelectInput, SearchInput} from '@hrbolek/uoisfrontend-shared/src'
import { PublicationLink } from './PublicationLink'
import { InsertPublicationAuthorAsyncAction } from '../../Queries/InsertPublicationAuthorAsyncAction'
import { DeletePublicationAuthorAsyncAction } from '../../Queries/DeletePublicationAuthorAsyncAction'
import { FetchPublicationByIdAsyncAction } from '../../Queries/FetchPublicationByIdAsyncAction'
import { useCallback, useState } from 'react'
import { FetchSearchUserAsyncAction } from '../../Queries/FetchSearchUserAsyncAction'
import { TextInput } from '@hrbolek/uoisfrontend-shared/src'
import { UpdatePublicationAuthorAsyncAction } from '../../Queries/UpdatePublicationAuthorAsyncAction'

const AddAuthorDialog = ({onCreate}) => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        share: 100,        
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
                <div className="form-floating">
                    <TextInput type={"number"} id={"share"} value={data.share} onChange={onChange("share")} />
                    <label htmlFor={"share"}>share</label>
                </div>
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
            <td><DeleteButton onClick={onClick}>D</DeleteButton></td>
        </tr>
    )
}

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat autora", success: "Přidání autora se povedlo"})
export const PublicationAuthorEditCard = ({publication, filterFunc=(p)=>true}) => {
    const dispatch=useDispatch()
    const authors = publication?.authors || []
    const filtered = authors.filter(filterFunc)
    const sortedFiltered = filtered.sort((a, b) => a.order - b.order)
    const onCreate = (data) => {
        // const sharesum = filtered.reduce((sum, author) => sum + (author?.share||0), 0)+data.share;
        // console.log(sharesum,data.share)
        // filtered.forEach(author => {
        //     dispatch(UpdatePublicationAuthorAsyncAction({...author,share:Math.round((author.share/sharesum)*100),userid:author.user.id}))
        // })
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {...data, id: crypto.randomUUID(),publication_id: publication.id,order:authors.length+1}
        console.log("fullRecord", fullRecord)
        dispatch(
            InsertPublicationAuthorAsyncAction(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            dispatch(FetchPublicationByIdAsyncAction(publication))
        })
    }

    const onRecount=()=>{
        const sharesum = filtered.reduce((sum, author) => sum + (author?.share||0), 0)
        console.log(sharesum)
        if (sharesum>0){
            const promises = filtered.map(author => {
                dispatch(UpdatePublicationAuthorAsyncAction({...author,share:Math.round((author.share/sharesum)*100),userid:author.user.id}))
            })
            Promise.all(promises).then(() => {
                dispatch(FetchPublicationByIdAsyncAction(publication))
            })
        }
            else{
                console.log("aa")
            }

        // const addto100 = new Promise((resolve,reject)=>{
        //     if (condition) {
        //         //  block of code to be executed if the condition is true
        //       } else {
        //         //  block of code to be executed if the condition is false
        //       }
        // })
        // promises.push(addto100)





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
                    {sortedFiltered.map(
                        (a, i) => <AuthorRow index={i+1} key={a.id} author={a} publication={publication} />
                    )}
                    <tr>
                        {/* <td colSpan={5}><button className='btn btn-success form-control' onClick={onClick}>+</button></td> */}
                        <td colSpan={5}><AddAuthorDialog publication={publication} onCreate={onCreate}/></td>
                    </tr>
                    <tr>
                        <td colSpan={5}><button className='btn btn-primary form-control' onClick={onRecount}>Rozpočet procent</button></td>
                    </tr>
                </tbody>
            </table>
        </CardCapsule>

    )
}