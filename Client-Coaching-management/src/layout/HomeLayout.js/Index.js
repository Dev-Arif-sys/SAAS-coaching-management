import { Box } from '../../../node_modules/@mui/material/index';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = ({ children }) => {
    return <Box sx={{ width: '1180px', maxWidth: '99%', margin: '0 auto' }}>{children}</Box>;
};

export default HomeLayout;
