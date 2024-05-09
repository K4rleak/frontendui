import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {UpdatePublicationAsyncAction } from '../../Queries/UpdatePublicationAsyncAction'
import { FetchPublicationTypesAsyncAction } from '../../Queries/FetchPublicationTypesAsyncAction';
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

const id = "43dd2ff1-5c17-42a5-ba36-8b30e2a243bb"
export const PublicationEditType = ({publication}) => {
    const [publicationtypes, publicationtypesPromise] = useFreshItem({id}, FetchPublicationTypesAsyncAction)
    const [publicationtypesdata, setThem] = useState([])
    publicationtypesPromise.then(json =>  
    {
        console.log(json)
        const r = json?.data?.result
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })
    const publicationEx = { ...publication, publicationtype_id: publication?.publicationtype.id};

    return (
        <div>
           <EditableAttributeSelect item={publicationEx} attributeName="publicationtype_id" label="Typ" asyncUpdater={UpdatePublicationAsyncAction}>
               {publicationtypesdata.map(et => <option key= {et.id} value={et.id}>{et.name}</option>)}
               {/*<option value="a825d8e1-2e60-4884-afdb-25642db581d8">GAČR</option>
               <option value="6abcd26b-4f9b-4b49-8a5d-8ec9880acf3e">TAČR</option>          
               <option value="d5d91230-6e52-4ebf-b467-bfe89311e31a">MV</option>
               <option value="4a9a0039-3363-4af7-866e-ee172bfb02ff">MŠMT</option>*/}
           </EditableAttributeSelect>
        </div>
    );
};