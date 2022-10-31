import React from "react";
import { useSelector } from "react-redux";

import styles from "./RoomListStyles.module.scss";

const RoomList = () => {
   const { heightHeader } = useSelector((state) => state.spacing);
   console.log("heightHeader", heightHeader);

   return (
      <div className="bg-white room-list" style={{ marginTop: heightHeader }}>
         <h1>Room List</h1>
      </div>
   );
};

export default RoomList;
