import React from 'react';
import Sidebar from "/src/component/Sidebar";
import DashboardContent from "/src/component/Dshboardcontent";

const Dashboard2 = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar - Fixed position */}
            <div className="fixed h-screen w-64 bg-gray-100 border-r border-gray-200">
                <Sidebar />
            </div>
            
            {/* Dashboard Content - Offset by sidebar width and scrollable */}
            <div className="flex-1 ml-64 overflow-auto">
                <DashboardContent />
            </div>
        </div>
    );
};

export default Dashboard2;