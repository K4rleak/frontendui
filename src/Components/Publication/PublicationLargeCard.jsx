import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { EventMediumCard } from './EventMediumCard'
import { PublicationMediumCard } from './PublicationMediumCard'
// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'

export const PublicationLargeCard = ({publication, children}) => {
    return (
        <CardCapsule title={"Událost " + publication?.name}>
        <Row>
            <Col md={3}>
                <PublicationMediumCard publication={publication} />
                {/* <UserMediumCard user={user}/> */}
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <PublicationMediumCard publication={publication} />
                {/* <UserRolesCard user={user}/> */}
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {/* <UserRawCard user={user}/> */}
                {JSON.stringify(publication)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
