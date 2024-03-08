import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
interface IInputProps {
  type: string;
  name: string;
  label?: string;
}
const PHInput = ({ type, name, label }: IInputProps) => {
  // const {register}=useFormContext();
  return (
    <div style={{ marginBottom: "10px" }}>
      {/* {label ? label : null} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
