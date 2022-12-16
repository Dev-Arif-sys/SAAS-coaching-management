import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';
import CustomTextField from 'components/ui/CustomTextField';
import ExamDetails from 'pages/dashboard/exams/ExamMarkEntry/ExamDetails';
import SearchStudentsData from 'pages/dashboard/exams/ExamMarkEntry/SearchStudentsData';
import ExpenseData from './ExpenseData';

const SearchExpense = () => {
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
                <Box
                    sx={{
                        background: theme.palette.text.heading,
                        mb: '10px',
                        p: '3px'
                    }}
                >
                    <Typography variant="h2" color={'white'}>
                        Search Expense Data
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'end'
                    }}
                >
                    <DatePicker
                        label={'Expense Date'}
                        required={true}
                        // style={{
                        //     width: '250px'
                        // }}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <DatePicker
                        label={'Expense Date'}
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
                        <ExpenseData data={[fromDate, toDate]} />{' '}
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default SearchExpense;
