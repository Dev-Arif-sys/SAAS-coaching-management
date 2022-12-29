import { apiSlice } from 'features/apiSlice';

const studentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => '/add_me',
            providesTags: ['Student']
        }),
        getStudent: builder.query({
            query: (id) => `/add_me/${id}`,
            providesTags: ['Student']
        }),
        addStudent: builder.mutation({
            query: (data) => ({
                url: '/students',
                method: 'POST',
                body: data
            })
        }),
        updateStudent: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/add_me/${id}`,
                method: 'PUT',
                body: data
            }),

            invalidatesTags: ['Student']
        }),

        deleteStudent: builder.mutation({
            query: (id) => ({
                url: `/add_me/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Student']
        })
    })
});

export const { useGetStudentsQuery, useGetStudentQuery, useAddStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation } =
    studentApi;
