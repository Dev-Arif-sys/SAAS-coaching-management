import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GoMailRead } from 'react-icons/go';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'red',
    padding: '25px 70px',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
        padding: '20px 5px'
    },
    [theme.breakpoints.up('sm')]: {
        padding: '8px 9px'
    },
    [theme.breakpoints.up('md')]: {
        padding: '8px 20px'
    },
    [theme.breakpoints.up('lg')]: {
        padding: '25px 70px'
    }
}));

const Address = () => {
    return (
        <Box mt={4}>
            <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} justifyContent="space-between" spacing={2} fontFamily={FAMILY.hind}>
                <Link
                    to="#"
                    onClick={(e) => {
                        window.location.href = 'mailto:support@qawmiuniversity.com';
                        e.preventDefault();
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                >
                    <StyledBox
                        sx={{
                            boxShadow: 'rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px'
                        }}
                    >
                        <GoMailRead color={COLORS.primary} className="address-icon" />
                        <Box ml={2}>
                            <Typography
                                fontFamily={FAMILY.hind}
                                fontWeight={FONTS.semiBold}
                                sx={{
                                    fontSize: {
                                        lg: SIZES.large,
                                        md: SIZES.medium,
                                        sm: SIZES.font,
                                        xs: SIZES.regular
                                    },
                                    textDecoration: 'none'
                                }}
                            >
                                Mail Address
                            </Typography>
                            <Typography
                                mt={-0.5}
                                color={COLORS.darkgray}
                                fontFamily={FAMILY.inter}
                                variant="subtitle2"
                                sx={{
                                    fontSize: {
                                        md: SIZES.moderateSmall,
                                        sm: SIZES.small,
                                        xs: SIZES.small
                                    },
                                    textDecoration: 'none'
                                }}
                            >
                                support@qawmiuniversity.com
                            </Typography>
                        </Box>
                    </StyledBox>
                </Link>

                <StyledBox
                    sx={{
                        boxShadow: 'rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px'
                    }}
                >
                    <MdOutlineLocationOn color={COLORS.primary} className="address-icon" />
                    <Box ml={2}>
                        <Typography
                            fontFamily={FAMILY.hind}
                            fontWeight={FONTS.semiBold}
                            sx={{
                                fontSize: {
                                    lg: SIZES.large,
                                    md: SIZES.medium,
                                    sm: SIZES.font,
                                    xs: SIZES.regular
                                }
                            }}
                        >
                            Office Address
                        </Typography>
                        <Typography
                            mt={-0.5}
                            color={COLORS.darkgray}
                            fontFamily={FAMILY.inter}
                            variant="subtitle2"
                            sx={{
                                fontSize: {
                                    md: SIZES.moderateSmall,
                                    sm: SIZES.small,
                                    xs: SIZES.small
                                }
                            }}
                        >
                            6206,Motihar,Rajshahi
                        </Typography>
                    </Box>
                </StyledBox>

                <Link
                    to="#"
                    onClick={(e) => {
                        window.location.href = 'tel:+8801970560470';
                        e.preventDefault();
                    }}
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                >
                    <StyledBox
                        sx={{
                            boxShadow: 'rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px'
                        }}
                    >
                        <FiPhoneCall color={COLORS.primary} className="address-icon" />
                        <Box ml={2}>
                            <Typography
                                fontFamily={FAMILY.hind}
                                fontSize={SIZES.large - 2}
                                fontWeight={FONTS.semiBold}
                                sx={{
                                    fontSize: {
                                        lg: SIZES.large,
                                        md: SIZES.medium,
                                        sm: SIZES.font,
                                        xs: SIZES.regular
                                    }
                                }}
                            >
                                Phone Number
                            </Typography>
                            <Typography
                                mt={-0.5}
                                color={COLORS.darkgray}
                                fontFamily={FAMILY.inter}
                                variant="subtitle2"
                                sx={{
                                    fontSize: {
                                        md: SIZES.moderateSmall,
                                        sm: SIZES.small,
                                        xs: SIZES.small
                                    }
                                }}
                            >
                                +8801970560470
                            </Typography>
                        </Box>
                    </StyledBox>
                </Link>
            </Stack>
        </Box>
    );
};

export default Address;
