import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
const Heading = () => {
    const theme = useTheme();
    return (
        <Box mb={5}>
            <Typography variant="h1" color={theme.palette.text.highlightHeading} textAlign="center" fontSize={'14px'} mb={2}>
                POWER YOUR STRATEGIES
            </Typography>
            <Typography variant="h1" color={theme.palette.text.heading} textAlign="center">
                Professional services & features that drive business
            </Typography>
            <Box
                sx={{
                    margin: '0 auto',
                    marginTop: '10px',
                    lineHeight: '14px'
                }}
                maxWidth={{ xs: '90%', md: '70%' }}
            >
                <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight="400" textAlign="center">
                    Aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                    cupidatat non. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea consequat duis aute irure dolor in reprehenderit velit.
                </Typography>
            </Box>
        </Box>
    );
};

export default Heading;
