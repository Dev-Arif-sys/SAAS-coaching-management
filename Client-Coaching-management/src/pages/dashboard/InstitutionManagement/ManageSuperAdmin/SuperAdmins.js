import CustomError from 'components/ui/CustomError';
import CustomLoader from 'components/ui/CustomLoader';
import NoItem from 'components/ui/NoItem';
import { useGetSuperAdminQuery } from 'features/users/usersApi';
import SuperAdminTable from './SuperAdminTable';
const SuperAdmins = () => {
    const { data, isError, isLoading, error } = useGetSuperAdminQuery();
    const { result: superAdmins } = data || {};
    // deciding what to render
    let content;
    if (isLoading) content = <CustomLoader />;
    if (!isLoading && isError) content = <CustomError message={error?.data?.error || 'Something went wrong . Please try again'} />;
    if (!isLoading && !isError && superAdmins?.length === 0) content = <NoItem message={'No Admin found'} />;
    if (!isLoading && !isError && superAdmins?.length > 0) content = <SuperAdminTable superAdmins={superAdmins} />;
    return <div>{content}</div>;
};

export default SuperAdmins;
