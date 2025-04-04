import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { FaMedal } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { IoBookmarkSharp } from 'react-icons/io5';
import Image2 from "../assets/images/image 23.png";

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
    
    if (start > 2) pages.push('...');
    
    for (let i = start; i <= end; i++) pages.push(i);
    
    if (end < totalPages - 1) pages.push('...');
    
    if (totalPages > 1) pages.push(totalPages);
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-8 gap-2">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-gray-700 hover:bg-gray-200'
        }`}
      >
        <div className="flex items-center gap-2">
          <HiArrowLeft />
          Previous
        </div>
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          className={`px-3 py-1 rounded-md ${
            page === currentPage 
              ? 'bg-[#05445E] text-white' 
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
          } ${
            typeof page !== 'number' ? 'cursor-default' : 'cursor-pointer'
          }`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-gray-700 hover:bg-gray-200'
        }`}
      >
        <div className="flex items-center gap-2">
          Next
          <HiArrowRight />
        </div>
      </button>
    </div>
  );
};

const Option = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(20);

  const [jobs] = useState(
    Array(150).fill().map((_, i) => ({
      id: i + 1,
      title: i % 2 === 0 ? "Frontend Developer" : "Backend Developer",
      company: i % 2 === 0 ? "Tech Corp" : "Tech Solutions",
      description: "We're looking for a skilled developer with React/Node.js experience.",
      employees: "100 - 500 Employees",
      benefits: "Health Insurance, 401k",
      salary: "Salary-₹ 6-8 LPA",
      image: Image2
    }))
  );

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    if (typeof pageNumber === 'number' && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full font-[poppins] px-4">
      {/* Similar Jobs Heading */}
      <div className="mb-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Similar jobs</h2>
        <p className="text-gray-600">Here are other jobs you might want to apply for.</p>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {currentJobs.map((job) => (
          <Link 
            to={`/Job/${job.id}`}
            key={job.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-full h-[300px]"
          >
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2 flex-nowrap">
                  <img 
                    src={job.image} 
                    alt="Job" 
                    className="w-10 h-10 object-cover rounded-md"
                  />
                  <div className="font-[poppins] mt-1">
                    <h3 className="text-lg font-semibold text-gray-800 truncate max-w-xs">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm -mt-1">{job.company}</p>
                  </div>
                </div>
                <span className="bg-transparent text-[#A8A8A8] text-xl px-2 py-1 rounded">
                  ...
                </span>
              </div>
              <div className="mt-8 flex-grow">
                <p className="text-gray-700 text-sm">{job.description}</p>
              </div>
              <div className="-mt-2 flex items-center space-x-2">
                <FontAwesomeIcon icon={faUserAlt} className="text-gray-500 text-[10px]" />
                <span className="truncate text-[10px] text-gray-700">{job.employees}</span>
                <FaMedal className="text-gray-500 text-[10px]" />
                <span className="truncate text-[10px] text-gray-700">{job.benefits}</span>
              </div>
              <div className="mt-4 flex items-center text-gray-500">
                <span className="text-[#00A7AC] text-sm">{job.salary}</span>
              </div>
              <div className="mt-4">
                <button className="text-[10px] bg-white text-[#000000] border border-[#DFDFDF] px-4 py-1 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7AC] transition-colors duration-300">
                  Remote
                </button>
                <button className="text-[10px] ml-2 bg-white text-[#000000] border border-[#DFDFDF] px-4 py-1 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A7AC] transition-colors duration-300">
                  Full-time
                </button>
              </div>
              <IoBookmarkSharp className="text-[#D9D9D9] text-[20px] ml-auto -mt-7"/>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto">
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={paginate} 
        />
      </div>
    </div>
  );
};

export default Option;