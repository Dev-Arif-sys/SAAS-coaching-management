import { Box } from '@mui/material';
import HomeLayout from 'layout/HomeLayout.js/Index';

import Footer from 'pages/shared/footer/Footer';
import NavBar from './NavBar/NavBar';

import IdealogySection from './idealogy/index';
import Power from './power/index';

import Pricing from './pricing/index';
import Testimonial from './testimonial/index';

const Home = () => {
    return (
        <HomeLayout>
            <Box
                sx={{
                    overflowX: 'hidden'
                }}
            >
                <NavBar />
                <Pricing />
                <Testimonial />
                <Footer />

                <NavBar />
                <Pricing />

                <IdealogySection />
                <Power />

                <Testimonial />
                <Footer />
            </Box>
        </HomeLayout>
    );
};

export default Home;
