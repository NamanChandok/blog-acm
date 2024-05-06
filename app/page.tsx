"use client";
import { useEffect, useState } from "react";

export default function Home() {

  const [theme, setTheme] = useState("light");
  
  useEffect(() => {  
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <main className="bg-white dark:bg-slate-900">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-32 h-20">
        <img src="/next.svg" alt="logo" className="h-4 invert-0 dark:invert" />
        <div className="space-x-8">
          <a href="/" className="dark:text-white text-black">
            Home
          </a>
          <a href="#" className="dark:text-white text-black">
            Blog
          </a>
          <a href="#" className="dark:text-white text-black">
            Single Post
          </a>
          <a href="#" className="dark:text-white text-black">
            Pages
          </a>
          <a href="#" className="dark:text-white text-black">
            Contact
          </a>
        </div>
        <button
          onClick={handleThemeChange} 
          className="outline-none bg-black/15 dark:bg-blue-500 p-1 w-14 rounded-full h-8 pl-1 dark:pl-7 text-black dark:text-white"
        >
          <div className="h-6 w-6 bg-white shadow-md rounded-full"></div>
        </button>
      </nav>

      {/* Featured Post */}

      <div></div>

    </main>
  );
}
