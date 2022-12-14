import { InputLabel, OutlinedInput, Stack } from '@mui/material';

const CustomTextField = ({ label, required, ...others }) => {
    return (
        <Stack spacing={1}>
            <InputLabel
                sx={{
                    fontSize: '14px'
                }}
            >
                {label} {required && '*'}{' '}
            </InputLabel>
            <OutlinedInput {...others} />
        </Stack>
    );
};

export default CustomTextField;
