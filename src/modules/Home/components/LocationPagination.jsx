import { Col, Image, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";

import locationAPI from "../../../apis/locationAPI";

const LocationPagination = () => {
   const [current, setCurrent] = useState(1);

   const onChange = (page_index, page_size) => {
      console.log(page_index);
      console.log(page_size);
      setCurrent(page_index);
      fetchDataSource(page_index, 8)
   };

   const [dataSource, setDataSource] = useState([]);
   const [totalPages, setTotalPages] = useState(1);

   useEffect(() => {
      fetchDataSource(1, 8);
   }, []);

   const fetchDataSource = async (page_index, page_size) => {
      const { data, totalRow } = await locationAPI.getSearchPaging(page_index, page_size);
      console.log(data, totalRow);
      setTotalPages(totalRow)
      setDataSource(data);
      console.log(dataSource);
   };

   return (
      <div className="my-5">
         <h3 className="text-white mb-5">Khám phá những điểm đến gần đây</h3>

         {/* {dataSource || ( */}
         <div className="text-white mb-5">
            <Row justify="space-between">
               {dataSource.map((item, index) => {
                  return (
                     <Col lg={6} key={index} className="mb-3">
                        <Row align="middle">
                           <Col span={12}>
                              <Image src={item.hinhAnh} width="150px" height={130} />
                           </Col>
                           <Col span={12}>
                              <Row>
                                 <Col span={24}>
                                    <span className="ms-3 text-white">
                                       {item.tenViTri}
                                    </span>
                                 </Col>
                                 <Col span={24}>
                                    <span className="mx-3 text-white opacity-75">
                                       {item.tinhThanh}
                                    </span>
                                 </Col>
                              </Row>
                           </Col>
                        </Row>
                     </Col>
                  );
               })}
            </Row>
         </div>
         {/* )} */}

         <Pagination
            current={current}
            onChange={onChange}
            total={totalPages}
            pageSize={8}
         />
      </div>
   );
};

export default LocationPagination;
