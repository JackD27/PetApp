import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PetForm from './PetForm';
import PetList from './PetList';
import CircularProgress from '@mui/material/CircularProgress';
import SnackbarNotif from '../utils/SnackbarNotif';
import { API_URL } from '../../middleware/constants';


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

  const handlePetData = (data) => {
    setPets(data)
  }

  const handleAddPet = (newPet) => {
    // Update the state with the new todo
    setPets([...pets, newPet]);
  };


  useEffect(() => {
    // Define the function to make the Axios GET request
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL+'/pets/get-pets'); // Replace with your API endpoint
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
    <PetForm data={owners} onAddPetData={handleAddPet}/>
    </Col>
    <Col>
    {isLoading ? <CircularProgress color="inherit"/> : <PetList data={pets} onPetData={handlePetData}/>}
    </Col>
    </Row>
    </Container>
    <SnackbarNotif open={errorData.open} message={errorData.message} severity={errorData.severity} handleClose={handleClose} />
    </>
  );
}

export default PetPage;