import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackbarNotif(props) {

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={props.open}
        autoHideDuration={4000}
        onClose={props.handleClose}
       action={null}
      >
        <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
        </Snackbar>
    </Box>
  );
}