import React from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import Heading from './Heading';
import SearchExpense from './SearchExpense';
const ExpenseDetails = () => {
    return (
        <div>
            <Heading />
            <SearchExpense />
        </div>
    );
};

export default ExpenseDetails;
