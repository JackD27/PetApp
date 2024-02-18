import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import SnackbarNotif from '../utils/SnackbarNotif';
import axios from 'axios';
import { API_URL } from '../../middleware/constants';


function PetForm({data, onAddPetData}) {

    const [petData, setPetData] = useState({ owner: '', name: '', breed: '', color: ''})
    const owners = data
    const [errorData, setErrorData] = useState({open: false, message: '', severity: ''});



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(API_URL+'/pets/create', petData);
            onAddPetData(response.data.pet)
            setErrorData({open: true, message: 'Pet added successfully', severity: 'success'})
            setPetData({ owner: '', name: '', breed: '', color: ''})
          } catch (error) {
            setErrorData({open: true, message: error.response.data.message, severity: 'error'})
          }
    }

    const handleChange = (e) => {
        setPetData({
          ...petData,
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
    <Container className='mb-5'>
    <Form onSubmit={handleSubmit}>
    <h1>Add Pet</h1>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formBasicOwnerName">
            <Form.Label>Owner</Form.Label>
            <Form.Select onChange={handleChange} name='owner' value={petData.owner}>
                <option value="" disabled>Select an Option:</option>
                {owners.map((owner) => (
                    <option key={owner._id} value={owner._id}>{owner.firstName} {owner.lastName}</option>
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formBasicName">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Pet's Name" value={petData.name} name='name' onChange={handleChange} />
        </Form.Group>
    </Row>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formBasicBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control type="text" placeholder="Enter Breed"  value={petData.breed} name='breed' onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formBasicBreed">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" placeholder="Enter Color of Pet" value={petData.color} name='color' onChange={handleChange}/>
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