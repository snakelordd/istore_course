import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {
    const device = { id: 1, name: 'IPhone 12',price: 100000, rating: 5, img: 'https://www.techinn.com/f/13782/137821856/apple-iphone-12-pro-max-6gb-512gb-6.7.jpg'}
    const description = [
        {id: 1, title: 'RAM', description: '4 GB'},
        {id: 2, title: 'Camera', description: '100 Mpx'},
        {id: 3, title: 'CPU', description: '2.5 Gz'},
        {id: 4, title: 'Battery', description: '4000'}

    ]

    return(
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Image width={500} height={500} src={device.img}/>
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
                        {description.map((info, index) => 
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