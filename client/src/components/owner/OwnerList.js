import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OwnerRow from './OwnerRow';
import axios from 'axios';
import { API_URL } from '../../middleware/constants';

function OwnerList({data, onOwnerData}) {

    const owners = data

    const deleteRowById = async (id) => {
      try {
        const response = await axios.delete(API_URL+`/owners/delete/${id}`);
        const updatedOwners = owners.filter((owner) => owner._id !== id);

        onOwnerData(updatedOwners);
      } catch (error) {
        console.error('Error deleting item:', error);
      } 
    };
  
  return (
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {owners.map((row) => (
          <OwnerRow key={row._id} row={row} onDelete={deleteRowById} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default OwnerList;