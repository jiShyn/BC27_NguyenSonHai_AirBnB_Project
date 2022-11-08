import { Col, DatePicker, Row } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./SubNavStyles.scss";

const SubNav = () => {
   return (
      <div className="subnav">
         <Row className="bg-white rounded-pill">
            <Col span={8}>
               <p className="text">Khu vực bản đồ đã chọn</p>
            </Col>
            <Col span={8} className="">
               <DatePicker.RangePicker />
            </Col>
            <Col span={8}>
               <div className="text-start col-search-icon">
                  <span>Thêm khách</span>
                  <span className="wrapper-icon rounded-circle bg-danger">
                     <AiOutlineSearch />
                  </span>
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default SubNav;
