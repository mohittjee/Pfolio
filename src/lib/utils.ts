import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const blogPosts: { title: string; date: string; href: string }[] = [
	{
		title: "Custom Loaders With React, TypeScript, and Framer Motion",
		date: "mar. '24",
		href: "animated-loaders",
	},
];

export const validateString = (
	value: unknown,
	maxLength: number
  ): value is string => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
	  return false;
	}
  
	return true;
  };
  
  export const getErrorMessage = (error: unknown): string => {
	let message: string;
  
	if (error instanceof Error) {
	  message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
	  message = String(error.message);
	} else if (typeof error === "string") {
	  message = error;
	} else {
	  message = "Something went wrong";
	}
  
	return message;
  };
  
