import PHForm from '../../../components/form/PHForm'
// import PHInput from '../../../components/form/PHInput'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { Button, Col, Flex } from 'antd'
import PHSelect from '../../../components/form/PHSelect'
const nameOptions=[
  {
    value:"01",
    label:"Autumn",
  },
  {
    value:"02",
    label:"Summer",
  },
  {
    value:"03",
    label:"Fall",
  },
]
const currentYear=new Date().getFullYear();
const yearOptions=[0,1,2,3,4].map(number=>({
  value:String(currentYear+number),
  label:String(currentYear+number),
}))
console.log(yearOptions)
const CreateAcademicSemester = () => {
      const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        //! ---> console.log(data.name) //!--->??
        const name=nameOptions[Number(data.name)-1].label;
const semesterData={
  name,
  code:data.name,
  year:data.year,
}
console.log(semesterData)
      }
      
  return (
   <Flex justify='center' align='center'>
     <Col span={6}>
    <PHForm onSubmit={onSubmit}>
      {/* <PHInput type='text' name="name" label="name"></PHInput>
      <PHInput type='text' name="name" label="year"></PHInput> */}
      <PHSelect label="name" name={"name"} options={nameOptions}></PHSelect>
      <PHSelect label="Year" name={"year"} options={yearOptions}></PHSelect>
      <PHSelect label="start Month" name={"startMonth"} options={nameOptions}></PHSelect>
      <PHSelect label="Enbd Month" name={"endMonth"} options={nameOptions}></PHSelect>
      <Button htmlType='submit' >Submit</Button>
    </PHForm>
    </Col>
   </Flex>
  )
}

export default CreateAcademicSemester