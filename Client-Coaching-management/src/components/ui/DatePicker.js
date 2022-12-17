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
            <TextField
                type="date"
                // sx={{
                //     fontSize: '18px',
                //     background: 'none',
                //     marginTop: '0px',
                //     border: '1px solid #80808040',
                //     color: '#80808040',
                //     padding: '0.5rem',
                //     borderRadius: '5px'
                // }}
                {...others}
                sx={{ '& .MuiInputBase-input': { py: 0.99, minWidth: '50px', fontSize: '14px' } }}
            />
        </div>
    );
};

export default DatePicker;
