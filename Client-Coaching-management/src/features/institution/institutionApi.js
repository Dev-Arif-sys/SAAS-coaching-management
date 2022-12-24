import { apiSlice } from 'features/apiSlice';
import { usersApi } from 'features/users/usersApi';

const institutionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addInstitution: builder.mutation({
            query: (data) => ({
                url: '/institutions',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const { data: institution } = await queryFulfilled;

                if (institution?.result?._id) {
                    // adding user in the database
                    console.log(institution, arg);
                    dispatch(
                        usersApi.endpoints.addUser.initiate({
                            name: arg.user_name,
                            number: arg.user_number,
                            institution_id: institution?.result?._id,
                            role: arg.user_role,
                            password: arg.user_password
                        })
                    );
                }
            }
        })
    })
});

export const { useAddInstitutionMutation } = institutionApi;
