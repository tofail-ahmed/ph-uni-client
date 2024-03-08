import { Form, Select, Space } from 'antd';
import React from 'react'
import { Controller } from 'react-hook-form';
type TPHSelectProps={
      label:string;
      name:string;
      options:{value:string;label:string;disabled?:boolean;}[]
}
const PHSelect = ({label,name,options}:TPHSelectProps) => {

   
  return (
     <Controller
     name={name}
     render={({field})=>(
      <Form.Item label={label}>
      <Select style={{ width: "100%" }}
       {...field}
        options={options}
        />
        </Form.Item>
     )}
     />
      )
    }
        

export default PHSelect