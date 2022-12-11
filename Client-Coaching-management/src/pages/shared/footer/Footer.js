import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LogoSection from 'components/Logo/index';
import { TwitterCircleFilled } from '@ant-design/icons';

const ListTag = styled('p')(({ theme }) => ({
    textAlign: 'left'
}));

const UlStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    marginTop: '14px'
}));
const iconStyle = {
    fontSize: '23px',
    padding: '8px',
    border: '2px solid',
    borderRadius: '50%'
    // color: 'black'
};
const caption = {
    fontWeight: 600,
    paddingTop: 0,
    marginTop: 0
};

const Footer = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <Grid container spacing={3} columns={25}>
                <Grid item xs={6} md={8} lg={10}>
                    <LogoSection />
                    <Typography sx={{ marginTop: '25px' }}>
                        Ut et quam ut odio viverra cursus a id purus. <br /> Donec pretium neque sapien, id eleifend est <br /> suscipit
                        non. Ut in nunc molestie, dictum velit id, <br /> laoreet libero.
                    </Typography>
                    <UlStyled>
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                        <TwitterCircleFilled style={{ ...iconStyle }} />
                    </UlStyled>
                </Grid>
                <Grid item xs={6} md={4} lg={5}>
                    <ListTag sx={{ ...caption }}>Services</ListTag>
                    <ListTag>UI/Ux Design</ListTag>
                    <ListTag>Web Development</ListTag>
                    <ListTag>App Development</ListTag>
                    <ListTag>Digital Marketing</ListTag>
                </Grid>
                <Grid item xs={6} md={4} lg={5}>
                    <ListTag sx={{ ...caption }}>Links</ListTag>
                    <ListTag>UI/Ux Design</ListTag>
                    <ListTag>Web Development</ListTag>
                    <ListTag>App Development</ListTag>
                    <ListTag>Digital Marketing</ListTag>
                </Grid>
                <Grid item xs={6} md={8} lg={5}>
                    <ListTag sx={{ ...caption }}>Keep in touch</ListTag>
                    <ListTag>UI/Ux Design</ListTag>
                    <ListTag>Web Development</ListTag>
                    <ListTag>App Development</ListTag>
                    <ListTag>Digital Marketing</ListTag>
                </Grid>
            </Grid>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }} />
            <p style={{ textAlign: 'center', marginBottom: '25px' }}>Copyright @ 2022 All rights reserved by Bug Smasher</p>
        </div>
    );
};

export default Footer;
