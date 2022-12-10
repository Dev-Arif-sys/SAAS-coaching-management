import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import DoesItWorks from 'components/DoesItWorks/DoesItWorks';
import Contact from 'pages/Contact/Contact';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'doesItWorks',
            element: <DoesItWorks />
        },
        {
            path: 'contact',
            element: <Contact />
        }
    ]
};

export default LoginRoutes;
