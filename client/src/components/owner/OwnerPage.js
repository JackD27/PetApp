import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OwnerForm from './OwnerForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OwnerList from './OwnerList';
import CircularProgress from '@mui/material/CircularProgress';

function OwnerPage() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define the function to make the Axios GET request
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5050/api/v1/owners/get-owners'); // Replace with your API endpoint
        setData(response.data); // Update the state with the fetched data
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

  return (
    <Container className='mt-5'>
    <Row>
    <Col>
    {isLoading ? <CircularProgress color="inherit"/> : <OwnerList data={data}/>}
    </Col>
    <Col>
    <OwnerForm />
    </Col>
    </Row>
    </Container>
  );
}

export default OwnerPage;