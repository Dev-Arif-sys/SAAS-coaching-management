import { Button } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import { useAddInstitutionMutation } from 'features/institution/institutionApi';
import { useFormik } from 'formik';
import Heading from './Heading';
import InstitutionInformation from './InstitutionInformation';
import UserInformation from './UserInformation';

const RegisterInstitution = () => {
    const [addInstitution, { isSuccess, isLoading, isError, data, error }] = useAddInstitutionMutation();

    const formik = useFormik({
        initialValues: {
            institution_name: '',
            institution_EIIN: '',
            institution_logo: '',
            contact_person_name: '',
            contact_person_phone: '',
            institution_head_name: '',
            institution_head_phone: '',
            institution_reg_date: '',
            institution_payment_policy: 'monthly',
            institution_district: '',
            institution_village: '',
            institution_thana: '',
            user_name: '',
            user_number: '',
            user_role: '',
            user_password: ''
        },
        onSubmit: (values) => {
            addInstitution(values);
        }
    });

    // decide what alert to show
    let alert = '';
    if (isError) alert = <CustomSnackbar status="error" message={error?.data?.error} />;
    if (!isError && isSuccess) alert = <CustomSnackbar status="success" message={data?.message} />;
    return (
        <div>
            <Heading />
            <ContentContainer>
                <form onSubmit={formik.handleSubmit}>
                    <CustomHeading>Institution Information</CustomHeading>
                    <InstitutionInformation formik={formik} />
                    <CustomHeading>Admin Information</CustomHeading>
                    <UserInformation formik={formik} />
                    <Button type="submit">Submit</Button>
                </form>
                {alert}
            </ContentContainer>
        </div>
    );
};

export default RegisterInstitution;
