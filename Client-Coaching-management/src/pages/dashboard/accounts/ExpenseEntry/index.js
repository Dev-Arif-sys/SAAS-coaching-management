import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import AddExpense from './AddExpense';
import Heading from './Heading';

const ExpenseEntry = () => {
    const theme = useTheme();
    return (
        <div>
            <Heading />
            <AddExpense />
        </div>
    );
};

export default ExpenseEntry;
