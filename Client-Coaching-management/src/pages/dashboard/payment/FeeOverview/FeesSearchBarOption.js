import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';

import FeesOverviewDetails from './FeesOverviewDetails';

const DisItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const FeesSearchBarOption = () => {
    const theme = useTheme();

    const [fromDate, setfromDate] = useState('');
    const [toDate, setToDate] = useState('');
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
                    Student Payment Due
                </Typography>

                <DisItemWrapper>
                    <DatePicker
                        style={{ marginRight: '10px' }}
                        label="From Date "
                        required={true}
                        onChange={(e) => setfromDate(e.target.value)}
                    />
                    <DatePicker
                        style={{ marginRight: '10px' }}
                        label="To Date "
                        required={true}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                    <CustomSearchButton handle={searchHandle} />
                </DisItemWrapper>

                {show ? (
                    <>
                        {/* {' '}
                    <ExamDetails data={[classes, batch, year]} />
                    <hr />
                    <SearchStudentsData data={[classes, batch, year]} />{' '} */}
                        <FeesOverviewDetails data={[fromDate, toDate]}></FeesOverviewDetails>
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default FeesSearchBarOption;