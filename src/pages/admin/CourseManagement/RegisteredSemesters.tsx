import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/academicSemester/CourseManagementApi";
export type TTabledata = Pick<
  TAcademicSemester,
  "name" | "year" | "endMonth" | "startMonth"
>;

const RegisteredSemesters = () => {
const {data:semesterData,isLoading,isFetching}=useGetAllRegisteredSemestersQuery(undefined)
 
  // console.log(semesterData);
  
  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate,status }) => ({
      key: _id,
      name:`${academicSemester.name} ${academicSemester.year}`,
      startDate, endDate,status
     

     
    })
  );
  const columns: TableColumnsType<TTabledata> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "X",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  // const onChange: TableProps<TTabledata>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if(extra.action==="filter"){
  //     const queryParams:TQueryParam[]=[];

  //     console.log(queryParams)
  //   }
  // };
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      //  onChange={onChange}
    />
  );
};

export default RegisteredSemesters;
