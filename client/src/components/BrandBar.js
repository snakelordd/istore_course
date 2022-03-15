
import React, {useContext} from "react";
import {observer} from 'mobx-react-lite'
import { Context } from '..'
import { Card, Col, Row } from "react-bootstrap";

export const BrandBar = observer( ()=> {
    const {device} = useContext(Context)

    return(
        <Row className='d-flex'>            
            {device.brands.map(brand =>             
                <Card 
                    style={{width: 80, cursor: 'pointer'}}
                    key={brand.id}
                    className='p-2'
                    onClick={()=> device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            
            )}
        </Row>
    )
})