import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
const CustomUpdateButton = ({ handle, buttonText, textcolor }) => {
    const theme = useTheme();
    console.log(textcolor);
    return (
        <div
            style={{
                background: theme.palette.text.heading,
                // background: { textcolor },
                padding: '7px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                maxWidth: '50%',
                justifyContent: 'center',
                color: 'white',
                marginTop: '10px'
            }}
            role={'button'}
            tabIndex={0}
            onClick={handle}
            onKeyDown={handle}
        >
            {buttonText}
        </div>
    );
};

export default CustomUpdateButton;
