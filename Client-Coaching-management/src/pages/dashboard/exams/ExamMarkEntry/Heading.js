import React from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
const Heading = () => {
    const theme = useTheme();
    return (
        <div>
            <Typography variant="h1" Typography color={theme.palette.text.heading} mb={2}>
                Exams Mark Entry
            </Typography>
        </div>
    );
};

export default Heading;
