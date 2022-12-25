import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import Heading from './Heading';
import Institutions from './Institutions';

const ManageInstitution = () => {
    return (
        <div>
            <Heading />
            <ContentContainer>
                <CustomHeading>View All Institutions</CustomHeading>
                <Institutions />
            </ContentContainer>
        </div>
    );
};

export default ManageInstitution;
