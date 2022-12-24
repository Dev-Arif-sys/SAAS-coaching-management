import { Box, Stack, useTheme, Typography } from '@mui/material';
const CustomMainHeading = ({ icon, title }) => {
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
                {icon}

                <Typography sx={{ fontWeight: '700', fontSize: '20px' }} variant="h4">
                    {title}
                </Typography>
                {/* {children} */}
            </Stack>
        </Box>
    );
};

export default CustomMainHeading;
