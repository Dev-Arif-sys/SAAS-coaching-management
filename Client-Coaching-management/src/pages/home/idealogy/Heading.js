import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Heading = () => {
    const theme = useTheme();
    return (
        <Box sx={5}>
            <Typography variant="h1" color={theme.palette.text.highlightHeading} fontSize={'14px'} mb={2}>
                THE CORES & VALUES
            </Typography>

            <Typography variant="h1" mb={3} color={theme.palette.text.heading}>
                Our idealogy to craft digital products that make presence
            </Typography>
            <Typography mb={3} variant="subtitle1" color={theme.palette.text.primary} fontWeight="400">
                Veniam quis nostrud exercitation ullamco laboris aliquip ex ea duis aute irure dolor kin reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non quis nostrud exercitation ullamco.
            </Typography>
        </Box>
    );
};

export default Heading;
