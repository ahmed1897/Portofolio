import React from "react";
import profileImg from "./setupimg.jpg";
import Typed from "react-typed";
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

        <div>
          <Typed
            className=" lg-text md:text-5xl sm:text-4xl text-xl text-gray-300 mb-8"
            strings={[
              "Frontend Developer",
              "Reactjs Developer",
              "Full stack Developer",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <div className=" mt-9">
          <a
            href="#about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
