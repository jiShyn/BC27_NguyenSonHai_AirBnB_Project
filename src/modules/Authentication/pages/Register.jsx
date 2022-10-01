import { Button, Form, Input, notification, Radio } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authAPI from "../../../apis/authAPI";
import useRequest from "../../../hooks/useRequest";

const Register = () => {
   const navigate = useNavigate();
   const { data: handleRegister, isLoading } = useRequest(
      (values) => authAPI.register(values),
      { isManual: true }
   );

   const [genderValue, setGenderValue] = useState(null);
   const onChange = (e) => {
      console.log(`radio checked`, e.target.value);
      setGenderValue(e.target.value);
   };
   const { handleSubmit, control } = useForm({
      defaultValues: {
        //  id: 0,
         hoTen: "",
         email: "",
         password: "",
         phone: "",
         birthday: "",
         gender: null,
         role: "",
      },
      mode: "onTouched",
   });

   const onSubmit = async (values) => {
      try {
         await handleRegister(values);
         //thành công chuyển về trang login
         navigate("/login");
         notification.success({
            message: "Đăng ký thành công",
         });
      } catch (error) {
         notification.error({
            message: "Đăng ký thất bại",
            description: error,
         });
      }
   };
   return (
      <Form
         className="form-register"
         onFinish={handleSubmit(onSubmit)}
         labelCol={{ span: 20 }}
         wrapperCol={{ span: 24 }}
         layout="vertical"
      >
         <h1 className="text-center mb-4">Đăng Ký</h1>
         <Controller
            name="hoTen"
            control={control}
            rules={{
               required: {
                  value: true,
                  message: "Họ tên không được để trống",
               },
            }}
            render={({ field, fieldState: { error } }) => (
               <Form.Item
                  label="Họ tên"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
               >
                  <Input type="text" {...field} />
               </Form.Item>
            )}
         />
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
         <Controller
            name="birthday"
            control={control}
            rules={{
               required: {
                  value: true,
                  message: "Birthday không được để trống",
               },
            }}
            render={({ field, fieldState: { error } }) => (
               <Form.Item
                  label="Birthday"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
               >
                  <Input type="text" {...field} />
               </Form.Item>
            )}
         />
         <Controller
            name="gender"
            control={control}
            rules={{
               required: {
                  value: true,
                  message: "Gender không được để trống",
               },
            }}
            render={({ field, fieldState: { error } }) => (
               <Form.Item
                  label="Gender"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
               >
                  <Radio.Group onChange={onChange} value={genderValue} {...field}>
                     <Radio value="true">Nam</Radio>
                     <Radio value="false">Nữ</Radio>
                  </Radio.Group>
               </Form.Item>
            )}
         />
         <Controller
            name="role"
            control={control}
            rules={{
               required: {
                  value: true,
                  message: "Role không được để trống",
               },
            }}
            render={({ field, fieldState: { error } }) => (
               <Form.Item
                  label="Role"
                  validateStatus={error ? "error" : ""}
                  help={error?.message}
               >
                  <Input type="text" {...field} />
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
               Đăng Ký
            </Button>
            <Button type="primary" className="bg-secondary text-white ms-3" onClick={() => navigate('/login')}>
               Đăng Nhập
            </Button>
         </Form.Item>
      </Form>
   );
};

export default Register;
