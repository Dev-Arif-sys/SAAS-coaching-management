import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';

import DueOverviewDetails from './DueOverviewDetails';

const disItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        display: 'black'
    }
}));
const DueOverviewSearchBarOption = () => {
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

                <disItemWrapper>
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
                </disItemWrapper>

                {show ? (
                    <>
                        {/* {' '}
                    <ExamDetails data={[classes, batch, year]} />
                    <hr />
                    <SearchStudentsData data={[classes, batch, year]} />{' '} */}
                        <DueOverviewDetails data={[fromDate, toDate]}></DueOverviewDetails>
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default DueOverviewSearchBarOption;
