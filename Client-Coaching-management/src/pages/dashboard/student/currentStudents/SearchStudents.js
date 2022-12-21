import { Button, Grid } from '@mui/material';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import { HiSearch } from 'react-icons/hi';
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
    return (
        <div>
            <CustomHeading>search student</CustomHeading>
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
