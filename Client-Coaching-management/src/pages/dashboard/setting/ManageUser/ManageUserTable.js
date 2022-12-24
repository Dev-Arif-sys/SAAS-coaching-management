import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';

import ManageUserTableItem from './ManageUserTableItem';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import ContentContainer from 'components/ui/ContentContainer';

const ManageUserTable = () => {
    const theme = useTheme();

    return (
        <>
            <Heading title="Manage User" />
            <ContentContainer>
                <Box
                    sx={{
                        p: '50px'
                    }}
                >
                    <ManageUserTableItem></ManageUserTableItem>
                </Box>
            </ContentContainer>
        </>
    );
};

export default ManageUserTable;
