import { apiSlice } from 'features/apiSlice';

const studentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: ({ std_class, std_batch_year, std_batch, search }) => {
                let url = `/students?std_class=${std_class}&std_batch_year=${std_batch_year}&std_batch=${std_batch}`;
                if (search && search !== '') {
                    url = url + `&search=${search}`;
                }
                return url;
            },
            providesTags: ['Students']
        }),
        getStudent: builder.query({
            query: (id) => `/students/${id}`,
            providesTags: ['Student']
        }),
        addStudent: builder.mutation({
            query: (data) => ({
                url: '/students',
                method: 'POST',
                body: data
            })
        }),
        getBatches: builder.mutation({
            query: ({ std_class, std_batch_year }) => ({
                url: `/students/batch?std_class=${std_class}&std_batch_year=${std_batch_year}`,
                method: 'GET'
            })
        }),
        updateStudent: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/students/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Students', 'Student']
        }),

        deleteStudent: builder.mutation({
            query: (id) => ({
                url: `/students/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Student']
        })
    })
});

export const {
    useGetStudentsQuery,
    useGetStudentQuery,
    useAddStudentMutation,
    useUpdateStudentMutation,
    useDeleteStudentMutation,
    useGetBatchesMutation
} = studentApi;
