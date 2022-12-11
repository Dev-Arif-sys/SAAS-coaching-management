import React from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CodeSandboxOutlined, DollarOutlined, SubnodeOutlined, IdcardOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Typography
                        variant="h1"
                        fontSize={{ xs: '40px', md: '90px' }}
                        fontWeight={900}
                        color={theme.palette.text.heading}
                        textAlign="center"
                    >
                        <CountUp end={30}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        K
                    </Typography>
                    <Typography
                        variant="h1"
                        fontWeight="400"
                        color={theme.palette.text.highlightHeading}
                        textAlign="center"
                        fontSize={'30px'}
                        mb={2}
                    >
                        Deals Done
                    </Typography>
                </Grid>
                {/* <Grid item xs={6} lg={3}>
                    <Typography
                        variant="h1"
                        fontSize={{ xs: '40px', md: '90px' }}
                        fontWeight={900}
                        color={theme.palette.text.heading}
                        textAlign="center"
                    >
                        <CountUp end={1000}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </Typography>
                    <Typography
                        variant="h1"
                        color={theme.palette.text.highlightHeading}
                        fontWeight="400"
                        textAlign="center"
                        fontSize={'30px'}
                        mb={2}
                    >
                        Deals Done
                    </Typography>
                </Grid> */}
                <Grid item xs={12} lg={4}>
                    <Typography
                        variant="h1"
                        fontSize={{ xs: '40px', md: '90px' }}
                        fontWeight={900}
                        color={theme.palette.text.heading}
                        textAlign="center"
                    >
                        <CountUp end={700}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </Typography>
                    <Typography
                        variant="h1"
                        color={theme.palette.text.highlightHeading}
                        fontWeight="400"
                        textAlign="center"
                        fontSize={'30px'}
                        mb={2}
                    >
                        Satisfied Clients
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Typography
                        variant="h1"
                        fontSize={{ xs: '40px', md: '90px' }}
                        fontWeight={900}
                        color={theme.palette.text.heading}
                        textAlign="center"
                    >
                        <CountUp end={500}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </Typography>
                    <Typography
                        variant="h1"
                        color={theme.palette.text.highlightHeading}
                        fontWeight="400"
                        textAlign="center"
                        fontSize={'30px'}
                        mb={2}
                    >
                        Awards Won
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Counter;
