import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function OwnerForm() {
  return (
    <Container>
    <Form>
    <h1>Add Owner</h1>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formLastName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
    </Row>
    <Row>
        <Form.Group className="mb-3" as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>
    </Row>
        <Button variant="primary" type="submit">
            Submit Owner
        </Button>
    </Form>
    </Container>
  );
}

export default OwnerForm;