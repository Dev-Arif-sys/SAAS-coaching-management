import { IconButton, TableBody, TableCell, TableRow, Tooltip, useTheme } from '@mui/material';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import { useState } from 'react';
import { AiFillDelete, AiOutlineFolderView } from 'react-icons/ai';
import { FaRegArrowAltCircleUp, FaSms } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import DeleteAlertsBox from './DeleteAlertsBox';
import PromoteModal from './PromoteModal';
import { useDispatch } from 'react-redux';
import { show } from 'features/Student/studentSlice';
const headCells = [
    {
        id: 'Name',
        align: 'left',
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'Institution',
        align: 'left',
        disablePadding: true,
        label: 'College/School'
    },
    {
        id: 'Phone',
        align: 'left',
        disablePadding: true,
        label: 'Phone No'
    },
    {
        id: 'Group',
        align: 'left',
        disablePadding: false,
        label: 'Group'
    },
    {
        id: 'Enroll date',
        align: 'left',
        disablePadding: false,

        label: 'Enroll Date'
    },
    {
        id: 'Father name',
        align: 'left',
        disablePadding: false,
        label: 'Father name'
    },
    ,
    {
        id: 'Father Phone',
        align: 'left',
        disablePadding: false,
        label: 'Father Phone'
    },
    ,
    {
        id: 'actions',
        align: 'left',
        disablePadding: false,
        label: 'actions'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
const rows = [
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$5532'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$553532'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$550832'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$55532'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$556932'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$5512532'
    }
];

const StudentTable = ({ students }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({});
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleModalOpen = (data) => {
        setOpenModal(true);
        setSelectedStudent(data);
    };

    const handleViewDetails = (id) => {
        dispatch(show(false));
        navigate(`/dashboard/students/${id}`);
    };
    const handleEditDetails = (id) => {
        dispatch(show(true));
        navigate(`/dashboard/students/${id}`);
    };

    const iconStyle = {
        fontSize: '26px',
        marginLeft: '7px',
        cursor: 'pointer'
    };
    const Tag = students?.map((row, index) => (
        <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={row._id}>
            <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                {row.std_name}
            </TableCell>
            <TableCell align="left">{row.std_institution}</TableCell>
            <TableCell align="left">{row.std_phone}</TableCell>
            <TableCell align="left">{row.std_group}</TableCell>
            <TableCell align="left">{row.std_enrolled_date}</TableCell>
            <TableCell align="left">{row.std_father_name}</TableCell>
            <TableCell align="left">{row.std_father_phone}</TableCell>
            <TableCell align="left">
                <Tooltip title="send sms">
                    <IconButton aria-label="expand row" size="small">
                        <FaSms style={{ fontSize: '17px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Promote student">
                    <IconButton aria-label="expand row" size="small" onClick={() => handleModalOpen(row)}>
                        <FaRegArrowAltCircleUp style={{ fontSize: '17px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="View Details">
                    <IconButton aria-label="expand row" size="small" onClick={() => handleViewDetails(row._id)}>
                        <AiOutlineFolderView style={{ fontSize: '17px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Edit Details">
                    <IconButton aria-label="expand row" size="small" onClick={() => handleEditDetails(row._id)}>
                        <FiEdit style={{ fontSize: '17px' }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton aria-label="expand row" size="small">
                        {/* <AiFillDelete style={{ fontSize: '17px', color: 'red' }} /> */}
                        <DeleteAlertsBox id={row._id} />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    ));

    return (
        <div>
            <MultiPurposeTable headCells={headCells}>
                <TableBody>{Tag}</TableBody>
            </MultiPurposeTable>
            <PromoteModal open={openModal} setOpen={setOpenModal} student={selectedStudent} />
        </div>
    );
};

export default StudentTable;
