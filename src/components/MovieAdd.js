import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function MovieAdd( {movies ,  setmovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name: "", 
        image: "" , 
        description:"" , 
        posterurl: "0"
    });
    const handleAdd= () => {
        setmovies([...movies, newmovie]);
    };
  return (
    <div>
  <Button variant="dark" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add moivie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image"  onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})} />
        
      </Form.Group>

      
     
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ handleAdd();
          handleClose();
          }}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MovieAdd;