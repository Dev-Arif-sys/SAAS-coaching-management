import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import SearchExams from './SearchExams';

const ViewResult = () => {
    return (
        <div>
            <Heading title="View Result Of Exams" />
            <ContentContainer>
                <SearchExams />
            </ContentContainer>
        </div>
    );
};

export default ViewResult;
