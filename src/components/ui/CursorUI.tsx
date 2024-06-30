"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { SpringOptions, motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = ({
	className,
	blur = "none",
	variant = "circle",
	behaviour = "spring",
	smoothOptions = {
		stiffness: 300,  // Maximum stiffness
		damping: 15,  // 25% damping
		mass: .6,  // 75% mass
	},
	cursorSize = 25,  // Small cursor size
}: {
	className?: string;
	blur?: "none" | "sm" | "md" | "lg";
	variant?: "circle" | "square";
	behaviour?: "static" | "spring";
	smoothOptions?: SpringOptions;
	cursorSize?: number;
}) => {
	const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
	const smooth = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const handleMouseMove = (e: { clientX: any; clientY: any }) => {
		const { clientX, clientY } = e;
		mouse.x.set(clientX - cursorSize / 2);
		mouse.y.set(clientY - cursorSize / 2);
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	});

	return (
		<>
			{/* STATIC RENDER */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0, 1] }}
				transition={{ duration: 0.5, times: [0, 0.9, 1] }}
				style={{
					left: mouse.x,
					top: mouse.y,
					height: `${cursorSize}px`,
					width: `${cursorSize}px`,
				}}
				className={cn(
					"rounded-full z-50 cursor-none pointer-events-none fixed inset-0 backdrop-invert",
					className,
					"invisible",
					behaviour === "static" && "visible",
					variant === "square" && "rounded-none"
				)}
			/>

			{/* SPRING RENDER */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0, 1] }}
				transition={{ duration: 0.5, times: [0, 0.9, 1] }}
				style={{
					left: smooth.x,
					top: smooth.y,
					height: `${cursorSize}px`,
					width: `${cursorSize}px`,
				}}
				className={cn(
					"z-50 cursor-none pointer-events-none fixed inset-0 backdrop-invert",
					className,
					"invisible",
					behaviour === "spring" && "visible",
					variant === "circle" && "rounded-full",
					variant === "square" && "rounded-none"
				)}
			/>
		</>
	);
};
