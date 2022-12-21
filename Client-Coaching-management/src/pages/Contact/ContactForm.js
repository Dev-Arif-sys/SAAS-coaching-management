import { Button, Stack, styled, TextField, Typography, useTheme } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/system';
import CustomUpdateButton from 'components/ui/CustomUpdateButton';

import React, { useState } from 'react';

import { BiEdit } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaPortrait } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '50px',
    boxShadow: theme.customShadows.z1,

    padding: '25px 70px',
    borderRadius: '5px'
}));

const ContactForm = () => {
    const [submit, setSubmit] = useState();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const theme = useTheme();
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
                <Typography variant="h3">Drop Us A Line</Typography>
                <Typography variant="body1">Your email will not be published anywhere.</Typography>
            </Box>

            {/* 1st row of contact form */}
            <form>
                <Box>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={2}>
                        <TextField
                            id="email"
                            label="Enter Your Email"
                            fullWidth
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            type="email"
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <HiOutlineMail style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            id="name"
                            label="Enter Your Name"
                            onChange={(event) => {
                                setUser(event.target.value);
                            }}
                            required
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <BsPerson style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
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
                            // {...register('subject', { required: true })}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FaPortrait style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Stack>

                    <TextField
                        placeholder="Write your message"
                        multiline
                        // {...register('description', { required: true })}
                        minRows={7}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" sx={{ marginTop: '-140px' }}>
                                    <BiEdit style={{ fontSize: ' 23px', color: theme.palette.text.heading }} />
                                </InputAdornment>
                            )
                        }}
                        fullWidth
                        sx={{ marginY: '16px' }}
                    />

                    <CustomUpdateButton type="submit" handle={onSubmit} buttonText="Send" />
                </Box>
            </form>
        </StyledBox>
    );
};

export default ContactForm;
