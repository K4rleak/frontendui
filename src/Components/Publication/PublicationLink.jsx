/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src"
import { base } from "../../config"

export const PublicationLink_ = ({publication, children}) => {
    return (
        <ProxyLink to={base + "/publication/view/" + publication?.id}>{children?children:publication?.name}</ProxyLink>
    )
}

const PublicationMenuItems = {
    "Editovat": "local:/publication/edit",
    "Zobrazit": "local:/publication/view",

}

export const PublicationLink = ({publication, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <PublicationLink_ publication={publication}>
                    {children}
                </PublicationLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/publication/view/" + publication?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/publication/edit/" + publication?.id} >Editovat</ProxyLink></Dropdown.Item>
                    {/* <Dropdown.Item as={"div"}><ProxyLink to={base + "/eventpresences/view/" + event?.id} >Účast</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/events/edit/" + event?.id} >SubEvents</ProxyLink></Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <PublicationLink_ publication={publication}>{children}</PublicationLink_>
        )
    }
}