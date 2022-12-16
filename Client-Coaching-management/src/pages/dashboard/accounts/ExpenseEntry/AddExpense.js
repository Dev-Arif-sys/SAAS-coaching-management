import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';
import CustomTextField from 'components/ui/CustomTextField';

const AddExpense = () => {
    const theme = useTheme();
    const [issue, setIssue] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

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
                        Add Expense Data
                    </Typography>
                </Box>

                <Box
                    sx={
                        {
                            // display: 'flex',
                            // alignItems: 'end'
                        }
                    }
                    // alignItems='center'
                >
                    <DatePicker
                        label={'Expense Date'}
                        required={true}
                        lablegaping={'10px 0px'}
                        // style={{
                        //     width: '250px'
                        // }}
                        onChange={(e) => setDate(e.target.value)}
                    />
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
                    <CustomTextField
                        label="Quantity"
                        size="small"
                        lablegaping={'10px 0px'}
                        style={{
                            width: '250px'
                        }}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
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
                    <Button sx={{ my: 2 }} target="_blank" href="" variant="contained" color="success" size="small">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AddExpense;
