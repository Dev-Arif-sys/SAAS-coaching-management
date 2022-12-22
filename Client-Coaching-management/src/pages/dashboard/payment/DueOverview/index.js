import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import DueOverviewSearchBarOption from './DueOverviewSearchBarOption';

const DueOverview = () => {
    return (
        <>
            <Heading title="Due Overview" />
            <ContentContainer>
                <DueOverviewSearchBarOption />
            </ContentContainer>
        </>
    );
};

export default DueOverview;
