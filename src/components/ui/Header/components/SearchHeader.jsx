import { Button, Form, Image, Input, notification, Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import locationAPI from "../../../../apis/locationAPI";
import "./SearchHeaderStyles.scss";

const SearchHeader = () => {
   const [locations, setLocations] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleOk = () => {
      setIsModalOpen(false);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

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
         setLocations(data);
         showModal();
         console.log("State locations", locations);
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
         className={"search rounded-pill d-flex"}
         onFinish={handleSubmit(onSubmit)}
      >
         <Form.Item className="search-item search-item-first rounded-pill">
            <div className="search-item-height fw-bold">Địa điểm</div>
            <input
               className="d-block ps-0"
               type="text"
               {...register("searchValue")}
               placeholder="Bạn sắp đi đâu?"
            />

            <Modal
               open={isModalOpen}
               onOk={handleOk}
               onCancel={handleCancel}
               className={"response-location-api"}
            >
               <ul>
                  {locations?.map((item, index) => {
                     return (
                        <li key={index} className="mb-2">
                           <Image width={50} src={item.hinhAnh} />
                           <Link to={`/room-list/${item.id}`}>
                              <span className="mx-2">{item.tenViTri}</span>
                              <span>{item.tinhThanh}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </Modal>
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
