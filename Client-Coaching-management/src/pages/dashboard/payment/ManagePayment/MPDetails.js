import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody, Button } from '@mui/material';

import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';

import CustomModal from 'components/ui/CustomModal';

import { FaRegArrowAltCircleUp, FaSms } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
const headCells = [
    {
        id: 'ID',
        align: 'left',
        disablePadding: false,
        label: 'ID'
    },
    {
        id: 'PaymentType',
        align: 'left',
        disablePadding: true,
        label: 'Payment Type'
    },
    {
        id: 'Amount',
        align: 'left',
        disablePadding: false,
        label: 'Amount'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
// function createData(ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due) {
//     return { ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due};
// }
const rows = [
    {
        paymentType: 'Admission Fees',

        amount: '100',
        ID: 101
    },
    {
        paymentType: 'Admission Fees',

        amount: '100',
        ID: 104
    },
    {
        paymentType: 'Admission Fees',

        amount: '100',
        ID: 102
    },
    {
        paymentType: 'Admission Fees',

        amount: '100',
        ID: 103
    }
];

const MPDetails = ({ data }) => {
    const theme = useTheme();
    const [classes, batch, year] = data;
    const [searchText, setSearchText] = useState('');
    const [openModal, setOpenModal] = useState(false);
    return (
        <Box>
            <Box sx={{}}>
                <Box>
                    <MultiPurposeTable headCells={headCells}>
                        <Tag openModal={openModal} setOpenModal={setOpenModal} />
                    </MultiPurposeTable>
                    <CustomModal open={openModal} setOpen={setOpenModal} />
                </Box>
            </Box>
        </Box>
    );
};

export default MPDetails;

const Tag = ({ setOpenModal, openModal }) => {
    const [selectedStudent, setSelectedStudent] = useState({});
    const handleModalOpen = (data) => {
        setOpenModal(true);
        setSelectedStudent(data);
    };
    const iconStyle = {
        fontSize: '26px',
        marginLeft: '7px',
        cursor: 'pointer'
    };
    return (
        <TableBody>
            {rows.map((row, index) => (
                <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={row.ID}>
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.ID}
                    </TableCell>
                    <TableCell align="left">{row.paymentType}</TableCell>
                    <TableCell align="left">
                        <FaSms style={{ ...iconStyle }} />
                        <FaRegArrowAltCircleUp style={{ ...iconStyle }} onClick={() => handleModalOpen(row)} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
