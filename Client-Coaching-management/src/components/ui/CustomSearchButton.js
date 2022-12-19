import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
const CustomSearchButton = ({ handle }) => {
    const theme = useTheme();
    return (
        <div
            style={{
                background: theme.palette.text.heading,
                padding: '7px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                maxWidth: '45px'
            }}
            role={'button'}
            tabIndex={0}
            onClick={handle}
            onKeyDown={handle}
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
