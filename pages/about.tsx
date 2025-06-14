'use client'

import { SplineScene } from "../components/ui/splite";
import { Card } from "../components/ui/card"
import { MorphingTextDemo } from "../components/ui/text";
import { useState } from "react";
import { ProgressiveBlur } from "../components/ui/progressive-blur";
import { motion } from "framer-motion";

export function About() {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <Card className="w-full h-[700px] bg-black/[0.6] relative overflow-hidden ">
                <div className="flex h-full pl-8 max-[900px]:flex-col max-[900px]:pl-0">

                    <div className="flex-1 relative z-10 flex flex-col justify-center  max-[900px]:px-4">
                        <h1 className="text-white text-2xl md:text-2xl font-semibold ">
                            <MorphingTextDemo />
                        </h1>
                        <p className="relative ml-11 text-[2.5vh] mt-4 bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent max-[900px]:ml-0 max-[900px]:px-4">
                            At 17, I discovered a YouTube video where someone explained how to build a website. As a tech enthusiast, I was immediately captivated. Since that day, I have been passionate about technology and web development, and I have never looked back.
                        </p>
                    </div>

                    <div className="flex-1 relative gap-10 justify-left max-[900px]:h-[300px] max-[900px]:mt-8">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </Card>


            <div className="bg-white h-screen flex flex-row items-center justify-space px-16 py-16 gap-80 max-[1100px]:gap-10 max-[900px]:flex-col max-[900px]:h-auto max-[900px]:px-4 max-[900px]:py-8">
                <div
                    className='relative aspect-square h-[500px] overflow-hidden bg-white rounded-[30px] ml-9 max-[900px]:ml-0 max-[900px]:h-[300px] max-[900px]:w-full'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <img
                        src='/blocks/PHOTO-2025-06-08-00-07-27.jpeg'
                        alt='Hardik Jain'
                        className='absolute inset-0 object-cover w-full h-full'
                    />
                    <ProgressiveBlur
                        className='pointer-events-none absolute bottom-0 left-0 h-[65%] w-full'
                        blurIntensity={0.5}
                        animate={isHover ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                    <motion.div
                        className='absolute bottom-0 left-0'
                        animate={isHover ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        <div className='flex flex-col items-start gap-0 px-5 py-4'>
                            <p className='text-xl font-large text-white'>This is Me</p>
                            <span className='text-large text-zinc-300'>I Love Music</span>
                        </div>
                    </motion.div>
                </div>
                <div className="w-[600px] text-left max-[900px]:w-full max-[900px]:mt-8">
                    <h2 className="text-6xl font-bold text-gray-900 mb-4 max-[600px]:text-3xl">A Bit More About Me</h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-[600px]:text-base">
                        <br /> I believe in building things that are not just functional but also beautiful. Whether it’s designing user interfaces or writing clean code, I aim to merge creativity and logic. Outside of tech, you’ll find me lost in music or in the gym.<br /> <br />Anyways, I Started my professtional career at 18, lost count how many small projects i have made just for fun <br /> <br />Being a self-taught developer has been a journey of continuous learning and growth, it has given me extensive experience in various techs and frameworks making every type of project a possibility. I have worked on everything from simple websites to complex web applications, and I am always eager to take on new challenges.
                    </p>
                </div>
            </div>


        </>
    )
}

export default About;