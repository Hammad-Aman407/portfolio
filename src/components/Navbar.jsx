import React from 'react';

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar py-2">

          <div className="navbar-start gap-3">

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content mt-3 z-[1] w-[90vw] rounded-box bg-black text-white font-medium p-2"
              >
                <li><a href="#skills" className="hover:bg-transparent focus:bg-transparent text-sm">Skills</a></li>
                <li><a href="#education" className="hover:bg-transparent focus:bg-transparent text-sm mt-1">Education</a></li>
                <li><a href="#projects" className="hover:bg-transparent focus:bg-transparent text-sm mt-1">Projects</a></li>
                <li><a href="#contact" className="hover:bg-transparent focus:bg-transparent text-sm mt-1">Contact</a></li>
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-primary text-white p-1 rounded-lg">
                HA
              </span>
              <span className="text-base sm:text-lg font-bold">
                Hammad<span className="text-primary ml-1">Aman</span>
              </span>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-medium">
              <li><a href="#skills" className="hover:bg-transparent focus:bg-transparent mx-3">Skills</a></li>
              <li><a href="#education" className="hover:bg-transparent focus:bg-transparent mx-3">Education</a></li>
              <li><a href="#projects" className="hover:bg-transparent focus:bg-transparent mx-3">Projects</a></li>
              <li><a href="#contact" className="hover:bg-transparent focus:bg-transparent mx-3">Contact</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:Hammadaman686@gmail.com?subject=Hiring%20Request&body=Hello%20Hammad,"
            >
              <button className="font-medium bg-black text-white shadow-black shadow-md px-3 py-1 rounded-2xl">
                Hire Me
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar