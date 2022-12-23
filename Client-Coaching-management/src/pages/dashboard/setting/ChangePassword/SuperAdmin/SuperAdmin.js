import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { HiSearch } from 'react-icons/hi';

const SuperAdmin = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Rowt key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
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
export default SuperAdmin;
const Rowt = ({ row }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <HiSearch /> : <HiSearch />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    hi
                </TableCell>
                <TableCell align="right">34</TableCell>
                <TableCell align="right">56</TableCell>
                <TableCell align="right">34</TableCell>
                <TableCell align="right">34</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            he
                                        </TableCell>
                                        <TableCell>hr</TableCell>
                                        <TableCell align="right">gfg</TableCell>
                                        <TableCell align="right">fdgd</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};
