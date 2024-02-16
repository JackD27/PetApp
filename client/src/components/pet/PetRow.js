import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function PetRow(props) {
    const { row } = props;
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>{row.name}</TableCell>
          <TableCell component="th" scope="row" align='center'>{row.owner.firstName}{"   "}{row.owner.lastName}</TableCell>
          <TableCell>{row.breed}</TableCell>
          <TableCell>{row.color}</TableCell>
        </TableRow>
      </React.Fragment>
    );
}

export default PetRow;
  