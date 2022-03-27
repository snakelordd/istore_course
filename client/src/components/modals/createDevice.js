import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from '../../'
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = observer (({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const addInfo = () => {
      setInfo( [...info, {title: '', description: '', number: Date.now()}] )
    }
    const removeInfo = (number) => {
      setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
      setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
      setInfo(info.map( i => i.number === number ? {...i, [key]: value} : i ))
    }

    const addDevice = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', price)
      formData.append('img', file)
      formData.append('brandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))
      
      createDevice(formData).then(data => onHide())
    }
    useEffect( () => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
  }, [])
  
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
          <Dropdown.Toggle>{device.selectedType.name || 'Select Type'}</Dropdown.Toggle>
          <Dropdown.Menu>
             {
               device.types.map(type =>
                <Dropdown.Item key={type.id} onClick={ () => device.setSelectedType(type)}> 
                    {type.name}
                </Dropdown.Item>
               )
             }
          </Dropdown.Menu>
         </Dropdown>
         <Dropdown >
          <Dropdown.Toggle>{device.selectedBrand.name || 'Select Brand'}</Dropdown.Toggle>
          <Dropdown.Menu>
             {
               device.brands.map(brand =>
                <Dropdown.Item key={brand.id} onClick={ () => device.setSelectedBrand(brand)}> 
                    {brand.name}
                </Dropdown.Item>
               )
             }
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <Form className="mt-2">
                <Form.Control
                  placeholder='Input name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                >

                </Form.Control>
             </Form>
        <Form className="mt-2">
            <Form.Control
              placeholder='Input price'
              type='number'
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            >

            </Form.Control>
        </Form>
        <Form className="mt-2">
           <Form.Control
              type='file'
              onChange = {selectFile}
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
                      value = {item.title}
                      onChange={(e) => changeInfo('title', e.target.value, item.number)}
                      placeholder='Enter a feature'
                    />
                </Col>
                <Col md={4}>
                    <Form.Control 
                      value = {item.description}
                      onChange={(e) => changeInfo('description', e.target.value, item.number)}
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
        <Button variant='outline-success' onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreateDevice