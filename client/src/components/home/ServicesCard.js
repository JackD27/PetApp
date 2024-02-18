import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ServicesCard({props}) {
  return (
    <Card className='m-3 h-600'>
      <Card.Header>Pet App Services</Card.Header>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="success">Buy for ${props.price}.00</Button>
      </Card.Body>
    </Card>
  );
}

export default ServicesCard;