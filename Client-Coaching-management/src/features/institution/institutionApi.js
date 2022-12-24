import { apiSlice } from 'features/apiSlice';

const institutionApi = apiSlice.injectEndpoints({
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
        deleteInstitution: builder.mutation({
            query: (id) => ({
                url: `/institutions/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Institutions']
        })
    })
});

export const { useAddInstitutionMutation, useGetInstitutionsQuery, useDeleteInstitutionMutation } = institutionApi;
