import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CodeSandboxOutlined, DollarOutlined, SubnodeOutlined, IdcardOutlined } from '@ant-design/icons';
import Heading from './Heading';

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

const Idealogy = () => {
    // const { name, price, tags } = card || {};
    const theme = useTheme();

    // //  rendering tag list
    // const tagList = tags.map((tag) => (
    //     <Typography
    //         sx={{
    //             margin: '14px 0'
    //         }}
    //         variant="body1"
    //         key={tag}
    //         className="tag"
    //     >
    //         {tag}
    //     </Typography>
    // ));
    return (
        <Container>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} lg={7}>
                    <Heading />
                    <Grid container spacing={2}>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <CodeSandboxOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px',
                                        color: theme.palette.text.highlightHeading
                                    }}
                                />
                                <Typography variant="h1" fontSize={'20px'} fontWeight="600" mb={2}>
                                    Vision & Mission
                                </Typography>

                                <Typography
                                    sx={{
                                        margin: '14px 0'
                                    }}
                                    variant="body1"
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <DollarOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px',
                                        color: theme.palette.text.highlightHeading
                                    }}
                                />
                                <Typography variant="h1" fontSize={'20px'} fontWeight="600" mb={2}>
                                    Trending Items
                                </Typography>
                                <Typography
                                    sx={{
                                        margin: '14px 0'
                                    }}
                                    variant="body1"
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <SubnodeOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px',
                                        color: theme.palette.text.highlightHeading
                                    }}
                                />
                                <Typography variant="h1" fontSize={'20px'} fontWeight="600" mb={2}>
                                    Empower Startup
                                </Typography>

                                <Typography
                                    sx={{
                                        margin: '14px 0'
                                    }}
                                    variant="body1"
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Box>
                                <IdcardOutlined
                                    style={{
                                        fontSize: '50px',
                                        marginBottom: '15px',
                                        color: theme.palette.text.highlightHeading
                                    }}
                                />

                                <Typography variant="h1" fontSize={'20px'} fontWeight="600" mb={2}>
                                    Working Strategies
                                </Typography>
                                <Typography
                                    sx={{
                                        margin: '14px 0'
                                    }}
                                    variant="body1"
                                >
                                    Contetur adipisicing elit, sed do eiusm tempor incididu laboret dolore.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Box>
                        <img
                            src="https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/resource/feature-1.png"
                            alt=""
                            style={{
                                width: '100%'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Idealogy;
