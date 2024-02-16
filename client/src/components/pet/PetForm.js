import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import SnackbarNotif from '../utils/SnackbarNotif';
import axios from 'axios';


function PetForm(data) {

    const [postData, setPostData] = useState({owner: '', name: '', breed: '', color: ''})
    const owners = data.data
    const [errorData, setErrorData] = useState({open: false, message: '', severity: ''});



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5050/api/v1/pets/create', postData);
            setErrorData({open: true, message: 'Pet added successfully', severity: 'success'})
            setPostData({owner: '', name: '', breed: '', color: ''})
          } catch (error) {
            console.error('Error making POST request:', error);
            setErrorData({open: true, message: error.response.data.message, severity: 'error'})

          }
    }

    const handleChange = (e) => {
        setPostData({
          ...postData,
          [e.target.name]: e.target.value,
        });
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setErrorData({open: false, severity: '', message: ''});
      };


  return (
    <>
    <Container>
    <Form onSubmit={handleSubmit}>
    <h1>Add Pet</h1>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formBasicOwnerName">
            <Form.Label>Owner</Form.Label>
            <Form.Select onChange={handleChange} name='owner' value={postData.owner}>
                <option value="" disabled>Select an Option:</option>
                {owners.map((owner) => (
                    <option key={owner._id} value={owner._id}>{owner.firstName} {owner.lastName}</option>
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formBasicName">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Pet's Name" value={postData.name} name='name' onChange={handleChange} />
        </Form.Group>
    </Row>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formBasicBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control type="text" placeholder="Enter Breed"  value={postData.breed} name='breed' onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formBasicBreed">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" placeholder="Enter Color of Pet" value={postData.color} name='color' onChange={handleChange}/>
        </Form.Group>
    </Row>
        <Button variant="primary" type="submit">
            Submit Pet
        </Button>
    </Form>
    </Container>
    <SnackbarNotif open={errorData.open} message={errorData.message} severity={errorData.severity} handleClose={handleClose} />
    </>
  );
}

export default PetForm;