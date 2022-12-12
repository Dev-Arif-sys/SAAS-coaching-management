import HomeLayout from 'layout/HomeLayout.js/Index';
import Footer from 'pages/shared/footer/Footer';
import Banner from './Banner/Banner';
import NavBar from './NavBar/index';
import Pricing from './pricing/index';

const Home = () => {
    return (
        <>
            <HomeLayout>
                <NavBar />
            </HomeLayout>
            <Banner />
            <HomeLayout>
                <Pricing />
                <Footer />
            </HomeLayout>
        </>
    );
};

export default Home;
