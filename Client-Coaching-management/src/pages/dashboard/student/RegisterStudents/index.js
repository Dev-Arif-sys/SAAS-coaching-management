import { Box, Button, Typography, useTheme } from '@mui/material';
import CustomHeading from 'components/ui/CustomHeading';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { useFormik } from 'formik';
import { FaRegListAlt } from 'react-icons/fa';
import BrotherSisterInfo from './BrotherSisterInfo';
import ParentsInformation from './ParentsInformation';
import StudentInformation from './StudentInformation';

const RegisterStudents = () => {
    const theme = useTheme();
    const formik = useFormik({
        initialValues: {
            std_name: '',
            std_institution: '',
            std_phone: '',
            payment_contract: '',
            std_class: '',
            std_batch: '',
            std_batch_year: '',
            std_group: '',
            std_enrolled_date: '',
            std_gender: '',
            std_dateOfBirth: '',
            std_village: '',
            std_post: '',
            std_thana: '',
            std_zilla: '',
            std_mother_name: '',
            std_mother_occupation: '',
            std_mother_phone: '',
            std_father_name: '',
            std_father_occupation: '',
            std_father_phone: '',
            std_bro1_name: '',
            std_bro1_class: '',
            std_bro1_institution: '',
            std_bro2_name: '',
            std_bro2_class: '',
            std_bro2_institution: '',
            std_bro3_name: '',
            std_bro3_class: '',
            std_bro3_institution: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <>
            <CustomMainHeading>
                {' '}
                <FaRegListAlt
                    style={{
                        marginRight: '5px',
                        fontSize: '18px'
                    }}
                />
                <Typography sx={{ fontWeight: '700', fontSize: '20px' }} variant="h4">
                    {' '}
                    Register Student
                </Typography>
            </CustomMainHeading>
            <Box
                sx={{
                    backgroundColor: theme.palette.common.white,
                    padding: '15px 8px',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: '4px',
                    zIndex: 1
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <CustomHeading>Student Information</CustomHeading>
                    <StudentInformation formik={formik} />
                    <CustomHeading>Parents Information</CustomHeading>
                    <ParentsInformation formik={formik} />
                    <CustomHeading>Brother's and Sister's Information</CustomHeading>
                    <BrotherSisterInfo formik={formik} />

                    <Button type="submit">Submit </Button>
                </form>
            </Box>
        </>
    );
};

export default RegisterStudents;
