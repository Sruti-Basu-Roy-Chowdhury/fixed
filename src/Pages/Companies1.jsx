import React, { useState } from 'react';
import Navbar from "../component/Navbar";
import { useNavigate } from 'react-router-dom';
import image1 from "/src/assets/images/Frame 398.png";
import { SlLocationPin } from "react-icons/sl";
import { TbUserHexagon } from "react-icons/tb";
import image2 from "/src/assets/images/image 23.png";
import { Bookmark } from 'lucide-react'; 
import { PiMedalThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import image3 from "/src/assets/images/Ellipse 187.png";
import Footer from "/src/component/Footer";
import Go from "/src/component/Go";
import { BsArrowRightCircle } from "react-icons/bs";
import image4 from "/src/assets/images/Office2.png";
import image5 from "/src/assets/images/Office1.png";

const Companies1 = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [connectionRequestSent, setConnectionRequestSent] = useState(false);
    const navigate = useNavigate();
    const handleConnectionRequest = () => {
        console.log("Connection request sent");
        setConnectionRequestSent(true);
    };

    const handleOpenJobsClick = () => {
        console.log("Open jobs clicked");
    };

    const handleCompletedJobsClick = () => {
        console.log("Completed jobs clicked");
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div className="p-6 font-[poppins]">
                        <h2 className="text-2xl font-bold mb-4 text-[#8C8F8E]">About</h2>
                        <p className="text-[#141514] text-xs font-semibold leading-6">
                            NAVA is guided by four principles: customer obsession rather than competitor
                            focus, passion for invention, commitment to operational excellence, and long-
                            term thinking. We are driven by the excitement of building technologies,
                            inventing products, and providing services that change lives. We embrace new 
                            ways of doing things, make decisions quickly, and are not afraid to fail...See 
                            more
                        </p>
                        <div className="mt-3 w-[311px] h-[80px] border-2 border-[#E5EAE8] font-[poppins]">
                            <h1 className="text-xs text-[#767977] mt-3 ml-2">contact Info</h1>
                            <p className="text-xs font-bold text-[#000000] ml-2">aboutamazon.com</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-[#00A7AC] hover:text-[#00A7AC] font-medium">
                                <span className="flex items-center gap-1">
                                    Show more <BsArrowRightCircle className="text-[#00A7AC] w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                );
            case 'branches':
                return (
                    <div className="p-6 w-[612px]">
                        <h2 className="text-2xl font-bold mb-4 text-[#8C8F8E]">Branches</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {/* Row 1 */}
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg">Behance Design NY, UK</h3>
                                <p className="text-gray-600 mt-2">Jan 2021 — Present</p>
                            </div>
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg">Behance Design NY, UK</h3>
                                <p className="text-gray-600 mt-2">Jan 2021 — Present</p>
                            </div>
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg">Behance Design NY, UK</h3>
                                <p className="text-gray-600 mt-2">Jan 2021 — Present</p>
                            </div>
                            
                            {/* Row 2 */}
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg">Behance Design NY, UK</h3>
                                <p className="text-gray-600 mt-2">Jan 2021 — Present</p>
                            </div>
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg">Behance Design NY, UK</h3>
                                <p className="text-gray-600 mt-2">Jan 2021 — Present</p>
                            </div>
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg">Behance Design NY, UK</h3>
                                <p className="text-gray-600 mt-2">Jan 2021 — Present</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-[#00A7AC] hover:text-[#00A7AC] font-medium">
                                <span className="flex items-center gap-1">
                                    Show more Branches <BsArrowRightCircle className="text-[#00A7AC] w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                );
            case 'keyPeople':
                return (
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#8C8F8E]">Key People</h2>
                        </div>
                        
                        <div className="mb-8">
                            <p className="text-gray-600 text-center md:text-left">580 employees who studied Industrial Design and Product Design</p>
                        </div>
                        
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <p className="text-gray-600">26 employees work in Porto</p>
                            <div className="flex justify-center items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                    <img src="/employee1.jpg" alt="Employee" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                    <img src="/employee2.jpg" alt="Employee" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-white bg-gray-700 bg-opacity-50">
                                    <span className="font-bold">24+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'ourOffice':
                return (
                    <div className="p-6 w-[610px]">
                        <h2 className="text-2xl font-bold mb-6 text-[#8C8F8E]">Our Office</h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-1/2">
                                <div className="  ml-5 flex-row gap-4 h-64 md:h-80 rounded-lg flex items-center ">
                                    
                                        <img 
                                            src={image4}
                                            alt="First image"
                                            className="h-[300px]  object-cover rounded"
                                        />
                                        <img 
                                            src={image5}
                                            alt="Second image"
                                            className="h-[300px] w-auto object-cover rounded"
                                        />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-[#00A7AC] hover:text-[#00A7AC] font-medium">
                                <span className="flex items-center gap-1">
                                    Show more People <BsArrowRightCircle className="text-[#00A7AC] w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'branches', label: 'Branches' },
        { id: 'keyPeople', label: 'Key People' },
        { id: 'ourOffice', label: 'Our Office' }
    ];

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

                                <button 
                                    onClick={handleConnectionRequest}
                                    disabled={connectionRequestSent}
                                    className={`px-6 py-2 ml-120 text-white text-sm rounded-lg ${
                                        connectionRequestSent ? 'bg-[#05445E]' : 'bg-[#05445E] hover:bg-gray-700'
                                    } transition-colors`}
                                >
                                    {connectionRequestSent ? 'Request Sent' : 'Send Connection Request'}
                                </button>
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

            {/* Main Content Area with Sidebar */}
            <div className="container mx-auto px-4 md:px-6 mt-8 flex flex-col lg:flex-row gap-8">
                {/* Left Content - Tab Content */}
                <div className="lg:w-2/3 ml-20">
                    <div className="flex overflow-x-auto border-b w-[610px] border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'text-blue-800 border-b-2 border-blue-800'
                                        : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white w-[610px] border-b border-[#E5EAE8] mt-2">
                        {renderTabContent()}
                    </div>

                    {/* New Job Openings Section */}
                    <div className="mt-12 font-[poppins]">
                    <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-xl font-bold text-[#05445E]">Job Openings</h2>
            <p className="text-[#8D8D8D] text-sm">Here are other jobs you might want to apply for.</p>
        </div>
        <button 
    onClick={() => navigate('/com')}  
    className="text-white text-xs rounded-xl bg-[#05445E] w-[150px] h-[40px] hover:bg-[#04303a] transition-colors"
>
    Explore all Jobs
</button>
        </div>
                        
                        {/* Job Cards */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="border rounded-lg p-4 m-4 mt-5 ml-20 border-[#D2D2D2] relative w-[734px] h-[225px]">
                                <div className="absolute top-4 font-[poppins] right-4 text-sm text-gray-500">11 days ago</div>
                                
                                <div className="flex items-start gap-4">
                                    {item === 1 ? (
                                        <div className="w-12 h-12 rounded-full bg-[linear-gradient(90deg,#0077E5_50%,transparent_50%)] flex items-center justify-center text-white font-semibold text-xs">
                                            HIC <span className="text-[#0077E5]">OM</span>
                                        </div>
                                    ) : item === 2 ? (
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
                                        <h2 className="font-semibold font-[poppins] text-sm text-[#000000] mt-4">Administrative Assistant</h2>
                                        <p className="mt-4 text-[#000000] text-sm font-semibold font-[poppins]">Infransync Technology and services</p>
                                        
                                        <div className="flex gap-4 mt-4 text-sm">
                                            <TbUserHexagon className="mt-1 text-[#757575]" />
                                            <span className="text-[#757575] -ml-3">100-500 Employees</span>
                                            
                                            <PiMedalThin className="mt-1 text-[#757575]" />
                                            <span className="text-[#757575] -ml-3">Employee Benefits</span>
                                            
                                            <CiCreditCard1 className="mt-1 text-[#757575]" />
                                            <span className="text-[#757575] -ml-3">₹ 6-8 LPA</span>
                                        </div>
                                        
                                        <div className="flex gap-4 mt-4 text-sm">
                                            <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Pune, Maharashtra</span>
                                            <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Hybrid</span>
                                            <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Full time</span>
                                            <span className="text-[#000000] border-2 rounded p-1 border-[#DFDFDF] text-xs">Administrative assistant</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-4 right-4">
                                    <Bookmark className="text-[#00A7AC] fill-[#00A7AC] hover:text-[#00A7AC] cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                

                {/* Right Sidebar - Job Card */}
                <div className="lg:w-1/3 mt-10 lg:mt-0">
                    <div className="w-[350px] h-[600px] bg-white rounded-xl shadow-md p-6 sticky top-10">
                        <div className="flex items-start gap-3 mb-6">
                            <img 
                                src={image2}
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
                        

                        {/* Company details section */}
                        <div className="pt-10 font-[poppins]">
                            <h4 className="text-sm font-semibold text-[#333434] mb-3 font-[poppins]">Company Details</h4>
                            <div className="flex">
                                <div className="w-1/3 space-y-3 pr-2">
                                    <p className="text-sm text-[#141514] font-[poppins]">Type</p>
                                    <p className="text-sm text-[#141514] font-[poppins]">Sector</p>
                                    <p className="text-sm text-[#141514] font-[poppins]">Founded</p>
                                    <p className="text-sm text-[#141514] font-[poppins]">Industry</p>
                                    <p className="text-sm text-[#141514] font-[poppins]">Revenue</p>
                                    <p className="text-sm text-[#141514] font-[poppins]">Location</p>
                                </div>
                                
                                <div className="w-2/3 space-y-4">
                                    <p className="text-xs text-[#141514] font-[poppins]">Company - Private</p>
                                    <p className="text-xs text-[#141514] font-[poppins]">Financial Service</p>
                                    <p className="text-xs text-[#141514] font-[poppins]">1999</p>
                                    <p className="text-xs text-[#141514] font-[poppins]">Financial Transaction</p>
                                    <p className="text-xs text-[#141514] font-[poppins]">$5 to $25 million</p>
                                    <p className="text-xs text-[#141514] font-[poppins]">The Cove, Creaticity, Yerawada, Pune, Maharashtra 411006, India</p>
                                </div>
                            </div>

                            <div className="mt-20 -ml-8 rounded-lg w-[358px] h-[263px] border-2 bg-[#F5FCFF] border-[#E2E2E2]">
                                <div className="mt-10 ml-15 font-[poppins]">
                                    <h1 className="text-md font-bold">Are you also hiring?</h1>
                                    <h2 className="ml-5 mt-4 text-md font-semibold">
                                        .Writing & Translation
                                        <br/>
                                        .Video & Animation
                                        <br/>
                                        .Music & Audio
                                        <br/>
                                        .Digital Marketing
                                        <br/>
                                        .Business
                                        <br/>
                                        .Programming & Tech
                                    </h2>
                                </div>
                            </div>
                        </div>
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

export default Companies1;