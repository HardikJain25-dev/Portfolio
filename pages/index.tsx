"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { motion } from "framer-motion";
import { BackgroundBeamsDemo } from "../components/ui/BackgroundBeamsDemo";

export default function AnimatedPinDemo() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsDemo />
      </div>
      <div className="relative z-10 h-auto min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-10 gap-8 bg-transparent">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-semibold leading-tight bg-gradient-to-r from-blue-500 from-10% to-emerald-500 bg-clip-text text-transparent"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {"Independent".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="block text-black bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            >
              Developer
            </motion.span>
          </motion.h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-black/80">
            Hey, I’m <b>Hardik</b> — a <b>creative developer</b> passionate about crafting <b>seamless digital experiences</b>. I build <b>clean, responsive interfaces</b> for <b>web and mobile</b>, blending <b>design and code</b> to make ideas come alive.
          </p>
        </div>



        <div className="w-full md:w-1/2 flex justify-center items-center gap-6">
          <PinContainer title="Have A Look" href="https://github.com/creepolite">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">

              {/* <a
                href="/resume.pdf"
                download
                className="inline-block mt-6 px-6 py-2 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors text-base"
              >
                Download Resume
              </a> */}

              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                <div className="text-xs text-slate-400"><h3 className=" font-bold text-base text-slate-100">
                  Let’s Build Together
                </h3>

                </div>
              </div>


              <div className="flex-1 mt-4 space-y-4">
                <div className="text-2xl font-bold text-slate-100">

                </div>


                <div className="grid grid-cols-2 gap-4 mb-0.5">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-sky-400">20+</div>
                    <div className="text-xs text-slate-400">Projects Completed</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-emerald-400">2</div>
                    <div className="text-xs text-slate-400">Years of Experience</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-xs text-slate-400">Focused</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-yellow-400">∞</div>
                    <div className="text-xs text-slate-400">Learning Every Day</div>
                  </div>
                </div>


                <div className="relative h-20 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute w-full h-20"
                      style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`,
                        animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                        opacity: 0.3 / i,
                        transform: `translateY(${i * 10}px)`,
                      }}
                    />
                  ))}
                </div>


                <div className="flex justify-between items-end ">
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse  " />
                    Online 
                  </div>
                  <a
                    href="/blocks/Resume1.pdf"
                    download
                    className="text-sky-400 text-sm font-medium hover:underline hover:text-sky-300 transition"
                  >
                    Download Resume→
                  </a>
                </div>
              </div>
            </div>
          </PinContainer>

          <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
        </div>




      </div>
    </div>
  );
}
