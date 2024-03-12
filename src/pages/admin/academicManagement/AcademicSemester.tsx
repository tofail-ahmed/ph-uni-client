import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { TAcademicSemester } from "../../../types/academicManagement.type";
export type TTabledata=Pick<TAcademicSemester,"_id"|"name"|"year"|"endMonth"|"startMonth">

const AcademicSemester = () => {
  // const { data: semesterData } = useGetAllSemestersQuery([
  //   {name:"year",value:"2025"}
  // ]);
  const { data: semesterData } = useGetAllSemestersQuery(undefined);
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
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
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
    console.log({filters,extra})
    // console.log("params", pagination, filters, sorter, extra);
  };
  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester