import { TSemester } from "../../../types/courseManagement.types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const CourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/semester-registrations',
          method: 'GET',
          params: params,
        };
      },
      providesTags:['semester'],
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        // url: "/semester-registration/create-semester-registration",
        url: '/semester-registrations/create-semester-registration',
        method: "POST",
        body: data,
      }),
      invalidatesTags:['semester']
    }),
    updateRegisteredSemester: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags:['semester']
    }),
  }),
});
export const {useAddRegisteredSemesterMutation,useGetAllRegisteredSemestersQuery,useUpdateRegisteredSemesterMutation}=CourseManagementApi