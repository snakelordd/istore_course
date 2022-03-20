import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

 const DeviceItem =  ( {device} )=> {
    const navigate = useNavigate()
    console.log(navigate)
    
    return (
        <Col md={3} onClick={ ()=> navigate(DEVICE_ROUTE + '/' + device.id) }>
            <Card className='mt-3' style={{width: 150, cursor: 'pointer'}} border={'light'} >
                <Image width={150} height={150} src={device.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-2' >
                    <div>Samsung...</div>
                    <div>
                        <div>
                            {device.rating}
                        </div>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem