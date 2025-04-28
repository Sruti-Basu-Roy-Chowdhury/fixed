import React from 'react';
import { FiSearch, FiMoreVertical } from 'react-icons/fi';
import Navbar1 from "/src/component/Navbar1";
import Sidebar from "/src/component/Sidebar";

const Message = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Navbar1 />
                    
                    <div className="flex-1 flex overflow-auto ml-10">
                        {/* Messages panel */}
                        <div className="w-[304px] h-[622px] border-2 border-[#E4E4E4] rounded-lg flex flex-col">
                            <h2 className="p-4 text-xl font-bold">Messages</h2>
                            
                            {/* Search bar */}
                            <div className="px-4 pb-4">
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        className="w-full pl-10 pr-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EBEBEB]"
                                    />
                                </div>
                            </div>

                            {/* Message list */}
                            <div className="overflow-y-auto flex-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-[257px] h-[62px] mx-auto my-2 rounded-lg border border-gray-200 p-2 hover:bg-gray-50 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                                            <span className="font-bold">ADMIN</span>
                                        </div>
                                        <p className="text-sm text-gray-600 truncate">Submit an assignment for the evaluation of your candidature.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Right content area - Chat interface */}
                        <div className="flex-1 overflow-auto bg-gray-50">
                            <div className="w-[606px] h-[622px] absolute top-[127px] left-[620px] rounded-[10px] border border-[#DFE0EB] bg-white">
                                {/* Chat header */}
                                <div className="w-full h-[82.15px] border-b border-[#DFE0EB] rounded-t-[10px] flex items-center px-4">
                                    <div className="w-[31.59px] h-[31.59px] rounded-full bg-gray-100 flex items-center justify-center">
                                        <div className="w-[15.8px] h-[15.8px] bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="font-semibold">ADMIN</h3>
                                        <p className="text-xs text-gray-500">Online</p>
                                    </div>
                                    <div className="ml-auto">
                                        <FiMoreVertical className="text-gray-400" />
                                    </div>
                                </div>
                                
                                {/* Chat messages */}
                                <div className="p-4 overflow-y-auto h-[calc(622px-82.15px)]">
                                    {/* Left message */}
                                    <div className="flex gap-[10px] mb-4">
                                        <div className="w-[23.7px] h-[23.7px] rounded-full bg-gray-200 mt-1"></div>
                                        <div className="w-[285.93px] h-[45.02px] rounded-lg border border-[#DFE0EB] bg-white flex items-center px-4">
                                            <p>Hello, how are you?</p>
                                        </div>
                                    </div>
                                    
                                    {/* Right message */}
                                    <div className="flex justify-end gap-[10px] mb-4">
                                        <div className="w-[285.93px] h-[45.02px] rounded-lg bg-[#00A7AC] text-white flex items-center px-4">
                                            <p>I'm doing well, thanks!</p>
                                        </div>
                                        <div className="w-[23.7px] h-[23.7px] rounded-full bg-gray-200 mt-1 flex items-center justify-center">
                                            <div className="w-[15.8px] h-[15.8px] bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Additional messages can be added here */}
                                    <div className="flex gap-[10px] mb-4">
                                        <div className="w-[23.7px] h-[23.7px] rounded-full bg-gray-200 mt-1"></div>
                                        <div className="w-[285.93px] h-[45.02px] rounded-lg border border-[#DFE0EB] bg-white flex items-center px-4">
                                            <p>Have you submitted your assignment?</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-end gap-[10px] mb-4">
                                        <div className="w-[285.93px] h-[45.02px] rounded-lg bg-[#00A7AC] text-white flex items-center px-4">
                                            <p>Yes, I submitted it yesterday.</p>
                                        </div>
                                        <div className="w-[23.7px] h-[23.7px] rounded-full bg-gray-200 mt-1 flex items-center justify-center">
                                            <div className="w-[15.8px] h-[15.8px] bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Message input (optional) */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#DFE0EB]">
                                    <div className="flex items-center">
                                        <input 
                                            type="text" 
                                            placeholder="Type a message..." 
                                            className="flex-1 border border-[#DFE0EB] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#00A7AC]"
                                        />
                                        <button className="ml-2 bg-[#00A7AC] text-white px-4 py-2 rounded-lg">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;