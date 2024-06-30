"use client";

import { cn } from "@/lib/utils";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { MouseEvent } from "react";

export default function SpotlightCard({
	colorRGB = { r: 120, g: 120, b: 120 },
	opacity = 0.2,
	className,
	spring = false,
	size = 250,
	rounded = "2xl",
	children,
}: {
	colorRGB?: { r: number; g: number; b: number };
	opacity?: 0.1 | 0.15 | 0.2 | 0.25 | 0.3 | 0.35 | 0.4;
	className?: string;
	spring?: boolean;
	size?: number;
	rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
	children?: React.ReactNode;
}) {
	let mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
	const smooth = {
		x: useSpring(mouse.x, { stiffness: 100, damping: 50, mass: 0.3 }),
		y: useSpring(mouse.y, { stiffness: 100, damping: 50, mass: 0.3 }),
	};

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouse.x.set(clientX - left);
		mouse.y.set(clientY - top);

		smooth.x.set(clientX - left);
		smooth.y.set(clientY - top);
	}

	return (
		<div
			className={cn(
				`group relative w-full h-full transition
				border-neutral-200 dark:border-neutral-900 
				hover:border-neutral-300 dark:hover:border-neutral-800
				dark:shadow-neutral-900/50 
				bg-neutral-100 dark:bg-[#0f0529] 
				text-neutral-900 dark:text-neutral-100`,
				className,

				rounded === "none" && "rounded-none",
				rounded === "sm" && "rounded-sm",
				rounded === "md" && "rounded-md",
				rounded === "lg" && "rounded-lg",
				rounded === "xl" && "rounded-xl",
				rounded === "2xl" && "rounded-2xl",
				rounded === "3xl" && "rounded-3xl",
				rounded === "full" && "rounded-full"
			)}
			onMouseMove={handleMouseMove}
			style={{ minHeight: '100%', padding: 0, margin: 0 }}
		>
			<motion.div
				className={cn(
					"pointer-events-none absolute -inset-px opacity-100 transition group-hover:opacity-100",

					rounded === "none" && "rounded-none",
					rounded === "sm" && "rounded-sm",
					rounded === "md" && "rounded-md",
					rounded === "lg" && "rounded-lg",
					rounded === "xl" && "rounded-xl",
					rounded === "2xl" && "rounded-2xl",
					rounded === "3xl" && "rounded-3xl",
					rounded === "full" && "rounded-full"
				)}
				style={{
					background: useMotionTemplate`
            radial-gradient(
              ${size}px circle at ${spring ? smooth.x : mouse.x}px ${
						spring ? smooth.y : mouse.y
					}px,
              rgba(${colorRGB?.r}, ${colorRGB.g}, ${colorRGB.b}, ${opacity}),
              transparent 100%
            )
          `,
				}}
			/>
			{children}
		</div>
	);
}
