import { Col, Row, Divider, List, Typography, Anchor } from "antd";
import React from "react";
import "./index.css";

const { Link } = Anchor;

const data1 = [
   "Trung tâm trợ giúp",
   "AirCover",
   "Thông tin an toàn",
   "Hỗ trợ người khuyết tật",
   "Các tùy chọn hủy",
   "Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi",
   "Báo cáo lo ngại của hàng xóm",
];

const data2 = [
   "Airbnb.org: nhà ở cứu trợ",
   "Hỗ trợ dân tị nạn Afghanistan",
   "Chống phân biệt đối xử",
];

const data3 = [
   "Thử đón tiếp khách",
   "AirCover cho Chủ nhà",
   "Xem tài nguyên đón tiếp khách",
   "Truy cập diễn đàn cộng đồng",
   "Đón tiếp khách có trách nhiệm",
];

const data4 = [
   "Trang tin tức",
   "Tìm hiểu các tính năng mới",
   "Thư ngỏ từ các nhà sáng lập",
   "Cơ hội nghề nghiệp",
   "Nhà đầu tư",
];

const Footer = () => {
   return (
      <div className="footer">
         <div className="container ">
            <Row justify="space-between">
               <Col xs={12} sm={6}>
                  {/* <h1 className="title">GIỚI THIỆU</h1> */}
                  <Divider orientation="left">Hỗ trợ</Divider>
                  <List
                     dataSource={data1}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                     )}
                  />
               </Col>

               <Col xs={12} sm={6}>
                  {/* <h1 className="title">CỘNG ĐỒNG</h1> */}
                  <Divider orientation="left">Cộng đồng</Divider>
                  <List
                     dataSource={data2}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                     )}
                  />
               </Col>

               <Col xs={12} sm={6}>
                  {/* <h1 className="title">ĐÓN TIẾP KHÁCH</h1> */}
                  <Divider orientation="left">Đón tiếp khách</Divider>
                  <List
                     dataSource={data3}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                     )}
                  />
               </Col>

               <Col xs={12} sm={6}>
                  {/* <h1 className="title">HỖ TRỢ</h1> */}
                  <Divider orientation="left">Airbnb</Divider>
                  <List
                     dataSource={data4}
                     renderItem={(item) => (
                        <List.Item>
                           <Typography.Text mark></Typography.Text> {item}
                           {/* <Link href="#" title={item} /> */}
                        </List.Item>
                     )}
                  />
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default Footer;
