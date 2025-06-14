'use client'
import { KnotAnimation } from "../components/ui/knot-animation";
import { HoverPeek } from "../components/ui/link-preview";
import { Timeline } from "../components/ui/timeline";
import Image from "next/image";

export default function Pageproject() {

    const data = [
        {
            title: "React",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Starting with full-stack React development
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[430px]:grid-cols-1">
                        <Image
                            src="/blocks/react1.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/react2.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/react3.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/react4.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "JavaScript",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        JavaScript is one of my favourite languages to work with. I have
                        built many projects using JavaScript, including web applications,
                        games, and automation scripts.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I have experience with various JavaScript frameworks and libraries,
                        such as React, Node.js, and Express.js. I am also familiar with
                        modern JavaScript features like ES6+ syntax, async/await, and
                        promises.
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[430px]:grid-cols-1">
                        <Image
                            src="/blocks/photo1.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/photo2.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/photo3.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/photo4.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "C++/Python",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Covering everything from Python and C++ including Oops
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-[600px]:text-xs">
                            ✅ C++ OOPs concepts
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-[600px]:text-xs">
                            ✅ Python Data Structures
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-[600px]:text-xs">
                            ✅ Python OOPs concepts
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-[600px]:text-xs">
                            ✅ Python Algorithms
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-[600px]:text-xs">
                            ✅ C++ Algorithms
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[430px]:grid-cols-1">
                        <Image
                            src="/blocks/last1.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/last2.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/last3.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                        <Image
                            src="/blocks/last4.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] max-[900px]:h-32 max-[600px]:h-24 max-[430px]:h-28"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
  

    <>
        <div className="">
           <div>
            <div className="bg-white w-full h-[80vh] flex items-center justify-center p-20 gap-80 max-[1400px]:gap-32 max-[1100px]:gap-10 max-[900px]:flex-col max-[900px]:h-auto max-[900px]:p-6 max-[900px]:gap-8 max-[900px]:items-start max-[900px]:justify-start max-[600px]:p-2 max-[600px]:gap-4 max-[430px]:flex-col max-[430px]:p-1 max-[430px]:gap-2 max-[430px]:items-start max-[430px]:justify-start">
                <div className="w-130 h-130 border rounded-[40px] flex items-center justify-center bg-black max-[1400px]:w-[400px] max-[1400px]:h-[400px] max-[1400px]:p-6 max-[1100px]:w-[300px] max-[1100px]:h-[300px] max-[1100px]:p-4 max-[900px]:w-full max-[900px]:h-[220px] max-[900px]:p-3 max-[600px]:h-[140px] max-[600px]:p-2 max-[430px]:w-full max-[430px]:h-[100px] max-[430px]:p-1">
                    <KnotAnimation />
                </div>
                <div className="flex min-h-screen pt-50 justify-center items-center bg-white max-[900px]:min-h-0 max-[900px]:pt-14 max-[900px]:items-start max-[900px]:justify-start max-[600px]:pt-6 max-[430px]:min-h-0 max-[430px]:pt-4 max-[430px]:items-start max-[430px]:justify-start">
                    <p className="text-lg text-gray-800 text-left max-[900px]:text-base max-[900px]:text-left max-[600px]:text-sm max-[430px]:text-xs max-[430px]:text-left">
                        Hover for my socials:{" "}
                        <HoverPeek url="https://github.com/creepolite">
                            <a
                                href="https://github.com/creepolite"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-blue-600 text-[3vh] underline decoration-blue-400 decoration-dotted hover:text-blue-800 hover:decoration-blue-600 hover:decoration-solid gap-2 max-[900px]:text-base max-[600px]:text-sm max-[430px]:text-xs"
                            >
                                GitHub
                            </a>
                        </HoverPeek>
                        <HoverPeek url="https://www.linkedin.com/in/hardik-jain-25518126a/">
                            <a
                                href="https://www.linkedin.com/in/hardik-jain-25518126a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-blue-600 text-[3vh] underline decoration-blue-400 decoration-dotted hover:text-blue-800 hover:decoration-blue-600 hover:decoration-solid ml-2 max-[900px]:text-base max-[600px]:text-sm max-[430px]:text-xs"
                            >
                                LinkedIn
                            </a>
                        </HoverPeek>
                    </p>
                </div>
            </div>

            <div className="min-h-auto w-full relative max-[430px]:min-h-auto max-[430px]:w-auto">
                <div className="absolute top-0 left-0 w-full max-[430px]:w-auto">
                    <Timeline data={data} />
                </div>
            </div>

            <style jsx global>{`
              @media (max-width: 900px) {
                .hydrated {
                  width: 100% !important;
                }
              }
              @media (max-width: 600px) {
                .hydrated {
                  width: 100% !important;
                }
              }
              @media (max-width: 430px) {
                .hydrated {
                  width: auto !important;
                }
              }
            `}</style>
        </div>
        </div>
    </>


    )
}