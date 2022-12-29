import { Button, Typography, useTheme } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import BrotherSisterInfo from './BrotherSisterInfo';
import ParentsInformation from './ParentsInformation';
import StudentInformation from './StudentInformation';

const RegisterStudents = () => {
    const theme = useTheme();
    const [dynamicField, setDynamicField] = useState({
        std_class: '',
        std_batch: '',
        std_batch_year: ''
    });
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
            console.log({ ...values, ...dynamicField });
        }
    });

    console.log({ dynamicField });
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
            <ContentContainer>
                <form onSubmit={formik.handleSubmit}>
                    <CustomHeading>Student Information</CustomHeading>
                    <StudentInformation formik={formik} dynamicField={dynamicField} setDynamicField={setDynamicField} />
                    <CustomHeading>Parents Information</CustomHeading>
                    <ParentsInformation formik={formik} />
                    <CustomHeading>Brother's and Sister's Information</CustomHeading>
                    <BrotherSisterInfo formik={formik} />

                    <Button type="submit">Submit </Button>
                </form>
            </ContentContainer>
        </>
    );
};

export default RegisterStudents;
