import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { useGetAllCoursesQuery } from "../../../redux/features/academicSemester/CourseManagementApi";
export type TTabledata=Pick<TAcademicSemester,"name"|"year"|"endMonth"|"startMonth">

const Courses = () => {
  // const [params,setParams]=useState<TQueryParam[]|undefined>(undefined);
  // const { data: semesterData } = useGetAllSemestersQuery([
  //   {name:"year",value:"2025"}
  // ]);
  const { data: courses,isFetching } = useGetAllCoursesQuery(undefined);
  // console.log(semesterData);
  // const passYear = (year:string) => {
  //   return parseInt(year)+4;
  // };
  const tableData = courses?.data?.map(
    ({ _id, title, prefix, code,  }) => ({
      key:_id,
      title, prefix, code:`${prefix} ${code}`

      
    })
  );
  const columns = [
    {
      title: "Title",
      key:"title",
      dataIndex: "title",
     
    },
    {
      title: "Code",
      key:"code",
      dataIndex: "code",
     
    },
    
    {
      title:"Action",
      key:"X",
      render:(item)=>{
        return <div>
          <Button>Update</Button>
        </div>
      }
    }
  ];

 
  // const onChange: TableProps<TTabledata>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   const queryParams:TQueryParam[]=[];
  //   if(extra.action==="filter"){
  //     filters.name?.forEach((item)=>
  //     queryParams.push({name:"name",value:item}))
  //     filters.year?.forEach((item)=>
  //     queryParams.push({name:"year",value:item}))
  //     setParams(queryParams);
  //     console.log(queryParams)
  //   }
  // };
  return <Table loading={isFetching} columns={columns} dataSource={tableData}  />;
};

export default Courses
