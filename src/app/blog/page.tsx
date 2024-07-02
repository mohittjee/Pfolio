"use client"
import Header from "@/components/Header";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "../../components/ui/separator";

function Page() {
	return (
		// <div className="relative grid grid-cols-1 ">
		<div className="fixed inset-0 z-1  dark:bg-gradient-to-tr from-background from-20% via-[#3f6576] via-50% to-background to-80% h-full w-full" >

			<div className=" grid grid-cols-1 gap-5 ">
				
				<span className="pt-2 font-medium text-center text-3xl tracking-wide text-muted-foreground dark:text-[#8E8FFA]">Blogs</span>
				<Separator/>

				{blogPosts.reverse().map((post, i) => (
					<Link key={i} href={`/blog/${post.href}`}>
						<Card className="shadow-xl max-w-90 ml-28 mr-28 rounded-2xl bg-card dark:bg-card dark:hover:bg-zinc-900 cursor-pointer">
							<CardHeader>
								<CardTitle>{post.title}</CardTitle>
								<CardDescription>{post.date}</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Page;
