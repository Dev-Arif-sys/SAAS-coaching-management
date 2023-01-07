import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import Heading from './Heading';
import Institutions from './Institutions';

const ManageInstitution = () => {
    return (
        <div>
            <CustomMainHeading
                icon={
                    <MdManageAccounts
                        style={{
                            marginRight: '5px',
                            fontSize: '20px'
                        }}
                    />
                }
                title={'Manage Institution'}
            />
            <ContentContainer>
                <CustomHeading>View All Institutions</CustomHeading>
                <Institutions />
            </ContentContainer>
        </div>
    );
};

export default ManageInstitution;
