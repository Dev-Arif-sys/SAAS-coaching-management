import { useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// third-party

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy, headCells }) {
    const theme = useTheme();
    return (
        <TableHead>
            <TableRow
                sx={{
                    borderRadius: '4px'
                }}
            >
                {headCells.map((headCell, index) => (
                    <TableCell
                        key={index}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{
                            py: '12px'
                        }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| MultiPurpose TABLE ||============================== //

export default function MultiPurposeTable({ headCells, children, setSearchTerm, searchTerm }) {
    const theme = useTheme();
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);
    const container = {
        backgroundColor: theme.palette.common.white,
        p: { md: 2, xs: 0 },
        borderRadius: '10px'
    };
    return (
        <Box sx={{ ...container }}>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' },
                    mt: 2
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-of-type': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead order={order} orderBy={orderBy} headCells={headCells} />

                    {children}
                </Table>
            </TableContainer>
        </Box>
    );
}
