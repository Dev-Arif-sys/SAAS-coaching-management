import React from 'react';
import { InputLabel, MenuItem, Stack, TextField } from '@mui/material';
const DatePicker = ({ label, required, lablegaping, ...others }) => {
    return (
        <Stack spacing={0.25}>
            <InputLabel
                sx={{
                    fontSize: '14px',
                    margin: lablegaping
                }}
            >
                {label} {required && '*'}{' '}
            </InputLabel>
            <input
                type="date"
                style={{
                    fontSize: '18px',
                    background: 'none',
                    marginTop: '0px',
                    marginRight: '10px',
                    border: '2px solid #ebecf0',
                    color: '#9a9a9a',
                    padding: '5px',
                    borderRadius: '5px',
                    width: '250px'
                }}
                {...others}
            />
        </Stack>
    );
};

export default DatePicker;
