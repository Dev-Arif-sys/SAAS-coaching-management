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

const SuperAdminTableDetails = ({ data }) => {
    const theme = useTheme();
    const [classes, batch, year] = data;
    const [searchText, setSearchText] = useState('');
    return (
        <Box>
            <Box sx={{}}>
                {/* <Box
                    sx={{
                        background: theme.palette.text.heading,
                        mt: '10px',
                        p: '3px'
                    }}
                >
                    <Typography variant="h2" color={'white'}>
                        Students Of Class {classes} , Batch {batch}, Year {year}
                    </Typography>
                </Box> */}

                {/* <Box
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
                </Box> */}
                <Box
                    sx={
                        {
                            // display: 'flex',
                            // alignItems: 'end'
                        }
                    }
                    // alignItems='center'
                >
                    <MultiPurposeTable headCells={headCells}>
                        <Tag />
                    </MultiPurposeTable>
                </Box>
            </Box>
        </Box>
    );
};

export default SuperAdminTableDetails;

const Tag = () => {
    return (
        <TableBody>
            {rows.map((row, index) => (
                <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={row.ID}>
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.ID}
                    </TableCell>
                    <TableCell align="left">{row.paymentType}</TableCell>
                    <TableCell align="left">{row.amount}</TableCell>
                </TableRow>
            ))}
            <TableCell align="left">total</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">1000</TableCell>
        </TableBody>
    );
};
