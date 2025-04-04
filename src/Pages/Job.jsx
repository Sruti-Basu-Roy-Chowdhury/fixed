import React, { useState} from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import "@fontsource/poppins";
import Navbar from "../component/Navbar";
import { CheckSquare, Square } from "lucide-react";
import { Star } from "lucide-react";
import Image1 from "../assets/images/freepik.png";
import Image2 from "../assets/images/image 23.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FaMedal } from 'react-icons/fa';
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { IoBookmarkSharp } from "react-icons/io5";
import Footer from"/src/component/Footer";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    pages.push(1);
    
    // Calculate start and end of visible page range
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust if we're near the start or end
    if (currentPage <= 3) {
      end = Math.min(4, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 3, 2);
    }
    
    // Add ellipsis if needed after first page
    if (start > 2) {
      pages.push('...');
    }
    
    // Add visible page numbers
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    // Add ellipsis if needed before last page
    if (end < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    
      <button className=" p-2 w-full border border-[#EFEFEF] flex justify-center items-center mt-6 space-x-2 font-[poppins]">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-white text-[#05445E] cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-300'}`}
      >
         <h1 className="  flex items-center gap-2 text-gray-700 hover:text-gray-900">
      <HiArrowLeft />
      Previous
    </h1>
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          className={`px-3 py-1 ml-15 rounded-md ${page === currentPage ? 'bg-[#05445E] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'} ${typeof page !== 'number' ? 'cursor-default' : 'cursor-pointer'}`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-white text-[#05445E] cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-300'}`}
      >
        <div className="  flex items-center gap-2 text-gray-700 hover:text-gray-900">
      
        Next
        <HiArrowRight />

</div>
      </button>
      </button>
   
    
  );
};

const Job = () => {
  const [selected, setSelected] = useState("hourly");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sortFilter, setSortFilter] = useState("Newest Post");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(18); // 3 columns x 3 rows = 9 jobs per page

  // Mock job data - in a real app, this would come from an API
  const [jobs, setJobs] = useState(
    Array(4000).fill().map((_, i) => ({
      id: i + 1,
      title: i % 2 === 0 ? "Frontend Developer" : "Backend Developer",
      company: i % 2 === 0 ? "Tech Corp" : "Tech",
      description: "We're looking for a skilled developer with React/Node.js experience.",
      employees: "100 - 500 Employees",
      benefits: "Employee Benefits",
      salary: "Salary-₹ 6-8 LPA",
      image: Image2
    }))
  );
  

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => {
    if (typeof pageNumber === 'number' && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const options = [
    "Full-time",
    "Part-time",
    "Freelance",
    "Internship",
    "Contract",
    "Project-based",
  ];

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
  const [selectedExperience, setSelectedExperience] = useState([]);

  const toggleExperienceLevels = (level) => {
    setSelectedExperience((prevSelected) =>
      prevSelected.includes(level)
        ? prevSelected.filter((item) => item !== level)
        : [...prevSelected, level]
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar activePage="job" />
        <div className="text-center p-40 text-[#05445E] w-full h-100 bg-gradient-to-b from-white via-[#DEF4FF] to-white">
          <h1 className="font-[poppins] text-5xl font-bold">
            There are {jobs.length}+ Jobs here for you
          </h1>
          <p className="text-lg font-semibold mt-4 font-[poppins]">
            Discover the best remote and work-from-home jobs at top remote
            companies.
          </p>
        </div>

        {/* Search and filters */}
        <div className="flex justify-center items-center space-x-4 mt-6 px-2">
          <div className="relative w-[850px]">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full p-4 pl-10 pr-20 border border-gray-300 rounded-lg shadow-sm"
            />
            <Search className="absolute left-3 top-3 text-gray-500" size={25} />
            <button className="absolute right-2 top-2 bg-[#05445E] text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>

          {["Experience Level", "Salary Range", "Companies"].map((filter, index) => (
            <div key={index} className="relative group cursor-pointer">
              <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer">
                <span>{filter}</span>
                <ChevronDown size={20} />
              </button>
              <div className="hidden group-hover:flex flex-col absolute z-10 mt-2 w-48 bg-white text-black shadow-lg rounded-lg max-h-60 overflow-y-auto pointer-events-auto">
                {(filter === "Experience Level"
                  ? ["Entry Level", "Mid Level", "Senior Level"]
                  : filter === "Salary Range"
                  ? [
                      "10,000 - 50,000",
                      "50,000 - 1,00,000",
                      "1,00,000 - 10,00,000",
                      "10,00,000+",
                    ]
                  : [
                      "Google",
                      "Amazon",
                      "Microsoft",
                      "Facebook",
                      "Tesla",
                      "Apple",
                      "Netflix",
                    ]
                ).map((option) => (
                  <a
                    key={option}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex px-20 py-10 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-1/4 flex flex-col gap-6">
            <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#000000]">
                Set Job Reminders
              </h2>
              <p className="mt-2 text-[#000000]">
                Enter your email address and get job notifications.
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="w-full p-3 border bg-white border-gray-300 rounded-lg shadow-sm"
                />
                <button className="w-full mt-3 bg-[#05445E] text-white px-4 py-3 rounded-md hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#000000]">
                Job post
              </h2>
              <select className="mt-2 px-4 py-2 border rounded-lg bg-white text-black cursor-pointer w-full">
                <option value="7">Last Week</option>
                <option value="15">Last 15 Days</option>
                <option value="30">Last 1 Month</option>
                <option value="45">Last 45 Days</option>
              </select>
              <h2 className="mt-8 text-xl font-semibold text-left">
                Working Schedule
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                {options.map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleOption(option)}
                  >
                    {selectedOptions.includes(option) ? (
                      <CheckSquare className="text-blue-600" />
                    ) : (
                      <Square className="text-gray-500" />
                    )}
                    <span className="text-lg">{option}</span>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="mt-8 text-xl font-semibold text-left">
                  Experience Level
                </h2>
                <div className="mt-4 flex flex-col gap-2">
                  {experienceLevels.map((level) => (
                    <div
                      key={level}
                      className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100"
                      onClick={() => toggleExperienceLevels(level)}
                    >
                      {selectedExperience.includes(level) ? (
                        <CheckSquare className="text-blue-600" />
                      ) : (
                        <Square className="text-gray-500" />
                      )}
                      <span className="text-lg">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mt-8 text-xl font-semibold text-left">
                  Range Salary
                </h2>

                <div className="flex flex-col gap-4 mt-4">
                  <button
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setSelected("hourly")}
                  >
                    {selected === "hourly" ? (
                      <CheckSquare size={20} />
                    ) : (
                      <Square size={20} />
                    )}
                    Hourly
                  </button>

                  <button
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setSelected("fixed")}
                  >
                    {selected === "fixed" ? (
                      <CheckSquare size={20} />
                    ) : (
                      <Square size={20} />
                    )}
                    Fixed
                  </button>
                </div>

                <div className="mt-4 flex gap-4 flex-col">
                  <div
                    className="flex gap-4"
                    style={{ display: selected === "hourly" ? "flex" : "none" }}
                  >
                    <input
                      type="number"
                      placeholder="$ Min    /hr"
                      className="border p-2 rounded w-32"
                      value={minValue}
                      onChange={(e) => setMinValue(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="$ Max   /hr"
                      className="border p-2 rounded w-32"
                      value={maxValue}
                      onChange={(e) => setMaxValue(e.target.value)}
                    />
                  </div>

                  <div
                    style={{ display: selected === "fixed" ? "block" : "none" }}
                  >
                    <select className="border p-2 rounded w-full">
                      <option value="30k-50k">$30k - $50k</option>
                      <option value="50k-70k">$50k - $70k</option>
                      <option value="70k-100k">$70k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6">
              <Search className=" left-3 text-gray-500" size={25} />
              <h2 className="text-2xl font-semibold text-[#000000] ml-8 -mt-7.5">
                Find you dream job
              </h2>
              <p className="mt-2 text-[#000000] text-xs text-left ml-8">
                Create a profile and we'll match you
                <br />
                with relevant remote jobs for free.
              </p>
              <div className="mt-4 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Share your job search status
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Showcase your skills beyond a resume
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Get discovered by top companies
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Set salary expectations upfront
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Automatically discover relevant roles
                </h1>
              </div>
            </div>

            <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-[#000000]">
                Get the best opportunities
              </h2>
              <p className="mt-2 text-[#000000] font-semibold">
                Create your profile today
              </p>
              <div className="mt-4 flex gap-4 ">
                <img
                  src={Image1}
                  alt="Image 1"
                  className="w-40 h-40 object-cover rounded-lg ml-25"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Job Cards */}
          <div className="w-3/4 font-[poppins]">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-800">
                Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, jobs.length)} Jobs of {jobs.length}
              </h1>
              <div className="relative group font-[poppins]">
                <div className="flex items-center space-x-2 text-[#00A7AC] text-sm cursor-pointer">
                  <span className="font-bold text-[#000000]">Sort by</span>
                  <span>{sortFilter}</span>
                  <ChevronDown size={20} />
                </div>
                <div className="hidden group-hover:block absolute mt-2 w-48 bg-white text-[#00A7AC] shadow-lg rounded-lg max-h-60 overflow-y-auto">
                  <ul>
                    {[
                      "Newest Post",
                      "Past 5 Days",
                      "Past 15 Days",
                      "Past 30 Days",
                    ].map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-[#00A7AC]"
                        onClick={() => setSortFilter(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Job Cards Grid */}
            <div className="grid grid-cols-3 font-[poppins] gap-4">
              {currentJobs.map((job) => (
                <Link 
                  to={`/Job${job.id}`}
                  key={job.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4 flex-nowrap">
                        <img 
                          src={job.image} 
                          alt="Job Image" 
                          className="w-10 h-10 object-cover rounded-md"
                        />
                        <div className="font-[poppins] mt-1">
                          <h3 className="text-lg font-semibold text-gray-800 truncate max-w-xs">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 -mt-1">{job.company}</p>
                        </div>
                      </div>
                      <span className="bg-transparent text-[#A8A8A8] text-xl px-2 py-1 rounded">
                        ...
                      </span>
                    </div>
                    <div className="mt-4 flex-grow">
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <FontAwesomeIcon icon={faUserAlt} className="text-gray-500 text-[10px]" />
                      <span className="truncate text-[10px] text-gray-700">{job.employees}</span>
                      <FaMedal className="text-gray-500 text-[10px]" />
                      <span className="truncate text-[10px] text-gray-700">{job.benefits}</span>
                    </div>
                    <div className="mt-4 flex items-center text-gray-500">
                      <span className="text-[#00A7AC]">{job.salary}</span>
                    </div>
                    <div className="mt-6">
                      <button className="text-[10px] bg-white text-[#000000] border border-[#DFDFDF] px-6 py-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7AC] transition-colors duration-300">
                        Remote
                      </button>
                      <button className="text-[10px] ml-2 bg-white text-[#000000] border border-[#DFDFDF] px-6 py-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7AC] transition-colors duration-300">
                        Full-time
                      </button>
                      

                    </div>
                    <IoBookmarkSharp className="text-[#D9D9D9] text-[20px] ml-60 -mt-7"/>
                  </div>
                </Link>
              ))}
            </div>
            
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={paginate} 
            />
          </div>
        </div>
        
       <Footer/>
        
      </motion.div>
    </div>
  );
};

export default Job;