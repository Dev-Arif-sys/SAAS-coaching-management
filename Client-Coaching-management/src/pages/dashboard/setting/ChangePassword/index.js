import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import ChangeInputItem from './ChangeInputItem';

const ChangePassword = () => {
    return (
        <>
            <Heading title="Change Password" />
            <ContentContainer>
                <ChangeInputItem />
            </ContentContainer>
        </>
    );
};

export default ChangePassword;
