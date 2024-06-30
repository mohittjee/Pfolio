"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const offsetTop = buttonRef.current.getBoundingClientRect().top + window.scrollY;
        setIsSticky(window.scrollY > offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyStyles = isSticky
    ? {
        position: "fixed",
        top: 0,
        width: buttonRef.current?.offsetWidth, // Ensure the width matches its original width
        zIndex: 1000,
        padding: "1rem 0 .5rem 0 ",
      }
    : {};

  return (
    <main className="overflow-hidden">
      <div ref={buttonRef} style={{ position: "relative" }}>
        <menu
          className="flex justify-end py-4"
          style={stickyStyles}
        >
          <Button asChild className="rounded-full border opacity-85 border-gray-300 shadow-lg ">
            <Link href={"/blog"}>Return to blog</Link>
          </Button>
        </menu>
      </div>
      <section className="prose">{children}</section>
    </main>
  );
};

export default Layout;
