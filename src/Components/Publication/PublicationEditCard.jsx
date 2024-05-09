/* eslint-disable react/prop-types */


import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { EventEditType } from './EventEditType';
import { UpdatePublicationAsyncAction } from '../../Queries/UpdatePublicationAsyncAction';
import { PublicationEditType } from './PublicationEditType';

export const PublicationEditCard = ({ publication }) => {
    return (
        <CardCapsule title={"Publikace - atributy " + publication?.name}>
            <Row>
                <Col>
                    <EditableAttributeText item={publication} attributeName="name" label="Název" asyncUpdater={UpdatePublicationAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={publication} attributeName="place" label="Místo" asyncUpdater={UpdatePublicationAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={publication} attributeName="publishedDate" label="Datum publikace" asyncUpdater={UpdatePublicationAsyncAction} type="datetime-local" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={publication} attributeName="reference" label="Odkaz" asyncUpdater={UpdatePublicationAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PublicationEditType publication={publication} />
                </Col>
            </Row>
        </CardCapsule>
    );
};
