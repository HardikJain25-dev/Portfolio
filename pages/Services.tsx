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
		<section className="py-16 px-6 mx-auto bg-white w-full max-[900px]:px-3 max-[600px]:px-1 max-[430px]:px-1">
			<section className="py-16 h-auto mx-auto bg-white mb-10">
				<h2 className="text-8xl font-semibold mb-20 w-auto h-30 bg-gradient-to-t from-blue-500 from-10% to-emerald-500 bg-clip-text text-transparent max-[900px]:text-5xl max-[600px]:text-3xl max-[430px]:text-xl max-[430px]:mb-8">
					Together, we can...
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg font-normal text-black/80 max-[900px]:gap-6 max-[600px]:gap-4 max-[430px]:gap-2">
					<SpotlightCard
						className="magic-card flex flex-col gap-4 max-w-[30rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10 max-[900px]:max-w-full max-[600px]:max-w-full"
						spotlightColor="#ff006630"
					>
						<div className="text-2xl font-bold flex items-center gap-2 justify-center pt-7 max-[900px]:text-xl max-[600px]:text-lg max-[430px]:text-base pt-4">
							<div className="text-muted-foreground">
								Launch modern, responsive websites that leave an impression
							</div>
						</div>
					</SpotlightCard>
					<SpotlightCard
						className="magic-card flex flex-col gap-4 max-w-[30rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10 max-[900px]:max-w-full max-[600px]:max-w-full"
						spotlightColor="#ff006630"
					>
						<div className="text-2xl font-bold flex items-center gap-2 max-[900px]:text-xl max-[600px]:text-lg max-[430px]:text-base">
							<div className="text-muted-foreground">
								Optimized for performance with minimal bundle size. Build fast,
								responsive websites without compromise.
							</div>
						</div>
					</SpotlightCard>
					<SpotlightCard
						className="magic-card flex flex-col gap-4 max-w-[30rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10 max-[900px]:max-w-full max-[600px]:max-w-full"
						spotlightColor="#ff006630"
					>
						<div className="text-2xl font-bold flex items-center gap-2 pt-7 max-[900px]:text-xl max-[600px]:text-lg max-[430px]:text-base pt-4">
							<div className="text-muted-foreground">
								Optimize performance and SEO for fast, scalable experiences
							</div>
						</div>
					</SpotlightCard>
				</div>
			</section>

			<section className="py-16 h-auto mx-auto bg-white">
				<h2 className="text-7xl font-semibold mb-10 text-black/70 max-[900px]:text-4xl max-[600px]:text-2xl max-[430px]:text-lg max-[430px]:mb-6">
					My Tech Stack...
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-lg font-normal text-black/80 max-[900px]:gap-6 max-[600px]:gap-4 max-[430px]:gap-2">
					{skillGroups.map((group) => (
						<SpotlightCard
							key={group.title}
							className="magic-card flex flex-col gap-4 max-w-[22rem] rounded-4xl bg-white border border-primary/10 shadow-2xl/10 max-[900px]:max-w-full max-[600px]:max-w-full"
							spotlightColor="#ff006630"
						>
							<div className="text-2xl font-bold flex items-center gap-2 justify-center pt-7 max-[900px]:text-xl max-[600px]:text-lg max-[430px]:text-base pt-4">
								{group.title}
							</div>
							<ul className="flex flex-wrap gap-2 justify-center text-base text-muted-foreground pb-6 max-[900px]:text-sm max-[600px]:text-xs max-[430px]:text-[10px]">
								{group.skills.map((skill) => (
									<li
										key={skill}
										className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 text-sm font-medium max-[900px]:px-2 max-[600px]:px-1.5 max-[430px]:px-1 max-[900px]:py-0.5 max-[600px]:py-0.5 max-[430px]:py-0.5"
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