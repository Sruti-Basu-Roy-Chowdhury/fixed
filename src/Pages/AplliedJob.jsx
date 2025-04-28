import React from 'react';
import Navbar1 from "/src/component/Navbar1";
import Sidebar from "/src/component/Sidebar";
import Content from "/src/component/Content";

const AppliedJob = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                
                <div className="flex-1 flex flex-col overflow-auto">
                    <Navbar1 />
                    
                    <div className="p-4 flex-1 ml-15 mt-10">
                        <h1 className="text-xl font-[poppins]">Applied Jobs</h1>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;