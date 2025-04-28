import React, { useState, useEffect } from "react";
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
import Footer from "/src/component/Footer";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    pages.push(1);
    
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    
    if (currentPage <= 3) {
      end = Math.min(4, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 3, 2);
    }
    
    if (start > 2) {
      pages.push('...');
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (end < totalPages - 1) {
      pages.push('...');
    }
    
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
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [sortFilter, setSortFilter] = useState("Newest Post");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(18);
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const companies = ["Google", "Amazon", "Microsoft", "Facebook", "Tesla", "Apple", "Netflix", "Tech Corp", "Dev Solutions"];
    const jobTypes = ["Full-time", "Part-time", "Freelance", "Internship", "Contract", "Project-based"];
    const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
    
    const mockJobs = Array(4000).fill().map((_, i) => {
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      const randomJobType = jobTypes[Math.floor(Math.random() * jobTypes.length)];
      const randomExperience = experienceLevels[Math.floor(Math.random() * experienceLevels.length)];
      
      return {
        id: i + 1,
        title: i % 2 === 0 ? "Frontend Developer" : "Backend Developer",
        company: randomCompany,
        description: "We're looking for a skilled developer with React/Node.js experience.",
        employees: `${Math.floor(Math.random() * 500) + 1} - ${Math.floor(Math.random() * 500) + 500} Employees`,
        benefits: "Employee Benefits",
        salary: generateSalary(i % 2 === 0 ? "Frontend" : "Backend", randomJobType, randomExperience),
        jobType: randomJobType,
        experienceLevel: randomExperience,
        image: Image2,
        postedDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
      };
    });
    
    // Helper function to generate appropriate salaries
    function generateSalary(role, jobType, experience) {
      // Base salary ranges by role (in LPA)
      const baseSalaries = {
        "Frontend": { min: 3, max: 8 },
        "Backend": { min: 5, max: 15 }
      };
      
      // Adjustments based on experience level
      const experienceMultipliers = {
        "Entry Level": 0.7,
        "Mid Level": 1.0,
        "Senior Level": 1.5,
        "Expert": 2.0
      };
      
      // Adjustments based on job type
      const jobTypeAdjustments = {
        "Full-time": 1.0,
        "Part-time": 0.6,
        "Contract": 1.2,
        "Freelance": 0.8,
        "Internship": 0.3
      };
      
      // Get base salary for the role
      const base = baseSalaries[role];
      const baseMin = base.min;
      const baseMax = base.max;
      
      // Apply experience multiplier
      const expMultiplier = experienceMultipliers[experience] || 1.0;
      let adjustedMin = baseMin * expMultiplier;
      let adjustedMax = baseMax * expMultiplier;
      
      // Apply job type adjustment
      const jobAdjustment = jobTypeAdjustments[jobType] || 1.0;
      adjustedMin = adjustedMin * jobAdjustment;
      adjustedMax = adjustedMax * jobAdjustment;
      
      // Round to nearest integer and ensure minimum of 1
      const finalMin = Math.max(1, Math.round(adjustedMin));
      const finalMax = Math.max(finalMin + 1, Math.round(adjustedMax));
      
      return `Salary-₹ ${finalMin}-${finalMax} LPA`;
    }
    
    setAllJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  useEffect(() => {
    let filtered = [...allJobs];
    
    if (selectedOptions.length > 0) {
      filtered = filtered.filter(job => selectedOptions.includes(job.jobType));
    }
    if (selectedExperience.length > 0) {
      filtered = filtered.filter(job => selectedExperience.includes(job.experienceLevel));
    }
    if (selectedCompanies.length > 0) {
      filtered = filtered.filter(job => selectedCompanies.includes(job.company));
    }
    if (sortFilter === "Newest Post") {
      filtered.sort((a, b) => b.postedDate - a.postedDate);
    } else if (sortFilter === "Past 5 Days") {
      const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(job => job.postedDate >= fiveDaysAgo);
    } else if (sortFilter === "Past 15 Days") {
      const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(job => job.postedDate >= fifteenDaysAgo);
    } else if (sortFilter === "Past 30 Days") {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(job => job.postedDate >= thirtyDaysAgo);
    }
    
    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [selectedOptions, selectedExperience, selectedCompanies, sortFilter, allJobs]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

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
        <Navbar activePage="Jobs" />
        <div className="text-center p-40 text-[#05445E] w-full h-100 bg-gradient-to-b from-white via-[#DEF4FF] to-white">
          <h1 className="font-[poppins] text-5xl font-bold">
            There are {allJobs.length}+ Jobs here for you
          </h1>
          <p className="text-lg font-semibold mt-4 font-[poppins]">
            Discover the best remote and work-from-home jobs at top remote
            companies.
          </p>
        </div>

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

        <div className="flex px-20 py-10 gap-8">
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

          <div className="w-3/4 font-[poppins]">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-800">
                Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} Jobs of {filteredJobs.length}
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
              onPageChange={setCurrentPage} 
            />
          </div>
        </div>
        
        <Footer/>
      </motion.div>
    </div>
  );
};

export default Job;