import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const About = () => {
	return (
		<>
			<section id="about" className="dark:text-[#8E8FFA]">
				<h2 className="text-lg font-semibold flex items-center">
					About
					{/* <Link
						className="text-muted-foreground"
						aria-label="anchor"
						scroll
						href={"/#about"}
					>
						<FaHashtag className="ml-2 h-3 w-3" />
					</Link> */}
				</h2>
				<p style={{textAlign:"justify" }}>
					{`I'm Mohit Kumar, a Web Development enthusiast with a passion for creating innovative and functional
					 web applications. When I'm not coding, you can find me exploring new technologies,
					 reading up on the latest industry trends, or playing some action games. Let's connect and build something 
					 amazing together.`}
				</p>
			</section>
			<Present />
		</>
	);
};

export default About;

const Present = () => {
	return (
		<section id="present" className="dark:text-[#8E8FFA]">
			<h2 className="text-lg flex items-center font-semibold">
				Present{" "}
				{/* <Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#present"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link> */}
			</h2>
			<p style={{textAlign:"justify"}}>

				Currently, I&apos;m pursuing a Bachelor of Computer Applications at&nbsp;
				<Link
					className="text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition-colors dark:text-[#a64dff]"
					target="_blank"
					href="https://www.doonbusinessschool.com/"
					type="email"
				>
					Doon Business School

				</Link> 
				.&nbsp;In my free time, I work on various projects and internships to hone my skills. I&apos;m always on the lookout for new opportunities and collaborations, so feel free to&nbsp;

				<Link
					className="text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition-colors dark:text-[#a64dff]"
					target="_blank"
					href="mailto:mohittjee@gmail.com?subject=Hello!&body=Hi, My name is [name] and I have a hiring opportunity that I would like to discuss with you."
					type="email"
				>
					reach out!

				</Link>
			</p>
		</section>
	);
};
