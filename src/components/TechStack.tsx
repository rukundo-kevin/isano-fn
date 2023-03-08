import React from "react";
import StackCard from "./Stack";

import github from "../images/github.png";
import postgres from "../images/postgres.png";
import mongodb from "../images/mongodb2.png";
import mysql from "../images/mysql.png";
import cpp from "../images/c++.png";
import docker from "../images/docker.webp";
import express from "../images/Expressjs.png";
import graphql from "../images/graphql.png";
import jest from "../images/jest.png";
import javascript from "../images/js.png";
import nexus from "../images/nexus.png";
import php from "../images/php.png";
import redux from "../images/redux.png";
import sequelize from "../images/sequelize.png";
import tailwind from "../images/tailwind.png";
import typescript from "../images/typescript.png";
import git from "../images/git.png";
import reactImg from "../images/react.png";
import mongoose from "../images/mongoose.png";
import nodejs from "../images/nodejs.png";
const TechStack = () => {
  const languages = [
    {
      name: "C++",
      image: cpp,
    },
    {
      name: "JavaScript",
      image: javascript,
    },
    {
      name: "TypeScript",
      image: typescript,
    },
    {
      name: "PHP",
      image: php,
    },
  ];
  const tools = [
    {
      name: "Git",
      image: git,
    },
    {
      name: "Github",
      image: github,
    },
    {
      name: "Node.js",
      image: nodejs,
    },
    {
      name: "Express",
      image: express,
    },
    {
      name: "React.js",
      image: reactImg,
    },
    {
      name: "Redux",
      image: redux,
    },
    {
      name: "Docker",
      image: docker,
    },
    {
      name: "Jest",
      image: jest,
    },
    {
      name: "Tailwindcss",
      image: tailwind,
    },
    {
      name: "GraphQL",
      image: graphql,
    },
  ];
  const databases = [
    {
      name: "PostgreSQL",
      image: postgres,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "MySQL",
      image: mysql,
    },
    {
      name: "Sequelize",
      image: sequelize,
    },
    {
      name: "Mongoose",
      image: mongoose,
    },
    {
      name: "Nexus",
      image: nexus,
    },
  ];
  return (
    <section className="min-h-full m-12 md:m-2 flex flex-col items-start md:items-center md:justify-around lg:justify-center">
      <div className="flex flex-col justify-start md:justify-center items-center mb-6 w-[70vw] md:w-[75vw] lg:w-[60vw]">
        <div className="text-4xl font-bold text-gray-900 dark:text-white self-start mb-4  md:-ml-8">
          Tech Stack
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="text-gray-700 dark:text-gray-400 font-medium mb-2 text-2xl ml-2 md:col-span-2 lg:col-span-4">
            Languages
          </div>
          {languages.map(({ image, name }, idx) => (
            <StackCard Icon={image} name={name} key={idx} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center mb-6 w-[70vw] md:w-[75vw] lg:w-[60vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="text-gray-700 dark:text-gray-400 text-2xl font-medium mb-2 ml-2 md:col-span-2 lg:col-span-4">
            Tools & Technologies
          </div>
          {tools.map(({ image, name }, idx) => (
            <StackCard Icon={image} name={name} key={idx} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center mb-6 w-[70vw] md:w-[75vw] lg:w-[60vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="text-gray-700 dark:text-gray-400 text-2xl font-medium mb-2 ml-2 md:col-span-2 lg:col-span-4">
            Database & Related tools
          </div>
          {databases.map(({ image, name }, idx) => (
            <StackCard Icon={image} name={name} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
