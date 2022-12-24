import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import ChangeInputItem from './ChangeInputItem';
import SuperAdmin from './SuperAdmin/SuperAdmin';

const ChangePassword = () => {
    return (
        <>
            <Heading title="Change Password" />
            <ContentContainer>
                <ChangeInputItem />
            </ContentContainer>
            <SuperAdmin />
        </>
    );
};

export default ChangePassword;
