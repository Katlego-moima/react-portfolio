import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Kat, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am self-driven and i like to learn new things related to coding.
              i completed my diploma in IT, specializing in Software
              Development. and currently doing an internship in Software
              Development mostly focused in Front-End development. I would like
              to gain more necessary experience in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
