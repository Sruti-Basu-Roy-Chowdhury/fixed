import React, { useState } from 'react';
import Image1 from "/src/assets/images/Frame9.png";
import Image2 from "/src/assets/images/Frame10.png";
import Image3 from "/src/assets/images/Frame11.png";
import Image4 from "/src/assets/images/Frame12.png";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";



const DashboardContent = () => {
    // Initialize state for all jobs
    const [allJobs, setAllJobs] = useState([
        {
            id: 1,
            company: 'Zorto',
            logoBg: '#215B5C',
            logoText: 'INFRA',
            position: 'UI UX Designer',
            date: '06/Dec/2024',
            status: 'In Review',
            showDropdown: false
        },
        {
            id: 2,
            company: 'TechNova',
            logoBg: '#3A4A8B',
            logoText: 'TN',
            position: 'Frontend Developer',
            date: '01/Dec/2024',
            status: 'Shortlisted',
            showDropdown: false
        },
        {
            id: 3,
            company: 'DataSystems',
            logoBg: '#8B3A3A',
            logoText: 'DS',
            position: 'Data Analyst',
            date: '28/Nov/2024',
            status: 'In Review',
            showDropdown: false
        },
        {
            id: 4,
            company: 'CloudNine',
            logoBg: '#1E6B4E',
            logoText: 'CN',
            position: 'DevOps Engineer',
            date: '25/Nov/2024',
            status: 'Rejected',
            showDropdown: false
        },
        {
            id: 5,
            company: 'DesignHub',
            logoBg: '#6B1E6B',
            logoText: 'DH',
            position: 'Graphic Designer',
            date: '20/Nov/2024',
            status: 'In Review',
            showDropdown: false
        },
        {
            id: 6,
            company: 'QuantumSoft',
            logoBg: '#4A235A',
            logoText: 'QS',
            position: 'Quantum Computing Engineer',
            date: '15/Nov/2024',
            status: 'Shortlisted',
            showDropdown: false
        },
        {
            id: 7,
            company: 'GreenTech',
            logoBg: '#1E8449',
            logoText: 'GT',
            position: 'Sustainability Specialist',
            date: '10/Nov/2024',
            status: 'In Review',
            showDropdown: false
        },
        {
            id: 8,
            company: 'FinEdge',
            logoBg: '#2874A6',
            logoText: 'FE',
            position: 'Financial Analyst',
            date: '05/Nov/2024',
            status: 'Rejected',
            showDropdown: false
        },
        {
            id: 9,
            company: 'MediCare+',
            logoBg: '#922B21',
            logoText: 'MC',
            position: 'Healthcare Data Scientist',
            date: '30/Oct/2024',
            status: 'Shortlisted',
            showDropdown: false
        },
        {
            id: 10,
            company: 'AutoDrive',
            logoBg: '#1A5276',
            logoText: 'AD',
            position: 'Autonomous Vehicle Engineer',
            date: '25/Oct/2024',
            status: 'In Review',
            showDropdown: false
        },
        {
            id: 11,
            company: 'EduTech',
            logoBg: '#7D3C98',
            logoText: 'ET',
            position: 'Educational Content Developer',
            date: '20/Oct/2024',
            status: 'Rejected',
            showDropdown: false
        },
        {
            id: 12,
            company: 'SpaceX',
            logoBg: '#000000',
            logoText: 'SX',
            position: 'Aerospace Engineer',
            date: '15/Oct/2024',
            status: 'Shortlisted',
            showDropdown: false
        },
        {
            id: 13,
            company: 'NeuroLink',
            logoBg: '#1F618D',
            logoText: 'NL',
            position: 'Neuroscience Researcher',
            date: '10/Oct/2024',
            status: 'In Review',
            showDropdown: false
        },
        {
            id: 14,
            company: 'AgriGrow',
            logoBg: '#196F3D',
            logoText: 'AG',
            position: 'Agricultural Technologist',
            date: '05/Oct/2024',
            status: 'Rejected',
            showDropdown: false
        },
        {
            id: 15,
            company: 'CyberShield',
            logoBg: '#C0392B',
            logoText: 'CS',
            position: 'Cybersecurity Specialist',
            date: '30/Sep/2024',
            status: 'Shortlisted',
            showDropdown: false
        },
        {
            id: 16,
            company: 'AgriGrow',
            logoBg: '#196F3D',
            logoText: 'AG',
            position: 'Agricultural Technologist',
            date: '05/Oct/2024',
            status: 'Rejected',
            showDropdown: false
        },
        {
            id: 17,
            company: 'CyberShield',
            logoBg: '#C0392B',
            logoText: 'CS',
            position: 'Cybersecurity Specialist',
            date: '30/Sep/2024',
            status: 'Shortlisted',
            showDropdown: false
        }
        ,
        {
            id: 18,
            company: 'AgriGrow',
            logoBg: '#196F3D',
            logoText: 'AG',
            position: 'Agricultural Technologist',
            date: '05/Oct/2024',
            status: 'Rejected',
            showDropdown: false
        },
        {
            id: 19,
            company: 'CyberShield',
            logoBg: '#C0392B',
            logoText: 'CS',
            position: 'Cybersecurity Specialist',
            date: '30/Sep/2024',
            status: 'Shortlisted',
            showDropdown: false
        }

        
    ]);

    // State for search term
    const [searchTerm, setSearchTerm] = useState('');

    // Filter jobs based on search term
    const filteredJobs = allJobs.filter(job => 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

    // Calculate pagination values based on filtered jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const handleStatusChange = (jobId, newStatus) => {
        setAllJobs(allJobs.map(job => 
            job.id === jobId 
                ? { ...job, status: newStatus, showDropdown: false } 
                : job
        ));
    };

    const toggleDropdown = (jobId) => {
        setAllJobs(allJobs.map(job => 
            job.id === jobId 
                ? { ...job, showDropdown: !job.showDropdown } 
                : { ...job, showDropdown: false }
        ));
    };

    const handleViewDetails = (jobId) => {
        console.log(`Viewing details for job ${jobId}`);
    };

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Navigation Bar */}
            <nav>
                <div className="mt-8 container mx-auto px-4 py-3 flex justify-between items-center ml-15">
                    {/* Left side navigation links */}
                    <div className="flex space-x-4 font-[poppins] text-sm">
                        <a href="Job" className="hover:text-blue-500 transition-colors duration-200 text-[#1C1D1D] py-2">Jobs</a>
                        <a href="companie" className="hover:text-blue-500 transition-colors duration-200 py-2 text-[#1C1D1D]">Companies</a>
                        <a href="#services" className="hover:text-blue-500 transition-colors duration-200 py-2 text-[#1C1D1D]">Services</a>
                        <a href="#pricing" className="hover:text-blue-500 transition-colors duration-200 py-2 text-[#1C1D1D]">Pricing</a>
                    </div>

                    {/* Middle search bar */}
                    <div className="flex-1 max-w-md mx-4 -ml-70">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search jobs or companies..."
                                className="w-[301px] h-[37px] py-2 px-4 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-100"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <div className="absolute left-3 top-2.5 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right side user profile */}
                    <div className="flex">
                        <div className="-ml-120 w-[58px] h-[57px] rounded-full bg-blue-500 overflow-hidden flex items-left justify-left">
                            <img 
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                alt="User profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-10 -ml-25">
                <div className="max-w-4xl mx-auto">
                    {/* Profile Section */}
                    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 -ml-4">
                        <div className="flex items-center gap-4">
                            <div className="w-[69px] h-[68px] rounded-full shadow-lg overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                    alt="Profile of Jack"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <h1 className="text-xl font-semibold text-gray-800">Welcome Back Jack</h1>
                                <p className="text-sm font-medium text-gray-500 mt-1">Overview your profile</p>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mb-8 -ml-4">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                            {[
                                { 
                                    title: "Applied Jobs", 
                                    count: allJobs.length,
                                    icon: Image1,
                                    color: "bg-[#0077E5]"
                                },
                                { 
                                    title: "Saved Jobs", 
                                    count: 120,
                                    icon: Image2,
                                    color: "bg-[#7051EF]"
                                },
                                { 
                                    title: "Messages", 
                                    count: allJobs.filter(j => j.status === 'Shortlisted').length,
                                    icon: Image3,
                                    color: "bg-[#34A353]"
                                },
                                { 
                                    title: "Review CV", 
                                    count: 15,
                                    icon: Image4,
                                    color: "bg-[#F6B704]"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <button
                                        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col text-left w-full h-30"
                                        onClick={() => console.log(`${item.title} clicked`)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <span className="text-lg font-semibold text-gray-700">{item.title}</span>
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <img 
                                                    src={item.icon} 
                                                    alt="Icon" 
                                                    className="w-full h-full object-contain" 
                                                />
                                            </div>
                                        </div>
                                        <span className="text-2xl font-bold mt-2 text-gray-800">{item.count}</span>
                                    </button>
                                    {/* Single color bar at the bottom */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-lg ${item.color}`}></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Current Applied Jobs Section */}
                    <section className="rounded-lg p-6 mb-8 font-[poppins]">
                        <div className="flex justify-between items-center mb-6 -ml-10">
                            <h2 className="text-xl font-semibold text-[#000000]">
                                Current Applied Jobs ({filteredJobs.length})
                                {searchTerm && (
                                    <span className="text-sm font-normal ml-2 text-gray-500">
                                        (Filtered by: "{searchTerm}")
                                    </span>
                                )}
                            </h2>
                        </div>
                        
                        {/* Column Headings */}
                        <div className="hidden md:grid grid-cols-4 gap-4 mb-6 pb-2">
                            <div className="font-semibold text-[#000000] -ml-10">Company Name & Job Title</div>
                            <div className="font-semibold text-[#000000] text-center ml-40 whitespace-nowrap">Applied Date</div>
                            <div className="font-semibold text-[#000000] ml-75">Status</div>
                        </div>
                        
                        {/* Job Application Rows */}
                        {currentJobs.length > 0 ? (
                            currentJobs.map((job) => (
                                <div key={job.id} className="w-[1100px] bg-[#F7F9F8] rounded-lg p-3 -ml-10 mb-3">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4">
                                                <div className="w-[52px] h-[52px] rounded-full shadow-lg overflow-hidden flex items-center justify-center" style={{ backgroundColor: job.logoBg }}>
                                                    <h1 className="text-[#FBBC09] font-bold">{job.logoText}</h1>
                                                </div>
                                                <div>
                                                    <h3 className="text-md text-[#1D1E1D]">{job.company}</h3>
                                                    <p className="text-gray-600 text-left">{job.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 text-right -ml-80" style={{ width: '120px' }}>
                                                {job.date}
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <button 
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                                    job.status === 'In Review' ? ' text-blue-800' :
                                                    job.status === 'Shortlisted' ? ' text-green-800' :
                                                    ' text-red-800'
                                                }`}
                                                onClick={() => toggleDropdown(job.id)}
                                            >
                                                <span>{job.status}</span>
                                                <svg 
                                                    className={`w-4 h-4 transition-transform duration-200 ${job.showDropdown ? 'transform rotate-180 ' : 'text-[#141514]'}`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24" 
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            
                                            {job.showDropdown && (
                                                <div className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                                    <ul className="py-1">
                                                        {['In Review', 'Shortlisted', 'Rejected'].map((option) => (
                                                            <li 
                                                                key={option}
                                                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                                                                    job.status === option ? 'bg-blue-50 text-blue-600' : ''
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
                                        <button 
                                            onClick={() => handleViewDetails(job.id)}
                                            className="text-[#000000] hover:text-blue-800 font-medium text-right text-sm px-3 py-2 rounded hover:bg-blue-50 transition-colors ml-20"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-[1100px]  bg-[#F7F9F8] rounded-lg p-6 -ml-10 text-center">
                                <p className="text-gray-500">No jobs found matching your search criteria.</p>
                            </div>
                        )}

                        {/* Pagination Controls - Only show if there are jobs */}
                        {filteredJobs.length > 0 && (
                            <div className="flex justify-center items-center mt-6 w-[1100px]  -ml-10">
                                <nav className="inline-flex rounded-md w-screen shadow-sm -space-x-px" aria-label="Pagination">
                                    <button
                                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                        disabled={currentPage === 1}
                                        className={`relative inline-flex items-left px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm w-full font-medium ${
                                            currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                    >
                                        
                                        <HiArrowLeft className="mt-0.5" />

                                        <span className="ml-2">Previous</span>
                                    </button>
                                    
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                        <button
                                            key={number}
                                            onClick={() => paginate(number)}
                                            className={` inline-flex items-center px-4  border text-sm font-medium ${
                                                currentPage === number 
                                                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' 
                                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                            }`}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                    
                                    <button
                                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                        disabled={currentPage === totalPages}
                                        className={`relative inline-flex w-full items-left px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                                            currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="ml-110">Next</span>
                                        <HiArrowRight className="mt-0.5 ml-2" />
                                    </button>
                                </nav>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default DashboardContent;