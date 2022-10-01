import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
   return (
      <Row>
         <Col span={17}>
            <div className="login-left-bg"></div>
         </Col>
         <Col span={7} className="login-col-right">
            <Outlet />
         </Col>
      </Row>
   );
};

export default AuthLayout;
