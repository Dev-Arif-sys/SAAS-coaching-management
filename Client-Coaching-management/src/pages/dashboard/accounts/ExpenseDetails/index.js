import React from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';

import SearchExpense from './SearchExpense';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import ContentContainer from 'components/ui/ContentContainer';
const ExpenseDetails = () => {
    return (
        <div>
            <Heading title="Expense Details" />
            <ContentContainer>
                <SearchExpense />
            </ContentContainer>
        </div>
    );
};

export default ExpenseDetails;
