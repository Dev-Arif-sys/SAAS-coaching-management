import { Box } from '../../../node_modules/@mui/material/index';
import AboutAndDetails from './AboutAndDetails';
import AboutTopBar from './AboutTopbar';

const About = () => {
    return (
        <>
            <Box container maxWidth="lg" sx={{ mx: 'auto' }}>
                <AboutAndDetails></AboutAndDetails>

                <AboutTopBar></AboutTopBar>
            </Box>
        </>
    );
};

export default About;
