/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// export const EventMediumCard = ({event}) => {
//     return (
//         <CardCapsule title={"Událost - atributy " + event?.name}>
            
//             <Row>
//                 <Col>Název</Col>
//                 <Col>{event?.name}</Col>
//             </Row>
//             <Row>
//                 <Col>Počátek</Col>
//                 <Col>{event?.startdate}</Col>
//             </Row>
//             <Row>
//                 <Col>Konec</Col>
//                 <Col>{event?.enddate}</Col>
//             </Row>
//         </CardCapsule>
//     )
// }

export const PublicationMediumCard = ({publication}) => {
    return (
        <CardCapsule title={"Publikace " + publication?.name}>
            
            <Row>
                <Col>Jméno</Col>
                <Col>{publication?.name}</Col>
            </Row>
            <Row>
                <Col>Místo</Col>
                <Col>{publication?.place}</Col>
            </Row>
            <Row>
                <Col>Odkaz</Col>
                <Col>{publication?.reference}</Col>
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>{publication?.publicationtype.name}</Col>
            </Row>
            <Row>
                <Col>Datum</Col>
                <Col>{publication?.publishedDate}</Col>
            </Row> 
            {/* <Membership membership={user?.membership||[]} /> */}
        </CardCapsule>
    )
}