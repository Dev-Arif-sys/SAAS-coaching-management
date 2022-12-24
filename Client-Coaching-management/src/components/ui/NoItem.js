import { Stack, Typography } from '@mui/material';

const NoItem = ({ message }) => {
    return (
        <Stack
            justifyContent="center"
            alignItems="Center"
            sx={{
                height: '40vh'
            }}
        >
            <Typography
                variant="p"
                sx={{
                    fontSize: '15px'
                }}
            >
                {message}
            </Typography>
        </Stack>
    );
};

export default NoItem;
