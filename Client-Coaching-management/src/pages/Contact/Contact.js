import { Box } from '@mui/material';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Box container maxWidth="lg" sx={{ mx: 'auto' }}>
            <Address />

            <ContactForm />
        </Box>
    );
};

export default Contact;
