import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ServicesCard from './ServicesCard';
import { ServiceInfo } from '../../middleware/constants';

function HomePage() {
  return (
    <Container className='mt-5'>
    
    <h1>Serivces</h1>
    <Container>
    <Row>
    {ServiceInfo.map((value, i) =>(
        <Col md={6} sm={12} key={i}>
          <ServicesCard props={value} />
        </Col>
        
    ))}
    </Row>
    </Container>
    
    
    </Container>
  );
}

export default HomePage;