import React, { useState } from "react";
import stew from "../img/stew.jpg";
import noodles from "../img/noodles.jpg";
import curry from "../img/curry.jpg";
import {
  FaAt,
  FaClock,
  FaHome,
  FaQuestionCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Foodie = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <body className="text-gray-600 font-serifs-Nunito">
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a href="/" className="hover:text-gray-700">
                  Food Ninja
                </a>
              </h1>
              <div
                className="px-4 cursor-pointer md:hidden"
                onClick={handleClick}
              >
                {!nav ? (
                  <FaBars size={20} style={{ color: " #808080" }} />
                ) : (
                  <FaTimes size={20} style={{ color: " #808080" }} />
                )}
              </div>
            </div>
            <ul className={!nav ? "hidden" : "text-sm mt-6 md:block"}>
              <li className="text-gray-700 font-bold py-1 ">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-primary"
                >
                  <span>Home</span>
                  <FaHome
                    className="w-4 ml-2"
                    size={20}
                    style={{ color: "#000000" }}
                  />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>About</span>
                  <FaQuestionCircle
                    className="w-4 ml-2"
                    size={20}
                    style={{ color: "#808080" }}
                  />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>Contact</span>
                  <FaEnvelope
                    className="w-4 ml-2"
                    size={20}
                    style={{ color: "#808080" }}
                  />
                </a>
              </li>
            </ul>
            <ul className="text-sm mt-6 hidden md:block">
              <li className="text-gray-700 font-bold py-1 ">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-primary"
                >
                  <span>Home</span>
                  <FaHome
                    className="w-4 ml-2"
                    size={20}
                    style={{ color: "#000000" }}
                  />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>About</span>
                  <FaQuestionCircle
                    className="w-4 ml-2"
                    size={20}
                    style={{ color: "#808080" }}
                  />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>Contact</span>
                  <FaEnvelope
                    className="w-4 ml-2"
                    size={20}
                    style={{ color: "#808080" }}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-in duration-500"
            >
              Log in
            </a>
            <a
              href="#"
              className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-in duration-500"
            >
              Sign up
            </a>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold mt-6">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Latest Recipes
            </h4>

            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              <div className="card hover:shadow-lg">
                <img
                  src={stew}
                  alt="stew"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Maya
                  </span>
                </div>
                <div className="badge">
                  <FaClock
                    className="w-5 inline-block mr-1"
                    size={20}
                    style={{ color: "#fffff0" }}
                  />
                  <span>25 mins</span>
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <img
                  src={noodles}
                  alt="noodles"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Veg Noodles</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Maya
                  </span>
                </div>
                <div className="badge">
                  <FaClock
                    className="w-5 inline-block mr-1"
                    size={20}
                    style={{ color: "#fffff0" }}
                  />
                  <span>25 mins</span>
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <img
                  src={curry}
                  alt="curry"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Tofu Curry</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Maya
                  </span>
                </div>
                <div className="badge">
                  <FaClock
                    className="w-5 inline-block mr-1"
                    size={20}
                    style={{ color: "#fffff0" }}
                  />
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>

            <div className="mt-8"></div>
          </div>

          <div className="flex justify-center">
            <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-in duration-300">
              Load more
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Foodie;
