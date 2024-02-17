import { Button } from 'antd';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const dispatch=useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0002",
      password: "admin123",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  // console.log(data)
  // console.log(error)
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user=verifyToken(res.data.accessToken)
dispatch(setUser({
  user:user,
  token:res.data.accessToken
}))
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
}

export default Login