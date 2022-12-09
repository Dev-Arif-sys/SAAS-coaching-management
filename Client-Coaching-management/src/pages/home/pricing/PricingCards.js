import { Grid } from '@mui/material';
import PricingCard from './PricingCard';

// cards information
const cardsInfo = [
    {
        name: 'Free',
        price: 10,
        tags: ['Unlimited Pages', 'All Team Members', 'Unlimited Leads', 'Unlimited Page Views', 'Export in HTML/CSS']
    },
    {
        name: 'Business',
        price: 20,
        tags: ['Unlimited Pages', 'All Team Members', 'Unlimited Leads', 'Unlimited Page Views', 'Export in HTML/CSS']
    },
    {
        name: 'Professional',
        price: 40,
        tags: ['Unlimited Pages', 'All Team Members', 'Unlimited Leads', 'Unlimited Page Views', 'Export in HTML/CSS']
    }
];
const PricingCards = () => {
    const content = cardsInfo.map((card) => (
        <Grid item xs={4} sm={4} md={4} lg={4} key={card.name}>
            <PricingCard card={card} />
        </Grid>
    ));
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {content}
        </Grid>
    );
};

export default PricingCards;
