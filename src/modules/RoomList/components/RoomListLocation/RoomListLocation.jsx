import { Col, Image, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import roomAPI from "../../../../apis/roomAPI";
import "./RoomListLocationStyles.scss";

const RoomListLocation = () => {
   const { id } = useParams();
   const [roomListLocation, setRoomListLocation] = useState([]);

   const getRoomList = async (id) => {
      const data = await roomAPI.getRoomByIdLocation(id);
      console.log(data);
      setRoomListLocation(data);
      console.log("dataSource", roomListLocation);
   };
	 
   useEffect(() => {
      getRoomList(id);
   }, []);

   return (
      <div className="my-3">
         <h3>Chỗ ở tại khu vực bản đồ đã chọn</h3>
         {
            <Space direction="vertical" size={"middle"}>
               {roomListLocation.map((room, index) => {
                  return (
                     <div key={index} className="room-list-location">
                        <hr />
                        <Row gutter={[32, 16]}>
                           <Col span={10}>
                              <Image src={room.hinhAnh} className="rounded" />
                           </Col>
                           <Col span={14}>
                              <div className="mb-3 room-title">
                                 <h5>{room.tenPhong}</h5>
																 <span className="icon-heart">
																	 <AiOutlineHeart/>
																 </span>
                              </div>
                              <div className="mb-3">
                                 <p className="w-75">{room.moTa}</p>
                              </div>
                              <div className="text-secondary">
                                 {room.khach && <span className="me-2">{room.khach} Khách</span>}
                                 {room.giuong && <span className="me-2">{room.giuong} Giường</span>}
                                 {room.phongNgu && <span className="me-2">{room.phongNgu} Phòng ngủ</span>}
                                 {room.phongTam && <span>{room.phongTam} Phòng tắm</span>}
                              </div>
															
															
                              <div className="text-secondary mb-3">
                                 {room.mayGiat && <span className="me-2">Máy giặt</span>}
                                 {room.banLa && <span className="me-2">Bàn là</span>}
                                 {room.tivi && <span className="me-2">Tivi</span>}
                                 {room.dieuHoa && <span className="me-2">Điều hòa</span>}
                                 {room.wifi && <span className="me-2">Wifi</span>}
                                 {room.bep &&<span className="me-2"> Bếp</span>}
                                 {room.doXe && <span className="me-2">Đỗ xe</span>}
                                 {room.hoBoi && <span className="me-2">Hồ bơi</span>}
                                 {room.banUi && <span className="me-2">Bàn ủi</span>}
                              </div>
                              <div className="text-end fs-4">
                                 <span className="fw-bold"> ${room.giaTien} </span>
																 <span>/ tháng</span>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  );
               })}
            </Space>
         }
      </div>
   );
};

export default RoomListLocation;
