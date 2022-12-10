import { Button, Stack, styled, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/system';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiEdit } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaPortrait } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '50px',
    // border:'1px',
    // borderStyle:'solid',
    // borderColor:COLORS.darkgray,
    boxShadow: 'red',
    padding: '25px 70px',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
        padding: '8px 20px'
    },
    [theme.breakpoints.up('md')]: {
        padding: '8px 20px'
    },
    [theme.breakpoints.up('lg')]: {
        padding: '25px 70px'
    }
}));

const btnStyle = {
    backgroundColor: 'red',
    color: '#fff',
    fontSize: { xs: '5px', sm: '8px', md: '12px' },
    boxShadow: '0px 14px 22px rgb(42 135 158 / 14%)',
    letterSpacing: '1px',
    borderRadius: '4px',

    p: { xs: '7px 12px ', sm: '7px 12px ', md: '10px 24px ' },
    mt: { xs: 0, sm: 0, md: 3 },
    mb: { xs: 4, sm: 4, md: 15 },
    transition: 'transform .5s ease',
    '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: 'red',
        color: '#fff'
    }
};
const ContactForm = () => {
    const { control, handleSubmit, register, reset } = useForm();
    const [submit, setSubmit] = useState();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const onSubmit = (data) => {
        const newData = {
            ...data,
            user: {
                name: user,
                email: email
            },
            regType: 'ContactForm'
        };
        console.log(newData);
        // axios
        //   .post('https://api.qawmiuniversity.com/registration', newData)
        //   .then((response) => {
        //     toast.success('Success Contact !');

        //     setSubmit(response.data);
        //     if (response.data._id) {
        //       toast.success('Success Contact !');
        //       reset();
        //     }
        //   })
        //   .catch((error) => {});
    };
    return (
        <StyledBox>
            <Box sx={{ marginBottom: 2 }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: {
                            xs: SIZES.large,
                            sm: SIZES.large,
                            lg: SIZES.MediumLarge
                        },
                        fontWeight: 'bold',
                        color: COLORS.Black
                    }}
                    component="div"
                    className="hind"
                    fontFamily={FAMILY.hind}
                >
                    Drop Us A Line
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: SIZES.small,
                        color: COLORS.darkgray,
                        fontWeight: '600'
                    }}
                    fontFamily={FAMILY.inter}
                    gutterBottom
                >
                    Your email will not be published anywhere.
                </Typography>
            </Box>

            {/* 1st row of contact form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={2}>
                        <TextField
                            id="email"
                            label="Enter Your Email"
                            variant="outlined"
                            fullWidth
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            type="email"
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <HiOutlineMail color={COLORS.primary} fontSize={SIZES.medium} />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            id="name"
                            label="Enter Your Name"
                            variant="outlined"
                            onChange={(event) => {
                                setUser(event.target.value);
                            }}
                            required
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <BsPerson color={COLORS.primary} fontSize={SIZES.medium} />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Stack>

                    {/* 2nd row of contact form */}
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={2} mt={2}>
                        <TextField
                            id="email"
                            label="Enter Subject"
                            variant="outlined"
                            {...register('subject', { required: true })}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FaPortrait color={COLORS.primary} fontSize={SIZES.medium} />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Stack>

                    <TextField
                        placeholder="Write your message"
                        multiline
                        {...register('description', { required: true })}
                        minRows={7}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" sx={{ marginTop: '-140px' }}>
                                    <BiEdit color={COLORS.primary} fontSize={SIZES.medium} />
                                </InputAdornment>
                            )
                        }}
                        fullWidth
                        sx={{ marginY: '16px' }}
                    />

                    <Button
                        type="submit"
                        sx={{
                            ...btnStyle,
                            fontSize: {
                                xs: '15px',
                                sm: '15px'
                            }
                        }}
                    >
                        Post a comment
                    </Button>
                </Box>
            </form>
        </StyledBox>
    );
};

export default ContactForm;
