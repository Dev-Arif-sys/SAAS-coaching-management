import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React from 'react';
import CustomHeading from './CustomHeading';
import CustomSelect from './CustomSelect';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
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
                    <CustomHeading>Ariful Islam || Class: 1 || Batch: A || Year: 2022</CustomHeading>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                            <Grid item xs={6} sm={6} md={6}>
                                <CustomSelect
                                    options={status}
                                    id="standard-select-currency"
                                    size="small"
                                    select
                                    label="Class"
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <CustomSelect
                                    options={status}
                                    id="standard-select-currency"
                                    size="small"
                                    select
                                    label="Batch"
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <CustomSelect
                                    options={status}
                                    id="standard-select-currency"
                                    size="small"
                                    select
                                    label="Year"
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
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
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CustomModal;
const status = [
    {
        value: '',
        label: 'Select'
    },
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: '11',
        label: '11'
    },
    {
        value: 'play',
        label: 'Play'
    },
    {
        value: 'Nursery',
        label: 'Nursery'
    },
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '4',
        label: '4'
    },
    {
        value: '5',
        label: '5'
    }
];
