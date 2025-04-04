import React from 'react';
import logo from "../assets/images/logo.png"; // Update the path to your logo
import Image26 from"/src/assets/images/Link.png";
import Image27 from"/src/assets/images/Link (1).png";
import Image28 from"/src/assets/images/linkedin-02.png";
import Image29 from"/src/assets/images/youtube.png";
import Image30 from"/src/assets/images/Image 21.png";

const Footer = () => {
    return (
        <footer className="bg-white p-8 md:p-20 w-full">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src={logo} alt="Logo" className="h-[80px]" />
                        <h2 className="text-sm font-semibold text-[#000000] mt-4">
                            Sign up now and join over 10,000 remote workers who receive <br />
                            personalized job alerts, curated job matches, and more for free!
                        </h2>
                        
                        <div className="flex gap-2 mt-6">
                            <img src={Image26} alt="Social Link" />
                            <img src={Image27} alt="Social Link" />
                            <img src={Image28} alt="Social Link" />
                            <img src={Image29} alt="Social Link" />
                        </div>
                    </div>
                    
                    <div className="absolute right-0 top-0 hidden md:block">
                        <img src={Image30} alt="Decoration" className="w-auto h-auto" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#1A1A1A] mt-12">
                    {/* Column 1 */}
                    <div>
                        <h1 className="font-bold mb-4">About Company</h1>
                        <p className="space-y-2">
                            Contact Us <br />
                            Terms & Conditions <br />
                            Privacy Policy <br />
                            Candidate Listing
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h1 className="font-bold mb-4">For Candidate</h1>
                        <p className="space-y-2">
                            Create Resumes <br />
                            Browse Categories <br />
                            Saved Jobs <br />
                            Candidate Dashboard
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h1 className="font-bold mb-4">For Employers</h1>
                        <p className="space-y-2">
                            Post a job <br />
                            Job packages <br />
                            Employer Dashboard <br />
                        </p>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h1 className="font-bold mb-4">For Consultants</h1>
                        <p className="space-y-2">
                            About Us <br />
                            Careers <br />
                            Press <br />
                            Contact
                        </p>
                    </div>
                </div>
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-sm">
                        © 2024 NGHR. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;