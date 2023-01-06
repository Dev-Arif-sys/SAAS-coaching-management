import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody, Button } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import CustomModal from 'components/ui/CustomModal';
import { AiFillDelete, AiOutlineFolderView } from 'react-icons/ai';
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
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Name'
    },
    {
        id: 'FatherMobile',
        align: 'left',
        disablePadding: false,
        label: 'Father Mobile'
    },
    {
        id: 'PayContact',
        align: 'left',
        disablePadding: false,
        label: 'Pay Contact'
    },
    {
        id: 'ReceiptNo',
        align: 'left',
        disablePadding: false,
        label: 'Receipt No'
    },
    {
        id: 'Payment',
        align: 'left',
        disablePadding: false,
        label: 'Payment'
    },
    {
        id: 'Due',
        align: 'left',
        disablePadding: false,
        label: 'Payment'
    },
    {
        id: 'Action',
        align: 'left',
        disablePadding: false,
        label: 'Action'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
// function createData(ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due) {
//     return { ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due};
// }
const rows = [
    {
        name: 'Book Value',
        PayContact: 500,
        FatherMobile: '01868221956',
        ID: 101
    },
    {
        name: 'Book Value',
        PayContact: 500,
        FatherMobile: '01868221956',
        ID: 102
    },
    {
        name: 'Book Value',
        PayContact: 500,
        FatherMobile: '01868221956',
        ID: 103
    },
    {
        name: 'Book Value',
        PayContact: 500,
        FatherMobile: '01868221956',
        ID: 104
    }
];

const PaymentDetails = ({ data }) => {
    const theme = useTheme();
    const [classes, batch, year] = data;
    const [searchText, setSearchText] = useState('');
    const [openModal, setOpenModal] = useState(false);

    return (
        <Box>
            <Box sx={{}}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    alignItems="center"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h4"
                            color={theme.palette.text.primary}
                            fontWeight="400"
                            sx={{
                                mr: 1
                            }}
                        >
                            Show
                        </Typography>
                        <input
                            type="number"
                            style={{
                                width: '40px'
                            }}
                        />
                        
                        <Typography
                            sx={{
                                ml: 1
                            }}
                            variant="h4"
                            color={theme.palette.text.primary}
                            fontWeight="400"
                        >
                            Entries
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h4"
                            color={theme.palette.text.primary}
                            fontWeight="400"
                            sx={{
                                mr: 1
                            }}
                            onChange={(e) => setSearchText(e.target.value)}
                        >
                            Search
                        </Typography>
                        <CustomTextField size="small" />
                    </Box>
                </Box>
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

export default PaymentDetails;

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
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.FatherMobile}</TableCell>
                    <TableCell align="left">{row.PayContact}</TableCell>
                    <TableCell align="left">
                        <CustomTextField size="small" />
                    </TableCell>
                    <TableCell align="left">
                        <CustomTextField size="small" />
                    </TableCell>
                    <TableCell align="left">
                        <CustomTextField size="small" />
                    </TableCell>
                    <TableCell align="left">
                        <FaSms style={{ ...iconStyle }} />
                        <FaRegArrowAltCircleUp style={{ ...iconStyle }} onClick={() => handleModalOpen(row)} />
                        <AiOutlineFolderView style={{ ...iconStyle }} />
                        <FiEdit style={{ ...iconStyle }} />
                        <AiFillDelete style={{ ...iconStyle }} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
