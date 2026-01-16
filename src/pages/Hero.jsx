import React from 'react';
import profileImg from "../assets/DP.jpeg";

const Hero = () => {

  return (
    <>
      <section className="bg-base-300">
        <div className="container mx-auto px-4 pt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
              <div className="hover-3d">
                <figure className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img
                    src={profileImg}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="order-2 lg:order-1 text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-3xl sm:text-4xl font-bold">
                <span className="mr-2">Hi, I'm <span className="text-primary">Hammad</span>, a</span>
                <span className="text-rotate duration-1000 block lg:inline-block">
                  <span className="flex flex-col items-center lg:items-start">
                    <span>Software Engineer.</span>
                    <span>Web Developer.</span>
                  </span>
                </span>
              </h1>

              <p className="mt-4 max-w-lg mx-auto lg:mx-0">
                I build modern, responsive, and user-friendly web applications.
                I turn ideas into functional, scalable digital products. I focus
                on writing maintainable code, creating smooth user experiences,
                and solving real-world problems through technology. I’m always
                motivated to learn new tools, improve my skills, and contribute
                to meaningful projects.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <a href="#contact" className="bg-primary text-white font-medium shadow-lg shadow-blue-200 rounded-lg px-3 py-2">
                  Get in Touch
                </a>

                <a href="#projects" className="bg-white text-black font-[600] rounded-lg px-3 py-2">
                  View Projects
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero