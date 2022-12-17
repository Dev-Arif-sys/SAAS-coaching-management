import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';

import MPDetails from './MPDetails';
import CustomTextField from 'components/ui/CustomTextField';

const disItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        display: 'black'
    }
}));
const MPSearchBarOption = () => {
    const theme = useTheme();

    const [addPay, setAddPay] = useState('');

    const [show, setShow] = useState(false);

    const searchHandle = () => {
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
                <Typography variant="h2" Typography color={theme.palette.text.heading} mb={2}>
                    Add Payment Type *
                </Typography>

                <disItemWrapper>
                    <CustomTextField size="small" onChange={(e) => setAddPay(e.target.value)} />
                    <CustomSearchButton handle={searchHandle} />
                </disItemWrapper>

                {show ? (
                    <>
                        {/* {' '}
                    <ExamDetails data={[classes, batch, year]} />
                    <hr />
                    <SearchStudentsData data={[classes, batch, year]} />{' '} */}
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
