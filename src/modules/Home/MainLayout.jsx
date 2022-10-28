import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import CarouselHome from "./components/CarouselHome";

const MainLayout = () => {
   return (
      <Layout>
         <Layout.Header
            style={{
               position: "fixed",
               zIndex: 1,
               width: "100%",
            }}
         >
            <Header />
         </Layout.Header>

         <Layout.Content style={{ backgroundColor: "#001529" }}>
            <CarouselHome />
            <Outlet />
         </Layout.Content>

         <Layout.Footer>
            <Footer />
         </Layout.Footer>
      </Layout>
   );
};

export default MainLayout;
