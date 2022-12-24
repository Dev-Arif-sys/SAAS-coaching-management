import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import UserInformation from './UserInformation';

const AddUser = () => {
    return (
        <>
            <Heading title="Manage User" />
            <ContentContainer>
                <UserInformation />
            </ContentContainer>
        </>
    );
};

export default AddUser;
