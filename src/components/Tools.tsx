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
		description: string[];
	}[] = [
		{
			title: "Web Development Intern - Octanet Services Pvt. Ltd.",	
			description: ["Developed a production-level responsive website using HTML, CSS, and JavaScript.",
				"Created RESTful APIs with Node.js and Express for backend functionality.",
				"Managed databases with MongoDB using Mongoose for efficient data storage and retrieval.",
				"Utilized Git for version control and collaborated with team members on GitHub."]
		},
	];


	// const tools: { title: string; description: string; href: string }[] = [
	// 	{
	// 		title: "AugmentCode",
	// 		description: "AI Software Engineer on augmentChat. (Part-Time)",
	// 		href: "https://www.linkedin.com/company/augmentinc/mycompany/",
	// 	},
	// ];

	const Tools = () => {
		return (
			<section id="tools" >
				<h2 className="text-lg flex items-center font-semibold pb-3">
					Experiences
					{/* <Link
						className="text-muted-foreground"
						aria-label="anchor"
						scroll
						href={"/#tools"}
					>
						<FaHashtag className="ml-2 h-3 w-3" />
					</Link> */}
				</h2>
				{/* <div className="flex sm:text-base text-sm flex-col gap-1">
					{tools.map((tool) => (
						<Link
							target="_blank"
							key={tool.title}
							className="text-muted-foreground hover:animate-pulse hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit"
							href={tool.href}
						>
							{tool.title} - {tool.description}
						</Link>
					))}
				</div> */}

				
				<div className="grid grid-cols-1 gap-4 ">
					{projects.map((project, i) => (
						<Card key={i} className="shadow-sm rounded-2xl dark:hover:bg-zinc-900 cursor-pointer">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardContent>
								<ul className="list-disc list-outside">
									{project.description.map((point, index) => (
										<li key={index} >{point}</li>
									))}
								</ul>
							</CardContent>
						</CardHeader>
						</Card>
					))}
				</div>

					
			</section>
		);
	};

	export default Tools;
