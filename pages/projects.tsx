"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export default function Projects() {
  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-6 md:px-0 py-10 max-[900px]:px-3 max-[600px]:px-1 max-[430px]:px-1"
    >
      <h1 className="text-9xl font-semibold mt-4 mb-2 bg-gradient-to-r from-blue-500 from-10% to-emerald-500 bg-clip-text text-transparent max-[900px]:text-6xl max-[600px]:text-4xl max-[430px]:text-2xl max-[430px]:mb-4">
        Work
      </h1>
      <p className="text-white/70 mb-9 max-w-2xl max-[900px]:text-base max-[600px]:text-sm max-[430px]:text-xs max-[430px]:mb-5">
        From beautiful marketing websites to fun, intuitive mobile apps, all the way to powerful, data-driven SaaS dashboards that your clients will love to use.
      </p>
      <div className="flex justify-between items-center mb-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:mb-6 max-[430px]:flex-col max-[430px]:items-start max-[430px]:mb-4">
        <div></div>
        <a
          href="https://github.com/creepolite"
          className="text-lg font-medium border-b-2 border-[#dba146] hover:border-black transition max-[900px]:text-base max-[600px]:text-sm max-[430px]:text-xs"
        >
          See all projects
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-[900px]:gap-6 max-[600px]:gap-4 max-[430px]:gap-2">

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[900px]:p-4 max-[600px]:p-2 max-[430px]:p-1">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[900px]:text-lg max-[600px]:text-base max-[430px]:text-sm"
            >
             Full Stack Apparel Store
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[900px]:text-xs max-[600px]:text-xs max-[430px]:text-[10px]"
            >
              Check out this full stack apparel store built with Next.js, Tailwind CSS, and MongoDB. It features a sleek design, user authentication, and a shopping cart.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/react1.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[900px]:h-40 max-[600px]:h-32 max-[430px]:h-20"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[900px]:mt-12 max-[600px]:mt-8 max-[430px]:mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[900px]:px-3 max-[600px]:px-2 max-[430px]:px-1 max-[900px]:py-1 max-[430px]:py-0.5"
              >
                GitHub →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[900px]:p-4 max-[600px]:p-2 max-[430px]:p-1">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[900px]:text-lg max-[600px]:text-base max-[430px]:text-sm"
            >
              Flask
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[900px]:text-xs max-[600px]:text-xs max-[430px]:text-[10px]"
            >
              This is a simple Flask Application that converts a image to a different format
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/Screenshot 2025-06-14 at 1.22.28 PM.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[900px]:h-40 max-[600px]:h-32 max-[430px]:h-20"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[900px]:mt-12 max-[600px]:mt-8 max-[430px]:mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite/FlaskProject"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[900px]:px-3 max-[600px]:px-2 max-[430px]:px-1 max-[900px]:py-1 max-[430px]:py-0.5"
              >
                GitHub →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[900px]:p-4 max-[600px]:p-2 max-[430px]:p-1">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[900px]:text-lg max-[600px]:text-base max-[430px]:text-sm"
            >
              Build on JS
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[900px]:text-xs max-[600px]:text-xs max-[430px]:text-[10px]"
            >
             This is a simple digital clock built with JavaScript. It displays the current time and updates every second.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/photo4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[900px]:h-40 max-[600px]:h-32 max-[430px]:h-20"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[900px]:mt-12 max-[600px]:mt-8 max-[430px]:mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite/java-script-"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[900px]:px-3 max-[600px]:px-2 max-[430px]:px-1 max-[900px]:py-1 max-[430px]:py-0.5"
              >
                GitHub →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border max-[900px]:p-4 max-[600px]:p-2 max-[430px]:p-1">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white max-[900px]:text-lg max-[600px]:text-base max-[430px]:text-sm"
            >
             C++
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 max-[900px]:text-xs max-[600px]:text-xs max-[430px]:text-[10px]"
            >
              Management System is a C++ project that allows users to manage student records, courses, and grades. It provides a user-friendly interface for efficient data management.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/blocks/last4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl max-[900px]:h-40 max-[600px]:h-32 max-[430px]:h-20"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20 max-[900px]:mt-12 max-[600px]:mt-8 max-[430px]:mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/creepolite"
                target="__blank"
                className="bg-black px-4 py-2 rounded-xl text-xs font-normal dark:text-white max-[900px]:px-3 max-[600px]:px-2 max-[430px]:px-1 max-[900px]:py-1 max-[430px]:py-0.5"
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