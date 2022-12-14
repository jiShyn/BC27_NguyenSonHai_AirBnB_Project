import { Route, Routes } from "react-router-dom";
import AuthLayout from "./modules/Authentication/AuthLayout";
import Login from "./modules/Authentication/pages/Login";
import Register from "./modules/Authentication/pages/Register";
import MainLayout from "./modules/Home/MainLayout";
import Home from "./modules/Home/Page/Home";
import RoomDetail from "./modules/RoomDetail/pages/RoomDetail/RoomDetail";
import RoomList from "./modules/RoomList/pages/RoomList/RoomList";

function App() {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="room-list/:id" element={<RoomList />} />
            <Route path="room-detail/:id" element={<RoomDetail />} />
         </Route>

         <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Route>
      </Routes>
   );
}

export default App;
