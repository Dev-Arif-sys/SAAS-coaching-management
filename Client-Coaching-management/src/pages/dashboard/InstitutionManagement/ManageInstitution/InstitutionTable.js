import { Paper, Tooltip, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomHeading from 'components/ui/CustomHeading';
import { useDeleteInstitutionMutation } from 'features/institution/institutionApi';
import React, { useState } from 'react';
import { AiFillDelete, AiOutlineFolderView } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { MdPersonAdd } from 'react-icons/md';
import AdminModal from './AdminModal';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { show } from 'features/Student/studentSlice';

const InstitutionTable = ({ institutions }) => {
    const institutionList = institutions.map((institution) => <Row key={institution._id} institution={institution} />);
    return (
        <div>
            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Institution Name</TableCell>
                            <TableCell align="left">Institution EIIN</TableCell>
                            <TableCell align="left">Contact Person Name</TableCell>
                            <TableCell align="left">Contact Person Phone</TableCell>
                            <TableCell align="left">Institution Head Name</TableCell>
                            <TableCell align="left">Institution Head Phone</TableCell>
                            <TableCell align="left"> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{institutionList}</TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default InstitutionTable;

const Row = ({ institution }) => {
    const [deleteInstitution, { isSuccess, isError }] = useDeleteInstitutionMutation();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedInt, setSelectedInt] = useState({});
    const {
        _id,
        institution_name,
        institution_EIIN,
        contact_person_name,
        contact_person_phone,
        institution_head_name,
        institution_head_phone,
        users
    } = institution || {};
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        if (confirm('Are your sure to delete')) {
            deleteInstitution(id);
        }
    };

    const handleAddAdmin = () => {
        setOpenModal(true);
        setSelectedInt(institution);
    };
    const handleEditDetails = (id) => {
        dispatch(show(true));
        navigate(`/dashboard/manage-institution/${id}`);
    };
    const handleViewDetails = (id) => {
        dispatch(show(false));
        navigate(`/dashboard/manage-institution/${id}`);
    };
    // decide what to render in collapsed table
    let collapsedContent;

    if (users.length === 0)
        collapsedContent = (
            <Typography textAlign="center" fontWeight="500" color={theme.palette.action.warning} variant="h6">
                No user found
            </Typography>
        );
    if (users.length > 0) {
        const cellList = users.map((user) => (
            <TableRow key={user._id}>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.number}</TableCell>
                <TableCell align="left">{user.role}</TableCell>
            </TableRow>
        ));
        collapsedContent = (
            <Table size="small" aria-label="purchases" component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Number</TableCell>
                        <TableCell align="left">Role</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{cellList}</TableBody>
            </Table>
        );
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {institution_name}
                </TableCell>
                <TableCell align="left">{institution_EIIN}</TableCell>
                <TableCell align="left">{contact_person_name}</TableCell>
                <TableCell align="left"> {contact_person_phone}</TableCell>
                <TableCell align="left">{institution_head_name}</TableCell>
                <TableCell align="left">{institution_head_phone}</TableCell>

                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <FaAngleDown /> : <FaAngleUp />}
                    </IconButton>
                    <Tooltip title="Delete">
                        <IconButton aria-label="expand row" size="small" onClick={() => handleDelete(_id)}>
                            <AiFillDelete style={{ fontSize: '17px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit Details">
                        <IconButton aria-label="expand row" size="small" onClick={() => handleEditDetails(_id)}>
                            <FiEdit style={{ fontSize: '17px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="View Details">
                        <IconButton aria-label="expand row" size="small" onClick={() => handleViewDetails(_id)}>
                            <AiOutlineFolderView style={{ fontSize: '17px' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add an admin">
                        <IconButton aria-label="expand row" size="small" onClick={() => handleAddAdmin()}>
                            <MdPersonAdd style={{ fontSize: '17px' }} />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <CustomHeading> {institution_name}'s users</CustomHeading>
                            {collapsedContent}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <AdminModal open={openModal} setOpen={setOpenModal} institution={selectedInt} />
        </React.Fragment>
    );
};
