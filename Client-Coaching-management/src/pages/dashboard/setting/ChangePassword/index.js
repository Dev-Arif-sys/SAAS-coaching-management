import CustomButton from 'components/CustomButton';
import CustomButtonLoader from 'components/CustomButtonLoader';
import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import ChangeInputItem from './ChangeInputItem';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import SuperAdminAdd from './SuperAdminAdd/SuperAdminAdd';
import Super from './SuperAdminTable/index';

const ChangePassword = () => {
    return (
        <>
            <Heading title="Change Password" />
            <ContentContainer>
                <ChangeInputItem />
                <SuperAdminAdd />
                <SuperAdmin />
                <CustomButton />
                <CustomButtonLoader />
                <Super />
            </ContentContainer>
        </>
    );
};

export default ChangePassword;
