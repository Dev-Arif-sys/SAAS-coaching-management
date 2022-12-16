import React from 'react';
import { Box, Grid, Button, useTheme, Divider } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import { HiSearch } from 'react-icons/hi';

// sales report status
const status = [
    {
        value: '',
        label: 'Select'
    },
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: '11',
        label: '11'
    },
    {
        value: 'play',
        label: 'Play'
    },
    {
        value: 'Nursery',
        label: 'Nursery'
    },
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '4',
        label: '4'
    },
    {
        value: '5',
        label: '5'
    }
];
const Advertising = () => {
    const theme = useTheme();
    /* Css */
    const container = {
        backgroundColor: theme.palette.common.white,
        p: 2,
        borderRadius: '10px',
        boxShadow: 1
    };
    const heading = {
        backgroundColor: '#1890FF',
        color: theme.palette.common.white,
        padding: '4px 10px',
        borderRadius: '5px'
    };
    const TextWrap = {
        width: '100%',
        height: '150px',
        padding: '12px 20px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
        fontSize: '16px',
        resize: 'none',
        '&:focus': {
            color: 'white',
            backgroundColor: 'black'
        }
    };
    return (
        <Box sx={{ ...container }}>
            <Box sx={{ ...heading }}>
                <small>
                    <strong>Send SMS To Targeted Students</strong>
                </small>
            </Box>
            <br />
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                <Grid item xs={6} sm={4} md={4}>
                    <CustomSelect
                        options={status}
                        id="standard-select-currency"
                        size="small"
                        select
                        label="Class"
                        // value={value}
                        // onChange={(e) => setValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <CustomSelect
                        options={status}
                        id="standard-select-currency"
                        size="small"
                        select
                        label="Batch"
                        // value={value}
                        // onChange={(e) => setValue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <Button size="small" variant="contained" sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}>
                        <HiSearch style={{ fontSize: '26px' }} />
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <label htmlFor="textarea" style={{ margin: '5px 2px' }}>
                Write Message Here
            </label>
            <textarea style={{ ...TextWrap }}>Hello Students</textarea>
            <div style={{ gap: '10px', display: 'flex', margin: '10px 0' }}>
                <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                    Send SMS
                </Button>
                <Button size="small" color="error" variant="contained" sx={{ textTransform: 'capitalize' }}>
                    Reset Info
                </Button>
            </div>
        </Box>
    );
};

export default Advertising;
