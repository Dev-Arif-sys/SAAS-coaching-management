import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import MPSearchBarOption from './MPSearchBarOption';

const ManagePayment = () => {
    return (
        <>
            <Heading title="Manage  Payment" />
            <ContentContainer>
                <MPSearchBarOption />
            </ContentContainer>
        </>
    );
};

export default ManagePayment;
