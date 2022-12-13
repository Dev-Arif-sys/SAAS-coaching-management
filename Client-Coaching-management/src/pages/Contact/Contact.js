import React from 'react';
import { Box } from '../../../node_modules/@mui/material/index';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Box container maxWidth="lg" sx={{ mx: 'auto' }}>
            <Address></Address>

            <ContactForm />
        </Box>
    );
};

export default Contact;
