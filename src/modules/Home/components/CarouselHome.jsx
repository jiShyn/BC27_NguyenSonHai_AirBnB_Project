import { Carousel, Image } from "antd";
import React from "react";

import "./CarouselStyle.scss";

const contentStyle = {
   textAlign: "center",
   color: "#fff",
   background: "#364d79",
};

const CarouselHome = () => {
   return (
      <div className="container-fluid mb-5">
         <Carousel autoplay>
            <div>
               <h3 style={contentStyle}>
                  <Image
                     width={"100%"}
                     height={"100%"}
                     src="https://cdn.dribbble.com/userupload/2901758/file/original-3cadff73566311072205b71741570967.jpeg?compress=1&resize=1504x1128"
                     preview={false}
                  />
               </h3>
            </div>
            <div>
               <h3 style={contentStyle}>
                  <Image
                     width={"100%"}
                     height={"100%"}
                     src="https://cdn.dribbble.com/userupload/3271720/file/original-176c25fd991eb0e6ea23875d304d56d1.jpg?compress=1&resize=1504x1128"
                     preview={false}
                  />
               </h3>
            </div>
            <div>
               <h3 style={contentStyle}>
                  <Image
                     width={"100%"}
                     height={"100%"}
                     src="https://cdn.dribbble.com/userupload/3280324/file/original-87ce503c57e6a187b4da0d125aa09052.jpg?compress=1&resize=1504x1128"
                     preview={false}
                  />
               </h3>
            </div>
            <div>
               <h3 style={contentStyle}>
                  <Image
                     width={"100%"}
                     height={"100%"}
                     src="https://cdn.dribbble.com/userupload/3565862/file/original-40af98f908264a05bc0b8e1ccaf1500a.png?compress=1&resize=1504x1128"
                     preview={false}
                  />
               </h3>
            </div>
         </Carousel>
      </div>
   );
};

export default CarouselHome;
