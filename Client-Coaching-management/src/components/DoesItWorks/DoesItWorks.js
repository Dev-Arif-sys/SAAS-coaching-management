import React from 'react';
import { Grid, Typography, Avatar, Box, useMediaQuery } from '@mui/material';
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import afterStyleCoustome from 'themes/afterStyleCoustome';
import { useTheme } from '@mui/material/styles';
const DoesItWorks = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const classes = afterStyleCoustome();

    return (
        <Grid container maxWidth="lg" sx={{ mx: 'auto' }} rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25, textAlign: 'center' }}>
                <Typography variant="h5" className={classes.TitleStyle}>
                    How does it works?
                </Typography>
                <Typography variant="p" className={classes.parStyle}>
                    Hit your coverage goals without boxing people into pre- <br />
                    defined work that makes fine-tuning easy.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box textAlign="center">
                        <Avatar className={classes.curcleStyle}>2</Avatar>

                        <Box sx={{ padding: '0 50px' }}>
                            <Box
                                component="img"
                                sx={{
                                    padding: '32px 32px 32px'
                                }}
                                alt="The house from the offer."
                                src="https://thepixelcurve.com/html/xipper/assets/img/icon/1.png"
                            />
                            <Typography variant="h4" className={classes.TitleSupStyle}>
                                Create Account
                            </Typography>
                            <Typography variant="p" className={classes.parStyle}>
                                Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className={matchDownSM ? '' : classes.borderpos}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box textAlign="center">
                        <Avatar className={classes.curcleStyle}>1</Avatar>
                        <Box sx={{ padding: '0 50px' }}>
                            <Box
                                component="img"
                                sx={{
                                    padding: '32px 32px 32px'
                                }}
                                alt="The house from the offer."
                                src="https://thepixelcurve.com/html/xipper/assets/img/icon/1.png"
                            />
                            <Typography variant="h4" className={classes.TitleSupStyle}>
                                Make a Schedule
                            </Typography>
                            <Typography variant="p" className={classes.parStyle}>
                                Hit your coverage goals without boxing people into pre-defined work that makes fine-tuning easy.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box textAlign="center">
                        <Avatar className={classes.curcleStyle}>3</Avatar>
                        <Box sx={{ padding: '0 50px' }}>
                            <Box
                                component="img"
                                sx={{
                                    padding: '32px 32px 32px'
                                }}
                                alt="The house from the offer."
                                src="https://thepixelcurve.com/html/xipper/assets/img/icon/1.png"
                            />
                            <Typography variant="h4" className={classes.TitleSupStyle}>
                                Get Notify
                            </Typography>
                            <Typography variant="p" className={classes.parStyle}>
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
