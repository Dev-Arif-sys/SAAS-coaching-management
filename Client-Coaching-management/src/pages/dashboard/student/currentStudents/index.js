import { Box, useTheme } from '@mui/material';
import Heading from './Heading';
import SearchStudents from './SearchStudents';
import StudentTable from './StudentTable';

const CurrentStudents = () => {
    const theme = useTheme();
    return (
        <div>
            <Heading />

            <Box
                sx={{
                    backgroundColor: theme.palette.common.white,
                    padding: '15px 8px',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: '4px',
                    zIndex: 1
                }}
            >
                <SearchStudents />

                <StudentTable />
            </Box>
        </div>
    );
};

export default CurrentStudents;
