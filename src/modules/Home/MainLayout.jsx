import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import CarouselHome from "./components/CarouselHome";
import { getHeightHeader } from "../RoomList/slices/spacingSlice";

const MainLayout = () => {
   const ref = useRef(null);
   const dispatch = useDispatch();

   useLayoutEffect(() => {
      const heightHeaderCurrent = ref.current.clientHeight;
      dispatch(getHeightHeader(heightHeaderCurrent));
   }, []);

   return (
      <Layout>
         <Layout.Header
            style={{
               position: "fixed",
               zIndex: 1,
               width: "100%",
            }}
            ref={ref}
         >
            <Header />
         </Layout.Header>

         <Layout.Content style={{ backgroundColor: "#001529" }}>
            {/* <CarouselHome /> */}
            <Outlet />
         </Layout.Content>

         <Layout.Footer>
            <Footer />
         </Layout.Footer>
      </Layout>
   );
};

export default MainLayout;
