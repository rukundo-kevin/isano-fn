import React from "react";

import MasterCard from "../images/paypal.png";
import problemSolving from "../images/problem solving.png";

interface Props {
  Icon: string;
  name: string;
}
const InterestCard = ({ Icon, name }: Props) => {
  return (
    <div className="flex items-stretch text-white py-3 px-2 m-2 md:m-0 mr-16  ml-2  mt-2 md:mt-4 bg-[#2f3061] rounded w-full md:w-[90%]">
      <img src={Icon} className="w-10 md:w-12 pl-2" alt="" />
      <div className="ml-8 md:ml-4 text-xl mt-3">{name}</div>
    </div>
  );
};
const Interest = () => {
  const interests = [
    {
      name: "Fullstack Development",
      image: MasterCard,
    },
    {
      name: "Problem Solving",
      image: problemSolving,
    },
  ];
  return (
    <section className="h-full ml-12 md:m-2 flex flex-col items-start md:items-center md:justify-around lg:justify-center">
      <div className="flex flex-col justify-start md:justify-center items-center mb-6 w-[75vw] md:w-[75vw] lg:w-[65vw]">
        <div className="text-3xl font-bold text-gray-900 dark:text-white self-start mb-4 ">
          My Interest Lies In:
        </div>
        <div className="ml-2 md:ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
          {interests.map(({ image, name }, idx) => (
            <InterestCard Icon={image} name={name} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
