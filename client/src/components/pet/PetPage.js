import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PetForm from '../pet/PetForm';
import PetList from '../pet/PetList';
import CircularProgress from '@mui/material/CircularProgress';


function OwnerPage() {

  const [pets, setPets] = useState([]);
  const [owners, setOwners] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define the function to make the Axios GET request
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5050/api/v1/pets/get-pets'); // Replace with your API endpoint
        setPets(response.data.pets);
        setOwners(response.data.owners);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
    // Cleanup function to handle any necessary cleanup (e.g., canceling pending requests)
  }, []); // The empty dependency array means this effect runs once when the component mounts


  console.log(pets)
  return (
    <Container className='mt-5'>
    <Row>
    <Col>
    {isLoading ? <CircularProgress color="inherit"/> : <PetList data={pets}/>}
    </Col>
    <Col>
    <PetForm data={owners}/>
    </Col>
    </Row>
    </Container>
  );
}

export default OwnerPage;