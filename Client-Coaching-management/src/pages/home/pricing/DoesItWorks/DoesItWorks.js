import React from 'react';
import { Grid, Typography, Avatar, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const AterBefotWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    '&:before': {
        position: 'absolute',
        content: `' '`,
        top: '36px',
        left: '-124px',
        right: '0px',
        width: '60%',
        height: 2,
        background: 'grey'
    },
    '&:after': {
        position: 'absolute',
        content: `' '`,
        top: '36px',
        left: '278px',
        right: '7px',
        width: ' 60%',
        height: 2,
        background: 'grey'
    }
}));
const AvatarWrapper = styled('div')(({ theme }) => ({
    background: '#fff',
    width: '80px',
    height: '80px',
    borderRadius: '100px',
    overflow: 'hidden',
    margin: '0 auto',
    fontSize: '30px',
    color: '#878991',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    fontWeight: '400',
    padding: '27px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));
const DoesItWorks = () => {
    const theme = useTheme();
    return (
        <Grid container maxWidth="lg" sx={{ mx: 'auto' }} rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25, textAlign: 'center' }}>
                <Typography variant="h1" color={theme.palette.text.heading}>
                    How does it works?
                </Typography>
                <Typography variant="body1">
                    Hit your coverage goals without boxing people into pre- <br />
                    defined work that makes fine-tuning easy.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box textAlign="center">
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <AvatarWrapper variant="curcleStyle">2</AvatarWrapper>
                        </Box>

                        <Box sx={{ padding: '0 50px' }}>
                            <Box
                                component="img"
                                sx={{
                                    padding: '32px 32px 32px'
                                }}
                                alt="The house from the offer."
                                src="https://thepixelcurve.com/html/xipper/assets/img/icon/1.png"
                            />
                            <Typography variant="h4">Create Account</Typography>
                            <Typography variant="body2">
                                Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <AterBefotWrapper>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Box textAlign="center">
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <AvatarWrapper variant="curcleStyle">1</AvatarWrapper>
                            </Box>

                            <Box sx={{ padding: '0 50px' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        padding: '32px 32px 32px'
                                    }}
                                    alt="The house from the offer."
                                    src="https://thepixelcurve.com/html/xipper/assets/img/icon/1.png"
                                />
                                <Typography variant="h4">Make a Schedule</Typography>
                                <Typography variant="body2">
                                    Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </AterBefotWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box textAlign="center">
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <AvatarWrapper variant="curcleStyle">3</AvatarWrapper>
                        </Box>
                        <Box sx={{ padding: '0 50px' }}>
                            <Box
                                component="img"
                                sx={{
                                    padding: '32px 32px 32px'
                                }}
                                alt="The house from the offer."
                                src="https://thepixelcurve.com/html/xipper/assets/img/icon/1.png"
                            />
                            <Typography variant="h4">Get Notify</Typography>
                            <Typography variant="body2">
                                Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default DoesItWorks;
