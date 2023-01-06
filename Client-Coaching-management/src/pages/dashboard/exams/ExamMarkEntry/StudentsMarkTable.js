import { Box, Button, TableCell, TableRow, useTheme } from '@mui/material';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import CustomTextField from 'components/ui/CustomTextField';
import { useState } from 'react';

const headCells = [
    {
        id: 'Name',
        align: 'left',
        disablePadding: false,
        label: 'Roll.'
    },
    {
        id: 'Phone',
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

const StudentsMarkTable = ({ students }) => {
    const theme = useTheme();
    const [searchText, setSearchText] = useState('');

    console.log({ students });
    const TableItemList = students.map((row, index) => (
        <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={row._id}>
            <TableCell component="th" /* id={labelId} */ scope="row" align="left">
                {row.std_name}
            </TableCell>
            <TableCell align="left">{row.std_phone}</TableCell>
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
    ));

    return (
        <Box>
            <Box sx={{}}>
                <Box>
                    <MultiPurposeTable headCells={headCells}>{TableItemList}</MultiPurposeTable>
                </Box>
                <Button target="_blank" href="" variant="contained" color="success" size="small">
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default StudentsMarkTable;
