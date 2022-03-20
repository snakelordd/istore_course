import React, {useContext, useState} from "react";
import { Context } from '..'
import { Button, Container } from "react-bootstrap";
import {observer} from 'mobx-react-lite'
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";
import CreateType from "../components/modals/createType";


 const Admin = () => {
    const {user} = useContext(Context)
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return(
        <Container  className="d-flex mt-3 flex-column">
            <Button 
                variant="outline-dark" 
                className="mt-3 p-3"
                onClick={()=>setTypeVisible(true)}
            >
                New Type
            </Button>
            <Button 
                variant="outline-dark" 
                className="mt-3 p-3"
                onClick={()=>setBrandVisible(true)}
            >
                New Brand
            </Button>
            <Button 
                variant="outline-dark" 
                className="mt-3 p-3"
                onClick={()=>setDeviceVisible(true)}
            >
                NewDevice
            </Button>
            <CreateType show={typeVisible} onHide={ ()=> setTypeVisible(false)} />
            <CreateBrand show={brandVisible} onHide={ ()=> setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={ ()=> setDeviceVisible(false)} />
            
        </Container>
    )
}

export default Admin