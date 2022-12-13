import React from 'react';
import Counter from './Counter';
import Heading from './Heading';
import { Box } from '@mui/material';
const Power = () => {
    return (
        <Box sx={{ py: 5 }}>
            <Heading />
            <Counter />
        </Box>
    );
};

export default Power;
