import HomeLayout from 'layout/HomeLayout.js/Index';

import Footer from 'pages/shared/footer/Footer';
import NavBar from './NavBar/index';

import IdealogySection from './idealogy/index';
import Power from './power/index';

import Pricing from './pricing/index';

const Home = () => {
    return (
        <HomeLayout>
            <NavBar />
            <Pricing />

     

            <IdealogySection />
            <Power />
       <Footer />
        </HomeLayout>
    );
};

export default Home;
