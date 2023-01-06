import { Box, Stack, useTheme } from '@mui/material';
import MultiPurposeSearch from 'components/search/MultiPurposeSearch';
import ContentContainer from 'components/ui/ContentContainer';
import CustomError from 'components/ui/CustomError';
import CustomHeading from 'components/ui/CustomHeading';
import CustomLoader from 'components/ui/CustomLoader';
import NoItem from 'components/ui/NoItem';
import SearchStudents from 'components/ui/SearchStudents';
import { useGetStudentsQuery } from 'features/Student/studentapi';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import ExamDetails from './ExamDetails';
import Heading from './Heading';
import StudentsMarkTable from './StudentsMarkTable';

const ExamMarkEntry = () => {
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

    const formik = useFormik({
        initialValues: {
            exam_subject: '',
            exam_title: '',
            exam_type: '',
            exam_cq_mark: '',
            exam_mcq_mark: '',
            exam_date: ''
        },
        onSubmit: (values) => {
            console.log({ ...values });
        }
    });

    let tableHeading;
    if (isSuccess) {
        tableHeading = (
            <Stack direction={{ md: 'row', xs: 'column' }} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <CustomHeading>Entry exam mark here</CustomHeading>
                </Box>
                <Box>
                    <MultiPurposeSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                </Box>
            </Stack>
        );
    }

    // decide what to render
    let content;
    if (isLoading) content = <CustomLoader />;
    if (!isLoading && isError) content = <CustomError message={error?.data?.error || 'Something went wrong . Please try again'} />;
    if (!isLoading && !isError && students?.length === 0) content = <NoItem message={'No students found'} />;
    if (!isLoading && !isError && students?.length > 0) content = <StudentsMarkTable students={students} />;

    return (
        <div>
            <Heading />
            <ContentContainer>
                <SearchStudents onSubmit={handleSubmit} searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
                <CustomHeading>
                    Class: {searchInfo.std_class} || Batch: {searchInfo.std_batch} ||Year: {searchInfo.std_batch_year}
                </CustomHeading>
                <ExamDetails formik={formik} />
                {tableHeading}

                {content}
            </ContentContainer>
        </div>
    );
};

export default ExamMarkEntry;
