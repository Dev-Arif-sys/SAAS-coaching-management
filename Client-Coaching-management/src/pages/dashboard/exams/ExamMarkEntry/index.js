import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';

import SearchStudents from './SearchStudents';
const ExamMarkEntry = () => {
    const theme = useTheme();
    return (
        <div>
            <Heading title="Exams Mark Entry" />
            <ContentContainer>
                <SearchStudents />
            </ContentContainer>
        </div>
    );
};

export default ExamMarkEntry;
