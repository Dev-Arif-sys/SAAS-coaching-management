import { Box } from '../../../node_modules/@mui/material/index';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = ({ children }) => {
    return <Box sx={{ width: '1280px', maxWidth: '90%', margin: '0 auto' }}>{children}</Box>;
};

export default HomeLayout;
