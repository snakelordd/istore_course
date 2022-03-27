import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType =() => {
    createType( {name: value} ).then(()=> {
      setValue('')
      onHide()
    })
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
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
              placeholder='Input Name'
              value = {value}
              onChange={ e => setValue(e.target.value)}
            >
                
            </Form.Control>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addType}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateType
