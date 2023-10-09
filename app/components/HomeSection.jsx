"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import deved from "../assets/dev-ed-wave.png";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Use useEffect to set up the intersection observer
  useEffect(() => {
    const sections = document.querySelectorAll(".container, .timeline"); // Replace with a more specific selector if needed

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is in view
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
    
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <div></div>
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyshivam</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        
         <div name = "home" className="h-screen w-full">
          <div className="max-w-screen-lg flex flex-col items-center justify-center h-full
          md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-5xl font-bold py-2 text-teal-600 md:text-6xl">
                Shivam Motani
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                Developer and Designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate sapien dolor ac felis. Proin eget
                mattis sem. Nunc lacinia urna mi, vitae iaculis massa posuere
                eget. Sed in nisl risus. Praesent lobortis dictum orci, vitae
                sollicitudin urna cursus eget. Suspendisse potenti. Quisque tempus
                rhoncus ante. Donec aliquam, mi sed pellentesque eleifend, dui
                dolor gravida lectus, a auctor leo elit eget leo. Suspendisse
                vitae commodo sem.
              </p>

              <div>
                <button className="group bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 my-2 
                rounded-md flex items-center cursor-pointer">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} />
                  </span>
                </button>
              </div>
            </div>

            <div className="profile_img relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="My display anime" />
          </div>
          </div>
         </div>
        </section>
      </main>
      </div>
  )
}

export default Home