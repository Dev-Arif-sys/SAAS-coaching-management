import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomSelect from 'components/ui/CustomSelect';
import CustomTextField from 'components/ui/CustomTextField';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import CustomUpdateButton from 'components/ui/CustomUpdateButton';

const DisItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        display: 'black'
    }
}));

const classData = [
    {
        label: 'Admin',
        value: 'Admin'
    },
    {
        label: 'User',
        value: 'User'
    }
];
const UserInformation = () => {
    const theme = useTheme();
    const [classes, setClasses] = useState('');

    const searchHandle = () => {
        console.log('ravi');
    };
    return (
        <Box>
            <Box
                sx={{
                    p: '50px',
                    maxWidth: '500px'
                }}
            >
                <CustomTextField label="Name *" size="small" />
                <CustomTextField label="Email *" size="small" />
                <CustomSelect
                    // style={{ marginRight: '10px' }}
                    options={classData}
                    label="User Type "
                    required={true}
                    onChange={(e) => setClasses(e.target.value)}
                />
                <CustomTextField label="Password *" size="small" />
                <CustomTextField label="RE-Enter Password *" size="small" style={{ marginbottom: '10px' }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',

                        justifyContent: 'space-evenly'
                    }}
                >
                    <CustomUpdateButton handle={searchHandle} buttonText="Update" textcolor={theme.palette.text.heading} />
                    <CustomUpdateButton handle={searchHandle} buttonText="cancel" />
                </Box>
            </Box>
        </Box>
    );
};

export default UserInformation;
