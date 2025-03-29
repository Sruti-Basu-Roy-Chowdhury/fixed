import React, { useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/src/assets/images/logo.png";
import "@fontsource/poppins";

const Navbar = ({ activePage }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="w-full fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-md p-6 flex flex-col items-center h-24"
    >
      <div className="w-full flex justify-between items-center px-4 h-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <div className="flex space-x-6 text-lg font-medium text-[#05445E]">
          {["job", "companies", "blog", "pricing"].map((name) => (
            <div key={name} className="relative flex flex-col items-center">
              <a
                href={`/${name}`}
                className={
                  activePage === name ? "text-[#05445E] font-bold" : "hover:text-gray-700"
                }
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </a>
              {activePage === "job" && name === "job" && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-6px] w-full h-[4px] bg-[#05445E] rounded"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-[#05445E]">
          <button className="px-4 py-2 hover:text-gray-600">Login</button>
          <button className="px-4 py-2 bg-[#05445E] text-white rounded-lg hover:bg-blue-700">Signup</button>
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:underline">
              <span>Job Seeker</span>
              <ChevronDown size={20} />
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg">
              {["Profile", "Applications", "Settings"].map((item) => (
                <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const Job = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Navbar activePage="job" />
        <div className="text-center p-40 text-[#05445E] w-full h-100 bg-gradient-to-b from-white via-[#DEF4FF] to-white">
          <h1 className="font-[poppins] text-5xl font-bold">There are 50k+ Jobs here for you</h1>
          <p className="text-lg font-semibold mt-4 font-[poppins]">
            Discover the best remote and work-from-home jobs at top remote companies.
          </p>
        </div>

        

          <div className="flex justify-center items-center space-x-4 mt-6 px-2 ">
            <div className="relative w-[600px]">
              <input type="text" placeholder="Search jobs..." className="w-full p-4 pl-10 pr-20 border border-gray-300 rounded-lg shadow-sm" />
              <Search className="absolute left-3 top-3 text-gray-500" size={25} />
              <button className="absolute right-2 top-2 bg-[#05445E] text-white px-6 py-2 rounded-md hover:bg-blue-700">Search</button>
            </div>

            {["Experience Level", "Salary Range", "Companies"].map((filter, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                  <span>{filter}</span>
                  <ChevronDown size={20} />
                </button>
                <div className="hidden group-hover:block absolute mt-2 w-48 bg-white text-black shadow-lg rounded-lg max-h-60 overflow-y-auto">
                  {(filter === "Experience Level"
                    ? ["Entry Level", "Mid Level", "Senior Level"]
                    : filter === "Salary Range"
                    ? ["10,000 - 50,000", "50,000 - 1,00,000", "1,00,000 - 10,00,000", "10,00,000+"]
                    : ["Google", "Amazon", "Microsoft", "Facebook", "Tesla", "Apple", "Netflix"]
                  ).map((option) => (
                    <a key={option} href="#" className="block px-4 py-2 hover:bg-gray-200">{option}</a>
                  ))}
                </div>
              </div>
            ))}




            
          <div>
            
        
          </div>
         
        </div>
        <div className=" w-[311px] bg-[#E5F6FE] shadow-lg rounded-lg p-6 border border-gray-200 ml-18 mt-30">
            <h2 className="text-2xl font-semibold text-[#000000]">Set Job Reminders</h2>
            <p className=" mt-2 text-[#000000]">Enter your email address and get job notifications.</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter Email Id"
                className="w-[188px] p-3 border bg-white border-gray-300 rounded-lg shadow-sm"
              />
              <button className="w-[106px] mt-3 bg-[#05445E] text-white px-4 py-3 rounded-md hover:bg-blue-700">
                Submit
              </button>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Job;