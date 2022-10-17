import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./pages/index.module.scss"

const AuthLayout = () => {
   return (
      <Row>
         <Col span={17}>
            <div className={styles.loginLeftBg}></div>
         </Col>
         <Col span={7} className={styles.loginColRight}>
            <Outlet />
         </Col>
      </Row>
   );
};

export default AuthLayout;
