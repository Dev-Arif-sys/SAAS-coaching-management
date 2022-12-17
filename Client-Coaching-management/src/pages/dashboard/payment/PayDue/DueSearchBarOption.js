import CustomSelect from 'components/ui/CustomSelect';
import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme } from '@mui/material';
import CustomSearchButton from 'components/ui/CustomSearchButton';
import DatePicker from 'components/ui/DatePicker';

import { styled } from '@mui/material/styles';
import DuePaymentDetails from './DuePaymentDetails';
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

const disItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        display: 'black'
    }
}));
const DueSearchBarOption = () => {
    const theme = useTheme();
    const [classes, setClasses] = useState('');
    const [batch, setBatch] = useState('');
    const [year, setYear] = useState('');
    const [paymentType, setpaymentType] = useState('');
    const [fromDate, setfromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [show, setShow] = useState(false);

    const searchHandle = () => {
        console.log('ravi');
        setShow(true);
    };

    return (
        <Box>
            <Box
                sx={{
                    p: '50px'
                }}
            >
                <Typography variant="h2" Typography color={theme.palette.text.heading} mb={2}>
                    Student Payment Due
                </Typography>

                <disItemWrapper>
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={classData}
                        label="Class"
                        required={true}
                        onChange={(e) => setClasses(e.target.value)}
                    />
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={batchData}
                        label="Batch"
                        required={true}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={yearData}
                        label="Batch Year"
                        required={true}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <CustomSelect
                        style={{ marginRight: '10px' }}
                        options={PaymentType}
                        label="Payment Type"
                        required={true}
                        onChange={(e) => setpaymentType(e.target.value)}
                    />
                    <DatePicker
                        style={{ marginRight: '10px' }}
                        label="From Date "
                        required={true}
                        onChange={(e) => setfromDate(e.target.value)}
                    />
                    <DatePicker
                        style={{ marginRight: '10px' }}
                        label="To Date "
                        required={true}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                    <CustomSearchButton handle={searchHandle} />
                </disItemWrapper>

                {show ? (
                    <>
                        {/* {' '}
                    <ExamDetails data={[classes, batch, year]} />
                    <hr />
                    <SearchStudentsData data={[classes, batch, year]} />{' '} */}
                        <DuePaymentDetails data={[classes, batch, year, paymentType, fromDate, toDate]}></DuePaymentDetails>
                    </>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    );
};

export default DueSearchBarOption;
