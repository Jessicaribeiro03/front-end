import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider, Tooltip, Avatar } from '@mui/material';


export default function ButtonAppBar() {


  const darkTheme = createTheme({
    palette: {         
      primary: {
        main: '#4a148c',
      },
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
      <AppBar  position="static">
            <Toolbar>
              <IconButton
               
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                 <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" />
              </IconButton>
            </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
    
  );
}

