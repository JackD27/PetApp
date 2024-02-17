import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PetForm from './PetForm';
import PetList from './PetList';
import CircularProgress from '@mui/material/CircularProgress';
import SnackbarNotif from '../utils/SnackbarNotif';


function PetPage() {

  const [pets, setPets] = useState([]);
  const [owners, setOwners] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errorData, setErrorData] = useState({open: false, message: '', severity: ''});

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorData({open: false, severity: '', message: ''});
  };


  useEffect(() => {
    // Define the function to make the Axios GET request
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5050/api/v1/pets/get-pets'); // Replace with your API endpoint
        setPets(response.data.pets);
        setOwners(response.data.owners);
      } catch (error) {
        setErrorData({open: true, message: error.message, severity: 'error'})
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
    // Cleanup function to handle any necessary cleanup (e.g., canceling pending requests)
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return (
    <>
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
    <SnackbarNotif open={errorData.open} message={errorData.message} severity={errorData.severity} handleClose={handleClose} />
    </>
  );
}

export default PetPage;