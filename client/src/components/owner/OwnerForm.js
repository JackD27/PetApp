import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import SnackbarNotif from '../utils/SnackbarNotif';
import axios from 'axios';
import { API_URL } from '../../middleware/constants';



function OwnerForm({onAddNewOwner}) {

    const [ownerData, setOwnerData] = useState({firstName: '', lastName: '', email: '', phoneNumber: '', pets: []})
    const [errorData, setErrorData] = useState({open: false, message: '', severity: ''});

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(API_URL+'/owners/create', ownerData);
            onAddNewOwner(response.data.owner)
            setErrorData({open: true, message: 'Owner added successfully', severity: 'success'})
            setOwnerData({firstName: '', lastName: '', email: '', phoneNumber: ''})
          } catch (error) {
            setErrorData({open: true, message: error.response.data.message, severity: 'error'})
          }
    }

    const handleChange = (e) => {
        setOwnerData({
          ...ownerData,
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
    <h1>Add Owner</h1>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name='firstName' value={ownerData.firstName} onChange={handleChange} placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name='lastName' value={ownerData.lastName} onChange={handleChange} placeholder="Enter Last Name" />
        </Form.Group>
    </Row>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' value={ownerData.email} onChange={handleChange} placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name='phoneNumber' value={ownerData.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number" />
        </Form.Group>
    </Row>
        <Button variant="primary" type="submit">
            Submit Owner
        </Button>
    </Form>
    </Container>
    <SnackbarNotif open={errorData.open} message={errorData.message} severity={errorData.severity} handleClose={handleClose} />
    </>
  );
}

export default OwnerForm;