import React from "react";
import profileImg from "./setupimg.jpg";
import "./index.css";
const Hero = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto text-center">
        <div className="imghero rounded-3xl">
          <img
            src={profileImg}
            alt="Profile"
            className=" relative p-1 rounded-3xl w-full h-full "
          />
        </div>
        <h1 className="text-3xl font-bold text-white my-4">Ahmed Youssef</h1>
        <p className="text-gray-300 text-xl mb-8">Frontend Web Developer</p>
        <a
          href="#about"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Hero;
