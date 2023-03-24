import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button >Entrar</Button>
    </Stack>
  );
}