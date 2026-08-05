import React from "react";

const Content = () => {
  return (
    <div className="w-full absolute top-0 bg-[#E5E5E5] font-[font]">
      <div className="h-screen w-full flex justify-center items-end p-10">
        <h1 className="text-[8.5vw] tracking-tight text-amber-900 leading-none uppercase">
        Beyond The Surface
        </h1>
      </div>

      <div className="w-full h-fit p-10">
        <div className="h-screen w-full flex items-center">
          <div className="max-w-sm flex flex-col gap-5">
            <h2 className="text-4xl font-light tracking-tight text-amber-900 mb-4">
              Immersive Experiences
            </h2>
            <p className="text-lg leading-tight text-amber-800/70">
              Transform ordinary websites into interactive experiences with
              real-time 3D graphics. Smooth animations and scroll-driven
              storytelling capture attention and keep users engaged from the
              very first interaction.
            </p>
          </div>
        </div>

        <div className="h-screen w-full flex p-12 justify-end">
          <div className="max-w-sm flex flex-col gap-5">
            <h2 className="text-4xl font-light tracking-tight text-amber-900 mb-4">
              Performance Meets Creativity
            </h2>
            <p className="text-lg leading-tight text-amber-800/70">
              Modern WebGL and Three.js make it possible to create visually rich
              interfaces without compromising performance. Optimized rendering,
              responsive design, and fluid interactions deliver a seamless
              experience across devices.
            </p>
          </div>
        </div>

        <div className="h-screen w-full flex p-12">
          <div className="max-w-sm flex flex-col gap-5">
            <h2 className="text-4xl font-light tracking-tight text-amber-900 mb-4">
              Scroll That Tells a Story
            </h2>
            <p className="text-lg leading-tight text-amber-800/70">
              Every scroll reveals a new perspective. By combining 3D models,
              cinematic motion, and interactive animations, complex ideas become
              engaging visual narratives that users remember long after they
              leave the site.
            </p>
          </div>
        </div>

        <div className="h-screen w-full flex p-12 justify-end">
          <div className="max-w-sm flex flex-col gap-5">
            <h2 className="text-4xl font-light tracking-tight text-amber-900 mb-4">
              Future of the Web
            </h2>
            <p className="text-lg leading-tight text-amber-800/70">
              Modern 3D websites combine creativity with performance, helping
              brands stand out through immersive storytelling and interactive
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
