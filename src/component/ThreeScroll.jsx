import React from "react";
import ModelParent from "./ModelParent";
import Content from "./Content";

const ThreeScroll = () => {
  return (
    <div>
      <ModelParent />
      <div id="scroll" className="h-[500vh] w-full">
        <Content />
      </div>
    </div>
  );
};

export default ThreeScroll;
