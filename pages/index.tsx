"use client";
import DomeGallery from "@/components/DomeGallery";
import BubbleMenu from "@/components/ui/BubbleMenu";
import React from "react";
import PixelCard from "@/components/PixelCard";
import PrismaticBurst from "@/components/PrismaticBurst";
import FlowingMenu from "@/components/FlowingMenu";
import SpotlightCard from "@/components/SpotlightCard";

export default function PortfolioOnePage() {
  const items = [
    {
      label: "home",
      href: "#home",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "#about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "#projects",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "contact",
      href: "#contact",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  const demoItems = [
    {
      link: "https://enactusslc.com/",
      text: "Enactus Website",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "https://github.com/HardikJain25-dev/fintech-clone",
      text: "FinTech",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "https://github.com/HardikJain25-dev/notevault",
      text: "Notevault",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "https://github.com/HardikJain25-dev/creepolite",
      text: "GitHub",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background" style={{ scrollBehavior: "smooth" }}>
      <BubbleMenu
        logo={
          <span style={{ fontWeight: 700, color: "black" }}>It's Hardik</span>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      
      {/* Hero Section */}
      <div
        id="home"
        className="w-screen h-screen max-w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        <DomeGallery />
      </div>

      {/* Projects Section */}
      <div 
        id="projects" 
        className="h-[400px] sm:h-[500px] md:h-[600px] relative"
      >
        <FlowingMenu items={demoItems} />
      </div>
      
      {/* About Section */}
      <div
        id="about"
        className="pt-8 px-4 pb-8 sm:pt-12 sm:px-6 md:pt-20 md:px-12 lg:pt-25 lg:pl-60 lg:pb-25 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-6 sm:gap-8 lg:gap-40"
      >
        {/* Profile Image Card */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto flex-shrink-0">
          <PixelCard variant="yellow" className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
            <img 
              className="absolute w-full h-full z-[-1] object-cover" 
              src="/blocks/me.jpg" 
              alt="Profile picture" 
            />
          </PixelCard>
        </div>

        {/* About Me Card */}
        <SpotlightCard
          className="custom-spotlight-card w-full max-w-md lg:max-w-lg xl:w-150 xl:h-100 relative p-4 sm:p-6 flex flex-col justify-center gap-3 sm:gap-4 bg-gradient-to-br from-black/70 to-black/50 rounded-lg shadow-lg"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            About Me
          </h2>
          <p className="text-white text-xs sm:text-sm leading-relaxed">
            Hi! I'm Hardik Jain, a passionate <strong>Web Developer & Designer</strong> with a love for creating interactive and visually stunning web experiences. I enjoy turning ideas into beautiful, functional websites.
          </p>

          <ul className="text-white text-xs sm:text-sm flex flex-col gap-2 mt-2">
            <li className="flex items-start sm:items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 3-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" />
              </svg>
              <span>Experienced in React, Next.js, and JavaScript</span>
            </li>
            <li className="flex items-start sm:items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Skilled in UI/UX design and creative layouts</span>
            </li>
            <li className="flex items-start sm:items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m0-4h1v4h1m-6 4h.01M18 8h.01M6 12h.01M18 16h.01M6 8h.01" />
              </svg>
              <span>Always learning new technologies and frameworks</span>
            </li>
            <li className="flex items-start sm:items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 108 0 4 4 0 10-8 0zm0 6a8 8 0 1116 0H3z" />
              </svg>
              <span>Hobbyist in photography and digital art</span>
            </li>
          </ul>
        </SpotlightCard>
      </div>

      {/* Skills & Services Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-40 pb-8 sm:pb-12 md:pb-20 lg:pb-25">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-8 sm:mb-10 md:mb-12">
          Skills & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition-transform transform hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
              </svg>
              <span>Full Stack Web Development and Automations</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Building modern, responsive, and scalable web apps using React, Next.js, and Node.js. Automating workflows to boost efficiency.
            </p>
          </div> 

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition-transform transform hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>UI/UX Design</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Designing creative, user-friendly, and aesthetic interfaces for a seamless experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition-transform transform hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2h-6M4 7v6m0 0v6a2 2 0 002 2h6" />
              </svg>
              <span>Mobile-Friendly Apps</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Creating responsive and mobile-first designs for smooth usage across all devices.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition-transform transform hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
              </svg>
              <span>Services</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Offering end-to-end solutions including deployment, optimization, and ongoing support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-16 sm:mt-20 md:mt-32 px-4 sm:px-6 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.65}
            rayCount={0}
            mixBlendMode="lighten"
            colors={['#ffffffff', '#000000ff', '#ffffffff']}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-white mb-4 sm:mb-6 px-2">
              Let's Connect & Create Together!
            </h2>
            <p className="text-center text-gray-300 mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed px-2">
              I'm always excited to collaborate on new projects and bring ideas to life. Whether you have a concept in mind or need help brainstorming, let's connect and create something amazing together!
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:hardiksurana2505@gmail.com"
                className="bg-cyan-400 text-gray-900 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}