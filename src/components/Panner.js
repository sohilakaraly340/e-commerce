import { Box, Button, Stack } from '@mui/material';
import React from 'react';

import pan from '../img/pan.png'
export default function Panner() {

  return (
    <Box mt="9px">
    
      <Stack position="relative">
        <img src={pan} alt="img" className="panner" />
        <div className='overlay'>
          <p style={{marginBottom:"0px"}}>Get up to 20% off <br /> New Arrivals</p>
          <Button variant="outlined" style={{minWidth:"100px"}}>shop now</Button>
        </div>
      </Stack>


    </Box>
  )
}
