import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { Crew } from "../pages/Crew";
import { Destination } from "../pages/Destination";
import { Technology } from "../pages/Technology";
import { Home } from "./../pages/Home";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='Technology' element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
