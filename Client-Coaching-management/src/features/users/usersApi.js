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
            })
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
        })
    })
});

export const { useAddUserMutation, useLoginMutation, useRefreshMutation } = usersApi;
