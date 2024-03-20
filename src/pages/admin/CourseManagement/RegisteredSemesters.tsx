import { Button, Dropdown, Table, TableColumnsType, TableProps, Tag } from "antd";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/academicSemester/CourseManagementApi";
import { TSemester } from "../../../types/courseManagement.types";
import moment from "moment";
export type TTabledata = Pick<TSemester, "startDate" | "endDate" | "status">;
const items=[
  {
    label:"Ongoing",
    key:"ONGOING"
  },
  {
    label:"Upcoming",
    key:"UPCOMING"
  },
  {
    label:"Ended",
    key:"ENDED"
  },
];
const RegisteredSemesters = () => {
  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  // console.log(semesterData);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM") ,
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );
  const handleStatusDropdown=(data)=>{
    console.log(data)
  };
  const menuProps={
    items,
    onClick:handleStatusDropdown
  }
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
      render:(item)=>{
        let color;
        if(item==="UPCOMING"){
          color="blue"
        }else if(item==="ONGOING"){
          color="green"
        }else{
          color="red"
        }
        return <Tag style={{ fontWeight: 'bold' }} color={color}>{item}</Tag>
      }
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
          <Dropdown menu={menuProps}>
            <Button>Update</Button>
          </Dropdown>
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
