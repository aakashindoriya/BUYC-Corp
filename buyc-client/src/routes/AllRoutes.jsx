import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Allrouts() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}
