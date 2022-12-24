import { apiSlice } from 'features/apiSlice';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            }),
            
        })
    })
});

export const { useAddUserMutation } = usersApi;
