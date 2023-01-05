import { apiSlice } from 'features/apiSlice';
import { setCredentials } from './usersSlice';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/auth',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(setCredentials({ ...data }));
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        addUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                const { user } = data || {};
                console.log(user);
                if (user?.institution?.length > 0) {
                    dispatch(
                        apiSlice.util.updateQueryData('getInstitutions', undefined, (draft) => {
                            // console.log(current(draft));
                            const InstitutionToEdit = draft.result.find((c) => c._id === user?.institution);
                            InstitutionToEdit.users.push(user);
                        })
                    );
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({ url: '/auth/refresh', method: 'GET' }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(setCredentials({ ...data }));
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        getSuperAdmin: builder.query({
            query: () => ({
                url: '/auth/super-admin',
                method: 'GET'
            })
        })
    })
});

export const { useAddUserMutation, useLoginMutation, useRefreshMutation, useGetSuperAdminQuery } = usersApi;
