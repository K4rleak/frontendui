 import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
 import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction';
 import { FetchEventTypesAsyncAction } from '../../Queries/FetchEventTypesAsyncAction';

const id = "0945ad17-3a36-4d33-b849-ad88144415ba"
export const EventEditType = ({event}) => {
    const [eventtypes, eventtypesPromise] = useFreshItem({id}, FetchEventTypesAsyncAction)
    const [eventtypesdata, setThem] = useState ([])
    eventtypesPromise.then(json => {
        console.log(json)
        const r = json?.data?.result
        if (r) {
            setThem(r)
            console.log(r)
        }
    })

const eventEx = { ...event, eventType_id: event?.eventType.id };

// export const EventEditType = ({ event }) => {
//     const [eventtypes, userPromise] = useFreshItem({id}, FetchEventTypesAsyncAction)
    
    return (
                <div>
                    <EditableAttributeSelect item={eventEx} attributeName="eventType_id" label="Typ" asyncUpdater={UpdateEventAsyncAction}>
                        {eventtypesdata.map(et=> <option key={et.id} value={et.id}>{et.name}</option>)}
                        {/* <option value="a517c2fd-8dc7-4a2e-a107-cbdb88ba2aa5"> Školní rok</option>
                        <option value="69ec2b0b-a39d-40df-9cea-e295b36749c9">Semestr</option> */}
                    </EditableAttributeSelect>
                    {JSON.stringify(eventtypesdata)}
                </div>
    );
};
