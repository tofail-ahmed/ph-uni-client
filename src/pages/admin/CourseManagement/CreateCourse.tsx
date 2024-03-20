import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddRegisteredSemesterMutation, useGetAllCoursesQuery } from "../../../redux/features/academicSemester/CourseManagementApi";
import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";




const CreateCourse = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const {data:courses}=useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const courseData = {
      ...data,
     isDeleted:false,
     preRequisiteCourses:data?.preRequisiteCourses.map((item)=>({
      course:item,
      isDeleted:false,
     }))
    };

    console.log(courseData);

    // try {
    //   const res = (await addSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success('Semester created', { id: toastId });
    //   }
    // } catch (err) {
    //   toast.error('Something went wrong', { id: toastId });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label="Credits" />
          <PHSelect mode="multiple" 
          options={preRequisiteCoursesOptions} name="preRequisiteCourses" label="preRequisiteCourses" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;

