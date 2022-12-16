import React from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import CustomSelect from 'components/ui/CustomSelect';
import { useState } from 'react';
import DatePicker from 'components/ui/DatePicker';

const examData = [
    { label: 'Theory (CQ)', value: 'Theory (CQ)' },
    { label: 'Objective (MCQ)', value: 'Objective (MCQ)' },
    { label: 'CQ and MCQ', value: 'CQ and MCQ' },
    { label: 'Quiz', value: 'Quiz' }
];
const ExamDetails = ({ data }) => {
    const theme = useTheme();
    const [classes, batch, year] = data;

    const [subject, setSubject] = useState('');
    const [exams, setExams] = useState('');
    const [title, setTitle] = useState('');
    const [cqMark, setCqMark] = useState('');
    const [mcqMark, setMCqMark] = useState('');
    const [date, setDate] = useState('');

    return (
        <Box>
            <Box sx={{}}>
                <Box
                    sx={{
                        background: theme.palette.text.heading,
                        mt: '10px',
                        p: '3px'
                    }}
                >
                    <Typography variant="h2" color={'white'}>
                        Students Of Class {classes} , Batch {batch}, Year {year}
                    </Typography>
                </Box>

                <Box sx={{}}>
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'flex' },

                            mt: 3
                        }}
                    >
                        <CustomTextField
                            label="Subject"
                            required={true}
                            size="small"
                            style={{
                                marginRight: '10px'
                            }}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <CustomTextField
                            label="Title"
                            required={true}
                            size="small"
                            style={{
                                marginRight: '10px'
                            }}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <CustomSelect
                            style={{ marginRight: '10px' }}
                            options={examData}
                            label="Exam Type"
                            required={true}
                            onChange={(e) => setExams(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'flex' },
                            mt: 3
                        }}
                    >
                        <CustomTextField
                            label="CQ Mark"
                            size="small"
                            style={{
                                marginRight: '10px'
                            }}
                            onChange={(e) => setCqMark(e.target.value)}
                        />
                        <CustomTextField
                            label="MCQ Mark"
                            size="small"
                            style={{
                                marginRight: '10px'
                            }}
                            onChange={(e) => setMCqMark(e.target.value)}
                        />
                        <DatePicker label={'Select Date'} required={true} onChange={(e) => setDate(e.target.value)} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ExamDetails;
