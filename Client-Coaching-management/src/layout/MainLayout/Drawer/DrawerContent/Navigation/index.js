// material-ui
import { Box } from '@mui/material';

// project import
import menuItem from 'menu-items';
import NavGroup from './NavGroup';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
    const navGroups = menuItem.items.map((item) => {
        return <NavGroup key={item.id} item={item} />;
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
