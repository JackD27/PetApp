import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OwnerForm from './OwnerForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OwnerList from './OwnerList';
import CircularProgress from '@mui/material/CircularProgress';
import SnackbarNotif from '../utils/SnackbarNotif';
import { API_URL } from '../../middleware/constants';

function OwnerPage() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorData, setErrorData] = useState({open: false, message: '', severity: ''});

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorData({open: false, severity: '', message: ''});
  };

  const handleOwnerData = (data) => {
    setData(data)
  }

  const handleAddOwner = (newOwner) => {
    // Update the state with the new todo
    setData([...data, newOwner]);
  }

  useEffect(() => {
    // Define the function to make the Axios GET request
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL+'/owners/get-owners'); // Replace with your API endpoint
        setData(response.data); // Update the state with the fetched data
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
    <OwnerForm onAddNewOwner={handleAddOwner}/>
    </Col>
    <Col>
    {isLoading ? <CircularProgress color="inherit"/> : <OwnerList data={data} onOwnerData={handleOwnerData}/>}
    </Col>
    </Row>
    </Container>
    <SnackbarNotif open={errorData.open} message={errorData.message} severity={errorData.severity} handleClose={handleClose} />
    </>
  );
}

export default OwnerPage;