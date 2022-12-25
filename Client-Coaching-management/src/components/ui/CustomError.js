import { Alert, AlertTitle, Stack } from '@mui/material';

const CustomError = ({ message }) => {
    return (
        <Stack
            justifyContent="center"
            alignItems="Center"
            sx={{
                height: '70vh'
            }}
        >
            <Alert
                sx={{
                    backgroundColor: 'none',
                    color: 'red',
                    width: { xs: '95%', sm: '80%', md: '60%' }
                }}
                severity="error"
            >
                <AlertTitle>Error</AlertTitle>
                {message}
            </Alert>
        </Stack>
    );
};

export default CustomError;
