import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function QueryBox() {
    return (
        <Box
          sx={{
            ml: 50,
            color: 'white',
            width: 800,
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
      );
}