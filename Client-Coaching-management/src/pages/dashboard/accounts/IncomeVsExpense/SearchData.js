import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';
import CustomTextField from 'components/ui/CustomTextField';
import SearchStudentsData from 'pages/dashboard/exams/ExamMarkEntry/SearchStudentsData';
import InocomeAndExpenseData from './InocomeAndExpenseData';
import CustomHeading from 'components/ui/CustomHeading';

const SearchData = () => {
    const theme = useTheme();
    const [fromDate, setFromDate] = useState('');
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
                <CustomHeading>Search Income And Expense Data</CustomHeading>

                <Box
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        alignItems: 'end',
                        mt: 3
                    }}
                >
                    <DatePicker
                        label={'From Date'}
                        required={true}
                        // style={{
                        //     width: '250px'
                        // }}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <DatePicker
                        label={'To Date'}
                        required={true}
                        // style={{
                        //     width: '250px'
                        // }}
                        onChange={(e) => setToDate(e.target.value)}
                    />

                    <CustomSearchButton handle={searchHandle} />
                </Box>
                {show ? (
                    <>
                        <InocomeAndExpenseData data={[fromDate, toDate]} />{' '}
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default SearchData;
