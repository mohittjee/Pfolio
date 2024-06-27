"use client";

import { ModeToggle } from "./ui/mode-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

const tabs: { label: string; id: string; href: string }[] = [
	{ label: "Home", id: "home", href: "/" },
	{ label: "Blog", id: "blog", href: "/blog" },
];

const Navbar = () => {
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState(pathname.split("/")[1] || "home");

	useEffect(() => {
		setActiveTab(pathname.split("/")[1] || "home");
	}, [pathname]);

	return (
		<nav className="fixed inset-x-0 bottom-4 w-full px-2">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}				
				layout
				style={{ originY: "0px" }}
				transition={{ duration: 0.4 }}
				className="bg-secondary shadow-sm rounded-full relative mx-auto justify-evenly items-center  max-w-xs p-2 px-6 border border-gray-300"
			>
				<div className="flex gap-2 justify-evenly items-center">
					{tabs.map((tab) => (
						<Link prefetch aria-label={tab.id} key={tab.id} href={tab.href}>
							<button
								name={tab.id}
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									"inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition focus-visible:outline-none  focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
									"relative h-9 px-4 py-2 rounded-full"
								)}
								style={{
									WebkitTapHighlightColor: "transparent",
								}}
							>
								{tab.label}
								{/* Active tab span */}
								{activeTab === tab.id && (
									<motion.span
										layoutId="selected-tab"
										className="absolute flex inset-0 z-50 bg-accent/75 mix-blend-overlay rounded-full"
										// originY: "0px" is a workaround for a bug in Framer Motion
										style={{ originY: "0px" }}
										transition={{ type: "spring", duration: 0.5 }}
									/>
								)}
							</button>
						</Link>
					))}

					<ModeToggle />
				</div>
			</motion.div>
		</nav>
	);
};

export default Navbar;
