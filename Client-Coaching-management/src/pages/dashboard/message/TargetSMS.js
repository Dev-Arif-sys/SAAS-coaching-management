import React from 'react';
import { Box, Grid, Button, useTheme } from '@mui/material';
import { styled } from '@mui/styles';

const TextWrap = {
    width: '100%',
    height: '150px',
    padding: '12px 20px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    fontSize: '16px',
    resize: 'none',
    '&:focus': {
        color: 'white',
        backgroundColor: 'black',
    }
};

const TargetSMS = () => {
    const theme = useTheme();
    /* Css */
    const container = {
        backgroundColor: theme.palette.common.white,
        p: 2,
        borderRadius: '10px',
        boxShadow: 1
    };
    return (
        <Box sx={{ ...container }}>
            <label htmlFor="textarea" style={{ margin: '5px 2px' }}>
                Enter Phone Number
            </label>
            <textarea style={{ ...TextWrap }} placeholder="0187891**50, 0153236**43, 0187891**50"></textarea>
            <label htmlFor="textarea" style={{ margin: '5px 2px' }}>
                Write Message Here
            </label>
            <textarea style={{ ...TextWrap }}>Hello Students</textarea>
            <div style={{ gap: '10px', display: 'flex', margin: '10px 0' }}>
                <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                    Send SMS
                </Button>
                <Button size="small" color="error" variant="contained" sx={{ textTransform: 'capitalize' }}>
                    Reset Info
                </Button>
            </div>
        </Box>
    );
};

export default TargetSMS;
