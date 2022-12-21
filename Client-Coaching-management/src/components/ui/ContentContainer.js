import { Box, useTheme } from '@mui/material';

const ContentContainer = ({ children }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.common.white,
                padding: '15px 8px',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '4px',
                zIndex: 1
            }}
        >
            {children}
        </Box>
    );
};

export default ContentContainer;
