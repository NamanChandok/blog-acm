"use client";
import { useEffect, useState } from "react";
import { PostMetadata } from "@/components/PostMetadata"

export default function Home() {

  const [posts, setPosts] = useState<PostMetadata[]>([]);
  useEffect(() => {
    fetch('/api/readfiles').then((res) => {
      return res.json();
    }).then((data) => {
      setPosts(data);
    });
  }, []);

  const featuredPost = posts[0];

  const postPreviews = posts.map((post, i) => {
    if (i === 0) return;
    console.log(post);
    return (
      <div key={i} className="p-2 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 border-2 rounded-xl">
        <img src={post.imgUrl} alt="featured post" className="w-full h-48 object-cover rounded-lg" />
        <div className="p-2 pt-4">
          <span className="bg-slate-500 dark:bg-slate-500/60 text-white text-sm py-1 px-2 rounded-md">{post.tag}</span>
          <a href={`/post/${post.slug}`}><h2 className="text-3xl my-3 font-bold dark:text-white text-black">{post.title}</h2></a>
          <div className="text-gray-500 space-x-6 text-sm"><span className="text-gray-600 dark:text-gray-400">{post.author}</span><span>{post.date}</span></div>
        </div>
      </div>
    );
  })

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
    <main className="bg-white dark:bg-slate-900 min-h-screen">

      {/* Navbar */}

      <nav className="flex items-center justify-between max-w-5xl mx-auto h-20">
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

      {postPreviews.length === 0 ? 
      <div className="max-w-5xl mx-auto">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">No Posts Found</h3>
      </div>
      : <>
        <div className="max-w-5xl mx-auto relative">
          <img src={featuredPost.imgUrl} alt="featured post" className="w-full h-96 object-cover rounded-xl mt-8 mb-24" />
          <div className="rounded-xl w-96 drop-shadow-lg p-6 absolute left-6 -bottom-12 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 border-2">
            <span className="bg-slate-500 dark:bg-slate-500/60 text-white text-sm py-1 px-2 rounded-md">{featuredPost.tag}</span>
            <a href={`/post/${featuredPost.slug}`}><h2 className="text-4xl font-bold dark:text-white text-black my-3">{featuredPost.title}</h2></a>
            <div className="text-gray-500 space-x-6"><span className="text-gray-600 dark:text-gray-400">{featuredPost.author}</span><span>{featuredPost.date}</span></div>
          </div>
        </div>

        {/* Post Previews */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Latest Posts</h3>
          <div className="grid grid-cols-3 max-w-5xl mx-auto gap-3">{postPreviews}</div>
        </div>
      </>}

    </main>
  );
}
