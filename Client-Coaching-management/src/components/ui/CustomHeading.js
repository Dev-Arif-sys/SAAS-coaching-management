import { Box, Typography, useTheme } from '@mui/material';
const CustomHeading = ({ children }) => {
    const theme = useTheme();
    const heading = {
        // backgroundColor: '#1890FF',
        color: theme.palette.common.black,
        padding: '0px 2px',
        borderRadius: '0px',
        marginBottom: '8px',
        display: 'inline-block',
        borderLeft: `5px solid ${theme.palette.action.warning}`,
        mb: 2
    };
    return (
        <Box sx={{ ...heading }}>
            <small>
                <Typography variant="h6" style={{ fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontWeight: '600' }}>
                    {children}
                </Typography>
            </small>
        </Box>
    );
};

export default CustomHeading;
