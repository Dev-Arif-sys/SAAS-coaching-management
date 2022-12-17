import React from 'react';
import { Grid, Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlayCircleOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CardMedia from '@mui/material/CardMedia';

const BannerContainerStyle = styled('section')(({ theme }) => ({
    backgroundImage:
        'url("https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/icons/banner-shape-1.jpg")',
    position: 'relative',

    backgroundColor: '#320fa1',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden'
}));
const BannerPadding = {
    padding: {
        md: '185px 0 0px',
        sm: '145px 0 0px',
        xs: '130px 0 0px'
    }
};
const LayerOuter = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: '0',
    top: '0',
    bottom: '-70px',
    width: '50%'
}));
const LayerImage = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '0',
    top: '100px',
    width: '1057px',
    height: '958px',
    backgroundImage: 'url(https://f.hubspotusercontent30.net/hubfs/20093980/saasweb/big-shape-10.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    display: 'initial'
}));
const AutoContainer = styled('div')(({ theme }) => ({
    position: 'static',
    maxWidth: '90%',
    width: '1280px',
    margin: '0 auto'
}));
const H1 = styled('h1')(({ theme }) => ({
    color: 'white',
    marginBottom: '28px',
    fontSize: '45px',
    lineHeight: '58px'
}));
const PlayIcon = {
    padding: '40px',
    textAlign: 'center',
    fontSize: '24px',
    color: '#fff',
    backgroundColor: '#e654bd',
    boxShadow: '0px 11px 21.25px 3.75px rgb(45 5 156 / 65%)',
    borderRadius: '50%'
};
const Lay = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: '10px',
    textDecoration: 'underline',
    color: 'white',
    marginTop: '38px'
}));
const Small = styled('small')(({ theme }) => ({
    color: theme.palette.common.white
}));

const mystery = {
    display: {
        md: 'block',
        sm: 'none',
        xs: 'none'
    }
};
const mysteryActive = {
    display: {
        md: 'none',
        sm: 'block',
        xs: 'block'
    }
};

const CardImage = {
    zIndex: '500',
    position: 'absolute',
    width: '470px',
    ...mystery
};
const CardImageMobile = {
    width: '70%',
    ...mysteryActive
};
const Banner = () => {
    const theme = useTheme();
    return (
        <BannerContainerStyle sx={{ ...BannerPadding }}>
            <LayerOuter sx={{ ...mystery }}>
                <LayerImage></LayerImage>
            </LayerOuter>
            <AutoContainer>
                <Grid container spacing={2} rowSpacing={8} sx={{ pb: { xs: 8, sm: 20 } }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <H1>
                            Intelligent Business <br />
                            Startup makes <br />
                            Life Easier
                        </H1>
                        <Small>
                            The most flexible way of combine practice and analyzing startup projects to maximize its effectiveness.
                        </Small>
                        <Lay>
                            <IconButton style={{ ...PlayIcon }} aria-label="play">
                                <PlayCircleOutlined />
                            </IconButton>
                            <Small>
                                <strong>Watch the video</strong>
                            </Small>
                        </Lay>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <Box
                                    sx={{ display: 'flex', justifyContent: { md: 'end', sm: 'start', xs: 'start' } }}
                                    className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/resource/illustration-5.png"
                                        alt="green iguana"
                                        sx={{ ...CardImage }}
                                    />
                                    <CardMedia
                                        component="img"
                                        image="https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/resource/illustration-5.png"
                                        alt="green iguana"
                                        sx={{ ...CardImageMobile }}
                                    />
                                </Box>
                            )}
                        </TrackVisibility>
                    </Grid>
                </Grid>
            </AutoContainer>
        </BannerContainerStyle>
    );
};

export default Banner;
