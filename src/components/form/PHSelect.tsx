import { Form, Select, Space } from 'antd';
import React from 'react'

const PHSelect = ({label}) => {

      const handleChange = (value: string) => {
            console.log(`selected ${value}`);
          };
  return (
      <Form.Item label={label}>
      <Select
        
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    
    </Form.Item>
  )
}

export default PHSelect