import { Col, Row, Divider, List, Typography, Select } from "antd";
import React from "react";
import {
   AiOutlineCopyrightCircle,
   AiOutlineTwitter,
   AiFillInstagram,
} from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { IoLogoUsd } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import "../index.css";
const { Option } = Select;

const data1 = [
   <a href="#" className="text-dark link">
      Trung tâm trợ giúp
   </a>,
   <a href="#" className="text-dark link">
      AirCover
   </a>,
   <a href="#" className="text-dark link">
      Thông tin an toàn
   </a>,
   <a href="#" className="text-dark link">
      Hỗ trợ người khuyết tật
   </a>,
   <a href="#" className="text-dark link">
      Các tùy chọn hủy
   </a>,
   <a href="#" className="text-dark link">
      Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
   </a>,
   <a href="#" className="text-dark link">
      Báo cáo lo ngại của hàng xóm
   </a>,
];

const data2 = [
   <a href="#" className="text-dark link">
      Airbnb.org: nhà ở cứu trợ
   </a>,
   <a href="#" className="text-dark link">
      Hỗ trợ dân tị nạn Afghanistan
   </a>,
   <a href="#" className="text-dark link">
      Chống phân biệt đối xử
   </a>,
];

const data3 = [
   <a href="#" className="text-dark link">
      Thử đón tiếp khách
   </a>,
   <a href="#" className="text-dark link">
      AirCover cho Chủ nhà
   </a>,
   <a href="#" className="text-dark link">
      Xem tài nguyên đón tiếp khách
   </a>,
   <a href="#" className="text-dark link">
      Truy cập diễn đàn cộng đồng
   </a>,
   <a href="#" className="text-dark link">
      Đón tiếp khách có trách nhiệm
   </a>,
];

const data4 = [
   <a href="#" className="text-dark link">
      Trang tin tức
   </a>,
   <a href="#" className="text-dark link">
      Tìm hiểu các tính năng mới
   </a>,
   <a href="#" className="text-dark link">
      Thư ngỏ từ các nhà sáng lập
   </a>,
   <a href="#" className="text-dark link">
      Cơ hội nghề nghiệp
   </a>,
   <a href="#" className="text-dark link">
      Nhà đầu tư
   </a>,
];

const Footer = () => {
   return (
      <div className="footer">
         <div className="containerr ">
            <Row justify="space-around">
               <Col xs={24} sm={6}>
                  {/* <h1 className="title">GIỚI THIỆU</h1> */}
                  <Divider orientation="left">Hỗ trợ</Divider>
                  <List
                     dataSource={data1}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text> {item}
                           {/* {
                              <a href="#" className="link, text-dark>
                                 {item}
                              </a>
                           } */}
                        </List.Item>
                     )}
                  />
               </Col>

               <Col xs={24} sm={6}>
                  {/* <h1 className="title">CỘNG ĐỒNG</h1> */}
                  <Divider orientation="left">Cộng đồng</Divider>
                  <List
                     dataSource={data2}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text>
                           {item}
                        </List.Item>
                     )}
                  />
               </Col>

               <Col xs={24} sm={6}>
                  {/* <h1 className="title">ĐÓN TIẾP KHÁCH</h1> */}
                  <Divider orientation="left">Đón tiếp khách</Divider>
                  <List
                     dataSource={data3}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text>
                           {item}
                        </List.Item>
                     )}
                  />
               </Col>

               <Col xs={24} sm={6}>
                  {/* <h1 className="title">HỖ TRỢ</h1> */}
                  <Divider orientation="left">Airbnb</Divider>
                  <List
                     dataSource={data4}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text>
                           {item}
                        </List.Item>
                     )}
                  />
               </Col>
            </Row>

            <hr />

            <Row align="middle">
               <Col md={24} lg={12}>
                  <div>
                     <span className="me-1">
                        <AiOutlineCopyrightCircle />
                     </span>
                     <span className="me-3">
                        2021 Airbnb, Inc. All rights reserved
                     </span>
                     <span className="me-3">
                        <a href="#" className="text-dark link">
                           Quyền riêng tư
                        </a>
                     </span>
                     <span className="me-3">
                        <a href="#" className="text-dark link">
                           Điều khoản
                        </a>
                     </span>
                     <span>
                        <a href="#" className="text-dark link">
                           Sơ đồ trang web
                        </a>
                     </span>
                  </div>
               </Col>
               <Col md={24} lg={12}>
                  <dir className="text-end">
                     <div className="d-md-inline-block mb-2 mb-md-0">
                        <span className="me-1">
                           <MdOutlineLanguage />
                        </span>
                        <span>
                           <Select
                              defaultValue="Tiếng Việt"
                              style={{
                                 width: 120,
                              }}
                              // onChange={handleChange}
                           >
                              <Option value="vie">Tiếng Việt</Option>
                              <Option value="eng">Tiếng Anh</Option>
                              <Option value="chi">Tiếng Trung</Option>
                           </Select>
                        </span>
                     </div>

                     <div className="d-md-inline-block mb-3 mb-md-0">
                        <span className="ms-3">
                           <IoLogoUsd />
                        </span>
                        <span className="ms-1 me-5">
                           <Select
                              defaultValue="VND"
                              style={{
                                 width: 120,
                              }}
                              // onChange={handleChange}
                           >
                              <Option value="vie">VND</Option>
                              <Option value="eng">USD</Option>
                              <Option value="chi">NDT</Option>
                           </Select>
                        </span>
                     </div>

                     <span className="link-brand me-3">
                        <a className="link text-dark" href="#facebook">
                           <FaFacebookF />
                        </a>
                     </span>

                     <span className="link-brand me-3">
                        <a className="link text-dark" href="#twitter">
                           <AiOutlineTwitter />
                        </a>
                     </span>
                     <span className="link-brand">
                        <a className="link text-dark" href="#instagram">
                           <AiFillInstagram />
                        </a>
                     </span>
                  </dir>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default Footer;
