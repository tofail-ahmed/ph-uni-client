import { TAcademicSemester } from "../../../types/academicManagement.type";
import {  TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicSemesterApi=baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getAllSemesters: builder.query({
              query: (args) => {
                const params=new URLSearchParams();
                params.append(args[0].name,args[0].value)
               return {
                url: "/academic-semesters",
                method: "GET",
                params:params,
            
               }
              },
              transformResponse:(response:TResponseRedux<TAcademicSemester[]>)=>{
                return {
                  data:response.data,
                  meta:response.meta,
                }
              }
            }),
            addAcademicSemester:builder.mutation({
              query:(data)=>({
                url:"/academic-semesters/create-academic-semester",
                method:"POST",
                body:data
              })
            })
          })
})

export const {useGetAllSemestersQuery,useAddAcademicSemesterMutation}=academicSemesterApi;