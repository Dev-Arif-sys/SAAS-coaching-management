import React from 'react';
import { InputLabel, MenuItem, Stack, TextField } from '@mui/material';
const DatePicker = ({ label, required, ...others }) => {
    return (
        <div>
            <InputLabel
                sx={{
                    fontSize: '14px'
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
                    border: '2px solid #ebecf0',
                    color: '#9a9a9a',
                    padding: '5px',
                    borderRadius: '5px'
                }}
                {...others}
            />
        </div>
    );
};

export default DatePicker;
