import React from "react";
import axiosClient from "./axiosClient";

const roomAPI = {
   getRoomByIdLocation: (id) => {
      return axiosClient.get("phong-thue/lay-phong-theo-vi-tri", {
         params: {
            maViTri: id,
         },
      });
   },
};

export default roomAPI;
