import { Box, Grid } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomTextField from 'components/ui/CustomTextField';
import DatePicker from 'components/ui/DatePicker';

const StudentInformation = ({ formik }) => {
    return (
        <Box
            sx={{
                mb: 3
            }}
        >
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="std_name"
                        name="std_name"
                        label={'Name'}
                        value={formik.values.std_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="institution"
                        name="std_institution"
                        label={'Institution'}
                        value={formik.values.std_institution}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        id="phone"
                        required={true}
                        name="std_phone"
                        type="number"
                        label={'Phone No'}
                        value={formik.values.std_phone}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        id="contract"
                        name="payment_contract"
                        placeholder="tk."
                        label={'Contract'}
                        value={formik.values.payment_contract}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={12} sm={6} md={2}>
                    <CustomSelect
                        options={classData}
                        id="class"
                        name="std_class"
                        value={formik.values.std_class}
                        onChange={formik.handleChange}
                        label="Class"
                        required={true}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={2}>
                    <CustomSelect
                        options={batchData}
                        id="batch"
                        name="std_batch"
                        value={formik.values.std_batch}
                        onChange={formik.handleChange}
                        label="Batch"
                        required={true}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={2}>
                    <CustomSelect
                        options={batchData}
                        id="batch_year"
                        name="std_batch_year"
                        value={formik.values.std_batch_year}
                        onChange={formik.handleChange}
                        label="Batch Year"
                        required={true}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={2}>
                    <CustomSelect
                        options={[
                            {
                                label: 'Science',
                                value: 'science'
                            },
                            {
                                label: 'Arts',
                                value: 'arts'
                            },
                            {
                                label: 'Commerce',
                                value: 'commerce'
                            }
                        ]}
                        label="Group"
                        id="group"
                        name="std_group"
                        value={formik.values.std_group}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={2}>
                    <CustomSelect
                        options={[
                            {
                                label: 'Male',
                                value: 'male'
                            },
                            {
                                label: 'Female',
                                value: 'female'
                            }
                        ]}
                        label="Gender"
                        required={true}
                        id="gender"
                        name="std_gender"
                        value={formik.values.std_gender}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={12} sm={3} md={2}>
                    <DatePicker
                        label="Enroll Date"
                        required={true}
                        id="std_enrolled_date"
                        name="std_enrolled_date"
                        value={formik.values.std_enrolled_date}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
            {/*----------- 3rd row ------------*/}
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={6} sm={3} md={2.4}>
                    <DatePicker
                        id="std_dateOfBirth"
                        name="std_dateOfBirth"
                        label="Date of Birth"
                        value={formik.values.std_dateOfBirth}
                        onChange={formik.handleChange}
                        required={true}
                    />
                </Grid>
                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="village"
                        name="std_village"
                        label={'Village'}
                        value={formik.values.std_village}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="post"
                        name="std_post"
                        label={'Post'}
                        value={formik.values.std_post}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="thana"
                        name="std_thana"
                        label={'Thana'}
                        value={formik.values.std_Thana}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="zilla"
                        name="std_zilla"
                        label={'Zilla'}
                        value={formik.values.std_Zilla}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentInformation;

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
