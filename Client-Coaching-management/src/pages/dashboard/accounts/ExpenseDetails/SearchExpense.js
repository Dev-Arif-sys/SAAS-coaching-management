import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';
import { HiSearch } from 'react-icons/hi';

import CustomHeading from 'components/ui/CustomHeading';
import ExpenseData from './ExpenseData';

const SearchExpense = () => {
    const theme = useTheme();

    const [fromDate, setfromDate] = useState('');
    const [toDate, setToDate] = useState('');
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
                                <DatePicker
                                    style={{ marginRight: '10px' }}
                                    label="From Date "
                                    required={true}
                                    onChange={(e) => setfromDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <DatePicker
                                    style={{ marginRight: '10px' }}
                                    label="To Date "
                                    required={true}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
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
                        {/* {' '}
                    <ExamDetails data={[classes, batch, year]} />
                    <hr />
                    <SearchStudentsData data={[classes, batch, year]} />{' '} */}
                        <ExpenseData data={[fromDate, toDate]} />
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default SearchExpense;
