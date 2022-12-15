import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
const CustomSearchButton = ({
    handle
}) => {
    const theme = useTheme();
    return (
        <div
            style={{
                background: theme.palette.text.heading,
                padding: '5px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center'
            }}
            onClick={() => handle()}
        >
            <BiSearchAlt
                style={{
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '28px'
                }}
            />
        </div>
    );
};

export default CustomSearchButton;
