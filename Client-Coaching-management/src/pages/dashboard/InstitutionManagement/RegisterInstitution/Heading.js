import { Typography } from '@mui/material';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { FaSchool } from 'react-icons/fa';
const Heading = () => {
    return (
        <CustomMainHeading>
            {' '}
            <FaSchool
                style={{
                    marginRight: '5px',
                    fontSize: '18px'
                }}
            />
            <Typography sx={{ fontWeight: '700', fontSize: '20px' }} variant="h4">
                {' '}
                Register Institution
            </Typography>
        </CustomMainHeading>
    );
};

export default Heading;
