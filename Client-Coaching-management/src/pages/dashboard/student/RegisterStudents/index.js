import LoadingButton from '@mui/lab/LoadingButton';
import { Typography, useTheme } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import { useAddStudentMutation } from 'features/Student/studentApi';
import { useFormik } from 'formik';
import { useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
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
    const [addStudent, { isError, isLoading, isSuccess, error, data }] = useAddStudentMutation();
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
            addStudent({ ...values, ...dynamicField });
        }
    });

    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error || error?.error} />;
    if (!isError && isSuccess) alert = <CustomSnackbar status="success" message={data?.message} />;
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

                    <LoadingButton
                        size="small"
                        color="primary"
                        loading={isLoading}
                        loadingPosition="end"
                        type="submit"
                        variant="contained"
                        endIcon={<AiOutlineSave />}
                        disabled={isLoading}
                        sx={{
                            mt: 1
                        }}
                    >
                        Save
                    </LoadingButton>
                </form>
            </ContentContainer>
            {alert}
        </>
    );
};

export default RegisterStudents;
