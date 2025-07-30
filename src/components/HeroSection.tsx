import { Button } from "@/components/ui/button";
import { ArrowDownIcon, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import profile from "../assets/IMG_9202.jpg";

export function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className={cn(
        "pt-20 min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden",
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      )}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {theme === "dark" ? (
          // Dark theme background elements
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </>
        ) : (
          // Light theme background elements
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      <img
        src={profile}
        alt="profile picture"
        className="h-60 m-8 rounded-full"
      />

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 space-y-6">
        <div>
          <h2 className="text-lg md:text-xl font-medium text-primary animate-fade-in">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
            Arun Manokaran
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Passionate about leveraging technology to create impactful solutions
          in web development and AI | JavaScript, React & Node.js
          {/* {"  @"}
          <a
            href="https://www.linkedin.com/in/arundotmano"
            className="underline"
          >
            arundotmano
          </a> */}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-4 pt-4 animate-fade-in-up delay-200">
          <a
            href="https://github.com/arunmanokaran"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/arundotmano"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="#contact"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Scroll down indicator */}
        <div className="left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-500 flex flex-col justify-end items-center -inset-x-1/2 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
