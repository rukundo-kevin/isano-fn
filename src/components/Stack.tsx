import React from "react";

interface Props {
  Icon: string;
  name: string;
}

const StackCard = ({ Icon, name }: Props) => {
  return (
    <div className="flex items-center text-gray-900 dark:text-white py-2 px-2 m-2 md:m-0 ml-2  mt-2 md:mt-4  dark:bg-[#22223b] bg-[#f8eded] shadow-lg  border dark:border-0 border-primary rounded w-full md:w-[90%]">
      <img src={Icon} className="w-16 md:w-10" alt="" />
      <div className="ml-8 md:ml-4 text-base font-medium">{name}</div>
    </div>
  );
};

export default StackCard;
