import React from 'react';
import Navbar1 from "/src/component/Navbar1";
import Sidebar from "/src/component/Sidebar";
import Image1 from "/src/assets/images/magicpen.png";
import Image2 from "/src/assets/images/element-equal.png";
import Image3 from "/src/assets/images/image 37.png"; // Assume you have a resume image

const Resume = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                
                <div className="flex-1  flex-col overflow-auto">
                    <Navbar1 />
                    
                    <div className="p-4 ml-15 font-[poppins] mt-20">
                        <h1 className="text-2xl text-[#000000] font-bold mb-4">Resume</h1>
                        <p className="text-[#B3B3B3] text-sm font-medium">Upgrade to NGHR AI</p>
                        <p className="text-[#B3B3B3] text-sm mb-6">
                            Once you upgrade, you'll be able to generate unlimited resumes tailored to specific jobs with AI.
                        </p>
                        
                        {/* Bordered div with more rounded corners */}
                        <div 
                            className="rounded-[10px] overflow-hidden relative"
                            style={{
                                width: '862px',
                                height: '218px',
                                border: '3px solid transparent',
                                background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(0, 167, 172, 0.5) 0%, rgba(5, 68, 94, 0.5) 100%) border-box'
                            }}
                        >
                            {/* Circle div positioned at left center with image */}
                            <div 
                                className="absolute rounded-full flex items-center justify-center"
                                style={{
                                    background: '#00A7AC1A',
                                    width: '58.42px',
                                    height: '57px',
                                    top: '50%',
                                    left: '40.05px',
                                    transform: 'translateY(-50%)'
                                }}
                            >
                                <img 
                                    src={Image1} 
                                    alt="Magic Pen" 
                                    className="w-6 h-6"
                                />
                            </div>
                            
                            {/* Content inside the bordered div */}
                            <div className="w-full h-full p-4 flex">
                                {/* Four rounded buttons container */}
                                <div className="relative flex flex-col justify-center gap-4 ml-30 mr-10">
                                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                                    <div style={{
                                        width: '124.02px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                        Use Promts
                                    </div>
                                    <div style={{
                                        width: '141.45px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                       Improve Writing
                                    </div>
                                    <div style={{
                                        width: '107.62px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                       Translate
                                    </div>
                                    <div style={{
                                        width: '141.45px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                        Improve Writing
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                </div>
                                
                                {/* Text content */}
                                <div className="flex flex-col justify-center items-left flex-1">
                                    {/* Centered text */}
                                    <div className="text-left mb-2" style={{
                                        width: '400px',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '24px',
                                        lineHeight: '150%',
                                        letterSpacing: '0%',
                                        color:'#000000'
                                    }}>
                                        Use NGHR AI to create a Resume
                                    </div>
                                    
                                    {/* Subtext */}
                                    <div className="text-left mb-8" style={{
                                        width: '520px',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        letterSpacing: '0%',
                                        color: '#000000'
                                    }}>
                                        One AI tool that helps you build the perfect Resumes to land your dream Job
                                    </div>
                                </div>
                            </div>
                            
                            {/* Upgrade now button at bottom right */}
                            <button className="absolute bottom-4 right-4 bg-gradient-to-r from-[#00A7AC] to-[#05445E] text-white px-4 py-2 rounded-md"
                                style={{
                                    width: '140px',
                                    height: '40px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: '15px',
                                    lineHeight: '150%',
                                    letterSpacing: '0%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                Upgrade now
                            </button>
                        </div>

                        {/* Bordered div with more rounded corners */}
                        <div 
                            className="rounded-[10px] overflow-hidden relative mt-6"
                            style={{
                                width: '862px',
                                height: '218px',
                                border: '3px solid transparent',
                                background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(0, 167, 172, 0.5) 0%, rgba(5, 68, 94, 0.5) 100%) border-box'
                            }}
                        >
                            {/* Circle div positioned at left center with image */}
                            <div 
                                className="absolute rounded-full flex items-center justify-center"
                                style={{
                                    background: '#00A7AC1A',
                                    width: '58.42px',
                                    height: '57px',
                                    top: '50%',
                                    left: '40.05px',
                                    transform: 'translateY(-50%)'
                                }}
                            >
                                <img 
                                    src={Image2} 
                                    alt="Magic Pen" 
                                    className="w-6 h-6"
                                />
                            </div>
                            
                            {/* Content inside the bordered div */}
                            <div className="w-full h-full p-4 flex">
                                {/* Four rounded buttons container */}
                                <div className="relative flex flex-col justify-center gap-4 ml-30 mr-10">
                                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                                    <div style={{
                                        width: '124.02px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                        Use Promts
                                    </div>
                                    <div style={{
                                        width: '141.45px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                       Edit Resumes
                                    </div>
                                    <div style={{
                                        width: '107.62px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                       50 + Templates
                                    </div>
                                    <div style={{
                                        width: '141.45px',
                                        height: '30px',
                                        borderRadius: '61px',
                                        border: '1px solid #CCCCCC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        color: '#05445E'
                                    }}>
                                        Customization
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                </div>
                                
                                {/* Text content */}
                                <div className="flex flex-col justify-center items-left flex-1">
                                    {/* Centered text */}
                                    <div className="text-left mb-2" style={{
                                        width: '400px',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '24px',
                                        lineHeight: '150%',
                                        letterSpacing: '0%',
                                        color:'#000000'
                                    }}>
                                        Create with a Template
                                    </div>
                                    
                                    {/* Subtext */}
                                    <div className="text-left mb-8" style={{
                                        width: '520px',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        letterSpacing: '0%',
                                        color: '#000000'
                                    }}>
                                        Create with a Template
                                    </div>
                                </div>
                            </div>
                            
                            {/* Upgrade now button at bottom right */}
                            <button className="absolute bottom-4 right-4 bg-gradient-to-r from-[#00A7AC] to-[#05445E] text-white px-4 py-2 rounded-md"
                                style={{
                                    width: '140px',
                                    height: '40px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: '15px',
                                    lineHeight: '150%',
                                    letterSpacing: '0%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                Upgrade now
                            </button>
                        </div>
                        
                        <div className="mt-8">
                            <h2 className="text-2xl text-[#000000] font-bold mb-4">Preview Resume</h2>
                            <p className="text-[#000000] text-sm mb-6" style={{
                                width: '862px',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '150%'
                            }}>
                                Quickly create, analyze, enhance, and optimize your resume to stand out to recruiters with NGHR AI tools, 
                                designed to save you time and increase your chances of landing your dream job.
                            </p>
                            
                            <div className="relative" style={{
                                width: '862px',
                                height: '453px',
                                borderRadius: '15px',
                                border: '1px solid rgba(218, 218, 218, 0.7)'
                            }}>
                                {/* Resume Image */}
                                <img 
                                    src={Image3} 
                                    alt="Resume Preview" 
                                    className="w-full h-[331px] object-cover rounded-t-[15px]"
                                    style={{
                                        borderBottom: '1px solid rgba(218, 218, 218, 0.7)'
                                    }}
                                />
                                
                                {/* Download Button */}
                                <button className="absolute bottom-4 right-4 bg-gradient-to-r from-[#00A7AC] to-[#05445E] text-white px-4 py-2 rounded-md"
                                    style={{
                                        width: '83px',
                                        height: '18px',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        lineHeight: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;