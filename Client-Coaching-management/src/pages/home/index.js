import HomeLayout from 'layout/HomeLayout.js/Index';
import Footer from 'pages/shared/footer/Footer';
import NavBar from './NavBar/index';
import Pricing from './pricing/index';
import Testimonial from './testimonial/index';

const Home = () => {
    return (
        <HomeLayout>
            <NavBar />
            <Pricing />
            <Testimonial />
            <Footer />
        </HomeLayout>
    );
};

export default Home;
