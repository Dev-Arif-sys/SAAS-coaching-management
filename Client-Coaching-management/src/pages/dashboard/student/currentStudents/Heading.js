import { Typography } from '@mui/material';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { BsFillPeopleFill } from 'react-icons/bs';

const Heading = () => {
    return (
        <CustomMainHeading>
            {' '}
            <BsFillPeopleFill
                style={{
                    marginRight: '5px',
                    fontSize: '18px'
                }}
            />
            <Typography sx={{ fontWeight: '700', fontSize: '20px' }} variant="h4">
                {' '}
                Current Student
            </Typography>
        </CustomMainHeading>
    );
};

export default Heading;
