import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PetRow from './PetRow';
import axios from 'axios';
import { API_URL } from '../../middleware/constants';

function PetList({data, onPetData}) {
    const pets = data;


    const deleteRowById = async (id) => {
      try {
        const response = await axios.delete(API_URL+`/pets/delete/${id}`);
        const updatedPets = pets.filter((pet) => pet._id !== id);
        onPetData(updatedPets);
      } catch (error) {
        console.error('Error deleting item:', error);
      } 
    };

  return (
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell>Pet Name</TableCell>
          <TableCell align='center'>Owner</TableCell>
          <TableCell>Breed</TableCell>
          <TableCell>Color</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pets.map((row) => (
          <PetRow key={row._id} row={row} onDelete={deleteRowById}/>
          
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
} 

export default PetList;