import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, Button, Divider } from '@mui/material';

import { styled } from '@mui/material/styles';

import { HiSearch } from 'react-icons/hi';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSelect from 'components/ui/CustomSelect';
import Heading from '../student/currentStudents/Heading';
import ContentContainer from 'components/ui/ContentContainer';
const classData = [
    {
        label: 'Class 1',
        value: '1'
    },
    {
        label: 'Class 2',
        value: '2'
    },
    {
        label: 'Class 3',
        value: '3'
    },
    {
        label: 'Class 4',
        value: '4'
    },
    {
        label: 'Class 5',
        value: '5'
    },
    {
        label: 'Class 6',
        value: '6'
    },
    {
        label: 'Class 7',
        value: '7'
    },
    {
        label: 'Class 8',
        value: '8'
    },
    {
        label: 'Class 9',
        value: '9'
    },
    {
        label: 'Class 10',
        value: '10'
    },
    {
        label: 'Class 11',
        value: '11'
    },
    {
        label: 'Class 12',
        value: '12'
    }
];
const batchData = [
    {
        label: 'Batch A',
        value: 'A'
    },
    {
        label: 'Batch B',
        value: 'B'
    },
    {
        label: 'Batch C',
        value: 'C'
    },
    {
        label: 'Batch D',
        value: 'D'
    },
    {
        label: 'Batch E',
        value: 'E'
    },
    {
        label: 'Batch F',
        value: 'F'
    },
    {
        label: 'Batch G',
        value: 'G'
    },
    {
        label: 'Batch H',
        value: 'H'
    }
];
const yearData = [
    {
        label: '2017',
        value: '201'
    },
    {
        label: '2018',
        value: '2018'
    },
    {
        label: '2019',
        value: '2019'
    },
    {
        label: '2020',
        value: '2020'
    },
    {
        label: '2021',
        value: '2021'
    },
    {
        label: '2022',
        value: '2022'
    },
    {
        label: '2023',
        value: '2023'
    },
    {
        label: '2024',
        value: '2024'
    },
    {
        label: '2025',
        value: '2025'
    },
    {
        label: '2026',
        value: '2026'
    }
];
const PaymentType = [
    {
        label: 'Admission Fees',
        value: 'AdmissionFees'
    },
    {
        label: 'Note Fess new',
        value: 'NoteFessnew'
    },
    {
        label: 'January',
        value: 'January'
    }
];

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
const SMSNotice = () => {
    const theme = useTheme();
    const [classes, setClasses] = useState('');
    const [batch, setBatch] = useState('');
    const [year, setYear] = useState('');
    const [paymentType, setpaymentType] = useState('');
    const [fromDate, setfromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [show, setShow] = useState(false);

    const searchHandle = (e) => {
        e.preventDefault();
        console.log('ravi');
        setShow(true);
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
        <>
            <Heading title="Sms Absent" />
            <ContentContainer>
                <Box>
                    <Box
                        sx={{
                            p: '50px'
                        }}
                    >
                        <div>
                            <CustomHeading>search student</CustomHeading>
                            <form onSubmit={searchHandle}>
                                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                                    <Grid item xs={6} sm={6} md={3}>
                                        <CustomSelect
                                            style={{ marginRight: '10px' }}
                                            options={classData}
                                            label="Class"
                                            required={true}
                                            onChange={(e) => setClasses(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3}>
                                        <CustomSelect
                                            style={{ marginRight: '10px' }}
                                            options={batchData}
                                            label="Batch"
                                            required={true}
                                            onChange={(e) => setBatch(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3}>
                                        <CustomSelect
                                            style={{ marginRight: '10px' }}
                                            options={yearData}
                                            label="Batch Year"
                                            required={true}
                                            onChange={(e) => setYear(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={3}>
                                        <Button
                                            type="submit"
                                            size="small"
                                            variant="contained"
                                            sx={{ textTransform: 'capitalize', height: '2.2rem', paddingBottom: '1px' }}
                                        >
                                            <HiSearch style={{ fontSize: '26px' }} />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Box>
                </Box>
                <Box>
                    <Divider sx={{ my: 2 }} />
                    <CustomHeading> Write Message Here</CustomHeading>

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
            </ContentContainer>
        </>
    );
};

export default SMSNotice;
