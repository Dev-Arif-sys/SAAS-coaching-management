import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, TableCell, TableRow, TableBody } from '@mui/material';

/* :::::::::MultiPurpose TABLE - HEADER CELL::::::::::: */
const headCells = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Tracking No.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Product Name'
    },
    {
        id: 'fat',
        align: 'right',
        disablePadding: false,
        label: 'Total Order'
    },
    {
        id: 'carbs',
        align: 'left',
        disablePadding: false,

        label: 'Status'
    },
    {
        id: 'protein',
        align: 'right',
        disablePadding: false,
        label: 'Total Amount'
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

const SalesProduct = () => {
    return (
        <div>
            <MultiPurposeTable headCells={headCells}>
                <Tag />
            </MultiPurposeTable>
        </div>
    );
};

export default SalesProduct;

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
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
