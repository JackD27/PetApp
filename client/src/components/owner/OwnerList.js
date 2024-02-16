import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OwnerRow from './OwnerRow';

function OwnerList(data) {

    const owners = data.data;
    console.log(owners);
  
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
        </TableRow>
      </TableHead>
      <TableBody>
        {owners.map((row) => (
          <OwnerRow key={row._id} row={row} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default OwnerList;