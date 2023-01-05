import { Box, Stack, useTheme } from '@mui/material';
import MultiPurposeSearch from 'components/search/MultiPurposeSearch';
import ContentContainer from 'components/ui/ContentContainer';
import CustomError from 'components/ui/CustomError';
import CustomHeading from 'components/ui/CustomHeading';
import CustomLoader from 'components/ui/CustomLoader';
import NoItem from 'components/ui/NoItem';
import { useGetStudentsQuery } from 'features/Student/studentApi';
import { useEffect, useState } from 'react';
import Heading from './Heading';
import SearchStudents from './SearchStudents';
import StudentTable from './StudentTable';

const CurrentStudents = () => {
    const theme = useTheme();

    const [searchTerm, setSearchTerm] = useState('');
    const [searchInfo, setSearchInfo] = useState({
        std_class: '',
        std_batch_year: '',
        std_batch: ''
    });
    const [isSkip, setSkip] = useState(true);
    const { isError, isSuccess, error, isLoading, data, refetch } = useGetStudentsQuery(
        { ...searchInfo, search: searchTerm },
        {
            skip: isSkip
        }
    );
    const { result: students } = data || {};

    // get students based on search term
    useEffect(() => {
        if (searchTerm !== '' && searchInfo.std_batch !== '') {
            refetch();
        } else if (searchInfo.std_batch !== '') {
            refetch();
        }
    }, [searchTerm]);

    // submitting search form
    const handleSubmit = (e) => {
        e.preventDefault();
        setSkip(false);
        refetch();
    };

    // decide what to render
    let content;
    if (isLoading) content = <CustomLoader />;
    if (!isLoading && isError) content = <CustomError message={error?.data?.error || 'Something went wrong . Please try again'} />;
    if (!isLoading && !isError && students?.length === 0) content = <NoItem message={'No students found'} />;
    if (!isLoading && !isError && students?.length > 0) content = <StudentTable students={students} />;
    return (
        <div>
            <Heading title=" Current Students" />

            <ContentContainer>
                <SearchStudents onSubmit={handleSubmit} searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
                {/* table title and search */}

                <Stack direction={{ md: 'row', xs: 'column' }} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <CustomHeading>
                            Class: {searchInfo.std_class} || Batch: {searchInfo.std_batch} || Year: {searchInfo.std_batch_year}
                        </CustomHeading>
                    </Box>
                    <Box>
                        <MultiPurposeSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                    </Box>
                </Stack>

                {content}
            </ContentContainer>
        </div>
    );
};

export default CurrentStudents;
