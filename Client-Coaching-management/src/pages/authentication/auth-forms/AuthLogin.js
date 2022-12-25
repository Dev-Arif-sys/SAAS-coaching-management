import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import FirebaseSocial from './FirebaseSocial';

// assets
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import { useLoginMutation } from 'features/users/usersApi';
import usePersist from 'hooks/userPersist';
import { useNavigate } from 'react-router-dom';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    const [login, { isSuccess, isError, error, data }] = useLoginMutation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [persist, setPersist] = usePersist();
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // navigating the screen
    useEffect(() => {
        if (isSuccess) {
            navigate('/dashboard');
        }
    }, [isSuccess]);
    console.log(error, data);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleToggle = () => setPersist((prev) => !prev);
    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error || error?.error} />;

    return (
        <>
            <Formik
                initialValues={{
                    number: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    number: Yup.string().min(11, 'Number must be 11 characters').required('Number is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        login(values);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Number</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="text"
                                        value={values.number}
                                        name="number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter number"
                                        fullWidth
                                        error={Boolean(touched.number && errors.number)}
                                    />
                                    {touched.number && errors.number && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.number}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="-password-login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Enter password"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: -1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={persist}
                                                onChange={handleToggle}
                                                name="checked"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="h6">Keep me sign in</Typography>}
                                    />
                                    <Link variant="h6" component={RouterLink} to="" color="text.primary">
                                        Forgot Password?
                                    </Link>
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Login
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider>
                                    <Typography variant="caption"> Login with</Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <FirebaseSocial />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
            {alert}
        </>
    );
};

export default AuthLogin;
