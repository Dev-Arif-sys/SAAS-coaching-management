import { Typography } from '@mui/material';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { BsFillPeopleFill } from 'react-icons/bs';

const Heading = ({ title, icon }) => {
    return (
        <>
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
        </>
    );
};

export default Heading;
