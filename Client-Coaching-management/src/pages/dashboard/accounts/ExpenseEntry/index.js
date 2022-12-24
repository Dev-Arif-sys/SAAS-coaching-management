import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import AddExpense from './AddExpense';

const ExpenseEntry = () => {
    const theme = useTheme();
    return (
        <div>
            <Heading title="Expense Entry" />
            <ContentContainer>
                <AddExpense />
            </ContentContainer>
        </div>
    );
};

export default ExpenseEntry;
