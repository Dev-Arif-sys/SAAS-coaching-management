import { Box } from '@mui/material';
import HomeLayout from 'layout/HomeLayout.js/Index';

import Footer from 'pages/shared/footer/Footer';

import Banner from './Banner/Banner';
import NavBar from './NavBar/index';
import IdealogySection from './idealogy/index';
import Power from './power/index';

import Pricing from './pricing/index';
import Testimonial from './testimonial/index';
import DoesItWorks from './DoesItWorks/DoesItWorks';

const Home = () => {
    return (
        <>
            <HomeLayout>
                <NavBar />
            </HomeLayout>
            <Banner />
            <HomeLayout>
                <IdealogySection />
                <Power />
                <DoesItWorks />
                <Box
                    sx={{
                        overflowX: 'hidden'
                    }}
                >
                    <Pricing />
                </Box>

                <Testimonial />

                <Footer />
            </HomeLayout>
        </>
    );
};

export default Home;
