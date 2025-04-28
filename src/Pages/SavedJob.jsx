import React from 'react';
import Sidebar from "/src/component/Sidebar.jsx";
import Navbar1 from "/src/component/Navbar1.jsx";
import { Bookmark } from 'lucide-react'; // Assuming you're using Lucide React icons
import { TbUserHexagon } from "react-icons/tb";
import { PiMedalThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";

const SavedJob = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                
                <div className="flex-1 flex flex-col overflow-auto">
                    <Navbar1 />
                    <h1 className="font-[Poppins] text-xl font-semibold text-[#000000]  ml-19">Saved Jobs</h1> 
                    
                    {/* Job Card */}
                    <div className="border rounded-lg p-4 m-4 mt-5 ml-20 border-[#D2D2D2] relative w-[734px] h-[180px]">
                        {/* Top right - days ago */}
                        <div className="absolute top-4 font-[poppins] right-4 text-sm text-gray-500">11 days ago</div>
                        
                        {/* Company info */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#215B5C] flex items-center justify-center text-[#FBBC09] font-semibold">
                                INFRA
                            </div>
                            <div>
                                <h2 className="font-semibold font-[poppins] text-sm text-[#000000] mt-4"> Administrative Assistant</h2>
                                <p className=" mt-4 text-[#000000] text-sm font-semibold font-[poppins]">Infransync Technology and services</p>
                                
                                {/* Tags row */}
                                <div className="flex gap-4 mt-4 text-sm">
    <TbUserHexagon className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3">100-500 Employees</span>
    
    <PiMedalThin className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3 ">Employee Benefits</span>
    
    <CiCreditCard1 className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3">₹ 6-8 LPA</span>
</div>
                                
                                {/* Location and job type */}
                                <div className="flex gap-4 mt-4 text-sm">
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs ">Pune, Maharashtra</span>
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Hybrid</span>
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Full time</span>
                                    <span className="text-[#000000] border-2 rounded p-1 border-[#DFDFDF] text-xs">Administrative assistant</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bookmark icon */}
                        <div className="absolute bottom-4 right-4">
                            <Bookmark className="text-[#00A7AC] fill-[#00A7AC]  hover:text-[#00A7AC] cursor-pointer" />
                        </div>
                    </div>
                     {/* Job Card */}
                     <div className="border rounded-lg p-4 m-4 mt-3 ml-20 border-[#D2D2D2] relative w-[734px] h-[180px]">
                        {/* Top right - days ago */}
                        <div className="absolute top-4 font-[poppins] right-4 text-sm text-gray-500">11 days ago</div>
                        
                        {/* Company info */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#215B5C] flex items-center justify-center text-[#FBBC09] font-semibold">
                                INFRA
                            </div>
                            <div>
                                <h2 className="font-semibold font-[poppins] text-sm text-[#000000] mt-4"> Administrative Assistant</h2>
                                <p className=" mt-4 text-[#000000] text-sm font-semibold font-[poppins]">Infransync Technology and services</p>
                                
                                {/* Tags row */}
                                <div className="flex gap-4 mt-4 text-sm">
    <TbUserHexagon className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3">100-500 Employees</span>
    
    <PiMedalThin className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3 ">Employee Benefits</span>
    
    <CiCreditCard1 className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3">₹ 6-8 LPA</span>
</div>
                                
                                {/* Location and job type */}
                                <div className="flex gap-4 mt-4 text-sm">
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs ">Pune, Maharashtra</span>
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Hybrid</span>
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Full time</span>
                                    <span className="text-[#000000] border-2 rounded p-1 border-[#DFDFDF] text-xs">Administrative assistant</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bookmark icon */}
                        <div className="absolute bottom-4 right-4">
                            <Bookmark className="text-[#00A7AC] fill-[#00A7AC]  hover:text-[#00A7AC] cursor-pointer" />
                        </div>
                    </div>
                
                 {/* Job Card */}
                 <div className="border rounded-lg p-4 m-4 mt-3 ml-20 border-[#D2D2D2] relative w-[734px] h-[180px]">
                        {/* Top right - days ago */}
                        <div className="absolute top-4 font-[poppins] right-4 text-sm text-gray-500">11 days ago</div>
                        
                        {/* Company info */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#215B5C] flex items-center justify-center text-[#FBBC09] font-semibold">
                                INFRA
                            </div>
                            <div>
                                <h2 className="font-semibold font-[poppins] text-sm text-[#000000] mt-4"> Administrative Assistant</h2>
                                <p className=" mt-4 text-[#000000] text-sm font-semibold font-[poppins]">Infransync Technology and services</p>
                                
                                {/* Tags row */}
                                <div className="flex gap-4 mt-4 text-sm">
    <TbUserHexagon className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3">100-500 Employees</span>
    
    <PiMedalThin className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3 ">Employee Benefits</span>
    
    <CiCreditCard1 className="mt-1 text-[#757575]" />
    <span className="text-[#757575] -ml-3">₹ 6-8 LPA</span>
</div>
                                
                                {/* Location and job type */}
                                <div className="flex gap-4 mt-4 text-sm">
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs ">Pune, Maharashtra</span>
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Hybrid</span>
                                    <span className="text-[#000000] border-[#DFDFDF] p-1 rounded border-2 text-xs">Full time</span>
                                    <span className="text-[#000000] border-2 rounded p-1 border-[#DFDFDF] text-xs">Administrative assistant</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bookmark icon */}
                        <div className="absolute bottom-4 right-4">
                            <Bookmark className="text-[#00A7AC] fill-[#00A7AC]  hover:text-[#00A7AC] cursor-pointer" />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default SavedJob;