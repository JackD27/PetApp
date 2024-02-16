import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PetRow from './PetRow';
import Skeleton from '@mui/material/Skeleton';

function PetList(data, loading) {

    const pets = data.data;

  return (
    <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell>Pet Name</TableCell>
          <TableCell align='center'>Owner</TableCell>
          <TableCell>Breed</TableCell>
          <TableCell>Color</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pets.map((row) => (
          <PetRow key={row._id} row={row} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
} 

export default PetList;