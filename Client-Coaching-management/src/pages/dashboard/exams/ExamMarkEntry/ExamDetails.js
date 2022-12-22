import React from 'react';
import { Box, Stack, Grid, Typography, Container, useTheme, TableCell, TableRow, TableBody } from '@mui/material';
import CustomTextField from 'components/ui/CustomTextField';
import CustomSelect from 'components/ui/CustomSelect';
import { useState } from 'react';
import DatePicker from 'components/ui/DatePicker';
import CustomHeading from 'components/ui/CustomHeading';

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
            <Box sx={{ my: 2 }}>
                <CustomHeading>
                    Students Of Class {classes} , Batch {batch}, Year {year}
                </CustomHeading>

                <Box sx={{ my: 3 }}>
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'flex' },

                            mt: 3
                        }}
                    >
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'end', mb: 3 }}>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="Subject"
                                    required={true}
                                    size="small"
                                    style={{
                                        marginRight: '10px'
                                    }}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="Title"
                                    required={true}
                                    size="small"
                                    style={{
                                        marginRight: '10px'
                                    }}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomSelect
                                    style={{ marginRight: '10px' }}
                                    options={examData}
                                    label="Exam Type"
                                    required={true}
                                    onChange={(e) => setExams(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="CQ Mark"
                                    size="small"
                                    style={{
                                        marginRight: '10px'
                                    }}
                                    onChange={(e) => setCqMark(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="MCQ Mark"
                                    size="small"
                                    style={{
                                        marginRight: '10px'
                                    }}
                                    onChange={(e) => setMCqMark(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <DatePicker label={'Select Date'} required={true} onChange={(e) => setDate(e.target.value)} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ExamDetails;
