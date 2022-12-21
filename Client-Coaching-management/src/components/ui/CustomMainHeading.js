import { Box, Stack, useTheme } from '@mui/material';
const CustomMainHeading = ({ children }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                // color: theme.palette.common.white,
                // background: `linear-gradient(to right top, #2d6ac7, #7e5ec3, #b34caf, #d8398e, #eb3466)`,
                padding: '2px 0px',
                zIndex: 400,

                position: 'relative',
                // boxShadow: theme.customShadows.light,
                textAlign: 'center',
                mb: 2,

                display: 'inline-block'
            }}
        >
            <Stack direction="row" alignItems="center">
                {' '}
                {children}
            </Stack>
        </Box>
    );
};

export default CustomMainHeading;
