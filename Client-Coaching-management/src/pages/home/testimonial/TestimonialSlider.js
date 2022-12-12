import { Box, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TestimonialCard from './TestimonialCard';

const StyledArrow = styled('button')(({ theme }) => ({
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    background: theme.palette.common.white
}));

const TestimonialSlider = () => {
    const sliderRef = useRef(null);
    const theme = useTheme();
    const responsiveOptions = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Box>
                <Slider
                    dots
                    dotsClass="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={2}
                    infinite
                    speed={500}
                    autoplay
                    autoplaySpeed={2500}
                    slidesToScroll={1}
                    {...responsiveOptions}
                    customPaging={(i) => (
                        <div
                            style={{
                                position: 'absolute',
                                width: '100%',
                                top: '-10px',
                                opacity: 0
                            }}
                        >
                            {i}
                        </div>
                    )}
                >
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Slider>
            </Box>

            <Stack direction="row" justifyContent="center" mt={{ md: 2, xs: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <StyledArrow className="buttons" onClick={() => sliderRef.current.slickPrev()}>
                        <BsFillArrowLeftCircleFill
                            style={{
                                fontSize: '25px',
                                color: theme.palette.text.primary
                            }}
                        />
                    </StyledArrow>
                    <StyledArrow className="buttons" onClick={() => sliderRef.current.slickNext()}>
                        <BsFillArrowRightCircleFill
                            style={{
                                fontSize: '25px',
                                color: theme.palette.text.primary
                            }}
                        />
                    </StyledArrow>
                </Box>
            </Stack>
        </>
    );
};

export default TestimonialSlider;
