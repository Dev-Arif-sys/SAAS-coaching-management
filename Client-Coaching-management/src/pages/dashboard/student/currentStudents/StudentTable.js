import { TableBody, TableCell, TableRow, useTheme } from '@mui/material';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import CustomModal from 'components/ui/CustomModal';
import { useState } from 'react';
import { AiFillDelete, AiOutlineFolderView } from 'react-icons/ai';
import { FaRegArrowAltCircleUp, FaSms } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const headCells = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Tracking No.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Product Name'
    },
    {
        id: 'fat',
        align: 'left',
        disablePadding: false,
        label: 'Total Order'
    },
    {
        id: 'carbs',
        align: 'left',
        disablePadding: false,

        label: 'Status'
    },
    {
        id: 'protein',
        align: 'left',
        disablePadding: false,
        label: 'Total Amount'
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

const StudentTable = () => {
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
    const Tag = rows?.map((row, index) => (
        <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={index}>
            <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                {row.trackingNo}
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.fat}</TableCell>
            <TableCell align="left">{row.carbs}</TableCell>
            <TableCell align="left">{row.protein}</TableCell>
            <TableCell align="left">
                <FaSms style={{ ...iconStyle }} />
                <FaRegArrowAltCircleUp style={{ ...iconStyle }} onClick={() => handleModalOpen(row)} />
                <AiOutlineFolderView style={{ ...iconStyle }} />
                <FiEdit style={{ ...iconStyle }} />
                <AiFillDelete style={{ ...iconStyle }} />
            </TableCell>
        </TableRow>
    ));

    console.log(Tag);
    return (
        <div>
            <MultiPurposeTable headCells={headCells}>
                <TableBody>{Tag}</TableBody>
            </MultiPurposeTable>

            <CustomModal open={openModal} setOpen={setOpenModal} />
        </div>
    );
};

export default StudentTable;
