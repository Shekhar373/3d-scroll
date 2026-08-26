import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import SmoothScroll from "./component/Lenis";
import { Route, Routes } from "react-router-dom";
import ThreeScroll from "./component/ThreeScroll";
import SphareImage from "./Pages/SphareImage";
import Watch from "./Pages/Watch";

const App = () => {
  return (
    <div className="relative bg-[#E5E5E5]">
      <SmoothScroll />
      

      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<ThreeScroll />} />
          <Route path='/sphare' element={<SphareImage />} />
          <Route path='/watch' element={<Watch />} />

        </Routes>
      </div>

     
    </div>
  );
};

export default App;
