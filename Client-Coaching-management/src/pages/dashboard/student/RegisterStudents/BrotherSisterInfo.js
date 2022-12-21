import { Box, Grid } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomTextField from 'components/ui/CustomTextField';

const BrotherSisterInfo = ({ formik }) => {
    return (
        <Box>
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_bro1_name"
                        name="std_bro1_name"
                        label={'Name'}
                        value={formik.values.std_bro1_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomSelect
                        options={classData}
                        id="std_bro1_class"
                        name="std_bro1_class"
                        value={formik.values.std_bro1_class}
                        onChange={formik.handleChange}
                        label="Class"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_bro1_institution"
                        name="std_bro1_institution"
                        label={'Institution'}
                        value={formik.values.std_bro1_institution}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_bro2_name"
                        name="std_bro2_name"
                        label={'Name'}
                        value={formik.values.std_bro2_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomSelect
                        options={classData}
                        id="std_bro2_class"
                        name="std_bro2_class"
                        value={formik.values.std_bro2_class}
                        onChange={formik.handleChange}
                        label="Class"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_bro2_institution"
                        name="std_bro2_institution"
                        label={'Institution'}
                        value={formik.values.std_bro2_institution}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_bro3_name"
                        name="std_bro3_name"
                        label={'Name'}
                        value={formik.values.std_bro3_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomSelect
                        options={classData}
                        id="std_bro3_class"
                        name="std_bro3_class"
                        value={formik.values.std_bro3_class}
                        onChange={formik.handleChange}
                        label="Class"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_bro3_institution"
                        name="std_bro3_institution"
                        label={'Institution'}
                        value={formik.values.std_bro3_institution}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default BrotherSisterInfo;

const classData = [
    {
        label: 'None',
        value: ''
    },
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
