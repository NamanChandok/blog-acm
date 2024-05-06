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
    return (
      <div key={i} className="p-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-slate-800 border-2 rounded-xl">
        <img src={post.imgUrl} alt="featured post" className="w-full h-48 object-cover rounded-lg" />
        <div className="p-2 pt-4">
          <span className="bg-blue-500/20  text-blue-500 font-semibold text-sm py-1 px-2 rounded-md">{post.tag}</span>
          <a href={`/blog/${post.slug}`}><h2 className="text-3xl my-3 font-bold dark:text-white text-black">{post.title}</h2></a>
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
    <main className="bg-white dark:bg-gray-900 min-h-screen pt-16">

      {/* Navbar */}

      <nav className="flex items-center justify-between w-full px-60 h-20 fixed top-0 bg-white dark:bg-gray-900 z-30">
        <img src="/next.svg" alt="logo" className="h-4 invert-0 dark:invert" />
        <div className="space-x-8">
          <a href="/" className="dark:text-white text-black">
            Home
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400">
            Blog
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400">
            Single Post
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400">
            Pages
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400">
            Contact
          </a>
        </div>
        <button
          onClick={handleThemeChange} 
          className="outline-none bg-black/15 dark:bg-blue-600 p-1 w-14 rounded-full h-8 pl-1 dark:pl-7 text-black dark:text-white"
        >
          <div className="h-6 w-6 bg-white shadow-md rounded-full"></div>
        </button>
      </nav>

      {/* Posts */}

      {postPreviews.length === 0 ? 
      <div className="max-w-5xl mx-auto min-h-[30rem]">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">No Posts Found</h3>
      </div>
      : <>
        <div className="max-w-5xl mx-auto relative">
          <img src={featuredPost.imgUrl} alt="featured post" className="w-full h-96 object-cover rounded-xl mt-8" />
          <div className="rounded-xl w-96 drop-shadow-lg p-6 absolute left-6 -bottom-12 bg-white dark:bg-gray-900 border-gray-200 dark:border-slate-800 border-2">
            <span className="bg-blue-500 dark:bg-blue-500/60 text-white text-sm py-1 px-2 rounded-md">{featuredPost.tag}</span>
            <a href={`/blog/${featuredPost.slug}`}><h2 className="text-4xl font-bold dark:text-white text-black my-3">{featuredPost.title}</h2></a>
            <div className="text-gray-500 space-x-6"><span className="text-gray-600 dark:text-gray-400">{featuredPost.author}</span><span>{featuredPost.date}</span></div>
          </div>
        </div>
        {postPreviews.length > 1 ?
        <div className="max-w-5xl mx-auto mt-24 mb-16">
          <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Latest Posts</h3>
          <div className="grid grid-cols-3 max-w-5xl mx-auto gap-3">{postPreviews}</div>
        </div> : 
      <div className="max-w-5xl mx-auto mt-24">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">No More Posts Found</h3>
      </div>}
      </>}

      {/* Footer */}

      <div className="bg-gray-100 py-10 border-t-2 border-gray-300 dark:bg-[#0c0f1a] dark:border-slate-700">
        <div className="max-w-5xl mx-auto text-sm">
          <div className="grid grid-cols-3 gap-10">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-black dark:text-white">About Us</h3>
              <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
              <p className="text-gray-600 dark:text-gray-400"><b className="text-black dark:text-white">Email : </b>info@acm.club <br />
              <b className="text-black dark:text-white">Phone : </b>+91 9811X XXXXX</p>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-black dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Home</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Blog</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Single Post</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Pages</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-black dark:text-white">Category</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Technology</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Art</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Lifestyle</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Travel</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400">Sports</a></li>
                </ul>
              </div>
            </div>
            <div className="space-y-3 dark:bg-slate-500/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-black dark:text-white">Newsletter</h3>
              <p className="text-gray-600 dark:text-gray-400">Subscribe to our newsletter to get our latest news.</p>
              <form className="space-y-2">
                <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-md border-2 border-gray-300 dark:border-slate-700 dark:bg-[#0c0f1a] dark:text-white placeholder:text-gray-300 dark:placeholder:text-slate-700" />
                <button className="bg-blue-600 text-white dark:text-white p-2 rounded-md w-full">Subscribe</button>
              </form>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 dark:bg-slate-500/20 dark:border-slate-700 my-6" />
          <div className="flex justify-between items-center">
            <div>
              <img src="/next.svg" alt="logo" className="h-4 invert-0 dark:invert mb-2" />
              <span className="text-gray-600 dark:text-gray-400">© 2024 ACM. All Rights Reserved.</span>
            </div>
            <div className="space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400">Terms of Use</a>
              <a href="#" className="text-gray-600 dark:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
