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
const CreateAcademicSemester = () => {
      const onSubmit:SubmitHandler<FieldValues>=(data)=>{
            console.log(data)
      }
      
  return (
   <Flex justify='center' align='center'>
     <Col span={6}>
    <PHForm onSubmit={onSubmit}>
      {/* <PHInput type='text' name="name" label="name"></PHInput>
      <PHInput type='text' name="name" label="year"></PHInput> */}
      <PHSelect label="name" name={"name"} options={nameOptions}></PHSelect>
      <Button htmlType='submit' >Submit</Button>
    </PHForm>
    </Col>
   </Flex>
  )
}

export default CreateAcademicSemester