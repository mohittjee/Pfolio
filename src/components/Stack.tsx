"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHashtag } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import {
	SiAmazon,
	SiBootstrap,
	SiCplusplus,
	SiCss3,
	SiDocker,
	SiExpress,
	SiHiveBlockchain,
	SiHtml5,
	SiJavascript,
	SiKubernetes,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiXampp,
} from "react-icons/si";
import { Magnetic } from "./Magnetic";

const stack: { name: string; icon: IconType }[] = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "MySQL", icon: SiMysql },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "XAMPP", icon: SiXampp },
	{ name: "PHP", icon: SiPhp },
	{ name: "HTML5", icon: SiHtml5 },
	{ name: "CSS3", icon: SiCss3},
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "Bootstrap", icon: SiBootstrap},
	{ name: "Postman", icon: SiPostman },
];

const Stack = () => {
	return (
		<section id="stack">
			<h2 className="text-lg font-semibold flex items-center">
				Tech-Stack
				{/* <Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#stack"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link> */}
			</h2>
			<div className="flex gap-4 flex-wrap py-3 ">
				{stack.map((tech, i) => (
					<Magnetic stretch="sm" key={i}>
						<motion.div
							whileHover={{
								scale: 1.05,
								rotate: Math.random() * 2.5,
								transition: { duration: 0.1 },
							}}
							className=" flex items-center w-fit border p-1 px-2 cursor-pointer leading-none hover:shadow-md dark:shadow-border/25 transition-shadow duration-100"
						>
							<tech.icon className="h-5 w-5 mr-2" />
							{tech.name}
						</motion.div>
					</Magnetic>
				))}
			</div>
			<p>
				{/* {`My strength is building core web applications which can serve people throughout the globe.
				I'm currently working with Typescript, NextJS and HonoJS.  For me my first ❤️ is C++.  `} */}
				{`My strength is building dynamic and responsive web applications. 
				I'm currently focused on enhancing my skills in NextJS and ReactJS. `}
			</p>
		</section>
	);
};

export default Stack;
