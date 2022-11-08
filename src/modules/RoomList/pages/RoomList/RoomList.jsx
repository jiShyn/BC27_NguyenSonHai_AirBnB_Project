import { Col, Layout, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import RoomListLocation from "../../components/RoomListLocation/RoomListLocation";
import RoomListMap from "../../components/RoomListMap/RoomListMap";

import styles from "./RoomListStyles.module.scss";

const RoomList = () => {
   const { heightHeader } = useSelector((state) => state.spacing);

   return (
      <div className="bg-white room-list" style={{ marginTop: heightHeader }}>
         <div className="container-fluid">
            <Row>
               <Col span={12}>
                  <RoomListLocation />
               </Col>

               <Col span={12}>
                  <RoomListMap />
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default RoomList;
