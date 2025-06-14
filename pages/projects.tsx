"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";




export default function Projects() {
  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-6 md:px-0 py-10 max-[430px]:px-2"
    >
      <h1 className="text-9xl font-semibold mt-4 mb-2 bg-gradient-to-r from-blue-500 from-10% to-emerald-500 bg-clip-text text-transparent max-[430px]:text-4xl max-[430px]:mb-4">
        Work
      </h1>
      <p className="text-white/70 mb-9 max-w-2xl max-[430px]:text-sm max-[430px]:mb-5">
        From beautiful marketing websites to fun, intuitive mobile apps, all the way to powerful, data-driven SaaS dashboards that your clients will love to use.
      </p>
      <div className="flex justify-between items-center mb-8 max-[430px]:flex-col max-[430px]:items-start max-[430px]:mb-4">
        <div></div>
        <a
          href="https://github.com/creepolite"
          className="text-lg font-medium border-b-2 border-[#dba146] hover:border-black transition max-[430px]:text-base"
        >
          See all projects
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-[430px]:gap-4">





        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[430px]:p-3">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[430px]:text-lg"
            >
             Full Stack Apparel Store
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[430px]:text-xs"
            >
              Check out this full stack apparel store built with Next.js, Tailwind CSS, and MongoDB. It features a sleek design, user authentication, and a shopping cart.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/react1.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[430px]:h-32"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[430px]:mt-8">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[430px]:px-2 max-[430px]:py-1"
              >
                GitHub →
              </CardItem>
             
            </div>
          </CardBody>
        </CardContainer>





        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[430px]:p-3">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[430px]:text-lg"
            >
              Flask
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[430px]:text-xs"
            >
              This is a simple Flask Application that converts a image to a different format
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/Screenshot 2025-06-14 at 1.22.28 PM.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[430px]:h-32"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[430px]:mt-8">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite/FlaskProject"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[430px]:px-2 max-[430px]:py-1"
              >
                GitHub →
              </CardItem>
             
            </div>
          </CardBody>
        </CardContainer>





        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[430px]:p-3">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[430px]:text-lg"
            >
              Build on JS
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[430px]:text-xs"
            >
             This is a simple digital clock built with JavaScript. It displays the current time and updates every second.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/photo4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[430px]:h-32"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[430px]:mt-8">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite/java-script-"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[430px]:px-2 max-[430px]:py-1"
              >
                GitHub →
              </CardItem>
              
            </div>
          </CardBody>
        </CardContainer>




        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[430px]:p-3">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[430px]:text-lg"
            >
             C++
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[430px]:text-xs"
            >
              Management System is a C++ project that allows users to manage student records, courses, and grades. It provides a user-friendly interface for efficient data management.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/last4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[430px]:h-32"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[430px]:mt-8">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[430px]:px-2 max-[430px]:py-1"
              >
                GitHub →
              </CardItem>
             
            </div>
          </CardBody>
        </CardContainer>



      </div>
    </section>
  );
}