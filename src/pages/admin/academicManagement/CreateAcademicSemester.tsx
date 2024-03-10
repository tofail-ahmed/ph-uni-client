import PHForm from '../../../components/form/PHForm';
// import PHInput from '../../../components/form/PHInput'
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicsemesterSchema } from '../../../Schemas/academicManagement.schema';
import { useAddAcademicSemesterMutation } from "../../../redux/features/academicSemester/academicSemesterApi";
import { toast } from 'sonner';
import { TResponse } from '../../../types/global';

export const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octaober",
  "November",
  "December",
];
export const monthOptions = monthNames.map((month) => ({
  value: month,
  label: month,
}));
const currentYear = new Date().getFullYear();
export const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
// console.log(yearOptions)
const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
   const toastId=toast.loading("Creating...")
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      console.log(semesterData);
      const res=(await addAcademicSemester(semesterData)) as TResponse;
      if(res.error){
        toast.error(res.error.data.message,{id:toastId})
      }else{
        toast.success("semester created!!",{id:toastId})
      }
      console.log(res)
    } catch (error) {
      console.log(error)
      toast.error("something went wrong",{id:toastId})
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicsemesterSchema)}
        >
          <PHSelect label="name" name={"name"} options={nameOptions}></PHSelect>
          <PHSelect label="Year" name={"year"} options={yearOptions}></PHSelect>
          <PHSelect
            label="start Month"
            name={"startMonth"}
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="Enbd Month"
            name={"endMonth"}
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester