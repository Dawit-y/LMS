import React from "react";
import gradient from "../assets/gradient.svg";
import travel from "../assets/travel.svg";
import world from "../assets/world.svg";
import gradient2 from "../assets/gradient2.svg";

const Home = () => {
  return (
    <>
      <div className="pt-24 gradient">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              What business are you?
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight font-poppins">
              Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" />
          </div>
        </div>
      </div>

      <div className="relative -mt-24 lg:-mt-54">
        <img src={gradient} alt="gradient" />
      </div>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from: someone
                <a
                  className="text-pink-500 underline"
                  href="https://undraw.co/"
                >
                  undraw.co
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src={travel} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src={world} alt="" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet something
                </h3>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:
                  <a
                    className="text-pink-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* actions section */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Free
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £0
                  <span className="text-base">for one user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">
                  Basic
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center">
                  £x.99
                  <span className="text-base">/ per user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Pro
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £x.99
                  <span className="text-base">/ per user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src={gradient2} alt="" />
      <section className="container mx-auto text-center py-6 mb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call to Action
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight font-poppins">
          Main Hero Message to sell yourself!
        </h3>
        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Action!
        </button>
      </section>
    </>
  );
};

export default Home;
