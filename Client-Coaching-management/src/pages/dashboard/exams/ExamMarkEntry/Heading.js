import { useTheme } from '@mui/material';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { BsFillPeopleFill } from 'react-icons/bs';
const Heading = () => {
    const theme = useTheme();
    return (
        <div>
            <CustomMainHeading
                title="fee Overview"
                icon={
                    <BsFillPeopleFill
                        style={{
                            marginRight: '5px',
                            fontSize: '18px'
                        }}
                    />
                }
            />
        </div>
    );
};

export default Heading;
