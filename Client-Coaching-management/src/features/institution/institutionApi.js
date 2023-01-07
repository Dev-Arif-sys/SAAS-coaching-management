import { apiSlice } from 'features/apiSlice';

const institutionApi = apiSlice.injectEndpoints({
    tagTypes: ['Institutions'],
    endpoints: (builder) => ({
        getInstitutions: builder.query({
            query: () => '/institutions',
            providesTags: ['Institutions']
        }),
        addInstitution: builder.mutation({
            query: (data) => ({
                url: '/institutions',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Institutions']
        }),
        getInstitution: builder.query({
            query: (id) => `/institutions/${id}`,
            providesTags: ['Institutions']
        }),
        updateInstitution: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/institutions/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Institutions', 'Institution']
        }),
        deleteInstitution: builder.mutation({
            query: (id) => ({
                url: `/institutions/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Institutions']
        })
    })
});

export const {
    useAddInstitutionMutation,
    useGetInstitutionsQuery,
    useDeleteInstitutionMutation,
    useGetInstitutionQuery,
    useUpdateInstitutionMutation
} = institutionApi;
