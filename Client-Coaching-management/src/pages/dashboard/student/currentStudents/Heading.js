import { Typography } from '@mui/material';
import CustomMainHeading from 'components/ui/CustomMainHeading';
import { BsFillPeopleFill } from 'react-icons/bs';

const Heading = ({ title }) => {
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
                {title}
            </Typography>
        </CustomMainHeading>
    );
};

export default Heading;
