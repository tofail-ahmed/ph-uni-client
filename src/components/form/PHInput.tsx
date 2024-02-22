import { Input } from 'antd';
import { Controller } from 'react-hook-form'
interface IInputProps{
      type:string;
      name:string;
      label?:string;
}
const PHInput = ({type,name,label}:IInputProps) => {
      // const {register}=useFormContext();
  return (
      <div style={{marginBottom:"10px"}}>
      {label?label:null}
      <Controller
      name={name}
      render={({field})=><Input {...field} type={type} id={name}  />}
      />
      </div>

  )
}

export default PHInput


