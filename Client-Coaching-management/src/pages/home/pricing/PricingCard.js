import { Box, Stack, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardWrapper = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(2)}`,
    width: '380px',
    maxWidth: '95%',
    margin: '0 auto',
    borderRadius: `14px`,
    background: theme.palette.common.white,
    textAlign: 'center',
    transition: theme.transitions.create(['backgroundImage', 'transform'], {
        duration: '.5s'
    }),
    '&:hover': {
        backgroundImage: `linear-gradient(to right top, #2d6ac7, #7e5ec3, #b34caf, #d8398e, #eb3466)`,
        color: 'white',
        transform: `translateY(-3px)`,
        '& .price ': {
            color: 'white'
        },
        '&  .tag': {
            color: 'white'
        },
        '&  .priceButton': {
            background: 'white',
            color: theme.palette.text.primary
        }
    }
}));

const StyledButton = styled('button')(({ theme }) => ({
    background: ` linear-gradient(to right top, #2d6ac7, #7e5ec3, #b34caf, #d8398e, #eb3466)`,
    color: 'white',
    padding: '14px 60px',
    borderRadius: '40px',
    marginTop: '30px',
    outline: 'none',
    border: 'none',
    transition: theme.transitions.create(['transform'], {
        duration: '.2s'
    }),
    '&:hover': {
        transform: `translateY(-3px)`
    }
}));

const PricingCard = ({ card }) => {
    
    const { name, price, tags } = card || {};
    const theme = useTheme();
    
    //  rendering tag list
    const tagList = tags.map((tag) => (
        <Typography
            sx={{
                margin: '14px 0'
            }}
            variant="body1"
            key={tag}
            className="tag"
        >
            {tag}
        </Typography>
    ));
    return (
        <CardWrapper>
            <Typography variant="h3" fontWeight="400" mb={1} textAlign="center">
                {' '}
                {name}{' '}
            </Typography>
            <Stack direction="row" alignItems="flex-end" justifyContent="center">
                <Typography
                    className="price"
                    color={theme.palette.text.highlightHeading}
                    variant="h1"
                    fontWeight="800"
                    fontSize={{ lg: '52px', md: '45px', xs: '40px' }}
                >
                    ${price}{' '}
                </Typography>
                <Box>
                    <Typography variant="span" fontSize={{ lg: '32px', md: '25px', xs: '20px' }} fontWeight="600">
                        /
                    </Typography>
                    <Typography variant="span" fontSize="12px" fontWeight="600">
                        mo
                    </Typography>
                </Box>
            </Stack>
            {/* ----------pricing tags---------- */}
            <Box
                sx={{
                    marginTop: '30px'
                }}
            >
                {tagList}
            </Box>
            <StyledButton className="priceButton">Get Started</StyledButton>
        </CardWrapper>
    );
};

export default PricingCard;
