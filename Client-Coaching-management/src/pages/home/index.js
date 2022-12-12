import HomeLayout from 'layout/HomeLayout.js/Index';
import Pricing from './pricing/index';
import Testimonial from './testimonial/index';

const Home = () => {
    return (
        <HomeLayout>
            <Pricing />
            <Testimonial />
        </HomeLayout>
    );
};

export default Home;
