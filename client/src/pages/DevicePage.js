import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState(  {info: []}  )
    const {id} = useParams()
    console.log(id)
    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    

    return(
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Image width={500} height={500} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={6}>
                    <Row >
                        <Col className='d-flex flex-start justify-content-between'>
                        <div>
                            <h2>{device.name}</h2> 
                            <h3>Price: {device.price}</h3>  
                        </div>
                        <div >
                            <Button variant='outline-warning' size='lg' >Add to cart</Button>
                        </div>  
                        </Col>
   
                    </Row>
                    <Row className="mt-5">
                        <h2>Features:</h2>
                        {device.info.map((info, index) => 
                            <Row key={info.id} className='mt-2' style={{fontSize: '1.3em', background: index % 2 ===0 ? 'lightgrey' : 'transparent'}}>
                                {info.title} : {info.description}
                            </Row>   
                        )}
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

export default DevicePage