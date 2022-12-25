import { Box, Button, Grid, Typography } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import CustomTextField from 'components/ui/CustomTextField';
import { useAddUserMutation } from 'features/users/usersApi';
import { useFormik } from 'formik';
import { useState } from 'react';

const RegForm = () => {
    const [showError, setShowError] = useState(false);
    const [addUser, { isSuccess, isError, error, data, isLoading }] = useAddUserMutation();
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            role: 'super-admin',
            password: '',
            re_password: ''
        },
        onSubmit: (values) => {
            const { name, number, role, password, re_password } = values || {};
            if (password !== re_password) {
                setShowError(true);
            } else {
                setShowError(false);
                addUser({
                    name,
                    number,
                    role,
                    password
                });
            }
        }
    });

    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error || error?.error} />;
    if (!isError && isSuccess) alert = <CustomSnackbar status="success" message={data?.message} />;
    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid
                    container
                    sx={{
                        width: { md: '40%', sm: '80%', xs: '95%' }
                    }}
                    direction="column"
                    spacing={{ xs: 1, md: 2 }}
                    mb={1.5}
                >
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomTextField
                            fullWidth
                            required={true}
                            id="name"
                            name="name"
                            label={'Name'}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomTextField
                            fullWidth
                            id="number"
                            name="number"
                            label={'Number'}
                            value={formik.values.number}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomSelect
                            options={[
                                {
                                    label: 'Super Admin',
                                    value: 'super-admin'
                                }
                            ]}
                            label="Role"
                            required={true}
                            id="role"
                            name="role"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomTextField
                            fullWidth
                            required={true}
                            id="password"
                            name="password"
                            placeholder=""
                            label={'Password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomTextField
                            fullWidth
                            required={true}
                            id="re_password"
                            name="re_password"
                            placeholder=""
                            label={'Re-enter Password'}
                            value={formik.values.re_password}
                            onChange={formik.handleChange}
                        />
                        {showError && (
                            <Typography variant="small" fontSize="13px" color="red">
                                {' '}
                                Password doesn't match{' '}
                            </Typography>
                        )}
                    </Grid>
                </Grid>

                <Button disabled={isLoading} variant="contained" type="submit">
                    Save
                </Button>
            </form>
            {alert}
        </Box>
    );
};

export default RegForm;
