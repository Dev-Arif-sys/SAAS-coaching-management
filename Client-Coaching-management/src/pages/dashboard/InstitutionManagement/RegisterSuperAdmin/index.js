import ContentContainer from 'components/ui/ContentContainer';
import CustomHeading from 'components/ui/CustomHeading';
import Heading from './Heading';
import RegForm from './RegForm';

const RegisterSuperAdmin = () => {
    return (
        <div>
            <Heading />
            <ContentContainer>
                <CustomHeading>Add a super-admin</CustomHeading>
                <RegForm />
            </ContentContainer>
        </div>
    );
};

export default RegisterSuperAdmin;
