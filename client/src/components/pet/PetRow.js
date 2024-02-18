import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function PetRow({row, onDelete}) {
    return (
      <React.Fragment>
        <TableRow>
          <TableCell>{row.name}</TableCell>
          <TableCell component="th" scope="row" align='center'>{row.owner.firstName}{"   "}{row.owner.lastName}</TableCell>
          <TableCell>{row.breed}</TableCell>
          <TableCell>{row.color}</TableCell>
          <TableCell>
            <Button variant="contained"  size="small" color="error" onClick={() => onDelete(row._id)}>Delete</Button>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}

export default PetRow;
  