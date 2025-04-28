import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../component/Navbar";
import Footer from "/src/component/Footer";
import Go from "/src/component/Go";
import image1 from "/src/assets/images/Frame 398.png";
import image3 from "/src/assets/images/Ellipse 187.png";
import { SlLocationPin } from "react-icons/sl";
import { TbUserHexagon } from "react-icons/tb";
import { Search, Star } from 'lucide-react'; 
import { PiMedalThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import image4 from "/src/assets/images/SQL.png";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";




const Com = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
    const navigate = useNavigate();
    
    const handleConnectionRequest = () => {
        console.log("Connection request sent");
    };

    const handleOpenJobsClick = () => {
        console.log("Open jobs clicked");
    };

    const handleCompletedJobsClick = () => {
        console.log("Completed jobs clicked");
    };

    // Sample job data
    const jobData = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: "Administrative Assistant",
        company: "Infransync Technology and services",
        employees: "100-500 Employees",
        benefits: "Employee Benefits",
        salary: "₹ 6-8 LPA",
        location: "Pune, Maharashtra",
        type: "Hybrid",
        time: "Full time",
        category: "Administrative assistant",
        daysAgo: `${i + 1} days ago`
    }));

    // Get current jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(jobData.length / jobsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Go to next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Go to previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar activePage="companies" />
            
            {/* Full-width Company Profile Section */}
            <div className="w-full mt-20 h-[347px] bg-gradient-to-r from-white to-blue-50 py-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col ml-20 md:flex-row mt-10 items-center gap-8">
                        <img 
                            src={image1} 
                            alt="Company logo" 
                            className="w-24 h-24 md:w-32 md:h-32 object-contain"
                        />
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">NAVA Company</h1>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
                                <div className="flex items-center">
                                    <SlLocationPin className="text-gray-700" />
                                    <p className="text-sm text-gray-700 ml-1">
                                        Pune, Maharashtra
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <TbUserHexagon className="text-gray-700" />
                                    <p className="text-sm text-gray-700 ml-1">
                                        100-500 Employees
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6">
                                <button 
                                    onClick={handleOpenJobsClick}
                                    className="px-4 py-1 text-teal-600 text-xs rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors"
                                >
                                    12 Open Jobs
                                </button>
                                <button 
                                    onClick={handleCompletedJobsClick}
                                    className="px-4 py-1 text-teal-600 text-xs rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors"
                                >
                                    24 Completed Jobs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    {/* Job Cards */}
                    {currentJobs.map((job) => (
                        <div key={job.id} className="border rounded-lg p-4 m-4 mt-5 ml-20 border-[#D2D2D2] relative w-[734px] h-[225px]">
                            <div className="absolute top-4 font-[poppins] right-4 text-sm text-gray-500">{job.daysAgo}</div>
                            
                            <div className="flex items-start gap-4">
                                {job.id === 1 ? (
                                    <div className="w-12 h-12 rounded-full bg-[linear-gradient(90deg,#0077E5_50%,transparent_50%)] flex items-center justify-center text-white font-semibold text-xs">
                                        HIC <span className="text-[#0077E5]">OM</span>
                                    </div>
                                ) : job.id === 2 ? (
                                    <div className="w-12 h-12 rounded-full bg-[#215B5C] flex items-center justify-center text-[#FBBC09] font-semibold">
                                        INFRA
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-[white] flex items-center justify-center text-[#FBBC09] font-semibold">
                                        <h1 className="text-[#11123F] text-[9px] -mt-3 font-bold ml-4">in</h1>
                                        <img 
                                            src={image3} 
                                            alt="Company logo" 
                                            className="w-[25px] object-contain"
                                        />
                                        <h1 className="text-[#11123F] text-[9px] mt-3 -ml-3 font bold">com</h1>
                                    </div>
                                )}
                                
                                <div>
                                    <h2 className="font-semibold font-[poppins] text-sm text-[#000000] mt-4">{job.title}</h2>
                                    <p className="mt-4 text-[#000000] text-sm font-semibold font-[poppins]">{job.company}</p>
                                    
                                    <div className="flex gap-4 mt-4 text-sm">
                                        <TbUserHexagon className="mt-1 text-[#757575]" />
                                        <span className="text-[#757575] -ml-3">{job.employees}</span>
                                        
                                        <PiMedalThin className="mt-1 text-[#757575]" />
                                        <span className="text-[#757575] -ml-3">{job.benefits}</span>
                                        
                                        <CiCreditCard1 className="mt-1 text-[#757575]" />
                                        <span className="text-[#757575] -ml-3">{job.salary}</span>
                                    </div>
                                    
                                    <div className="flex gap-4 mt-4 text-sm">
                                        <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">{job.location}</span>
                                        <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">{job.type}</span>
                                        <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">{job.time}</span>
                                        <span className="text-[#000000] border-2 rounded p-1 border-[#DFDFDF] text-xs">{job.category}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-4 right-4">
                                <FaStar className="text-[#D9D9D9] fill-[#D9D9D9] hover:text-[#D9D9D9] cursor-pointer w-[23px] -ml-10 -mt-5" />
                            </div>
                        </div>
                    ))}

                    {/* Pagination */}
                    <div className="flex justify-center mt-8 mb-12 ml-20 items-center  border-t-2 border-b-2 border-[#E5E5E5] border-l-0 w-[734.0000000000027px]">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`mx-2 px-4 py-4 rounded ${currentPage === 1 ? ' text-[#000000] cursor-not-allowed' : ' text-[#000000] '}`}
                        >
                            Previous
                        </button>
                        
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            // Show limited page numbers (max 5)
                            let pageNumber;
                            if (totalPages <= 5) {
                                pageNumber = i + 1;
                            } else if (currentPage <= 3) {
                                pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNumber = totalPages - 4 + i;
                            } else {
                                pageNumber = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => paginate(pageNumber)}
                                    className={`mx-1 px-4 py-2 ml-20 rounded ${currentPage === pageNumber ? ' text-[#000000]' : ' text-[#000000] '}`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                        
                        <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={`mx-1 px-4 py-2 rounded flex items-center gap-1 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#000000] hover:text-blue-600'}`}
    >
        Next
        <FaArrowRight className="w-4 h-4 ml-4 " />
    </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-[321px] space-y-6">
                    <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6">
                        <Search className="left-3 text-gray-500" size={25} />
                        <h2 className="text-2xl font-semibold text-[#000000] ml-8 -mt-7">
                            Find your dream job
                        </h2>
                        <p className="mt-2 text-[#000000] text-xs text-left ml-8">
                            Create a profile and we'll match you
                            <br />
                            with relevant remote jobs for free.
                        </p>
                        <div className="mt-4 flex items-center space-x-2 ml-7">
                            <Star className="w-[10px] text-[#00A7AC]" />
                            <h1 className="text-[#000000] text-xs font-bold">
                                Share your job search status
                            </h1>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 ml-7">
                            <Star className="w-[10px] text-[#00A7AC]" />
                            <h1 className="text-[#000000] text-xs font-bold">
                                Showcase your skills beyond a resume
                            </h1>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 ml-7">
                            <Star className="w-[10px] text-[#00A7AC]" />
                            <h1 className="text-[#000000] text-xs font-bold">
                                Get discovered by top companies
                            </h1>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 ml-7">
                            <Star className="w-[10px] text-[#00A7AC]" />
                            <h1 className="text-[#000000] text-xs font-bold">
                                Set salary expectations upfront
                            </h1>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 ml-7">
                            <Star className="w-[10px] text-[#00A7AC]" />
                            <h1 className="text-[#000000] text-xs font-bold">
                                Automatically discover relevant roles
                            </h1>
                        </div>
                    </div>

                    <div className="rounded-lg w-[321px] h- border-2 border-[#E2E2E2] p-6">
                        <img 
                            src={image4} 
                            alt="Company logo" 
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            
            <div>
                <Go />
            </div>
            <Footer />
        </div>
    );
};

export default Com;