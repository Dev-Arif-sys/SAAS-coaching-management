import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody, Button } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import CustomSearchButton from 'components/ui/CustomSearchButton';

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
                        <Tag />
                    </MultiPurposeTable>
                </Box>
            </Box>
        </Box>
    );
};

export default ManageUserTableItem;

const Tag = () => {
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <CustomSearchButton />
                            <CustomSearchButton />
                        </Box>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
