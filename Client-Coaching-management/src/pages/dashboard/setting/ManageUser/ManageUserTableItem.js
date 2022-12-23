import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody, Button } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import { AiFillDelete, AiOutlineFolderView } from 'react-icons/ai';
import { FaRegArrowAltCircleUp, FaSms } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import CustomModal from 'components/ui/CustomModal';
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
        id: 'email',
        align: 'left',
        disablePadding: false,
        label: 'Email'
    },

    {
        id: 'role',
        align: 'left',
        disablePadding: false,
        label: 'Role'
    },

    {
        id: 'Action',
        align: 'left',
        disablePadding: false,
        label: 'Action'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
// function createData(ID, name, email, PayContact, ReceiptNo,Payment,Due) {
//     return { ID, name, email, PayContact, ReceiptNo,Payment,Due};
// }
const rows = [
    {
        name: 'Book Value',
        role: 'admin',
        email: '01868221956',
        ID: 101
    },
    {
        name: 'Book Value',
        role: 'admin',
        role: 'admin',
        email: '01868221956',
        ID: 102
    },
    {
        name: 'Book Value',
        role: 'admin',
        email: '01868221956',
        ID: 103
    },
    {
        name: 'Book Value',
        role: 'admin',
        email: '01868221956',
        ID: 104
    }
];

const ManageUserTableItem = () => {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const [searchText, setSearchText] = useState('');
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

export default ManageUserTableItem;

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
                    <TableCell align="left">{row.email}</TableCell>

                    <TableCell align="left">{row.role}</TableCell>

                    <TableCell align="left">
                        <FaSms style={{ ...iconStyle }} />
                        <FaRegArrowAltCircleUp style={{ ...iconStyle }} onClick={() => handleModalOpen(row)} />
                        <AiOutlineFolderView style={{ ...iconStyle }} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
