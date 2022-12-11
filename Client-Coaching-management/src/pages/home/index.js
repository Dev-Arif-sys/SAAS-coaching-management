import HomeLayout from 'layout/HomeLayout.js/Index';
import IdealogySection from './idealogy/index';
import Power from './power/index';
import Pricing from './pricing/index';

const Home = () => {
    return (
        <HomeLayout>
            <Pricing />
            <IdealogySection />
            <Power />
        </HomeLayout>
    );
};

export default Home;
