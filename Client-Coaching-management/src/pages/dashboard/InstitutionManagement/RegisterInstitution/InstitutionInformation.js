import { Box, Grid } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomTextField from 'components/ui/CustomTextField';
import DatePicker from 'components/ui/DatePicker';

const InstitutionInformation = ({ formik }) => {
    return (
        <Box
            sx={{
                mb: 3
            }}
        >
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1.5}>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="institution_name"
                        name="institution_name"
                        label={'Institution Name'}
                        value={formik.values.institution_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        id="institution_EIIN"
                        name="institution_EIIN"
                        label={'Institution EIIN'}
                        value={formik.values.institution_EIIN}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        id="institution_logo"
                        required={true}
                        name="institution_logo"
                        type="file"
                        label={'Institution Logo'}
                        value={formik.values.institution_logo}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="contact_person_name"
                        name="contact_person_name"
                        placeholder=""
                        label={'Contract Person Name'}
                        value={formik.values.contact_person_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="contact_person_phone"
                        name="contact_person_phone"
                        placeholder=""
                        label={'Contract Person Number'}
                        type="number"
                        value={formik.values.contact_person_phone}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="institution_head_name"
                        name="institution_head_name"
                        placeholder=""
                        label={'Institution Head Name'}
                        value={formik.values.institution_head_name}
                        onChange={formik.handleChange}
                    />
                </Grid>

                <Grid item xs={6} sm={3} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="institution_head_phone"
                        name="institution_head_phone"
                        placeholder=""
                        type={'number'}
                        label={'Institution Head Number'}
                        value={formik.values.institution_head_phone}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <CustomSelect
                        options={[
                            {
                                label: 'Monthly',
                                value: 'monthly'
                            },
                            {
                                label: 'Quarterly',
                                value: 'quaterly'
                            },
                            {
                                label: 'Half-yearly',
                                value: 'half-yearly'
                            },
                            {
                                label: 'Yearly',
                                value: 'Yearly'
                            }
                        ]}
                        label="Payment Policy"
                        required={true}
                        id="institution_payment_policy"
                        name="institution_payment_policy"
                        value={formik.values.institution_payment_policy}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
            {/*----------- 3rd row ------------*/}
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1}>
                <Grid item xs={6} sm={3} md={3}>
                    <DatePicker
                        label="Institution Reg Date"
                        required={true}
                        id="institution_reg_date"
                        name="institution_reg_date"
                        value={formik.values.institution_reg_date}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="institution_village"
                        name="institution_village"
                        label={'Institution Village'}
                        value={formik.values.institution_village}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="institution_thana"
                        name="institution_thana"
                        label={'Institution Thana'}
                        value={formik.values.institution_thana}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={6} sm={3} md={2.4}>
                    <CustomTextField
                        fullWidth
                        id="institution_district"
                        name="institution_district"
                        label={'Institution District'}
                        value={formik.values.institution_district}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default InstitutionInformation;
