import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ChevronDown, Search, Square, Star as StarIcon } from "lucide-react";
import "@fontsource/poppins";
import Navbar from "../component/Navbar";
import Image1 from "../assets/images/freepik.png";
import Image2 from "../assets/images/Frame 398.png";
import Image5 from "../assets/images/Frame 398 (1).png";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IoBookmarkSharp } from "react-icons/io5";
import Footer from "/src/component/Footer";
import { FaStar } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

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
    <div className="p-2 w-full border border-[#EFEFEF] flex justify-center items-center mt-6 space-x-2 font-[poppins]">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-white text-[#05445E] cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-300'}`}
      >
        <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <HiArrowLeft />
          Previous
        </div>
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          className={`px-3 py-1 rounded-md ${page === currentPage ? 'bg-[#05445E] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'} ${typeof page !== 'number' ? 'cursor-default' : 'cursor-pointer'}`}
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
        <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          Next
          <HiArrowRight />
        </div>
      </button>
    </div>
  );
};

const Companie = () => {
  const [selected, setSelected] = useState("hourly");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortFilter, setSortFilter] = useState("Newest Post");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(18);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [jobs] = useState(
    Array(4000).fill().map((_, i) => ({
      id: i + 1,
      company: 
        i % 7 === 0 ? "NAVA Company" :
        i % 7 === 1 ? "MOHI Company" :
        i % 7 === 2 ? "Microsoft" :
        i % 7 === 3 ? "Facebook" :
        i % 7 === 4 ? "Tesla" :
        i % 7 === 5 ? "Apple" : "Netflix",
      image: i % 2 === 0 ? Image2 : Image5,
    }))
  );

  const options = [
    "Full-time",
    "Part-time",
    "Freelance",
    "Internship",
    "Contract",
    "Project-based",
  ];

  const categories = [
    "Finance",
    "Architecture",
    "Design",
    "Engineering",
    "Technology",
    "Medicine",
  ];

  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
  const [selectedExperience, setSelectedExperience] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleExperienceLevels = (level) => {
    setSelectedExperience((prevSelected) =>
      prevSelected.includes(level)
        ? prevSelected.filter((item) => item !== level)
        : [...prevSelected, level]
    );
  };

  const filteredJobs = selectedCompany 
    ? jobs.filter(job => job.company.includes(selectedCompany))
    : jobs;

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    if (typeof pageNumber === 'number' && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-[poppins]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar activePage="Companies" />
        <div className="text-center p-10 md:p-40 text-[#05445E] w-full bg-gradient-to-b from-white via-[#DEF4FF] to-white">
          <h1 className="font-[poppins] text-3xl md:text-5xl font-bold">
            There are {jobs.length}+ Jobs here for you
          </h1>
          <p className="text-lg font-semibold mt-4">
            Discover the best remote and work-from-home jobs at top remote companies.
          </p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-6 px-4 md:px-2">
          <div className="relative w-full md:w-[850px]">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full p-4 pl-10 pr-20 border border-gray-300 rounded-lg shadow-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={25} />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#05445E] text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>

          {["Experience Level", "Salary Range", "Companies"].map((filter, index) => (
            <div key={index} className="text-[#B6B6B6] relative group cursor-pointer w-full md:w-auto">
              <button className="flex items-center justify-between w-full md:w-auto space-x-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                <span>{filter}</span>
                <ChevronDown size={20} />
              </button>
              <div className="hidden group-hover:flex flex-col absolute z-10 mt-2 w-48 bg-white text-[#B6B6B6] shadow-lg rounded-lg max-h-60 overflow-y-auto pointer-events-auto">
                {(filter === "Companies" ? 
                  ["All Companies", "NAVA", "MOHI", "Microsoft", "Facebook", "Tesla", "Apple", "Netflix"] :
                  filter === "Experience Level" ?
                  ["Entry Level", "Mid Level", "Senior Level"] :
                  ["10,000 - 50,000", "50,000 - 1,00,000", "1,00,000 - 10,00,000", "10,00,000+"]
                ).map((option) => (
                  <a
                    key={option}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (filter === "Companies") {
                        setSelectedCompany(option === "All Companies" ? null : option);
                      }
                    }}
                  >
                    {option}
                    {filter === "Companies" && selectedCompany === option && (
                      <span className="ml-2 text-[#05445E]">✓</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row px-4 md:px-20 py-10 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-full md:w-1/4 flex flex-col gap-6">
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
                Job Category
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleCategory(category)}
                  >
                    {selectedCategories.includes(category) ? (
                      <FaCheckSquare 
                      className="text-[#05445E] text-[24px]  " />
                    ) : (
                      <Square className="text-[#D4D4D4]" />
                    )}
                    <span className="text-lg">{category}</span>
                  </div>
                ))}
              </div>
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
                      <FaCheckSquare 
                      className="text-[#05445E] text-[24px]  " />
                    ) : (
                      <Square className="text-[#D4D4D4]" />
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
                      <FaCheckSquare 
                      className="text-[#05445E] text-[24px]  " />
                    ) : (
                      <Square className="text-[#D4D4D4]" />
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
                      <FaCheckSquare 
                       className="text-[#05445E]"
                      size={20} />
                    ) : (
                      <Square 
                      className="text-[#D4D4D4]"
                      size={20} />
                    )}
                    Hourly
                  </button>

                  <button
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setSelected("fixed")}
                  >
                    {selected === "fixed" ? (
                      <FaCheckSquare 
                      className="text-[#05445E]"
                      size={20} />
                    ) : (
                      <Square 
                      className="text-[#D4D4D4]"
                      size={20} />
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
              <Search className="left-3 text-gray-500" size={25} />
              <h2 className="text-2xl font-semibold text-[#000000] ml-8 -mt-7">
                Find you dream job
              </h2>
              <p className="mt-2 text-[#000000] text-xs text-left ml-8">
                Create a profile and we'll match you
                <br />
                with relevant remote jobs for free.
              </p>
              <div className="mt-4 flex items-center space-x-2 ml-7">
                <StarIcon className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Share your job search status
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7">
                <StarIcon className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Showcase your skills beyond a resume
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7">
                <StarIcon className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Get discovered by top companies
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7">
                <StarIcon className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Set salary expectations upfront
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7">
                <StarIcon className="w-[10px] text-[#00A7AC]" />
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
              <div className="mt-4 flex justify-center">
                <img
                  src={Image1}
                  alt="Freepik illustration"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Job Cards */}
          <div className="w-full md:w-3/4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-800">
                Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} Jobs of {filteredJobs.length}
              </h1>
              <div className="relative group mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-[#00A7AC] text-sm cursor-pointer">
                  <span className="font-bold text-[#000000]">Sort by</span>
                  <span>{sortFilter}</span>
                  <ChevronDown size={20} />
                </div>
                <div className="hidden group-hover:block absolute mt-2 w-48 bg-white text-[#00A7AC] shadow-lg rounded-lg max-h-60 overflow-y-auto z-10">
                  <ul>
                    {[
                      "Newest Post",
                      "Past 5 Days",
                      "Past 15 Days",
                      "Past 30 Days",
                    ].map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentJobs.map((job) => (
                <Link 
                  to={`/Companies${job.id}`}
                  key={job.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 p-5 h-[300px] w-[250px]"
                >
                  <div className=" flex flex-col">
                    {/* Image container */}
                    <div className="flex items-center justify-center w-20 h-20 rounded-full border border-solid border-[#0000001a] bg-white overflow-hidden">
                      <img 
                        src={job.image} 
                        alt="Company logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Bookmark icon */}
                    <div className="flex justify-end -mt-8">
                      <IoBookmarkSharp className="text-[#00A7AC] text-xl -mt-10" />
                    </div>
                    
                    {/* Company name and rating row */}
                    <div className="mt-4 flex justify-between items-center ">
                      <p className="mt-4 text-gray-700 w-[115px] h-[48px] font-bold ">{job.company}</p>
                      <span className="flex items-center">
                        <FaStar className="text-[#F8C433] mt-5" />
                        <span className="ml-1 mt-5 text-xs text-[#000000] font-bold">3.4</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="truncate text-sm text-[#333434]">10,000 to 100,000 employs</span>
                    </div>
                    <div className="mt-2 text-[#333434] text-xs">
                      6,988,877 Followers
                    </div>
                    <div className="mt-2 text-[#767977] text-xs">
                      12 Open Positions
                    </div>
                    <div className="mt-auto pt-4">
                      <button className="text-xs text-[#00A7AC] border border-[#DFDFDF] px-6 py-2 bg-[#00A7AC54] rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7AC] transition-colors duration-300">
                        View Jobs
                      </button>
                    </div>
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
        
        <Footer />
      </motion.div>
    </div>
  );
};

export default Companie;