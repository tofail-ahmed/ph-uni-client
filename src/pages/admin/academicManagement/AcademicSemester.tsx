import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
export type TTabledata=Pick<TAcademicSemester,"_id"|"name"|"year"|"endMonth"|"startMonth">

const AcademicSemester = () => {
  const [params,setParams]=useState([]);
  // const { data: semesterData } = useGetAllSemestersQuery([
  //   {name:"year",value:"2025"}
  // ]);
  const { data: semesterData } = useGetAllSemestersQuery(params);
  // console.log(semesterData);
  const passYear = (year:string) => {
    return parseInt(year)+4;
  };
  const tableData = semesterData?.data?.map(
    ({ _id, name, year, endMonth, startMonth }) => ({
      key:_id,
      name,
      year,
      endMonth,
      startMonth,

      startMonthYear: `${startMonth} ${year}`,
      endMonthYear: `${endMonth} ${passYear(year)}`,
    })
  );
  const columns: TableColumnsType<TTabledata> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonthYear",
    },
    {
      title: "End Month",
      dataIndex: "endMonthYear",
    },
  ];

 
  const onChange: TableProps<TTabledata>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    const queryParams=[];
    if(extra.action==="filter"){
      filters.name?.forEach((item)=>
      queryParams.push({name:"name",value:item}))
      filters.year?.forEach((item)=>
      queryParams.push({name:"year",value:item}))
      setParams(queryParams);
      console.log(queryParams)
    }
  };
  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester