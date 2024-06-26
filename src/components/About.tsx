import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const About = () => {
	return (
		<>
			<section id="about">
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
				<p style={{textAlign:"justify"}}>
					{/* {`I'm Pranav, a Founding Engineer who's all about turning wild ideas into kick-ass web apps. 
					When I'm not submerged in code-commits, you can catch me dive-deep in a page-turner, geeking out over 
					the latest Netflix obsession, or exploring the great outdoors with my dog Brewsky. 
					Let's team up and build some exceptional products.`} */}
					{`I'm Mohit Kumar, a Web Development enthusiast with a passion for creating innovative and functional
					 web applications. When I'm not coding, you can find me exploring new technologies,
					 reading up on the latest industry trends, or enjoying a good book. Let's connect and build something 
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
		<section id="present">
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
				{/* Currently I work as a Founding Engineer at <Link href="https://www.linkedin.com/company/tour-me-now/mycompany/" className="hover-effect cursor-pointer hover:animate-pulse">Tour YC(S21).&nbsp;</Link> In my free
				time I freelance & work on my own projects! I&apos;m always looking for new
				things to work on, so if you are hiring, feel free to reach-out.&nbsp; */}

				{`Currently, I'm pursuing a Bachelor of Computer Applications at Doon Business School. In my free time, I work on various projects
				and internships to hone my skills.
				 I'm always on the lookout for new opportunities and collaborations, so feel free to `}

				<Link
					className="text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition-colors"
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
