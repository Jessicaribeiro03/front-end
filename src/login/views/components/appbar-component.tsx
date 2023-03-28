import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider, Tooltip, Avatar } from '@mui/material';
import { handleOpenUserMenu } from '../style';

export default function ButtonAppBar() {


  const darkTheme = createTheme({
    palette: {         
      primary: {
        main: '#3C345C',
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
              <MenuIcon /> 

              </IconButton>


            </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
    
  );
}

