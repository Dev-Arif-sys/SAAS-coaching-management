import { IconButton, TableBody, TableCell, TableRow, Tooltip, useTheme } from '@mui/material';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const headCells = [
    {
        id: 'name',
        align: 'left',
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'Number',
        align: 'left',
        disablePadding: true,
        label: 'Number'
    },
    {
        id: 'role',
        align: 'left',
        disablePadding: false,
        label: 'Role'
    },
    {
        id: 'actions',
        align: 'left',
        disablePadding: false,
        label: 'Actions'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */

const SuperAdminTable = ({ superAdmins }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({});

    const theme = useTheme();

    const handleModalOpen = (data) => {
        setOpenModal(true);
        setSelectedStudent(data);
    };
    const iconStyle = {
        fontSize: '26px',
        marginLeft: '7px',
        cursor: 'pointer'
    };
    const Tag = superAdmins?.map((superAdmin, index) => (
        <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={index}>
            <TableCell align="left">{superAdmin.name}</TableCell>
            <TableCell align="left">{superAdmin.number}</TableCell>
            <TableCell align="left">{superAdmin.role}</TableCell>
            <TableCell align="left">
                <Tooltip title="Delete">
                    <IconButton aria-label="expand row" size="small" onClick={() => handleDelete(_id)}>
                        <FiEdit style={{ fontSize: '17px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton aria-label="expand row" size="small" onClick={() => handleDelete(_id)}>
                        <AiFillDelete style={{ fontSize: '17px', color: theme.palette.common.red }} />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    ));

    console.log(Tag);
    return (
        <div>
            <MultiPurposeTable headCells={headCells}>
                <TableBody>{Tag}</TableBody>
            </MultiPurposeTable>
        </div>
    );
};

export default SuperAdminTable;
