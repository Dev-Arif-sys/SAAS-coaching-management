import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody, Button } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import CustomHeading from 'components/ui/CustomHeading';

const headCells1 = [
    {
        id: 'income',
        align: 'left',
        disablePadding: false,
        label: 'Income.'
    },
    {
        id: 'due',
        align: 'left',
        disablePadding: true,
        label: 'Due'
    },
    {
        id: 'expense',
        align: 'left',
        disablePadding: false,
        label: 'Expense'
    }
];
const headCells2 = [
    {
        id: 'id',
        align: 'left',
        disablePadding: false,
        label: 'Id'
    },
    {
        id: 'date',
        align: 'left',
        disablePadding: true,
        label: 'Date'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'class',
        align: 'left',
        disablePadding: false,

        label: 'Class'
    },
    {
        id: 'batch',
        align: 'left',
        disablePadding: false,

        label: 'Batch'
    },
    {
        id: 'fatherphone',
        align: 'left',
        disablePadding: false,

        label: 'Father PN.'
    },
    {
        id: 'income',
        align: 'left',
        disablePadding: false,

        label: 'Income'
    },
    {
        id: 'due',
        align: 'left',
        disablePadding: false,

        label: 'Due'
    }
];

const headCells3 = [
    {
        id: 'id',
        align: 'left',
        disablePadding: false,
        label: 'id'
    },
    {
        id: 'date',
        align: 'left',
        disablePadding: false,
        label: 'Expense Date'
    },
    {
        id: 'issue',
        align: 'left',
        disablePadding: false,
        label: 'Expense Issue.'
    },
    {
        id: 'quantity',
        align: 'left',
        disablePadding: true,
        label: 'Quantity'
    },
    {
        id: 'amount',
        align: 'left',
        disablePadding: false,
        label: 'Amount'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
function createData(trackingNo, name, fat, carbs, protein) {
    return { trackingNo, name, fat, carbs, protein };
}
const rows2 = [
    createData(84564564, 'Camera Lens', 40, 2, 40570, 84564564, 'Camera Lens', 40, 2, 40570),
    createData(98764564, 'Laptop', 300, 0, 180139),
    createData(98756325, 'Mobile', 355, 1, 90989),
    createData(98652366, 'Handset', 50, 1, 10239),
    createData(13286564, 'Computer Accessories', 100, 1, 83348),
    createData(86739658, 'TV', 99, 0, 410780),
    createData(13256498, 'Keyboard', 125, 2, 70999),
    createData(98753263, 'Mouse', 89, 2, 10570),
    createData(98753275, 'Desktop', 185, 1, 98063),
    createData(98753291, 'Chair', 100, 0, 14001)
];
const rows1 = [createData(40, 2, 40570)];
const rows3 = [
    createData(84564564, 'Camera Lens', 40, 2, 40570, 84564564, 'Camera Lens', 40, 2, 40570),
    createData(98764564, 'Laptop', 300, 0, 180139),
    createData(98756325, 'Mobile', 355, 1, 90989),
    createData(98652366, 'Handset', 50, 1, 10239),
    createData(13286564, 'Computer Accessories', 100, 1, 83348),
    createData(86739658, 'TV', 99, 0, 410780),
    createData(13256498, 'Keyboard', 125, 2, 70999),
    createData(98753263, 'Mouse', 89, 2, 10570),
    createData(98753275, 'Desktop', 185, 1, 98063),
    createData(98753291, 'Chair', 100, 0, 14001)
];

const InocomeAndExpenseData = ({ data }) => {
    const theme = useTheme();
    const [fromDate, toDate] = data;
    const [searchText, setSearchText] = useState('');
    return (
        <Box>
            <Box sx={{ my: 2 }}>
                <CustomHeading>
                    Income-due vs Expense Details : From : {fromDate} To : {toDate}
                </CustomHeading>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 3
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

                <Box
                    sx={
                        {
                            // display: 'flex',
                            // alignItems: 'end'
                        }
                    }
                    // alignItems='center'
                >
                    <MultiPurposeTable headCells={headCells1}>
                        <Tag1 />
                    </MultiPurposeTable>

                    <Typography variant="h4" color={theme.palette.text.primary} fontWeight="400">
                        Showing 1 to 1 of 1 entries
                    </Typography>
                    <Typography
                        sx={{
                            mb: 2
                        }}
                        variant="h4"
                        color={theme.palette.text.primary}
                        fontWeight="400"
                    >
                        Income-Due Details
                    </Typography>
                    <MultiPurposeTable headCells={headCells2}>
                        <Tag2 />
                    </MultiPurposeTable>
                    <Typography
                        sx={{
                            my: 2
                        }}
                        variant="h4"
                        color={theme.palette.text.primary}
                        fontWeight="400"
                    >
                        Expense Details
                    </Typography>
                    <MultiPurposeTable headCells={headCells3}>
                        <Tag3 />
                    </MultiPurposeTable>
                </Box>
            </Box>
        </Box>
    );
};

export default InocomeAndExpenseData;

const Tag1 = () => {
    return (
        <TableBody>
            {rows1.map((row, index) => (
                <TableRow
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    tabIndex={-1}
                    key={row.trackingNo}
                >
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.trackingNo}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
const Tag2 = () => {
    return (
        <TableBody>
            {rows2.map((row, index) => (
                <TableRow
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    tabIndex={-1}
                    key={row.trackingNo}
                >
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.trackingNo}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.trackingNo}</TableCell>
                    <TableCell align="left">{row.trackingNo}</TableCell>
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.trackingNo}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.trackingNo}</TableCell>
                    <TableCell align="left">{row.trackingNo}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
const Tag3 = () => {
    return (
        <TableBody>
            {rows3.map((row, index) => (
                <TableRow
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    tabIndex={-1}
                    key={row.trackingNo}
                >
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.trackingNo}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.trackingNo}</TableCell>
                    <TableCell align="left">{row.trackingNo}</TableCell>
                    <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                        {row.trackingNo}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
