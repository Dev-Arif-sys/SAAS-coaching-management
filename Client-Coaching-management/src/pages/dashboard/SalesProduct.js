import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, TableCell, TableRow, TableBody } from '@mui/material';
import MultiPurposeSearch from 'components/search/MultiPurposeSearch';
import { useState } from 'react';

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
const rows = [
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$5532'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$553532'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$550832'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$55532'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$556932'
    },
    {
        trackingNo: 'trackingNo',
        name: 'Book Value',
        fat: 'Handsome',
        carbs: 'Pending',
        protein: '$5512532'
    }
];

const SalesProduct = () => {
    const [searchTerm, setSearchTerm] = useState('');

    /* :::::Dynamic Search || Just send 'setSearchTerm={setSearchTerm} searchTerm={searchTerm} 
    these as props to the multiPurpose table and get search term and then find it from JSON data'::::: */

    const re = new RegExp(searchTerm, 'i');
    const filtered = rows.filter((entry) => Object.values(entry).some((val) => typeof val === 'string' && val.match(re)));

    return (
        <div>
            <MultiPurposeTable headCells={headCells} setSearchTerm={setSearchTerm} searchTerm={searchTerm}>
                <Tag filtered={filtered} />
            </MultiPurposeTable>
        </div>
    );
};

export default SalesProduct;

const Tag = ({ filtered }) => {
    return (
        <TableBody>
            {filtered?.map((row, index) => (
                <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1} key={index}>
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
