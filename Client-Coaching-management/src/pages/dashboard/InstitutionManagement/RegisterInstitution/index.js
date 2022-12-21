import { Button } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import { useFormik } from 'formik';
import Heading from './Heading';
import InstitutionInformation from './InstitutionInformation';
import UserInformation from './UserInformation';

const RegisterInstitution = () => {
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
            console.log(values);
        }
    });
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
            </ContentContainer>
        </div>
    );
};

export default RegisterInstitution;
