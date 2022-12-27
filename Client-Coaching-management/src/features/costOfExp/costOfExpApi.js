import { apiSlice } from 'features/apiSlice';

const costOfExpApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCosts: builder.query({
            query: () => '/add_me',
            providesTags: ['Cost']
        }),
        getCost: builder.query({
            query: (id) => `/add_me/${id}`,
            providesTags: ['Cost']
        }),
        addCost: builder.mutation({
            query: (data) => ({
                url: '/add_me',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Cost']
        }),
        updateCost: builder.mutation({
            query: (id, ...data) => ({
                url: `/add_me/${id}`,
                method: 'PUT',
                body: data
            }),

            invalidatesTags: ['Cost']
        }),

        deleteCost: builder.mutation({
            query: (id) => ({
                url: `/add_me/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cost']
        })
    })
});

export const { useGetCostsQuery, useGetCostQuery, useAddCostMutation, useUpdateCostMutation, useDeleteCostMutation } = costOfExpApi;
