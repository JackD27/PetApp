import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function OwnerRow(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            { row.pets.length > 0 ?<IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton> : null}
          </TableCell>
          <TableCell component="th" scope="row">{row.firstName}</TableCell>
          <TableCell>{row.lastName}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.phoneNumber}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Pets
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead sx={{ fontColor: 'white'}}>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Breed</TableCell>
                      <TableCell>Color</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.pets.map((pet) => (
                      <TableRow key={pet._id}>
                        <TableCell component="th" scope="row">{pet.name}</TableCell>
                        <TableCell>{pet.breed}</TableCell>
                        <TableCell>{pet.color}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}

export default OwnerRow;
  