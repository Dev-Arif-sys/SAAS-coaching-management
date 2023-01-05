import { Box, Grid, useTheme } from '@mui/material';
import CustomSelect from 'components/ui/CustomSelect';
import CustomTextField from 'components/ui/CustomTextField';
import DatePicker from 'components/ui/DatePicker';

const examData = [
    { label: 'Theory (CQ)', value: 'Theory (CQ)' },
    { label: 'Objective (MCQ)', value: 'Objective (MCQ)' },
    { label: 'CQ and MCQ', value: 'CQ and MCQ' },
    { label: 'Quiz', value: 'Quiz' }
];
const ExamDetails = ({ formik }) => {
    const theme = useTheme();
    const { exam_subject, exam_title, exam_type, exam_cq_mark, exam_mcq_mark, exam_date } = formik.values;

    return (
        <Box>
            <Box sx={{ my: 2 }}>
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
                                    name="exam_subject"
                                    value={exam_subject}
                                    onChange={formik.handleChange}
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
                                    name="exam_title"
                                    value={exam_title}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomSelect
                                    style={{ marginRight: '10px' }}
                                    options={examData}
                                    label="Exam Type"
                                    required={true}
                                    name="exam_type"
                                    value={exam_type}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="CQ Mark"
                                    size="small"
                                    style={{
                                        marginRight: '10px'
                                    }}
                                    name="exam_cq_mark"
                                    value={exam_cq_mark}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <CustomTextField
                                    label="MCQ Mark"
                                    size="small"
                                    style={{
                                        marginRight: '10px'
                                    }}
                                    name="exam_mcq_mark"
                                    value={exam_mcq_mark}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <DatePicker
                                    label={'Select Date'}
                                    required={true}
                                    name="exam_date"
                                    value={exam_date}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ExamDetails;
