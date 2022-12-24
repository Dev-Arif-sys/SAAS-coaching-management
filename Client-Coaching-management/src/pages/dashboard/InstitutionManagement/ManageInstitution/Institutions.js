import CustomError from 'components/ui/CustomError';
import CustomLoader from 'components/ui/CustomLoader';
import NoItem from 'components/ui/NoItem';
import { useGetInstitutionsQuery } from 'features/institution/institutionApi';
import InstitutionTable from './InstitutionTable';

const Institutions = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetInstitutionsQuery();
    const { result: institutions } = data || {};
    console.log(error);
    // deciding what to render
    let content;
    if (isLoading) content = <CustomLoader />;
    if (!isLoading && isError) content = <CustomError message={error?.data?.error || 'Something went wrong . Please try again'} />;
    if (!isLoading && !isError && institutions?.length === 0) content = <NoItem message={'No institution found'} />;
    if (!isLoading && !isError && institutions?.length > 0) content = <InstitutionTable institutions={institutions} />;
    return <div>{content}</div>;
};

export default Institutions;
