import axiosClient from "./axiosClient";

const locationAPI = {
   getLocations: (location) => {
      return axiosClient.get("/vi-tri", location);
   },

   getSearchPaging: (page_index, page_size, keyword_search) => {
      return axiosClient.get("/vi-tri/phan-trang-tim-kiem", {
         params: {
            pageIndex: page_index,
            pageSize: page_size,
            keyword: keyword_search,
         },
      });
   },
};

export default locationAPI;
