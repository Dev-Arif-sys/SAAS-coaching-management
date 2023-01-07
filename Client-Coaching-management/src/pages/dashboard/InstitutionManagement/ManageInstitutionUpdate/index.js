import { Button } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import CustomSnackbar from 'components/ui/CustomSnackbar';
import { useGetInstitutionQuery, useUpdateInstitutionMutation } from 'features/institution/institutionApi';
import { useFormik } from 'formik';
import Heading from '../ManageInstitution/Heading';
import InstitutionInformation from '../RegisterInstitution/InstitutionInformation';
import UserInformation from '../RegisterInstitution/UserInformation';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const ManageInstitutionUpdate = () => {
    const { id } = useParams();
    const hidden = useSelector((state) => state.student.IsUpdate);
    const { data: InstitutionData } = useGetInstitutionQuery(id);
    const { result: institution } = InstitutionData || {};
    const [updateInstitution, { isError, isLoading, isSuccess, error, data }] = useUpdateInstitutionMutation();

    const [initialValue, setInitialValue] = useState({
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
    });
    console.log(institution);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValue,
        onSubmit: (values) => {
            updateInstitution({ id: institution._id, ...values });
        }
    });

    // updating formik states after api called
    useEffect(() => {
        if (institution?._id) {
            setInitialValue({ ...institution });
        }
    }, [institution?._id]);

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
                    {hidden === false ? '' : <Button type="submit">Submit</Button>}
                </form>
                {alert}
            </ContentContainer>
        </div>
    );
};

export default ManageInstitutionUpdate;
