import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';
import CustomTextField from 'components/ui/CustomTextField';
import CustomHeading from 'components/ui/CustomHeading';
import { HiSearch } from 'react-icons/hi';
const AddExpense = () => {
    const theme = useTheme();
    const [issue, setIssue] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const searchHandle = (e) => {
        e.preventDefault();
        console.log('ravi');
    };

    return (
        <Box>
            <Box
                sx={{
                    p: '50px'
                }}
            >
                <div>
                    <CustomHeading>Add Expense Data</CustomHeading>
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
                                <CustomTextField
                                    label="Expense Issue"
                                    size="small"
                                    lablegaping={'10px 0px'}
                                    style={{
                                        width: '250px'
                                    }}
                                    required={true}
                                    onChange={(e) => setIssue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="Quantity"
                                    size="small"
                                    lablegaping={'10px 0px'}
                                    style={{
                                        width: '250px'
                                    }}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="Expense Amount"
                                    size="small"
                                    lablegaping={'10px 0px'}
                                    style={{
                                        width: '250px'
                                    }}
                                    required={true}
                                    onChange={(e) => setAmount(e.target.value)}
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
            </Box>
        </Box>
    );
};

export default AddExpense;
