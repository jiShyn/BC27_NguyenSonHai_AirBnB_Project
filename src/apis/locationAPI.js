import axiosClient from "./axiosClient";

const locationAPI = {
   getLocations: (location) => {
      return axiosClient.get("api/vi-tri", location);
   },
};

export default locationAPI;
