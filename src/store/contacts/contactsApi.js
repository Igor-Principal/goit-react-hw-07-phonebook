import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65bbc27e52189914b5bd0541.mockapi.io/api/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),

    createContact: builder.mutation({
      query: data => ({
        url: `contacts`,
        method: 'POST',
        body: data,
      }),
      providesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
