import { Button, Grid } from '@mui/material';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import { HiSearch } from 'react-icons/hi';
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
        value: '2017'
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
    return (
        <div>
            <CustomHeading>search student</CustomHeading>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                <Grid item xs={6} sm={6} md={3}>
                    <CustomSelect
                        options={classData}
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
                        options={batchData}
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
                        options={yearData}
                        id="standard-select-currency"
                        size="small"
                        select
                        label="Year"
                        // value={value}
                        // onChange={(e) => setValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Button size="small" variant="contained" sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}>
                        <HiSearch style={{ fontSize: '26px' }} />
                    </Button>
                </Grid>
            </Grid>
            <CustomHeading>Class:1 || Batch:A || Year:2022</CustomHeading>
        </div>
    );
};

export default SearchStudents;
