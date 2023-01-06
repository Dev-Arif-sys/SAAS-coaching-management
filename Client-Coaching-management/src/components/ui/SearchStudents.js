import LoadingButton from '@mui/lab/LoadingButton';
import { Grid } from '@mui/material';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import { useGetBatchesMutation } from 'features/Student/studentapi';
import { useEffect } from 'react';
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

const SearchStudents = ({ isLoading, searchInfo, setSearchInfo, onSubmit }) => {
    const { std_batch, std_batch_year, std_class } = searchInfo || {};
    const [getBatches, { isError, isSuccess, data }] = useGetBatchesMutation();
    const { result: batches } = data || {};
    const batchOptions = batches?.map((batch) => ({ label: batch.batch, value: batch.batch }));

    useEffect(() => {
        if (std_batch_year !== '' && std_class !== '') {
            getBatches({
                std_class,
                std_batch_year
            });
        }
    }, [std_batch_year, std_class]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchInfo((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <CustomHeading>search student</CustomHeading>
            <form onSubmit={onSubmit}>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                    <Grid item xs={6} sm={6} md={3}>
                        <CustomSelect
                            options={classData}
                            id="standard-select-currency"
                            size="small"
                            select
                            name="std_class"
                            label="Class"
                            value={std_class}
                            onChange={handleChange}
                            required={true}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <CustomSelect
                            options={yearData}
                            id="standard-select-currency"
                            size="small"
                            select
                            name="std_batch_year"
                            label="Year"
                            value={std_batch_year}
                            onChange={handleChange}
                            required={true}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <CustomSelect
                            options={batchOptions || []}
                            id="standard-select-currency"
                            size="small"
                            select
                            name="std_batch"
                            label="Batch"
                            value={std_batch}
                            onChange={handleChange}
                            // required={true}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} alignSelf={'center'}>
                        <LoadingButton
                            size="small"
                            color="primary"
                            loadingPosition="end"
                            type="submit"
                            variant="contained"
                            endIcon={<HiSearch />}
                            sx={{
                                mt: 2
                            }}
                        >
                            search
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default SearchStudents;
