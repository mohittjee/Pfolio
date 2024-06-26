import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const projects: {
	title: string;
	description: string;
}[] = [
	{
		title: "Campus Connect - A Query Management System",
		description:
			"Campus Connect is a comprehensive query management system designed for colleges, schools, and various organizations.",
	},
	{
		title: "Campus Connect - A Query Management System",
		description:
			"Campus Connect is a comprehensive query management system designed for colleges, schools, and various organizations.",
	},
	{
		title: "Campus Connect - A Query Management System",
		description:
			"Campus Connect is a comprehensive query management system designed for colleges, schools, and various organizations.",
	},
	{
		title: "Campus Connect - A Query Management System",
		description:
			"Campus Connect is a comprehensive query management system designed for colleges, schools, and various organizations.",
	},
];

const achievements: { title: string; description: string; href: string }[] = [
	{
		title: "VapiThon by Vapi AI (YC '23) ",
		description: "Won the Vapi Hackathon and recieved rewards. (2024' May)",
		href: "https://x.com/pranav12yoyo/status/1795913547127681386",
	},
    {
		title: "ProductHunt",
		description: "Authify ranked Top-20 Product of the Day in ProductHunt.",
		href: "https://www.producthunt.com/products/authify?utm_source=badge-featured&utm_medium=badge#authify",
	},
	{
		title: "CodeForces",
		description: " : Stood 161 Worldwide and Top-15 in India in Codeforces Round 782.",
		href: "https://codeforces.com/bestRatingChanges/7020929",
	},
    {
		title: "Samsung - IIT DELHI",
		description: "Won 'SAMSUNG SFT' among 18k teams over India (2022')",
		href: "https://www.facebook.com/watch/?v=777484540224320",
	},
];

const Achievements = () => {
	return (
		<section id="achievements" >
			<h2 className="text-lg flex items-center font-semibold">
				Achievements
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#achievements"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex sm:text-base text-sm flex-col gap-1 ">
				{achievements.map((achievement) => (
					<Link
						target="_blank"
						key={achievement.title}
						className="text-muted-foreground hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit hover:animate-pulse"
						href={achievement.href}
					>
						{achievement.title} - {achievement.description}
					</Link>
				))}
			</div>

			<div className="grid grid-cols-1 gap-4 ">
				{projects.map((project, i) => (
					<Card key={i} className="shadow-sm rounded-2xl dark:hover:bg-zinc-900 cursor-pointer">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription className="tracking-normal">{project.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>

		</section>
	);
};

export default Achievements;
