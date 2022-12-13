import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
const CardWrapper = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
    width: '580px',
    maxWidth: '90%',
    margin: '0 auto',
    borderRadius: `10px`,
    background: theme.palette.common.white,
    textAlign: 'center',
    boxShadow: theme.customShadows.z1,
    transition: theme.transitions.create(['backgroundImage', 'transform'], {
        duration: '.5s'
    })
}));
const TestimonialCard = () => {
    const theme = useTheme();
    return (
        <CardWrapper>
            <Typography variant="body1" color={theme.palette.text.secondary} fontSize={{ md: '15px', xs: '13px' }} lineHeight={2}>
                "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex aute irure dolor in reprehenderit nostrud exercitation
                ullamco laboris nisi ut aliquip ex aute irure dolor in reprehenderit in voluptate velit esse minim."
            </Typography>
            <Stack mt={3} direction="column" alignItems="center">
                <img
                    style={{
                        width: '55px',
                        height: '55px',
                        borderRadius: '50%'
                    }}
                    src="https://randomuser.me/api/portraits/men/15.jpg"
                    alt="client avatar"
                />
                <Box mt={0.8}>
                    <Typography variant="body1" color={theme.palette.text.highlightHeading}>
                        Andrew Pickerd
                    </Typography>
                    <Typography fontSize="14px">CEO, Blue Hosting</Typography>
                </Box>
            </Stack>
        </CardWrapper>
    );
};

export default TestimonialCard;
