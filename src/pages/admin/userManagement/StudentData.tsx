import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/academicSemester/userManagementApi";
import { TStudent } from "../../../types/userManagement.type";
export type TTabledata = Pick<TStudent, "name" | "id">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: studentData, isFetching } = useGetAllStudentsQuery(params);
  // console.log(semesterData);

  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
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
      title: "Action",
      key: "X",
      render: () => {
        return (
          <Space >
            <Button>Update</Button>
            <Button>Details</Button>
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
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
