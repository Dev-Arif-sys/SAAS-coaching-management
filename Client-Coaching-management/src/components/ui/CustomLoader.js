import { CircularProgress, Stack } from '@mui/material';

const CustomLoader = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="Center"
            sx={{
                height: '80vh'
            }}
        >
            <CircularProgress color="success" />
        </Stack>
    );
};

export default CustomLoader;
