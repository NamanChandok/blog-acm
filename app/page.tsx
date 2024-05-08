"use client";
import { useEffect, useState } from "react";
import { PostMetadata } from "@/components/PostMetadata"
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cards = ({posts}: {posts: PostMetadata[]}) => {

  return (
  <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, i) => {
        const cardRef = useRef(null);

        useEffect(() => {

          const card = cardRef.current;

          gsap.registerPlugin(ScrollTrigger);

          gsap.set(card, { opacity: 0, y:50 });
          ScrollTrigger.create({
            trigger: card,
            onEnter: () => gsap.to(card, { duration: 0.6, opacity: 1, y:0, delay: i*0.2, ease: "power2.inOut"}),
          });
          return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
          };
        }
        , []);
        return (
          <div ref={cardRef} className="transition-none blog-card p-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-slate-800 border-2 rounded-xl">
            <img src={post.imgUrl} alt="featured post" className="w-full h-48 object-cover rounded-lg" />
            <div className="p-2 pt-4">
              <span className="bg-blue-500/20  text-blue-500 font-semibold text-sm py-1 px-2 rounded-md">{post.tag}</span>
              <a href={`/blog/${post.slug}`}><h2 className="text-3xl my-3 font-bold dark:text-white text-black">{post.title}</h2></a>
              <div className="text-gray-500 space-x-6 text-sm"><span className="text-gray-600 dark:text-gray-400">{post.author}</span><span>{post.date}</span></div>
            </div>
          </div>
        );
      })}
    </div>
  )

};

