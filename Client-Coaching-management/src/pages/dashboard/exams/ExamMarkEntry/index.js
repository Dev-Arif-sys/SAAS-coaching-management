import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import Heading from './Heading';
import SearchStudents from './SearchStudents';
const ExamMarkEntry = () => {
    const theme = useTheme();
    return (
        <div>
            <Heading />
            <SearchStudents />
        </div>
    );
};

export default ExamMarkEntry;
