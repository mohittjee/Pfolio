"use client"
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { X, Globe, Mail, XIcon } from "lucide-react";
import {motion} from "framer-motion";

import SubmitBtn from "./formcontruct/submitbutton";
import toast from "react-hot-toast";
import { sendEmail } from "./formcontruct/sendEmail";

const Connect = () => {
	return (
		<section id="connect">
			<h2 className="text-lg font-semibold flex items-center pb-3">
				Let&apos;s work on some ideas together..
				{/* <Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#connect"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link> */}
			</h2>
			<div className="flex flex-col space-y-1 sm:text-base text-sm ">

				<div className="flex gap-4 pb-6">
					{/* <p className="max-w-[6ch] w-full">Github</p> */}

					<Link target="_blank" href={"https://github.com/mohittjee"}>
						<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-full"
						>
							<Button className="rounded-xl">
								<GitHubLogoIcon className="mr-2 size-4" />								
								<ArrowUpRight className="h-4 w-4 ml-1" />
							</Button>
						</motion.button>
					</Link>
					<Link target="_blank" href={"https://twitter.com/OffSenseTweets"}>
						<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-full"
						>
							<Button className="rounded-xl">
								<XIcon className="mr-2 size-4" />								
								<ArrowUpRight className="h-4 w-4 ml-1" />
							</Button>
						</motion.button>
					</Link>
					<Link target="_blank" href={"https://linkedin.com/in/OffSense"}>
						<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-full"
						>
							<Button className="rounded-xl">
								<LinkedInLogoIcon className="mr-2 size-4" />								
								<ArrowUpRight className="h-4 w-4 ml-1" />
							</Button>
						</motion.button>
					</Link>
					<Link target="_blank" href={"mailto:mohittjee@gmail.com"}>
						<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-full"
						>
							<Button className="rounded-xl">
								<Mail className="mr-2 size-4" />								
								<ArrowUpRight className="h-4 w-4 ml-1" />
							</Button>
						</motion.button>
					</Link>

					{/* <div className="flex gap-4">
						<p className="max-w-[6ch] w-full">Calendly</p>
						<Link
							className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground "
							href={"https://calendly.com/"}
							target="_blank"
						>
							<p className="truncate">Schedule a Call.</p>
							<ArrowUpRight className="h-4 w-4 ml-1" />
						</Link>
					</div> */}

				</div>	
				
				
					
					
					<div className="gap-4">
						<h2 className="text-lg font-semibold flex items-center pb-3">
							Or Leave a Message
						</h2>
							<form
										className=" flex flex-col  dark:text-black"
										action={async (formData) => {
										const { data, error } = await sendEmail(formData);

										if (error) {
											toast.error(error);
											return;
										}

										toast.success("Email sent successfully!");
										}}
									>
										<input
										className="h-14 px-4 rounded-xl border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
										name="senderEmail"
										type="email"
										required
										maxLength={500}
										placeholder="Your email"
										/>
										<textarea
										className="h-40 my-3 rounded-xl border border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
										name="message"
										placeholder="Your message"
										required
										maxLength={5000}
										/>
										<div className="items-center justify-center flex flex-col mt-4">
										<SubmitBtn />
										</div>
									</form>
						</div>
			</div>
		</section>
	);
};

export default Connect;
