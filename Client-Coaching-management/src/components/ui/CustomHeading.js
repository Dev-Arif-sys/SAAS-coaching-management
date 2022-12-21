import { Box, Typography, useTheme } from '@mui/material';
const CustomHeading = ({ children }) => {
    const theme = useTheme();
    const heading = {
        backgroundColor: '#1890FF',
        color: theme.palette.common.white,
        padding: '7px 10px',
        borderRadius: '5px',
        marginBottom: '8px',
        display: 'inline-block'
    };
    return (
        <Box sx={{ ...heading }}>
            <small>
                <Typography style={{ fontSize: { xs: '12px', sm: '14px', md: '15px' }, fontWeight: '700' }}>{children}</Typography>
            </small>
        </Box>
    );
};

export default CustomHeading;
