import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import ExamData from './ExamData';
import { HiSearch } from 'react-icons/hi';
import CustomHeading from 'components/ui/CustomHeading';
const status = [
    {
        value: '',
        label: 'Select'
    },
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: '11',
        label: '11'
    },
    {
        value: 'play',
        label: 'Play'
    },
    {
        value: 'Nursery',
        label: 'Nursery'
    },
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '4',
        label: '4'
    },
    {
        value: '5',
        label: '5'
    }
];

const SearchExams = () => {
    const theme = useTheme();
    const [classes, setClasses] = useState('');
    const [batch, setBatch] = useState('');
    const [year, setYear] = useState('');
    const [show, setShow] = useState(false);

    const searchHandle = (e) => {
        e.preventDefault();
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
                {/* <Typography variant="h2" Typography color={theme.palette.text.heading} mb={2}>
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
                </Box> */}

                <div>
                    <CustomHeading>search student</CustomHeading>
                    <form onSubmit={searchHandle}>
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomSelect
                                    options={status}
                                    id="standard-select-currency"
                                    size="small"
                                    select
                                    label="Class"
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomSelect
                                    options={status}
                                    id="standard-select-currency"
                                    size="small"
                                    select
                                    label="Batch"
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomSelect
                                    options={status}
                                    id="standard-select-currency"
                                    size="small"
                                    select
                                    label="Year"
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <Button
                                    type="submit"
                                    size="small"
                                    variant="contained"
                                    sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}
                                >
                                    <HiSearch style={{ fontSize: '26px' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>

                {show ? (
                    <>
                        <ExamData data={[classes, batch, year]} />{' '}
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default SearchExams;
