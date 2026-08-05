import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./r3f/Model";
import { Environment } from "@react-three/drei";
import Content from "./component/Content";
import SmoothScroll from "./component/Lenis";
import ModelParent from "./component/ModelParent";

const App = () => {
  return (
    <div className="relative bg-[#E5E5E5]"
    >
      <SmoothScroll />
      <ModelParent />
      
      <div id="scroll" className="h-[500vh] w-full">
        
        <Content />
      </div>
    </div>
  );
};

export default App;
