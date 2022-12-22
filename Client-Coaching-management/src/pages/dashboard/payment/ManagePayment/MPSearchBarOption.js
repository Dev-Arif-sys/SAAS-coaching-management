import CustomTextField from 'components/ui/CustomTextField';

import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';

import { HiSearch } from 'react-icons/hi';
import { styled } from '@mui/material/styles';

import MPDetails from './MPDetails';

import CustomHeading from 'components/ui/CustomHeading';

const MPSearchBarOption = () => {
    const theme = useTheme();

    const [addPay, setAddPay] = useState('');

    const [show, setShow] = useState(false);

    const searchHandle = (e) => {
        e.preventDefault();
        console.log('ravi');
        setShow(true);
    };

    return (
        <Box>
            <Box
                sx={{
                    p: '50px'
                }}
            >
                <div>
                    <CustomHeading>search student</CustomHeading>
                    <form onSubmit={searchHandle}>
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField size="small" onChange={(e) => setAddPay(e.target.value)} />
                            </Grid>

                            <Grid item xs={6} sm={6} md={3}>
                                <Button
                                    type="submit"
                                    size="small"
                                    variant="contained"
                                    sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}
                                >
                                    <HiSearch style={{ fontSize: '26px' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>

                {show ? (
                    <>
                        <MPDetails data={[addPay, addPay]}></MPDetails>
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default MPSearchBarOption;
