import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from '../../'

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
      setInfo( [...info, {Title: '', description: '', number: Date.now()}] )
    }
    const removeInfo = (number) => {
      setInfo(info.filter(i => i.number !== number))
    }

    return(
        <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-start">
          <Dropdown className='mr-3'>
          <Dropdown.Toggle>Select Type</Dropdown.Toggle>
          <Dropdown.Menu>
             {
               device.types.map(type =>
                 <Dropdown.Item key={type.id}> {type.name}</Dropdown.Item>
               )
             }
          </Dropdown.Menu>
         </Dropdown>
         <Dropdown >
          <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
          <Dropdown.Menu>
             {
               device.brands.map(brand =>
                 <Dropdown.Item key={brand.id}> {brand.name}</Dropdown.Item>
               )
             }
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <Form className="mt-2">
                <Form.Control
                  placeholder='Input name'
                >

                </Form.Control>
             </Form>
        <Form className="mt-2">
            <Form.Control
              placeholder='Input price'
              type='number'
            >

            </Form.Control>
        </Form>
        <Form className="mt-2">
           <Form.Control
              type='file'
            >

            </Form.Control>
        </Form>
        <hr/>
        <Button variant="outline-dark" className='mt-2' onClick={addInfo}>
          Add new feature
        </Button>
          {
             info.map(item =>
              <Row className='mt-3' key={ item.number}>
                <Col md={4}>
                    <Form.Control 
                      placeholder='Enter a feature'
                    />
                </Col>
                <Col md={4}>
                    <Form.Control 
                      
                      placeholder='Enter a desription'
                    />
                </Col>
                <Col md={4}>
                    <Button variant="outline-danger" onClick={()=> removeInfo(item.number)}>Delete</Button>
                </Col>
              </Row>
            )
          }
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateDevice