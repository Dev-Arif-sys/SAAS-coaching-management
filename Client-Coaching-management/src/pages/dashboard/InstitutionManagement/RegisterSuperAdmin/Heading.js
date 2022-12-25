import CustomMainHeading from 'components/ui/CustomMainHeading';
import { FaSchool } from 'react-icons/fa';
const Heading = () => {
    return (
        <CustomMainHeading
            icon={
                <FaSchool
                    style={{
                        marginRight: '5px',
                        fontSize: '18px'
                    }}
                />
            }
            title={' Register SuperAdmin'}
        />
    );
};

export default Heading;
