import { useRoutes } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, LoginRoutes, HomeRoutes]);
}
