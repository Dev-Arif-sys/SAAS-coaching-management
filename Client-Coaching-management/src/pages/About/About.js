import React from 'react';
import { Box } from '../../../node_modules/@mui/material/index';
import AboutAndDetails from './AboutAndDetails';
import Abouttopbar from './Abouttopbar';

const About = () => {
    return (
        <>
            <Box container maxWidth="lg" sx={{ mx: 'auto' }}>
                <AboutAndDetails></AboutAndDetails>
                <Abouttopbar></Abouttopbar>
            </Box>
        </>
    );
};

export default About;
