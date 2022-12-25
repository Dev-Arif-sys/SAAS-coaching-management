import { Box, Button, Grid, useTheme } from '@mui/material';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import ExamDetails from './ExamDetails';
import SearchStudentsData from './SearchStudentsData';

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

const SearchStudents = () => {
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
            <Box>
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
