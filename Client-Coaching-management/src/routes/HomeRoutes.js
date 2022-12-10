import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

// render - login
const Home = Loadable(lazy(() => import('pages/home/index')));
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    element: <Home />
};

export default HomeRoutes;
