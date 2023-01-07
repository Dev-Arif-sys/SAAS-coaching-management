import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import CustomLoader from 'components/ui/CustomLoader';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import { useGetStudentQuery, useUpdateStudentMutation } from 'features/Student/studentapi';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { AiOutlineSave } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import BrotherSisterInfo from '../RegisterStudents/BrotherSisterInfo';
import ParentsInformation from '../RegisterStudents/ParentsInformation';
import StudentInformation from '../RegisterStudents/StudentInformation';
import { useSelector } from 'react-redux';
const UpdateStudents = () => {
    const theme = useTheme();
    const { id } = useParams();
    const hidden = useSelector((state) => state.student.IsUpdate);
    console.log(hidden);
    const [dynamicField, setDynamicField] = useState({
        std_class: '',
        std_batch: '',
        std_batch_year: ''
    });
    const [initialValue, setInitialValue] = useState({
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
    });
    const { data: studentData, isLoading: getStudentLoading, isSuccess: getStudentSuccess } = useGetStudentQuery(id);
    const { result: student } = studentData || {};

    const [updateStudent, { isError, isLoading, isSuccess, error, data }] = useUpdateStudentMutation();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValue,
        onSubmit: (values) => {
            updateStudent({ id: student._id, ...values });
        }
    });

    // updating formik states after api called
    useEffect(() => {
        if (student?._id) {
            setInitialValue({ ...student });
            setDynamicField({
                std_class: student.std_class,
                std_batch_year: student.std_batch_year,
                std_batch: student.std_batch
            });
        }
    }, [student?._id]);
    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error || error?.error} />;
    if (!isError && isSuccess) alert = <CustomSnackbar status="success" message={data?.message} />;

    // decide content to render
    let content;
    if (getStudentLoading) content = <CustomLoader />;
    if (!getStudentLoading && getStudentSuccess) {
        content = (
            <>
                <form onSubmit={formik.handleSubmit}>
                    <StudentInformation formik={formik} dynamicField={dynamicField} setDynamicField={setDynamicField} />
                    <CustomHeading>Parents Information</CustomHeading>
                    <ParentsInformation formik={formik} />
                    <CustomHeading>Brother's and Sister's Information</CustomHeading>
                    <BrotherSisterInfo formik={formik} />
                    {hidden === false ? (
                        ''
                    ) : (
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
                    )}
                </form>

                {alert}
            </>
        );
    }
    return (
        <>
            {hidden == true ? (
                <CustomMainHeading
                    title="Update Student"
                    icon={
                        <FiEdit
                            style={{
                                marginRight: '5px',
                                fontSize: '18px'
                            }}
                        />
                    }
                />
            ) : (
                <CustomMainHeading
                    title="View Student"
                    icon={
                        <FiEdit
                            style={{
                                marginRight: '5px',
                                fontSize: '18px'
                            }}
                        />
                    }
                />
            )}

            <ContentContainer>
                <CustomHeading>Student Information</CustomHeading>
                {content}
            </ContentContainer>
        </>
    );
};

export default UpdateStudents;
