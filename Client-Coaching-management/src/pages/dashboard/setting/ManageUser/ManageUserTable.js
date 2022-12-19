import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';

import ManageUserTableItem from './ManageUserTableItem';

// const DisItemWrapper = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'end',
//     [theme.breakpoints.down('md')]: {
//         display: 'black'
//     }
// }));
const ManageUserTable = () => {
    const theme = useTheme();

    return (
        <Box>
            <Box
                sx={{
                    p: '50px'
                }}
            >
                <Typography variant="h2" Typography color={theme.palette.text.heading} mb={2}>
                    Manage User
                </Typography>

                <>
                    {/* {' '}
                    <ExamDetails data={[classes, batch, year]} />
                    <hr />
                {' '} */}
                    <ManageUserTableItem></ManageUserTableItem>
                </>
            </Box>
        </Box>
    );
};

export default ManageUserTable;
