import { Box, Typography, useTheme } from '@mui/material';

const Heading = () => {
    const theme = useTheme();
    return (
        <Box mb={8} mt={14}>
            <Typography variant="h1" color={theme.palette.text.heading} textAlign="center">
                What our client says
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
                {/* <Typography variant="subtitle1" color={theme.palette.text.primary} fontWeight="400" textAlign="center">
                    
                </Typography> */}
            </Box>
        </Box>
    );
};

export default Heading;
