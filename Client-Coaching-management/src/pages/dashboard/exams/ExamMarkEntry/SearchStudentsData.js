import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody, Button } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';

const headCells = [
    {
        id: 'rollNo',
        align: 'left',
        disablePadding: false,
        label: 'Roll.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Student Name'
    },
    {
        id: 'cq',
        align: 'left',
        disablePadding: false,
        label: 'CQ Mark'
    },
    {
        id: 'mcq',
        align: 'left',
        disablePadding: false,

        label: 'MCQ Mark'
    }
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
function createData(trackingNo, name, fat, carbs, protein) {
    return { trackingNo, name, fat, carbs, protein };
}
const rows = [
    createData(84564564, 'Camera Lens', 40, 2, 40570),
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

const SearchStudentsData = ({ data }) => {
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
                <Button target="_blank" href="" variant="contained" color="success" size="small">
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default SearchStudentsData;

const Tag = () => {
    return (
        <TableBody>
            {rows.map((row, index) => (
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
                    <TableCell align="left">
                        <CustomTextField
                            // label="Title"
                            // required={true}
                            size="small"

                            // onChange={(e) => setTitle(e.target.value)}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <CustomTextField
                            // label="Title"
                            // required={true}
                            size="small"

                            // onChange={(e) => setTitle(e.target.value)}
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
