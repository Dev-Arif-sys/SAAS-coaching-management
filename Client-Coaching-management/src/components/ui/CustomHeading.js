import React from 'react';
import { Box, useTheme } from '@mui/material';
const CustomHeading = ({ children }) => {
    const theme = useTheme();
    const heading = {
        backgroundColor: '#1890FF',
        color: theme.palette.common.white,
        padding: '4px 10px',
        borderRadius: '5px'
    };
    return (
        <Box sx={{ ...heading }}>
            <small>
                <strong>{children}</strong>
            </small>
        </Box>
    );
};

export default CustomHeading;
