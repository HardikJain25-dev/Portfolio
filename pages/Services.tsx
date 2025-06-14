import { FaBolt } from "react-icons/fa";

import { SpotlightCard } from "../components/ui/spotlight-card";


const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "React Native",
    ],
  },
  {
    title: "Backend & Server",
    skills: ["Node.js", "Nodemon", "Express.js", "EJS"],
  },
  {
    title: "Databases",
    skills: ["Firebase", "MongoDB", "SQL", "SQLite"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Dart"],
  },
];


export default function Services() {
  return (
    <section className="py-16 px-6 mx-auto bg-white w-full">
      <section className="py-16 h-auto mx-auto bg-white mb-10">
        <h2 className="text-8xl font-semibold mb-20 w-auto h-30 bg-gradient-to-t from-blue-500 from-10% to-emerald-500 bg-clip-text text-transparent ">
          Together, we can...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg font-normal text-black/80 ">
          <SpotlightCard
            className="magic-card flex flex-col gap-4 max-w-[30rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10"
            spotlightColor="#ff006630"
          >
            <div className="text-2xl font-bold flex items-center gap-2 justify-center pt-7">

              <div className="text-muted-foreground">
                Launch modern, responsive websites that leave an impression
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="magic-card flex flex-col gap-4 max-w-[30rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10"
            spotlightColor="#ff006630"
          >
            <div className="text-2xl font-bold flex items-center gap-2">

              <div className="text-muted-foreground">
                Optimized for performance with minimal bundle size. Build fast,
                responsive websites without compromise.
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="magic-card flex flex-col gap-4 max-w-[30rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10"
            spotlightColor="#ff006630"
          >
            <div className="text-2xl font-bold flex items-center gap-2 pt-7">

              <div className="text-muted-foreground">
                Optimize performance and SEO for fast, scalable experiences
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>


      <section className="py-16 h-auto mx-auto bg-white">
        <h2 className="text-7xl font-semibold mb-10 text-black/70">My Tech Stack...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-lg font-normal text-black/80">
          {skillGroups.map((group) => (
            <SpotlightCard
              key={group.title}
              className="magic-card flex flex-col gap-4 max-w-[22rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10"
              spotlightColor="#ff006630"
            >
              <div className="text-2xl font-bold flex items-center gap-2 justify-center pt-7">
                {group.title}
              </div>
              <ul className="flex flex-wrap gap-2 justify-center text-base text-muted-foreground pb-6">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </section>
  );
}