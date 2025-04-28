import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Content = ({
  currentJobs = [],
  filteredJobs = [],
  currentPage = 1,
  totalPages = 1,
  toggleDropdown = (id) => {
    setJobs(prevJobs =>
      prevJobs.map(job =>
        job.id === id ? { ...job, showDropdown: !job.showDropdown } : job
      )
    );
  },
  handleStatusChange = (id, status) => {
    setJobs(prevJobs =>
      prevJobs.map(job => (job.id === id ? { ...job, status } : job))
    );
  },
  handleViewDetails = (id) => console.log("View details for job:", id),
  paginate = (page) => setCurrentPage(page),
}) => {
  // State for jobs and pagination
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Zorto",
      position: "UI UX Designer",
      date: "May 15, 2023",
      status: "In Review",
      showDropdown: false,
      logoBg: "#215B5C",
      logoText: "INFRA",
      logoTextColor: "#FBBC09"
      
    },
    {
      id: 2,
      company: "DesignHub",
      position: "UI/UX Designer",
      date: "Jun 2, 2023",
      status: "Shortlisted",
      showDropdown: false,
      logoBg: "#4a044e",
      logoText: "DH"
    },
    {
      id: 3,
      company: "DataSystems",
      position: "Data Analyst",
      date: "Apr 28, 2023",
      status: "Rejected",
      showDropdown: false,
      logoBg: "#065666",
      logoText: "DS"
    },
    {
      id: 4,
      company: "CloudNine",
      position: "DevOps Engineer",
      date: "Jun 10, 2023",
      status: "In Review",
      showDropdown: false,
      logoBg: "#5c370a",
      logoText: "CN"
    },
    {
      id: 5,
      company: "MobileFirst",
      position: "iOS Developer",
      date: "May 22, 2023",
      status: "Shortlisted",
      showDropdown: false,
      logoBg: "#6b2c70",
      logoText: "MF"
    },
    {
      id: 6,
      company: "WebWorks",
      position: "Backend Developer",
      date: "Jun 5, 2023",
      status: "In Review",
      showDropdown: false,
      logoBg: "#3a0ca3",
      logoText: "WW"
    },
    {
      id: 7,
      company: "AI Solutions",
      position: "ML Engineer",
      date: "May 30, 2023",
      status: "Shortlisted",
      showDropdown: false,
      logoBg: "#2b2d42",
      logoText: "AI"
    },
    {
      id: 8,
      company: "CyberSec",
      position: "Security Analyst",
      date: "Jun 12, 2023",
      status: "In Review",
      showDropdown: false,
      logoBg: "#d90429",
      logoText: "CS"
    },
    {
      id: 9,
      company: "GameStudio",
      position: "Game Developer",
      date: "May 18, 2023",
      status: "Rejected",
      showDropdown: false,
      logoBg: "#ff9e00",
      logoText: "GS"
    },
    {
      id: 10,
      company: "DataFlow",
      position: "Database Admin",
      date: "Jun 8, 2023",
      status: "In Review",
      showDropdown: false,
      logoBg: "#0077b6",
      logoText: "DF"
    },
    {
        id: 11,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      }
      ,{
        id: 12,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      },
      {
        id: 13,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      },
      {
        id: 14,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      },
      {
        id: 15,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      },
      {
        id: 16,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      },
      {
        id: 17,
        company: "DataFlow",
        position: "Database Admin",
        date: "Jun 8, 2023",
        status: "In Review",
        showDropdown: false,
        logoBg: "#0077b6",
        logoText: "DF"
      }
  ]);

  const [localCurrentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const totalLocalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = localCurrentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobsToDisplay = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 -ml-5 mt-10">
      {/* Headings */}
      <div className="hidden md:grid grid-cols-12 gap-2 mb-4 pb-2 px-2  ">
        <div className="col-span-5 font-medium text-sm font-[poppins] text-[#00A7AC]">
        Company Name & Job Title
        </div>
        <div className="col-span-3 font-medium text-sm text-[#00A7AC] font-[poppins] text-center">
          Applied Date
        </div>
        <div className="col-span-2 font-medium text-sm text-[#00A7AC] font-[poppins] ">Status</div>
        <div className="col-span-2"></div>
      </div>

      {/* Job Items */}
      {currentJobsToDisplay.length > 0 ? (
        currentJobsToDisplay.map((job) => (
          <div
            key={job.id}
            className="w-full bg-white rounded-lg p-3 mb-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: job.logoBg }}
                  >
                    <h1 className="text-xs font-bold font-[poppins] text-[#FBBC09]">
                      {job.logoText}
                    </h1>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium font-[poppins] text-[#1D1E1D] truncate">
                      {job.company}
                    </h3>
                    <p className="text-xs text-[#1D1E1D] truncate">{job.position}</p>
                  </div>
                </div>
              </div>

              <div className="col-span-3 text-center text-xs text-[#333434]">
                {job.date}
              </div>

              <div className="col-span-2 relative">
                <button
                  className={`flex items-center justify-between w-full px-2 py-1 rounded-md text-xs transition-colors duration-200 ${
                    job.status === "In Review"
                      ? "bg-blue-50 text-blue-700"
                      : job.status === "Shortlisted"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                  onClick={() => toggleDropdown(job.id)}
                >
                  <span className="truncate">{job.status}</span>
                  <svg
                    className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                      job.showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {job.showDropdown && (
                  <div className="absolute right-0 mt-1 w-full bg-white border  border-gray-200 rounded-md shadow-md z-10">
                    <ul className="py-1">
                      {["In Review", "Shortlisted", "Rejected"].map((option) => (
                        <li
                          key={option}
                          className={`px-3 py-1 text-xs hover:bg-gray-50 cursor-pointer ${
                            job.status === option ? "bg-blue-50 text-blue-600" : "text-gray-700"
                          }`}
                          onClick={() => handleStatusChange(job.id, option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="col-span-2 text-right font-[poppins]">
                <button
                  onClick={() => handleViewDetails(job.id)}
                  className="text-xs text-[#000000] hover:text-blue-800 font-medium px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full bg-white rounded-lg p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">No jobs found matching your search criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {jobs.length > jobsPerPage && (
        <div className="flex justify-center items-center mt-4 w-full">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <button
              onClick={() => {
                setCurrentPage(prev => Math.max(1, prev - 1));
                paginate(Math.max(1, localCurrentPage - 1));
              }}
              disabled={localCurrentPage === 1}
              className={`relative inline-flex items-center px-3 py-1 rounded-l-md border border-gray-300 text-xs ${
                localCurrentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              <HiArrowLeft className="mr-1 h-3 w-3" />
              Previous
            </button>

            {Array.from({ length: totalLocalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => {
                  setCurrentPage(number);
                  paginate(number);
                }}
                className={`relative inline-flex items-center px-3 py-1 border text-xs ${
                  localCurrentPage === number
                    ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => {
                setCurrentPage(prev => Math.min(totalLocalPages, prev + 1));
                paginate(Math.min(totalLocalPages, localCurrentPage + 1));
              }}
              disabled={localCurrentPage === totalLocalPages}
              className={`relative inline-flex items-center px-3 py-1 rounded-r-md border border-gray-300 text-xs ${
                localCurrentPage === totalLocalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              Next
              <HiArrowRight className="ml-1 h-3 w-3" />
            </button>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Content;