const AboutFooter = () => {
  const ab_f_ref = useRef(null);

  useEffect(() => {
    const ab_f = ab_f_ref.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(ab_f, { opacity: 0, x: -30 });

    ScrollTrigger.create({
      trigger: ab_f,
      onEnter: () => gsap.to(ab_f, { duration: 0.6, x:0, opacity: 1, ease: "power2.inOut", delay: 0.2}),
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="space-y-3 transition-none" ref={ab_f_ref}>
      <h3 className="font-bold text-lg text-black dark:text-white">About Us</h3>
      <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
      <p className="text-gray-600 dark:text-gray-400"><b className="text-black dark:text-white">Email : </b>info@acm.club <br />
      <b className="text-black dark:text-white">Phone : </b>+91 9811X XXXXX</p>
    </div>
  )
};

const LinksFooter = () => {
  const l_f_ref = useRef(null);

  useEffect(() => {
    const l_f = l_f_ref.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(l_f, { opacity: 0 });

    ScrollTrigger.create({
      trigger: l_f,
      onEnter: () => gsap.to(l_f, { duration: 0.6, opacity: 1, ease: "power2.inOut", delay: 0.2}),
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="flex md:gap-10 gap-32 transition-none" ref={l_f_ref}>
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
  )
}

const NewsLetterFooter = () => {
  const nl_f_ref = useRef(null);

  useEffect(() => {
    const nl_f = nl_f_ref.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(nl_f, { opacity: 0, x: 30 });

    ScrollTrigger.create({
      trigger: nl_f,
      onEnter: () => gsap.to(nl_f, { duration: 0.6, x:0, opacity: 1, ease: "power2.inOut", delay: 0.2}),
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="space-y-3 dark:bg-slate-500/10 p-6 rounded-lg transition-none" ref={nl_f_ref}>
      <h3 className="font-bold text-lg text-black dark:text-white">Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-400">Subscribe to our newsletter to get our latest news.</p>
      <form className="space-y-2">
        <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-md border-2 border-gray-300 dark:border-slate-700 dark:bg-[#0c0f1a] dark:text-white placeholder:text-gray-300 dark:placeholder:text-slate-700" />
        <button className="bg-blue-600 text-white dark:text-white p-2 rounded-md w-full">Subscribe</button>
      </form>
    </div>
  )
};

const CopyRight = () => {
  const cr_f_ref = useRef(null);

  useEffect(() => {
    const cr_f = cr_f_ref.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(cr_f, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: cr_f,
      onEnter: () => gsap.to(cr_f, { duration: 0.6, opacity: 1, y: 0, ease: "power2.inOut", delay: 0.2}),
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (<div ref={cr_f_ref} className="transition-none">
    <hr className="border-t-2 border-gray-300 dark:bg-slate-500/20 dark:border-slate-700 my-6" />
    <div className="flex md:flex-row flex-col justify-between md:items-center gap-4">
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
    </div>)
}

const FeaturedCard = ({post}: {post: PostMetadata}) => {

  const ft_post = useRef(null);

  useEffect(() => {
    const ft = ft_post.current;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(ft, { opacity: 0});

    ScrollTrigger.create({
      trigger: ft,
      onEnter: () => gsap.to(ft, { duration: 0.6, opacity: 1, ease: "power2.inOut"}),
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto relative p-6 opacity-0 transition-none" ref={ft_post}>
      <img src={post.imgUrl} alt="featured post" className="w-full h-96 object-cover rounded-xl mt-8" />
      <div className="rounded-xl md:w-96 w-80 drop-shadow-lg p-6 absolute left-10 -bottom-12 bg-white dark:bg-gray-900 border-gray-200 dark:border-slate-800 border-2">
        <span className="bg-blue-500 dark:bg-blue-500/60 text-white text-sm py-1 px-2 rounded-md">{post.tag}</span>
        <a href={`/blog/${post.slug}`}><h2 className="text-4xl font-bold dark:text-white text-black my-3">{post.title}</h2></a>
        <div className="text-gray-500 space-x-6"><span className="text-gray-600 dark:text-gray-400">{post.author}</span><span>{post.date}</span></div>
      </div>
    </div>
  );
};

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState<PostMetadata[]>([]);
  useEffect(() => {
    fetch('/api/readfiles').then((res) => {
      return res.json();
    }).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const [theme, setTheme] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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

      <nav className="w-full h-20 fixed top-0 bg-white dark:bg-gray-900 z-30">
        <div className="flex items-center justify-between h-full max-w-5xl mx-auto p-6">
          <img src="/next.svg" alt="logo" className="h-4 invert-0 dark:invert" />
          <div className="space-x-8 hidden md:block">
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
              Admin
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-12 z-40">
            <button
              onClick={handleThemeChange} 
              className="outline-none  bg-black/15 dark:bg-blue-600 p-1 w-14 rounded-full h-8 pl-1 dark:pl-7 text-black dark:text-white"
            >
              <div className="h-6 w-6 bg-white shadow-md rounded-full flex items-center justify-center">
                <div className="h-4 w-4 bg-[url('/themeButton.svg')] bg-cover bg-left dark:bg-right"></div>
              </div>
            </button>
            <button 
              onClick={()=>{setNavOpen(!navOpen)}} 
              className="w-6 h-6 bg-[url('/navButton.svg')] bg-cover dark:invert md:hidden outline-none" 
              style={navOpen ? {backgroundPosition: "left"} : {backgroundPosition: "right"}}
            ></button>
          </div>
          <div className="md:hidden fixed inset-y-0 w-96 bg-white dark:bg-slate-900 drop-shadow-md p-6 pt-20 text-right z-20" style={navOpen ? {right: "-24rem"} : {right: "0"}}>
            <div className="flex flex-col gap-6 font-semibold tracking-tighter text-lg">
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
                Admin
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Posts */}

      {loading ? 
      <div className="max-w-5xl mx-auto min-h-[30rem] p-6">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Loading...</h3>
      </div> :
      <>

      {posts.length === 0 ? 
      <div className="max-w-5xl mx-auto min-h-[30rem] p-6">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">No Posts Found</h3>
      </div>
      : <>
        <FeaturedCard post={posts[0]} />
        <div className="max-w-5xl mx-auto p-6 my-20">
          <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Recent Posts</h3>
          <Cards posts={posts} />
        </div>
      </>
      }

      {/* Footer */}

      <div className="bg-gray-100 py-10 border-t-2 p-6 overflow-hidden border-gray-300 dark:bg-[#0c0f1a] dark:border-slate-700">
        <div className="max-w-5xl mx-auto text-sm">
          <div className="grid md:grid-cols-3 gap-10">
            
            <AboutFooter />

            <LinksFooter />

            <NewsLetterFooter />

          </div>
          
          <CopyRight />

        </div>
      </div>

      </>
      }


    </main>
  );
}
