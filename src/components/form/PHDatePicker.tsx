import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
interface IInputProps {

  name: string;
  label?: string;
}
const PHDatePicker = ({  name, label }: IInputProps) => {
  // const {register}=useFormContext();
  return (
    <div style={{ marginBottom: "10px" }}>
      {/* {label ? label : null} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large"  style={{width:"100%"}} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
