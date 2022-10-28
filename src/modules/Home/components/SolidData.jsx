import { Col, Card, Row } from "antd";
import React from "react";
import "./SolidDataStyle.scss";

const SolidData = () => {
   return (
      <div className="solid-data">
         <h1 className="text-white my-5">Ở bất cứ đâu</h1>
         <Row justify="space-between" gutter={100}>
            <Col xs={24} sm={12} lg={6} className="mb-3">
               <Card
                  hoverable
                  cover={
                     <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-47181423/original/39c9d4e7-78d0-4807-9f0d-3029d987d02a.jpeg?im_w=720"
                     />
                  }
               >
                  <Card.Meta
                     title="Toàn bộ nhà"
                     description="nhiều lựa chọn"
                  />
               </Card>
            </Col>
            <Col xs={24} sm={12} lg={6} className="mb-3">
               <Card
                  hoverable
                  cover={
                     <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/cb61fb20-1454-435b-bedf-ed3b6654892f.jpg?im_w=720"
                     />
                  }
               >
                  <Card.Meta
                     title="Chỗ ở độc đáo"
                     description="Nhiều lựa chọn"
                  />
               </Card>
            </Col>
            <Col xs={24} sm={12} lg={6} className="mb-3">
               <Card
                  hoverable
                  cover={
                     <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-51829328/original/eaf57027-f49e-4bc3-bd28-362b21e45064.jpeg?im_w=720"
                     />
                  }
               >
                  <Card.Meta
                     title="Trang trại và thiên nhiên"
                     description="xanh"
                  />
               </Card>
            </Col>
            <Col xs={24} sm={12} lg={6} className="mb-3">
               <Card
                  hoverable
                  cover={
                     <img
                        alt="example"
                        src="https://a0.muscache.com/im/pictures/8fb5846e-bb22-43d0-97f7-8a53aa86880f.jpg?im_w=720"
                     />
                  }
               >
                  <Card.Meta
                     title="Cho phép mang theo thú cưng"
                     description="Chó, mèo,..."
                  />
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default SolidData;
