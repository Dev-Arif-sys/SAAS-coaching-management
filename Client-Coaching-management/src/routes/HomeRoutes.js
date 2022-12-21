import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

// render - login
const Home = Loadable(lazy(() => import('pages/home/index')));
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const Contact = Loadable(lazy(() => import('pages/Contact/Contact')));
const About = Loadable(lazy(() => import('pages/About/About')));

// ==============================|| AUTH ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
        {
            path: 'contact',
            element: <Contact />
        },
        {
            path: 'about',
            element: <About />
        }
    ]
};

export default HomeRoutes;
