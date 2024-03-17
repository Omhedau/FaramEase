import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CallSplitIcon from '@mui/icons-material/CallSplit';

const Home = () => {
  return (
    <div>
      <div className=" h-[39rem] bg-gradient-to-b from-black to-[#020202ef] flex justify-evenly items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold">Revolutionizing Agriculture</h1>
          <p className="text-lg mt-5 text-gray-300">
            Welcome to AgroAid Hub, your digital partner for innovative farming
            solutions, <br /> including accessible equipment rental, advanced
            disease classification and <br />a robust resource sharing
            community.
          </p>
          <div className="mt-5 space-x-7">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-[400px] h-[37rem] object-cover object-center"
            src="./src/assets/farming1.jpg"
            alt=""
          />
        </div>
      </div>

      <hr className="" />

      <div className=" h-[39rem] bg-gradient-to-b from-black to-[#020202ef] flex justify-evenly items-center">
        <div>
          <img
            className="w-[400px] h-[37rem] object-cover object-center"
            src="./src/assets/tractor.jpg"
            alt=""
          />
        </div>

        <div className="text-white">
          <h1 className="text-4xl font-bold">Innovative Rental</h1>
          <p className="text-lg mt-5 text-gray-300">
            Harness the power of cutting-edge machinery with <br />
            affordable, on-demand rentals tailored for your farm's <br />
            success..
          </p>
          <div className="mt-5 space-x-7">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition duration-300">
              More Info
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div className=" h-[39rem] bg-gradient-to-b from-black to-[#020202ef] flex justify-evenly items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold">Signature Features</h1>
          <p className="text-lg mt-5 text-gray-300">
            Explore the Core Functionality that Makes CropGuardian a Leader{" "}
            <br /> in Agricultural Solutions
          </p>

          <ul className="mt-8 space-y-5">
            <li>
              <div className="flex items-center space-x-3 text-xl">
                <ZoomInIcon className="mt-1" />
                <p>Smart Diagnose</p>
              </div>
              <p className="mt-2">
              Instantly identify crop diseases with our AI-powered image analysis tool.
              </p>
            </li>
            <li>
              <div className="flex items-center space-x-3 text-xl">
                <HowToRegIcon className="mt-1" />
                <p>Easy Register</p>
              </div>
              <p className="mt-2">
              Sign up your machinery in a few clicks and manage all your equipment online.
              </p>
            </li>
            <li>
              <div className="flex items-center space-x-3 text-xl">
                <CallSplitIcon className="mt-1" />
                <p>Rent Flexibly</p>
              </div>
              <p className="mt-2">
              Book tractors and essential farming equipment on demand with ease.
              </p>
            </li>
          </ul>

          <div className="mt-10">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition duration-300">
              Discover More
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-[400px] h-[37rem] object-cover object-center"
            src="./src/assets/farming.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
