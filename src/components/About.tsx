import React from "react";
const About = () => {
  return (
    <section className="grid grid-cols-6  min-h-[76vh] w-[60vw] overscroll-none bg-[#eee] dark:bg-slate-900">
      <div></div>
      <div></div>
      <div className="flex m-2 pr-4 md:pr-0 -ml-6 md:-ml-0  text-gray-900 dark:text-white flex-col justify-center items-center  w-[80vw] md:w-[60vw] overscroll-none bg-[#eee] dark:bg-slate-900">
        <div className="text-4xl md:text-5xl font-extrabold mb-12 mt-28 md:mt-2 ">
          👋🏻 Hi, how are you?
        </div>
        <div className="text-2xl text-gray-900 dark:text-gray-300 font-medium mb-6">
          Rukundo this side, A student from University of Rwanda, College of
          Science and Technology majoring in Computer Science. I am a fullstack
          developer with experience in MERN Stack, C++, PHP and a few others (😉
          Check them out in the resume). I am also a huge open-source enthusiast
          who believes in the power of community.
        </div>
        <div className="text-2xl text-gray-900 dark:text-gray-300 font-medium ">
          I have recently been trying to break into open-source by contributing
          on some projects so if you have a project and want to collaborate,
          don't hesitate to ping me.
        </div>
      </div>
    </section>
  );
};

export default About;
