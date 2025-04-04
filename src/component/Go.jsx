import React from 'react';

const Go = () => {
    return (
        <div className="mt-16 bg-[#E3F2FD] p-15 rounded-2xl shadow-lg text-left max-w-4xl mx-auto font-[poppins] mb-80">
            <h2 className="text-2xl font-bold text-[#05445E]">Find Your Dream Job</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto -ml-1 font-semibold">
                <br />Sign up now and join over 10,000 remote 
                <br />workers who receive personalized job 
                <br />alerts, curated job matches, and more 
                <br />for free!
            </p>

            <div className="flex justify-left gap-4 mt-6 font-[poppins]">
                <button className="px-6 py-3 bg-white text-[#05445E] border border-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-200 flex items-center">
                    <img 
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
                        alt="Google" 
                        className="h-5 w-5 mr-2" 
                    />
                    Sign up with Google
                </button>
                
                <button className="px-6 py-3 bg-[#05445E] text-white rounded-xl text-sm font-semibold hover:bg-gray-600">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Go;