import CustomLoader from 'components/ui/CustomLoader';
import usePersist from 'hooks/userPersist';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useRefreshMutation } from './usersApi';
import { selectCurrentToken } from './usersSlice';

const PersistLogin = () => {
    const [persist] = usePersist();
    const token = useSelector(selectCurrentToken);
    const [refresh, { isUninitialized, isSuccess, isLoading, isError, error }] = useRefreshMutation();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            }
        };
        if (!token && persist) verifyRefreshToken();
    }, []);

    let content;
    if (!persist) {
        // persist: no
        console.log('no persist');
        content = <Outlet />;
    } else if (isLoading) {
        //persist: yes, token: no
        console.log('loading');
        content = <CustomLoader />;
    } else if (isError) {
        //persist: yes, token: no
        console.log('error');
        content = <Navigate to="/auth/login" replace />;
    } else if (isSuccess) {
        //persist: yes, token: yes
        console.log('success');
        content = <Outlet />;
    } else if (token && isUninitialized) {
        //persist: yes, token: yes
        console.log('token and uninit');
        console.log(isUninitialized);
        content = <Outlet />;
    }

    return content;
};

export default PersistLogin;
