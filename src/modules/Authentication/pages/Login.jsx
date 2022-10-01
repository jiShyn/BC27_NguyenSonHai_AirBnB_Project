import { Button, Form, Input, notification } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authSlice";

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user, isLoading } = useSelector((state) => state.auth);
   const { handleSubmit, control } = useForm({
      defaultValues: {
         email: "",
         matKhau: "",
      },
      mode: "onTouched",
   });

   const onSubmit = async (values) => {
      try {
         await dispatch(login(values)).unwrap();
         //thành công chuyển về trang home
         navigate("/");
         notification.success({
            message: "Đăng nhập thành công",
         });
      } catch (error) {
         notification.error({
            message: "Đăng nhập thất bại",
            description: error,
         });
      }
   };

   return (
      <>
         <Form
            className="form-login"
            onFinish={handleSubmit(onSubmit)}
            labelCol={{ span: 20 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
         >
            <h1 className="text-center mb-4">Đăng Nhập</h1>
            <Controller
               name="email"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Email không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     label="Email"
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input type="email" {...field} />
                  </Form.Item>
               )}
            />

            <Controller
               name="matKhau"
               control={control}
               rules={{
                  required: {
                     value: true,
                     message: "Mật khẩu không được để trống",
                  },
               }}
               render={({ field, fieldState: { error } }) => (
                  <Form.Item
                     label="Mật Khẩu"
                     validateStatus={error ? "error" : ""}
                     help={error?.message}
                  >
                     <Input.Password type="password" {...field} />
                  </Form.Item>
               )}
            />

            <Form.Item>
               <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isLoading}
                  loading={isLoading}
               >
                  Đăng Nhập
               </Button>
               <Button type="primary" className="bg-secondary text-white ms-3" onClick={() => navigate("/register")}>
                  Đăng Ký
               </Button>
            </Form.Item>
         </Form>
      </>
   );
};

export default Login;
