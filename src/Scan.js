import React from 'react';
import IconButton from '@mui/material/IconButton';
import CropFreeIcon from '@mui/icons-material/CropFree';

function Scan() {
  return (
    <div className="App">
        <IconButton aria-label="CropFree" color="primary">
            <CropFreeIcon />
        </IconButton>
    </div>
  );
}

export default Scan;