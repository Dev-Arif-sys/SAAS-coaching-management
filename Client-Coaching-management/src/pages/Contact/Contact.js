import React from 'react';
import { Box } from '../../../node_modules/@mui/material/index';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Box className="home-container">
                <Address></Address>
                <ContactForm />
            </Box>
        </Box>
    );
};

export default Contact;
