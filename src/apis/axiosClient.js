import axios from "axios";
import store from "../store";

const axiosClient = axios.create({
   baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
   headers: {
      TokenCybersoft:
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjI4LzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDg2NDAwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjc1MDExNjAwfQ._U4oXWaQKsEr5gGhCmvsV2ebHiN3qSaGVPi71jwnjFU",
   },
});

//interceptor
axiosClient.interceptors.request.use((config) => {
  // config: nội dung request gửi lên server
  // ta sẽ thay đổi headers trong request trước khi nó được gửi lên server
  const { token } = store.getState().auth.user || {};

  if (token) {
    config.headers.token = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
   //thành công
   (response) => {
		// ta có thể thay đổi response trước khi response đc trả ra cho nơi gọi request
		//response.data: format của axios
		//.content: format của cybersoft
      return response.data.content;
   },
   //thất bại
   (error) => {
		//thay đổi error trước khi error đc trả ra cho nơi request
      return Promise.reject(error.response?.data.content);
   }
);


export default axiosClient