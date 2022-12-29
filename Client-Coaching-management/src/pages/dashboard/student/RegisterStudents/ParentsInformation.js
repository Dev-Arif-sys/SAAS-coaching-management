import { Box, Grid } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
const ParentsInformation = ({ formik }) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_father_name"
                        name="std_father_name"
                        label={'Father`s name'}
                        value={formik.values.std_father_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_father_occupation"
                        name="std_father_occupation"
                        label={'Occupation'}
                        value={formik.values.std_father_occupation}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_father_phone"
                        name="std_father_phone"
                        label={'Phone No'}
                        type="text"
                        value={formik.values.std_father_phone}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={7} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_mother_name"
                        name="std_mother_name"
                        label={'Mother`s name'}
                        value={formik.values.std_mother_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={5} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_mother_occupation"
                        name="std_mother_occupation"
                        label={'Occupation'}
                        value={formik.values.std_mother_occupation}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CustomTextField
                        fullWidth
                        id="std_mother_phone"
                        name="std_mother_phone"
                        label={'Phone No'}
                        type="text"
                        value={formik.values.std_mother_phone}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ParentsInformation;
