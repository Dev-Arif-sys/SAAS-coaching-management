import CustomMainHeading from 'components/ui/CustomMainHeading';
import { MdManageAccounts } from 'react-icons/md';
const Heading = () => {
    return (
        <CustomMainHeading
            icon={
                <MdManageAccounts
                    style={{
                        marginRight: '5px',
                        fontSize: '20px'
                    }}
                />
            }
            title={' Manage Institution'}
        />
    );
};

export default Heading;
