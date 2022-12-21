import { Grid } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomTextField from 'components/ui/CustomTextField';
const UserInformation = ({ formik }) => {
    return (
        <div>
            <Grid container spacing={{ xs: 1, md: 2 }} mb={1.5}>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="user_name"
                        name="user_name"
                        label={'User Name'}
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        id="user_number"
                        name="user_number"
                        label={'User Number'}
                        value={formik.values.user_number}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                    <CustomSelect
                        options={[
                            {
                                label: 'Moderator',
                                value: 'moderator'
                            },
                            {
                                label: 'Admin',
                                value: 'admin'
                            }
                        ]}
                        label="User Role"
                        required={true}
                        id="user_role"
                        name="user_role"
                        value={formik.values.user_role}
                        onChange={formik.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomTextField
                        fullWidth
                        required={true}
                        id="user_password"
                        name="user_password"
                        placeholder=""
                        label={'Password'}
                        value={formik.values.user_password}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserInformation;
