import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import SearchStudentsData from './SearchStudentsData';
import ExamDetails from './ExamDetails';

const classData = [
    {
        label: 'Class 1',
        value: '1'
    },
    {
        label: 'Class 2',
        value: '2'
    },
    {
        label: 'Class 3',
        value: '3'
    },
    {
        label: 'Class 4',
        value: '4'
    },
    {
        label: 'Class 5',
        value: '5'
    },
    {
        label: 'Class 6',
        value: '6'
    },
    {
        label: 'Class 7',
        value: '7'
    },
    {
        label: 'Class 8',
        value: '8'
    },
    {
        label: 'Class 9',
        value: '9'
    },
    {
        label: 'Class 10',
        value: '10'
    },
    {
        label: 'Class 11',
        value: '11'
    },
    {
        label: 'Class 12',
        value: '12'
    }
];
const batchData = [
    {
        label: 'Batch A',
        value: 'A'
    },
    {
        label: 'Batch B',
        value: 'B'
    },
    {
        label: 'Batch C',
        value: 'C'
    },
    {
        label: 'Batch D',
        value: 'D'
    },
    {
        label: 'Batch E',
        value: 'E'
    },
    {
        label: 'Batch F',
        value: 'F'
    },
    {
        label: 'Batch G',
        value: 'G'
    },
    {
        label: 'Batch H',
        value: 'H'
    }
];
const yearData = [
    {
        label: '2017',
        value: '201'
    },
    {
        label: '2018',
        value: '2018'
    },
    {
        label: '2019',
        value: '2019'
    },
    {
        label: '2020',
        value: '2020'
    },
    {
        label: '2021',
        value: '2021'
    },
    {
        label: '2022',
        value: '2022'
    },
    {
        label: '2023',
        value: '2023'
    },
    {
        label: '2024',
        value: '2024'
    },
    {
        label: '2025',
        value: '2025'
    },
    {
        label: '2026',
        value: '2026'
    }
];

const SearchStudents = () => {
    const theme = useTheme();
    const [classes, setClasses] = useState('');
    const [batch, setBatch] = useState('');
    const [year, setYear] = useState('');
    const [show, setShow] = useState(false);

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
                <Typography variant="h2" Typography color={theme.palette.text.heading} mb={2}>
                    Search Students
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'end'
                    }}
                    // alignItems='center'
                >
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={classData}
                        label="Class"
                        required={true}
                        onChange={(e) => setClasses(e.target.value)}
                    />
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={batchData}
                        label="Batch"
                        required={true}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={yearData}
                        label="Year"
                        required={true}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <CustomSearchButton handle={searchHandle} />
                </Box>

                {show ? (
                    <>
                        {' '}
                        <ExamDetails data={[classes, batch, year]} />
                        <hr />
                        <SearchStudentsData data={[classes, batch, year]} />{' '}
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default SearchStudents;
