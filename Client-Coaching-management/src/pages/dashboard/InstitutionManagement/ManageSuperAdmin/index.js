import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import Heading from './Heading';
import SuperAdmins from './SuperAdmins';

const ManageSuperAdmin = () => {
    return (
        <div>
            <Heading />
            <ContentContainer>
                <CustomHeading>See all super-admin</CustomHeading>
                <SuperAdmins />
            </ContentContainer>
        </div>
    );
};

export default ManageSuperAdmin;
