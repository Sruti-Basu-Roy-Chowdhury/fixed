import React, { useState } from 'react';

const Navbar1 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Added missing state
    const [allJobs, setAllJobs] = useState([ // Example data (replace with your actual data)
        { company: "Google", position: "Frontend Developer" },
        { company: "Microsoft", position: "Backend Engineer" },
        { company: "Apple", position: "UX Designer" },
    ]);

    const filteredJobs = allJobs.filter(job => 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="overflow-hidden">
            <nav>
                <div className="mt-8 container mx-auto px-4 py-3 flex justify-between items-center ml-15">
                    <div className="flex space-x-4 font-[poppins] text-sm">
                        <a href="Job" className="hover:text-blue-500 transition-colors duration-200 text-[#1C1D1D] py-2">Jobs</a>
                        <a href="companie" className="hover:text-blue-500 transition-colors duration-200 py-2 text-[#1C1D1D]">Companies</a>
                        <a href="#services" className="hover:text-blue-500 transition-colors duration-200 py-2 text-[#1C1D1D]">Services</a>
                        <a href="#pricing" className="hover:text-blue-500 transition-colors duration-200 py-2 text-[#1C1D1D]">Pricing</a>
                    </div>
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
        </div>
    );
};

export default Navbar1;