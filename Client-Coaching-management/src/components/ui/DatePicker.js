import { InputLabel, Stack, TextField } from '@mui/material';
const DatePicker = ({ label, required, lablegaping, ...others }) => {
    return (
        <Stack spacing={0.25}>
            <InputLabel
                sx={{
                    fontSize: { xs: '12px', md: '14px' },
                    margin: lablegaping
                }}
            >
                {label} {required && '*'}{' '}
            </InputLabel>
            <TextField
                type="date"
                sx={{
                    fontSize: { xs: '12px', md: '14px' },
                    background: 'none',
                    marginTop: '0px',
                    marginRight: '10px',

                    color: '#9a9a9a',
                    padding: '5px',
                    borderRadius: '5px',
                    minWidth: '50px'
                }}
                {...others}
                sx={{ '& .MuiInputBase-input': { py: 0.99, minWidth: '50px', fontSize: '14px' } }}
            />
        </Stack>
    );
};

export default DatePicker;
