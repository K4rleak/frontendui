/* eslint-disable react/prop-types */


import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { EventEditType } from './EventEditType';
import { UpdatePublicationAsyncAction } from '../../Queries/UpdatePublicationAsyncAction';
import { PublicationEditType } from './PublicationEditType';
import { PublicationEditAuthor } from './PublicationEditAuthor';

export const PublicationAuthorEditCard = ({ publication }) => {
    return (
        <CardCapsule title={"Publikace - Autoři " + publication?.name}>
            <Row>
                <Col>
                    <EditableAttributeText item={publication} attributeName="name" label="Název" asyncUpdater={UpdatePublicationAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PublicationEditAuthor publication={publication} />
                </Col>
            </Row>
        </CardCapsule>
    );
};
