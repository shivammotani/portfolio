"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../assets/dev-ed-wave.png";
import design from "../assets/design.png";
import code from "../assets/code.png";
import consulting from "../assets/consulting.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

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
        
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
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
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="profile_img relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-xl py-1">Service I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
              eleifend turpis, id vulputate
              <span className="text-teal-500"> sapien</span> dolor ac felis.
              Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
              posuere eget. Sed in nisl risus.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
              eleifend turpis, id vulputate
              <span className="text-teal-500"> sapien</span> dolor ac felis.
              Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
              posuere eget. Sed in nisl risus.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="text-5xl flex justify-center">
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className="py-2 text-gray-800">
                Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="text-5xl flex justify-center">
                <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className="py-2 text-gray-800">
                Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
              <div className="text-5xl flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className="py-2 text-gray-800 dark:text-white">
                Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
              eleifend turpis, id vulputate
              <span className="text-teal-500"> sapien</span> dolor ac felis.
              Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
              posuere eget. Sed in nisl risus.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
              eleifend turpis, id vulputate
              <span className="text-teal-500"> sapien</span> dolor ac felis.
              Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
              posuere eget. Sed in nisl risus.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-xl py-1">Qualification</h3>
          </div>

          <div className="timeline">
            <div className="container shadow-lg p-10 rounded-xl my-10 left-container">
              <span className="qual_rounder"></span>
              <div className="text-box">
                <h2>Alphabet</h2>
                <small>2018-2019</small>
                <p>
                  Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                  eleifend turpis, id vulputate
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="container shadow-lg p-10 rounded-xl my-10 right-container">
              <span className="qual_rounder"></span>
              <div className="text-box">
                <h2>Facebook</h2>
                <small>2018-2019</small>
                <p>
                  Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                  eleifend turpis, id vulputate
                </p>
                <span className="right-container-arrow"></span>
              </div>
            </div>

            <div className="container shadow-lg p-10 rounded-xl my-10 left-container">
              <span className="qual_rounder"></span>
              <div className="text-box">
                <h2>Tesla</h2>
                <small>2018-2019</small>
                <p>
                  Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                  eleifend turpis, id vulputate
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}

export default Home