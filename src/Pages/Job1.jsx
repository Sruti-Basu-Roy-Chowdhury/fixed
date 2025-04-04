import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../component/Navbar";
import { VscLocation } from "react-icons/vsc";
import { RiBriefcase4Line } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbUserHexagon } from "react-icons/tb";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { FaRegCalendarCheck } from "react-icons/fa";
import image from "/src/assets/images/image 24.png";
import image1 from "/src/assets/images/image 23.png";
import Footer from "../component/Footer";
import Go from"/src/component/Go";
import Option from"/src/component/Option";

const Job1 = () => {
    const [activeTab, setActiveTab] = useState('description');
    
    const tabContent = {
        description: (
            <div className="mt-4 font-[poppins]">
                <h3 className="font-semibold text-lg mb-2 text-[#061421] ">Job Description</h3>
                <h2 className="text-[#141514] font-semibold text-sm mt-2">What will make your journey with us unique?</h2>
                <ul className="list-disc pl-5 mt-4 text-xs font-semibold text-[#141514]">
                    <li>A supportive manager who cares about your well-being and is invested in your professional 
                        <br/>growth.</li>
                    <li>A culture of continuous learning with clear targets and feedback.</li>
                    <li>A global company with over 2600 employees located in more than 26 countries, including 
                        <br/>
                        offices in 3 countries.</li>
                </ul>
            </div>
        ),
        requirements: (
            <div className="mt-4 font-[poppins]  ">
                <h3 className=" text-lg mb-2 text-[#A2A6A4]">Requirement</h3>
                <h4 className="text-sm font-bold text-[#141514] mt-4">What will you do</h4>
                <p className="text-xs text-[#141514] mt-2 font-semibold ">As a UX Designer on our team, you will shape user experiences by leading the design of key 
                    <br/>
                    features and projects. Your responsibilities include defining user experience flows, developing 
                    <br/>
                    new product concepts, and crafting user stories. You will design detailed UI layouts, create 
                    <br/>
                    benchmarks, and develop high-fidelity prototypes while documenting UX and UI strategies. 
                    <br/>
                    Collaborating with technical teams, you will transform designs into impactful, industry-leading 
                    <br/>
                    products. This role combines creativity and problem-solving to create meaningful user 
                    <br/>
                    experiences. Your journey with us is an opportunity to drive innovation and make a significant 
                    <br/>
                    impact.</p>
                    <h4 className="text-sm font-bold text-[#141514] mt-6">What You'll Bring
                    </h4>
                    <ul className="list-disc pl-5 text-[#141514] mt-2 text-xs font-semibold">
                    <li>Showcase proficiency in collaborative design environments.</li>
                    <li>Demonstrated ability to work independently, think critically, and maintain meticulous attention to detail.</li>
                    <li>Solid grasp of interactive elements, micro-interactions, and animations, contributing to a seamless user experience.</li>
                    <li>Clear understanding of the entire UX lifecycle, coupled with a track record of designing successful apps and products.</li>
                    <li>Deep passion for digital product development and an unwavering commitment to achieving excellence.</li>
                   
                </ul>
                
            </div>
        ),
        benefits: (
            <div className="mt-4 font-[poppins]">
                <h3 className=" text-lg mb-2 text-[#A2A6A4]">Benefit</h3>
                <h2 className="text-[#141514] text-sm font-semibold ">Base Pay Range</h2>
                <h4 className="text-[#141514] text-sm  mt-3">$50.00- $60.00 <span className="text-[#8C8F8E]">per/H</span></h4>
                <h4 className="text-[#141514] text-sm font-bold  mt-6">What's in it for you?</h4>

                <ul className="list-disc pl-5 text-[#141514] mt-2 text-xs font-semibold">
                    <li>Embrace work-life balance with hybrid/remote roles and flexible hours.</li>
                    <li>Enjoy 22 days + Birthday + Carnival Tuesday.</li>
                    <li>Participate in team-building activities and events.</li>
                    <li>Utilize the best tools and technology for work.</li>
                    <li>Stay covered with comprehensive health insurance.</li>
                    <li>A huge team of UX designers to learn from.</li>
                </ul>
            </div>
        ),
        overview: (
            <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2 text-[#061421]">Overview</h3>
                <p className="text-[#061421] text-xs font-semibold">
                    This is a full-time position based in Pune with remote work options. 
                    You'll be joining our growing design team to help shape the future of our digital products.
                    We value creativity, collaboration, and continuous learning in our team members.
                </p>
            </div>
        )
    };

    return (
        <div className="flex flex-col min-h-screen">
            <motion.div
            style={{ marginBottom: '0' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
            >
                <Navbar activePage="job" />
                <div className="p-10 md:p-40 text-[#05445E] w-full min-h-[300px] bg-gradient-to-b from-white via-[#DEF4FF] to-white">
                    <div className="max-w-6xl mx-auto flex gap-8">
                        {/* Main content */}
                        <div className="max-w-4xl text-left left-0">
                            <h1 className="mt-10 font-[poppins] text-3xl font-bold mb-4">
                                Digital Experience Designer
                            </h1>
                            <p className="text-[#000000] text-lg md:text-xl font-semibold font-[poppins] mb-6">
                                <span className="flex items-center">
                                    Infransync Technology and Services
                                    <VscLocation className="mr-2 ml-8 text-[#05445E]" />
                                    <p className="font-normal text-sm text-[#05445E]">Pune, Maharashtra</p>
                                </span>
                            </p>
                            <div className="grid-col-1 flex gap-2">
                                <button className="border-[#00A7AC] border rounded w-[55px] h-[27px] text-[13px] text-[#00A7AC]">
                                    Urgent
                                </button>
                                <button className="border-[#00A7AC] border rounded w-[55px] h-[27px] text-[13px] text-[#00A7AC]">
                                    Junior
                                </button>
                                <button className="border border-[#00A7AC] rounded w-[55px] h-[27px] text-[13px] text-[#00A7AC]">
                                    Full time
                                </button>
                                <button className="border border-[#00A7AC] rounded w-[55px] h-[27px] text-[13px] text-[#00A7AC]">
                                    Designer
                                </button>
                            </div>
                            <div className="item-left mt-4">
                                <div className="border border-[#D3D3D3] rounded-xl p-6 w-full max-w-3xl">
                                    <div className="grid grid-cols-3 gap-4 font-[poppins]">
                                        {/* Row 1 */}
                                        <div className="rounded-lg p-4 flex items-center gap-2">
                                            <RiBriefcase4Line className="text-[#171717] text-[15px] -mt-5" />
                                            <div>
                                                <h1 className="text-[#000000] text-lg text-[15px]">Job Type</h1>
                                                <p className="text-sm text-[#000000] font-semibold">Full time/ Remote</p>
                                            </div>
                                        </div>
                                        <div className="rounded-lg p-4 flex items-center gap-2">
                                            <VscLocation className="text-[#171717] text-[15px] -mt-5" />
                                            <div>
                                                <h1 className="text-[#000000] text-lg text-[15px]">Location</h1>
                                                <p className="text-sm text-[#000000] font-semibold">Pune, Maharashtra</p>
                                            </div>
                                        </div>
                                        <div className="rounded-lg p-4 flex items-center gap-2">
                                            <BsCurrencyDollar className="text-[#171717] text-[15px] -mt-5" />
                                            <div>
                                                <h1 className="text-[#000000] text-lg text-[15px]">Salary</h1>
                                                <p className="text-sm text-[#000000] font-semibold">6.5 L to 8 LPA</p>
                                            </div>
                                        </div>

                                        {/* Row 2 */}
                                        <div className="rounded-lg p-4 flex items-center gap-2">
                                            <TbUserHexagon className="text-[#171717] text-[15px] -mt-5" />
                                            <div>
                                                <h1 className="text-[#000000] text-lg text-[15px]">Company size</h1>
                                                <p className="text-sm text-[#000000] font-semibold">100-500 Employees</p>
                                            </div>
                                        </div>
                                        <div className="rounded-lg p-4 flex items-center gap-2">
                                            <LiaDigitalTachographSolid className="text-[#171717] text-[20px] -mt-9" />
                                            <div>
                                                <h1 className="text-[#000000] text-lg text-[15px]">Job title</h1>
                                                <p className="text-sm text-[#000000] font-semibold">Digital experience designer</p>
                                            </div>
                                        </div>
                                        <div className="rounded-lg p-4 flex items-center gap-2">
                                            <FaRegCalendarCheck className="text-[#171717] text-[15px] -mt-5" />
                                            <div>
                                                <h1 className="text-[#000000] text-lg text-[15px]">Date posted</h1>
                                                <p className="text-sm text-[#000000] font-semibold">28 October 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image placed below the tabs */}
                                <div className="mt-8 w-full max-w-3xl">
                                    <img src={image} alt="Job illustration" className="w-full rounded-xl " />
                                </div>

                                
                                {/* Tabs for Job Details */}
                                <div className="mt-8 w-full max-w-3xl">
                                    <div className="flex border-b border-[#E5EAE8]">
                                        <div
                                            className={`py-2 px-4 font-medium ${activeTab === 'description' ? 'text-[#333434] border-b-2 border-[#333434]' : 'text-[#A2A6A4]'}`}
                                            onClick={() => setActiveTab('description')}
                                        >
                                            Job Description
                                        </div>
                                        <button
                                            className={`py-2 px-4 font-medium ${activeTab === 'requirements' ? 'text-[#333434] border-b-2 border-[#333434]' : 'text-[#A2A6A4]'}`}
                                            onClick={() => setActiveTab('requirements')}
                                        >
                                            Requirements
                                        </button>
                                        <button
                                            className={`py-2 px-4 font-medium ${activeTab === 'benefits' ? 'text-[#333434] border-b-2 border-[#333434]' : 'text-[#A2A6A4]'}`}
                                            onClick={() => setActiveTab('benefits')}
                                        >
                                            Benefit
                                        </button>
                                        <button
                                            className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'text-[#333434] border-b-2 border-[#333434]' : 'text-[#A2A6A4]'}`}
                                            onClick={() => setActiveTab('overview')}
                                        >
                                            Overview
                                        </button>
                                    </div>
                                    
                                    {/* Tab Content */}
                                    <div className="mt-4 p-4  rounded-xl">
                                        {tabContent[activeTab]}
                                        <div className=" mt-4 border-t border-[#B8BDBB]">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side card */}
                        <div className=" w-[350px] h-[600px] bg-white rounded-xl shadow-md p-6 mt-10 sticky top-10">
                            <div className="flex items-start gap-3 mb-6">
                                <img 
                                    src={image1}
                                    alt="Company Logo"
                                    className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-[#333434] font-[poppins]">Incom PVT LTD</h3>
                                </div>
                            </div>
                                
                            <div className="mb-6">
                                <p className="text-xs text-[#9D9D9D] mb-4 font-[poppins]">
                                    We are seeking a highly organized and detail-oriented Administrative Assistant. 
                                    In this role, you will be responsible for coordinating activities and administrative 
                                    tasks by organizing people, files, information, and activities. This additionally 
                                    includes related operations related assistance work such as research, data processing, 
                                    scheduling, and other related activities.
                                </p>
                            </div>
                            
                            <div className="flex gap-4 mb-6">
                                <button className="flex-1 bg-[#05445E] text-white py-1 px-1 rounded-lg font-medium hover:bg-[#4338CA] transition-colors">
                                    Apply Now
                                </button>
                                <button className="flex-1 border border-[#05445E24] text-[#05445E] py-1 px-1 rounded-lg font-medium hover:bg-[#EEF2FF] transition-colors">
                                    Save Job
                                </button>
                            </div>
                            

                            {/* Company details section with parallel two-column layout */}
                            <div className=" pt-10 font-[poppins]">
                                <h4 className="text-sm font-semibold text-[#333434] mb-3 font-[poppins]">Company Details</h4>
                                <div className="flex">
                                    {/* First column for headings */}
                                    <div className="w-1/3 space-y-3 pr-2">
                                        <p className="text-sm text-[#141514] font-[poppins]">Type</p>
                                        <p className="text-sm text-[#141514] font-[poppins]">Sector</p>
                                        <p className="text-sm text-[#141514] font-[poppins]">Founded</p>
                                        <p className="text-sm text-[#141514] font-[poppins]">Industry</p>
                                        <p className="text-sm text-[#141514] font-[poppins]">Revenue</p>
                                        <p className="text-sm text-[#141514] font-[poppins]">Location</p>
                                    </div>
                                    
                                    {/* Second column for values */}
                                    <div className="w-2/3 space-y-4">
                                        <p className="text-xs text-[#141514] font-[poppins]">Company - Private</p>
                                        <p className="text-xs text-[#141514] font-[poppins]">Financial Service</p>
                                        <p className="text-xs text-[#141514] font-[poppins]">1999</p>
                                        <p className="text-xs text-[#141514] font-[poppins]">Financial Transaction</p>
                                        <p className="text-xs text-[#141514] font-[poppins]">$5 to $25 million</p>
                                        <p className="text-xs text-[#141514] font-[poppins]">The Cove, Creaticity, Yerawada, Pune, Maharashtra 411006, India</p>
                                    </div>
                                   
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <Option/>
               <Go/>
               <Footer />
            </motion.div>

            
            
        </div>
    );
};

export default Job1;