import { Box } from '@mui/material';
import DoesItWorks from './DoesItWorks/DoesItWorks';
import Heading from './Heading';
import PricingCards from './PricingCards';
const Pricing = () => {
    return (
        <Box>
            <Heading />
            <PricingCards />
            <DoesItWorks />
        </Box>
    );
};

export default Pricing;
