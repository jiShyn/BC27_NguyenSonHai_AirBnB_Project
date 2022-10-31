import React from "react";
import CarouselHome from "../components/CarouselHome";
import LocationPagination from "../components/LocationPagination";
import SolidData from "../components/SolidData";

import "./HomeStyle.scss";

const Home = () => {
   return (
      <div className="container">
         <CarouselHome />
         <LocationPagination />
         <SolidData />
      </div>
   );
};

export default Home;
