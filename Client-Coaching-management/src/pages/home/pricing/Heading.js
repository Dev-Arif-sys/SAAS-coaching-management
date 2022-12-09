import { Box, Typography, useTheme } from '@mui/material';

const Heading = () => {
    const theme = useTheme();
    return (
        <Box mb={2}>
            <Typography variant="h1" color={theme.palette.text.heading} textAlign="center">
                Best pricing plan
            </Typography>
            <Box
                sx={{
                    width: '580px',
                    maxWidth: '99%',
                    margin: '0 auto',
                    marginTop: '10px',
                    lineHeight: '14px'
                }}
            >
                <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight="400" textAlign="center">
                    Samu lets you manage software development and track bugs. Samu's streamlined design is built for speed and efficiency
                    helping high performing team.
                </Typography>
            </Box>
        </Box>
    );
};

export default Heading;
