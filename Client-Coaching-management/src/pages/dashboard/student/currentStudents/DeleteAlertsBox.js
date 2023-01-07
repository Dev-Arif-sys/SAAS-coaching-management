import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useDeleteStudentMutation, useGetStudentsQuery } from 'features/Student/studentapi';
const DeleteAlertsBox = ({ id }) => {
    const [open, setOpen] = useState(false);
    const [deleteStudent, { isError, isLoading, isSuccess, error }] = useDeleteStudentMutation();
    // const { data, refetch } = useGetStudentsQuery();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAgreeFun = (id) => {
        console.log(id);
        // console.log(deleteStudent);
        deleteStudent(id);
        // data.refetch();
        setOpen(false);
    };

    return (
        <div>
            {' '}
            <AiFillDelete style={{ fontSize: '17px', color: 'red' }} onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Are You Sure Delete Your Student</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Click Yes or Cancel to delete your student</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleAgreeFun(id)}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteAlertsBox;
