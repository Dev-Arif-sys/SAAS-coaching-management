import { InputLabel, Stack } from '@mui/material';
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
            <TextField
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
                    maxWidth: '250px'
                }}
                {...others}
                sx={{ '& .MuiInputBase-input': { py: 0.99, minWidth: '50px', fontSize: '14px' } }}
            />
        </Stack>
    );
};

export default DatePicker;
