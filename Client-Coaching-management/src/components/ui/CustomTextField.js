import { InputLabel, OutlinedInput, Stack } from '@mui/material';

const CustomTextField = ({ label, required, lablegaping, ...others }) => {
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
            <OutlinedInput {...others} />
        </Stack>
    );
};

export default CustomTextField;
