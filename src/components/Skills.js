import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import './Skills.css'

export default function Skills() {
    return (
        <section id="skills" className="skl">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <ChipIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
              <strong>Skills</strong>
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              <strong>Versatile problem solver with strong attention to detail and a proactive approach. 
  Effective collaborator with excellent project management skills and critical thinking abilities. 
  Adaptable and dedicated to delivering high-quality results in any professional setting.</strong>
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="bdg p-2 sm:w-1/2 w-full">
                  <div className="line bg-gray-800 rounded flex p-4 h-full items-center">
                    <BadgeCheckIcon className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div> 
              ))}
            </div>
          </div>
        </section>
      );
}