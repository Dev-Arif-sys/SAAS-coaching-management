import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CustomAutocomplete from 'components/ui/CustomAutocomplete';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import { useGetBatchesMutation, useUpdateStudentMutation } from 'features/Student/studentapi';
import React, { useEffect, useState } from 'react';

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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PromoteModal = ({ open, setOpen, student }) => {
    const { std_batch, std_batch_year, std_class, std_group, std_name, _id } = student || {};
    const [promoteInfo, setPromoteInfo] = useState({
        std_batch: '',
        std_batch_year: '',
        std_class: '',
        std_group: ''
    });
    const [batch, setBatch] = useState('');
    const [updateStudent, { isSuccess, error, isError }] = useUpdateStudentMutation();
    const [getBatches, { data, isSuccess: isBatchSuccess }] = useGetBatchesMutation();
    const { result: batches } = data || {};
    const batchOptions = batches?.map((batch) => batch.batch);

    console.log({ promoteInfo });
    // setting the current value of the student
    useEffect(() => {
        setPromoteInfo({
            std_batch: std_batch,
            std_batch_year: std_batch_year,
            std_class: std_class,
            std_group: std_group
        });
    }, [student.std_batch]);

    // get batches from batch class and year
    useEffect(() => {
        if (promoteInfo.std_batch_year !== '' && promoteInfo.std_class !== '') {
            getBatches({
                std_class: promoteInfo.std_class,
                std_batch_year: promoteInfo.std_batch_year
            });
        }
    }, [promoteInfo.std_batch_year, promoteInfo.std_class]);

    useEffect(() => {
        if (student.std_batch && student.std_batch !== '') {
            setBatch(student.std_batch);
        }
    }, [student.std_batch]);

    // set batch again to the main state
    useEffect(() => {
        setPromoteInfo((prev) => ({ ...prev, std_batch: batch }));
    }, [batch]);

    // changing the state of select
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPromoteInfo((prev) => ({ ...prev, [name]: value }));
    };

    // save the updated data
    const handleSave = (e) => {
        e.preventDefault();
        updateStudent({
            id: _id,
            ...promoteInfo
        });
    };

    useEffect(() => {
        if (isSuccess) {
            setOpen(false);
        }
    }, [isSuccess]);

    const handleClose = () => {
        setOpen(false);
    };

    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error || 'something went wrong , try again later'} />;
    if (!isError && isSuccess) alert = <CustomSnackbar status="success" message={'Student has been promoted successfully'} />;
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
                        {std_name} || Class: {std_class} || Batch: {std_batch} || Year: {std_batch_year}
                    </CustomHeading>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <form onSubmit={handleSave}>
                            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                                <Grid item xs={6} sm={6} md={6}>
                                    <CustomSelect
                                        options={classData}
                                        id="standard-select-currency"
                                        size="small"
                                        select
                                        label="Class"
                                        name="std_class"
                                        value={promoteInfo.std_class}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={6} sm={6} md={6}>
                                    <CustomSelect
                                        options={yearData}
                                        id="standard-select-currency"
                                        size="small"
                                        select
                                        label="Year"
                                        name="std_batch_year"
                                        value={promoteInfo.std_batch_year}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={6} sm={6} md={6}>
                                    <CustomAutocomplete
                                        required={true}
                                        givenOptions={batchOptions || []}
                                        value={batch}
                                        setValue={setBatch}
                                    />
                                </Grid>

                                <Grid item xs={6} sm={6} md={6}>
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
                                        id="standard-select-currency"
                                        size="small"
                                        select
                                        label="Group"
                                        name="std_group"
                                        value={promoteInfo.std_group}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            {alert}
        </div>
    );
};

export default PromoteModal;
