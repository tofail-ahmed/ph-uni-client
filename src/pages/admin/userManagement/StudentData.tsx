import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/academicSemester/userManagementApi";
import { TStudent } from "../../../types/userManagement.type";
import { Link } from "react-router-dom";
export type TTabledata = Pick<TStudent, "fullName" | "id"|"email"|"contactNo">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
const [page,setPage]=useState(1);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    // { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  // console.log(semesterData);
const metaData=studentData?.meta;
  const tableData = studentData?.data?.map(({ _id, fullName, id,email,contactNo }) => ({
    key: _id,
    fullName,
    id,
    email,
    contactNo
  }));
  const columns: TableColumnsType<TTabledata> = [
    {
      title: "Name",
      key: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Roll No",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No",
      key: "contactNo",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      key: "X",
      render: (item) => {
        console.log(item)
        return (
          <Space >
            <Button>Update</Button>
          <Link to={`/admin/students-data/${item.key}`}>
          <Button>Details</Button></Link>
            <Button>Block</Button>
          </Space>
        );
      },
      width:"10%"
    },
  ];

  const onChange: TableProps<TTabledata>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    const queryParams: TQueryParam[] = [];
    if (extra.action === "filter") {
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
      console.log(queryParams);
    }
  };
  return (
    <>
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination={false}
    />
    <Pagination onChange={(value)=>setPage(value)} pageSize={metaData?.limit} total={metaData?.total}/>
    </>
  );
};

export default StudentData;
