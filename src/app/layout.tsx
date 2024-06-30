import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";
import { Cursor } from "@/components/ui/CursorUI";

import LinearSVG from "./gradients/linearGradient";
import SpreadSVG from "./gradients/spreadGradient";
// import ArraySVG from "./gradients/ArraySVG";
import GridOverlay from "./gradients/gridOverlay";


const font = Poppins({
    subsets:["latin"],
    weight:["600"]
})
export const metadata: Metadata = {
	title: "Mohit Kumar",
	description:
		"Mohit Kumar's personal website. Software Engineer & Front-end Dev. Building web applications with Next.js, Tailwind CSS and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<head>
			<script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="8efceb49-2776-47f5-bb58-33fcc018acc9" async></script>
            </head>
			<body className={(font.className, "p-3 relative")}>
				<Cursor/>
				<Background />
				<GridOverlay/>
				{/* <ArraySVG/> */}
				<LinearSVG/>
				<SpreadSVG/>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					themes={["light", "dark", "system"]}
					enableSystem
					disableTransitionOnChange
				>
				{/* <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_10%_10%_at_80%_20%,rgba(125,211,252,1),rgba(255,255,255,0))] dark:opacity-50" /> */}
				{/* <div className="absolute top-0 z-[-2] h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-40%,rgba(150,19,10,1),rgba(255,255,255,0))]" /> */}
				{/* <div className="relative h-full w-full bg-slate-950">
					<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(125,211,252,1),rgba(255,255,255,0))]"></div>
					<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(125,211,252,1),rgba(255,255,255,0))]"></div>
				</div> */}
				{/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}


				{/* <div className="absolute inset-0 h-full w-full bg-transparent -z-30"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_30%_0%,#000_70%,transparent_100%)]"></div></div> */}
				

					<main className="max-w-2xl space-y-20 mx-auto py-24 pt-12 px-1">
						{children}
					</main>
				<Navbar />
				</ThemeProvider>
			</body>
		</html>
	);
}

const Background = () => {
	return (
		<>
			{/* <div className="absolute inset-0 -z-15 bg-gradient-to-t from-background from-55% via-purple-900 via-60% to-background to-65% h-full w-full" /> */}
			{/* <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background from-80% via-[#3f6576] via-90% to-background to-100% h-full w-full" /> */}
			{/* <div className="absolute inset-0 -z-11 bg-gradient-to-tf from-background from-40% via-slate-600 via-70% h-full w-full" /> */}
			{/* <div className="fixed inset-0 h-screen w-full -z-20 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:12px_16px] dark:opacity-75" /> */}
			{/* <div className="fixed inset-0 h-full w-full -z-30 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-transparent dark:opacity-75" /> */}
		</>
	);
};
