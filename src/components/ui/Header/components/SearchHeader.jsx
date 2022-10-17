import { Button, Form, Input, notification } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import locationAPI from "../../../../apis/locationAPI";
import "./index.scss";

const SearchHeader = () => {
   const { handleSubmit, register } = useForm({
      defaultValues: {
         searchValue: "",
      },
   });
   const onSubmit = async (value) => {
      console.log(value);
      try {
         const data = await locationAPI.getLocations(value);
         console.log("data searchHeader", data);
         return data;
      } catch (error) {
         // Đăng ký thất bại show error ra cho user thấy
         notification.error({
            message: "Tìm vị trí thất bại",
            description: error,
         });
      }
   };

   return (
      <Form
         layout="horizontal"
         className="search rounded-pill d-flex"
         onFinish={handleSubmit(onSubmit)}
      >
         <Form.Item className="search-item search-item-first rounded-pill">
            <div className="search-item-height fw-bold">Địa điểm</div>
            {/* <Input
               ref={{ ...register("searchValue") }}
               placeholder="Bạn sắp đi đâu?"
               bordered={false}
               className="d-block ps-0"
            /> */}
            <input
               className="d-block ps-0"
               type="text"
               {...register("searchValue")}
               placeholder="Bạn sắp đi đâu?"
            />
         </Form.Item>

         <div className="search-item search-item-common rounded-pill">
            <div className="search-item-height fw-bold">Nhận Phòng</div>
            <div className="search-item-height opacity-75">Thêm ngày</div>
         </div>

         <div className="search-item search-item-common rounded-pill">
            <div className="search-item-height fw-bold">Trả phòng</div>
            <div className="search-item-height opacity-75">Thêm ngày</div>
         </div>

         <div className="search-item search-item-common rounded-pill">
            <div className="search-item-height fw-bold">Khách</div>
            <div className="search-item-height opacity-75">Thêm khách</div>
         </div>

         <div className="search-item search-item-end d-inline-block rounded-pill">
            <Button
               htmlType="submit"
               shape="circle"
               size="large"
               className="bg-danger text-white btn-search"
            >
               <AiOutlineSearch />
            </Button>
         </div>
      </Form>
   );
};

export default SearchHeader;
