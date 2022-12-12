import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
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
    boxShadow: theme.customShadows.z1,
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
    const theme = useTheme();
    return (
        <Box mt={4}>
            <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} justifyContent="space-between" spacing={2}>
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
                    <StyledBox>
                        <GoMailRead style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
                        <Box ml={2}>
                            <Typography variant="body1">Mail Address</Typography>
                            <Typography variant="body2">support@qawmiuniversity.com</Typography>
                        </Box>
                    </StyledBox>
                </Link>

                <StyledBox>
                    <MdOutlineLocationOn style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
                    <Box ml={2}>
                        <Typography variant="body1">Office Address</Typography>
                        <Typography variant="body2">6206,Motihar,Rajshahi</Typography>
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
                    <StyledBox>
                        <FiPhoneCall style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
                        <Box ml={2}>
                            <Typography variant="body1">Phone Number</Typography>
                            <Typography variant="body2">+8801970560470</Typography>
                        </Box>
                    </StyledBox>
                </Link>
            </Stack>
        </Box>
    );
};

export default Address;
