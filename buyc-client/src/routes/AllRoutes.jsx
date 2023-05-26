import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import CarList from "../components/Allcars";
import MyCarList from "../components/MyCarList";

export default function Allrouts() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/mycars" element={<MyCarList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/edit/:id" element={<EditCar />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}
