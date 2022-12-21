import { useTheme } from '@mui/material';
import ContentContainer from 'components/ui/ContentContainer';
import Heading from './Heading';
import SearchStudents from './SearchStudents';
import StudentTable from './StudentTable';

const CurrentStudents = () => {
    const theme = useTheme();
    return (
        <div>
            <Heading />

            <ContentContainer>
                <SearchStudents />

                <StudentTable />
            </ContentContainer>
        </div>
    );
};

export default CurrentStudents;
