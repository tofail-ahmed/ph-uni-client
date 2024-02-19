import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { IUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0002",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();
  // console.log(data)
  // console.log(error)
  const onSubmit = async (data :FieldValues) => {
    // console.log(data);
    const toastID=toast.loading("User logging in")
    try{
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as IUser;
      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );
      toast.success("user logged in",{id:toastID,duration:3000})
      navigate(`/${user.role}/dashboard`);
    }catch(error){
      toast.error("Something went wrong",{id:toastID,duration:3000})
    }
   
    // console.log(res.data.accessToken);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" {...register("id")} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" {...register("password")} />
          </div>
          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login