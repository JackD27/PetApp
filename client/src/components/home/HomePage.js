import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ServicesCard from './ServicesCard';
import Stack from 'react-bootstrap/Stack';

function OwnerPage() {
  return (
    <Container className='mt-5'>
    
    <h1>Serivces</h1>
    <Container>
    <Row>
    {[0, 1, 2, 3].map((index) =>(
        <Col md={6} sm={12}>
        <ServicesCard key={index} />
        </Col>
        
    ))}
    </Row>
    </Container>
    
    
    </Container>
  );
}

export default OwnerPage;