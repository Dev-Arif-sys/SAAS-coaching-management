import { Button, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import CustomTextField from 'components/ui/CustomTextField';
import { useAddUserMutation } from 'features/users/usersApi';
import { useFormik } from 'formik';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AdminModal = ({ open, setOpen, institution }) => {
    const [addUser, { isSuccess, isError, error, data }] = useAddUserMutation();
    const { institution_name } = institution || {};
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            role: 'admin',
            password: ''
        },
        onSubmit: (values) => {
            addUser({
                ...values,
                institution_id: institution._id
            });
        }
    });
    const handleClose = () => {
        setOpen(false);
    };

    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error} />;
    if (!isError && isSuccess) alert = <CustomSnackbar status="success" message={data?.message} />;
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <CustomHeading>
                        Add <strong style={{ color: 'red' }}>{institution_name}'s</strong> admin
                    </CustomHeading>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={{ xs: 1, md: 2 }} mb={1.5}>
                                <Grid item xs={6} sm={6} md={6}>
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
                                <Grid item xs={6} sm={6} md={6}>
                                    <CustomTextField
                                        fullWidth
                                        id="number"
                                        name="number"
                                        label={'Number'}
                                        value={formik.values.number}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
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
                                        label="Role"
                                        required={true}
                                        id="role"
                                        name="role"
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
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
                            </Grid>
                            <Button variant="contained" type="submit">
                                Save
                            </Button>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            {alert}
        </div>
    );
};

export default AdminModal;
