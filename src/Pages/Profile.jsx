import React, { useState } from 'react';
import Sidebar from "/src/component/Sidebar";
import Navbar1 from "/src/component/Navbar1";
import Image1 from"/src/assets/images/new3.png";
import { PiNotepad } from "react-icons/pi";
import { PiPencilLight } from "react-icons/pi";


const Profile = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        language: '',
        location: ''
    });
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

    // Options for dropdowns
    const languageOptions = [
        'English',
        'Spanish',
        'French',
        'German',
        'Chinese',
        'Japanese',
        'Other'
    ];

    const locationOptions = [
        'United States',
        'United Kingdom',
        'Canada',
        'Australia',
        'Germany',
        'France',
        'Japan',
        'Other'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(file);
            // Create a preview URL for the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setUploadedImage(null);
        setImagePreview("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'preferences':
                return (
                    <div id="preferences-content">
                        <div className="font-[poppins] flex items-start gap-4">
                        <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Preferences</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
      Share your skills, experience, and salary expectations. These details will help employers discover your profile.
      </p>
    </div>
  </div>
  
 
</div>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
                        <div className="font-[poppins] flex items-start gap-4">
                        <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">What are you looking for in a job?*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
      This section is included on your profile and in our 
      <br/>search results, helping prospective employers 
      <br/>understand your needs and expectations.
      </p>
    </div>
  </div>
  
  <input 
    type="text" 
    className="border ml-35 mt-2 text-[#A4A4A4] border-[#D8D8D8] rounded px-3 py-2 text-sm w-[320px] h-[89px] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] "
    placeholder="E.g. I love to travel...."
  />
</div>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
<div className="font-[poppins] flex items-start gap-4">
  <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Primary role*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
        The role you are most interested in.
      </p>
    </div>
  </div>
  
  <div className="relative w-[312px]">
  <div className=" ml-55 text-[10px] border-2 border-[#DFDFDF] w-[160px] h-[25px] rounded-lg">
  <h1 className="text-[#000000] ml-2 mt-1">e.g. Administrative assistant</h1></div>
    <select
      className="border ml-55 mt-2 text-[#A4A4A4] border-[#D8D8D8] rounded px-3 py-2 text-xs w-[189px] h-[38px] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] appearance-none"
    >
      <option value="">E.g. Frontend Developer</option>
      <option value="Software Engineer">Software Engineer</option>
      <option value="Product Manager">Product Manager</option>
      <option value="UX Designer">UX Designer</option>
      <option value="Data Scientist">Data Scientist</option>
      <option value="DevOps Engineer">DevOps Engineer</option>
      <option value="Frontend Developer">Frontend Developer</option>
      <option value="Backend Developer">Backend Developer</option>
      <option value="Full Stack Developer">Full Stack Developer</option>
      <option value="QA Engineer">QA Engineer</option>
      <option value="Other">Other</option>
    </select>
      <svg className="fill-current h-4 w-4 ml-96 -mt-6.5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    
  </div>
</div>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
<div className="font-[poppins] flex items-start gap-4">
  <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Open to roles</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
      The roles and titles that you are open to working as.
      </p>
    </div>
  </div>
  
  <div className="relative w-[312px]">
  <div className=" ml-31 text-[10px] border-2 border-[#DFDFDF] w-[160px] h-[25px] rounded-lg">
    <h1 className="text-[#000000] ml-2 mt-1">e.g. Administrative assistant</h1></div>

    <select
      className="border ml-31 mt-2 text-[#A4A4A4] border-[#D8D8D8] rounded px-3 py-2 text-xs  w-[189px] h-[38px] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] appearance-none"
    >
        
      <option value="">E.g. Frontend Developer</option>
      <option value="Software Engineer">Software Engineer</option>
      <option value="Product Manager">Product Manager</option>
      <option value="UX Designer">UX Designer</option>
      <option value="Data Scientist">Data Scientist</option>
      <option value="DevOps Engineer">DevOps Engineer</option>
      <option value="Frontend Developer">Frontend Developer</option>
      <option value="Backend Developer">Backend Developer</option>
      <option value="Full Stack Developer">Full Stack Developer</option>
      <option value="QA Engineer">QA Engineer</option>
      <option value="Other">Other</option>
    </select>
      <svg className="fill-current h-4 w-4 ml-70 -mt-6.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    
  </div>
</div>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
<div className="font-[poppins] flex items-start gap-4">
  <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Experience level*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
        The level of experience you have in your primary 
        <br/>role. This will help us match you with jobs that match
        <br/> your experience level.
      </p>
    </div>
  </div>
  
  <div className="flex flex-col gap-2 mt-2 ml-30">
    {/* Custom radio buttons with checkmark icons */}
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input type="radio" name="experience" className="absolute opacity-0 w-0 h-0"/>
        <div className="w-[12px] h-[12px] border border-gray-300 rounded-sm flex items-center justify-center">
          <svg className="hidden w-[8px] h-[8px] text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
      </div>
      <span className="text-[#C0C0C0] text-xs">Entry Level</span>
    </label>
    
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input type="radio" name="experience" className="absolute opacity-0 w-0 h-0"/>
        <div className="w-[12px] h-[12px] border border-gray-300 rounded-sm flex items-center justify-center">
          <svg className="hidden w-[8px] h-[8px] text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
      </div>
      <span className="text-[#C0C0C0] text-xs">Mid Level</span>
    </label>
    
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input type="radio" name="experience" className="absolute opacity-0 w-0 h-0"/>
        <div className="w-[12px] h-[12px] border border-gray-300 rounded-sm flex items-center justify-center">
          <svg className="hidden w-[8px] h-[8px] text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
      </div>
      <span className="text-[#C0C0C0] text-xs">Senior</span>
    </label>
    
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input type="radio" name="experience" className="absolute opacity-0 w-0 h-0"/>
        <div className="w-[12px] h-[12px] border border-gray-300 rounded-sm flex items-center justify-center">
          <svg className="hidden w-[8px] h-[8px] text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
      </div>
      <span className="text-[#C0C0C0] text-xs">Manager</span>
    </label>
    
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input type="radio" name="experience" className="absolute opacity-0 w-0 h-0"/>
        <div className="w-[12px] h-[12px] border border-gray-300 rounded-sm flex items-center justify-center">
          <svg className="hidden w-[8px] h-[8px] text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
      </div>
      <span className="text-[#C0C0C0] text-xs">Director</span>
    </label>
    
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input type="radio" name="experience" className="absolute opacity-0 w-0 h-0"/>
        <div className="w-[12px] h-[12px] border border-gray-300 rounded-sm flex items-center justify-center">
          <svg className="hidden w-[8px] h-[8px]  text-white bg-[#00A7AC] fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
          </svg>
        </div>
      </div>
      <span className="text-[#C0C0C0] text-xs">Executive</span>
    </label>
  </div>
</div>

<style>{`
  input[type="radio"]:checked + div {
    background-color: #00A7AC;
    border-color: #00A7AC;
  }
  input[type="radio"]:checked + div svg {
    display: block;
  }
`}</style>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
<div className="font-[poppins] flex items-start gap-4">
  <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Job search status*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
        Whether you are looking for a job, open to new 
        <br/>opportunities, or closed to job offers.
      </p>
    </div>
  </div>
  
  <div className="flex flex-col gap-2 ml-39 ">
    <label className="flex items-center gap-2">
      <input 
        type="radio" 
        name="jobSearchStatus" 
        className="h-4 w-4 border-2 border-[#00A7AC] checked:bg-[#00A7AC] checked:border-[#00A7AC] focus:ring-0 focus:ring-offset-0"
        style={{accentColor: '#00A7AC'}}
      />
      <span className="text-xs text-[#C0C0C0]">I'm actively looking for a job</span>
    </label>
    <label className="flex items-center gap-2">
      <input 
        type="radio" 
        name="jobSearchStatus" 
        className="h-4 w-4 border-2 border-[#00A7AC] checked:bg-[#00A7AC] checked:border-[#00A7AC] focus:ring-0 focus:ring-offset-0"
        style={{accentColor: '#00A7AC'}}
      />
      <span className="text-xs text-[#C0C0C0]">I'm open to new opportunities</span>
    </label>
    <label className="flex items-center gap-2">
      <input 
        type="radio" 
        name="jobSearchStatus" 
        className="h-4 w-4 border-2 border-[#00A7AC] checked:bg-[#00A7AC] checked:border-[#00A7AC] focus:ring-0 focus:ring-offset-0"
        style={{accentColor: '#00A7AC'}}
      />
      <span className="text-xs text-[#C0C0C0]">I'm closed to job offers</span>
    </label>
  </div>
  
</div>
<div className="mt-20 font-[poppins]">
<button className="w-[163px] h-[45px] px-4 py-2 bg-[#05445E] text-white rounded-md text-sm font-medium hover:bg-blue-700">
Update Profile
                            </button>
                            </div>
  
 
</div>
                   
                );
            case 'experience':
                return (
                  <div id="experience-content font-[poppins]">
    <h2 class="text-md font-semibold">Experience</h2>
    
    <div class="flex justify-between items-center mb-4">
        <p className="text-xs text-[#AEAEAE]">Add your experience to your profile to help us match you with the right opportunities.</p>
        <button class="bg-[#05445E] -mt-2  hover:bg-blue-600 text-white px-4 py-2 rounded-md">+ Add Experience</button>
    </div>
    
    <div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
    
    <div className="">
        <h2 class="text-md font-semibold">Experience</h2>
        <div class="flex justify-between items-center mb-4">
            <p className="text-xs text-[#AEAEAE]">NHGR uses this information to match you with the
                <br/> right opportunities.
            </p>
        </div>
    </div>
    
    <div class="border border-[#D9D9D9] p-4 rounded-md relative w-[593px] h-[150px] mt-4 ">
        
    <div class="flex items-start gap-4 ">
    <img src={Image1} alt="Company logo" class="w-[37px] h-[37px] object-cover"/>
    
    <div class="flex-1">
        <div class="flex justify-between items-start font-[poppins] ">
            <div>
                <h3 class=" text-sm text-[#000000] font-bold">Administrative Assistant
                <div class=" border-2 border-[#D9D9D9] ml-5 inline-block px-2 py-1 text-[10px] font-normal rounded-md">Current</div>
                </h3>
                
                <p class="text-[10px] mt-1 text-[#000000] font-semibold text-xs">Infransync Technology and services</p>
            </div>
            
            <button class="w-[60px] h-[26px] border border-[#D1D1D1] text-[#A5A5A5] rounded-md text-xs flex items-center justify-center">
                <PiPencilLight className="text-[16px] text-[#A5A5A5]"/>
                Edit
            </button>
        </div>
        
        <div class="flex items-center gap-2 mt-8 -ml-12">

            <PiNotepad className="text-[#171717]"/>
            <p class="text-xs text-[#000000]">Jan 2024 - Nov 2024 (11 months)</p>
          </div>
        
        <div class="flex items-center gap-2 mt-3 -ml-14 font-[poppins]">
       <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center ml-2">
                <span class="text-[#000000]">Pune ,Maharashtra</span>
            </div>
            
            <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                <span class="text-[#000000]">Hybrid</span>
            </div>
            <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                <span class="text-[#000000]">Full-time</span>
            </div>
            <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                <span class="text-[#000000]">Administrative assistant</span>
            </div> 
        </div>
        </div>
        
</div>

</div>
<div class="border border-[#D9D9D9] p-4 rounded-md relative w-[593px] h-[150px] mt-6">
        
    <div class="flex items-start gap-4 ">
    <img src={Image1} alt="Company logo" class="w-[37px] h-[37px] object-cover"/>
    
    <div class="flex-1">
        <div class="flex justify-between items-start font-[poppins] ">
            <div>
                <h3 class=" text-sm text-[#000000] font-bold">Administrative Assistant
                <div class=" border-2 border-[#D9D9D9] ml-5 inline-block px-2 py-1 text-[10px] font-normal rounded-md">Current</div>
                </h3>
                
                <p class="text-[10px] mt-1 text-[#000000] font-semibold text-xs">Infransync Technology and services</p>
            </div>
            
            <button class="w-[60px] h-[26px] border border-[#D1D1D1] text-[#A5A5A5] rounded-md text-xs flex items-center justify-center">
                <PiPencilLight className="text-[16px] text-[#A5A5A5]"/>
                Edit
            </button>
        </div>
        
        <div class="flex items-center gap-2 mt-8 -ml-12">

            <PiNotepad className="text-[#171717]"/>
            <p class="text-xs text-[#000000]">Jan 2024 - Nov 2024 (11 months)</p>
          </div>
        
        <div class="flex items-center gap-2 mt-3 -ml-14 font-[poppins]">
       <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center ml-2">
                <span class="text-[#000000]">Pune ,Maharashtra</span>
            </div>
            
            <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                <span class="text-[#000000]">Hybrid</span>
            </div>
            <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                <span class="text-[#000000]">Full-time</span>
            </div>
            <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                <span class="text-[#000000]">Administrative assistant</span>
            </div> 
        </div>
        </div>
        </div>
        </div>

        <div class="border border-[#D9D9D9] p-4 rounded-md relative w-[593px] h-[150px] mt-6">
        
        <div class="flex items-start gap-4 ">
        <img src={Image1} alt="Company logo" class="w-[37px] h-[37px] object-cover"/>
        
        <div class="flex-1">
            <div class="flex justify-between items-start font-[poppins] ">
                <div>
                    <h3 class=" text-sm text-[#000000] font-bold">Administrative Assistant
                    <div class=" border-2 border-[#D9D9D9] ml-5 inline-block px-2 py-1 text-[10px] font-normal rounded-md">Current</div>
                    </h3>
                    
                    <p class="text-[10px] mt-1 text-[#000000] font-semibold text-xs">Infransync Technology and services</p>
                </div>
                
                <button class="w-[60px] h-[26px] border border-[#D1D1D1] text-[#A5A5A5] rounded-md text-xs flex items-center justify-center">
                    <PiPencilLight className="text-[16px] text-[#A5A5A5]"/>
                    Edit
                </button>
            </div>
            
            <div class="flex items-center gap-2 mt-8 -ml-12">
    
                <PiNotepad className="text-[#171717]"/>
                <p class="text-xs text-[#000000]">Jan 2024 - Nov 2024 (11 months)</p>
              </div>
            
            <div class="flex items-center gap-2 mt-3 -ml-14 font-[poppins]">
           <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center ml-2">
                    <span class="text-[#000000]">Pune ,Maharashtra</span>
                </div>
                
                <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                    <span class="text-[#000000]">Hybrid</span>
                </div>
                <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                    <span class="text-[#000000]">Full-time</span>
                </div>
                <div class="text-[10px] border border-[#DFDFDF] px-2 h-[25px] rounded-lg flex items-center">
                    <span class="text-[#000000]">Administrative assistant</span>
                </div> 
            </div>
            </div>
            </div>
            </div>
            <div className="mt-10 font-[poppins]">
<button className="w-[163px] h-[45px] px-4 py-2 bg-[#05445E] text-white rounded-md text-sm font-medium hover:bg-blue-700">
Update Profile
                            </button>
                            </div>
</div>

                );
            default:
                return (
                    <div id="overview-content font-[poppins]">
                        <h2 className="text-sm font-semibold mb-2 ml-2 mt-10 text-[#000000]">Profile Picture </h2>
                        <p className="text-[#AEAEAE] text-xs ml-2">This will be displayed on your profile</p>
                        <div className="ml-80 -mt-15 flex items-center gap-4">
                            <div className="w-[58px] h-[57px] relative">
                                <img 
                                    src={imagePreview} 
                                    alt="User profile" 
                                    className="w-full h-full object-cover rounded-full bg-blue-500"
                                />
                            </div>
                            
                            <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-center justify-center gap-2">
                                <input 
                                    type="file" 
                                    id="image-upload" 
                                    className="hidden" 
                                    accept="image/*" 
                                    onChange={handleImageUpload}
                                />
                                {uploadedImage ? (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600 truncate max-w-xs">
                                            {uploadedImage.name}
                                        </span>
                                        <button 
                                            onClick={handleRemoveImage}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <label 
                                            htmlFor="image-upload" 
                                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        </label>
                                        <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Horizontal border added here */}
                        <div className="border-b border-[#D8D8D8] my-6 h-[1px]"></div>
                        
                        {/* Personal Information Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 font-[inter] ">
                            {/* First Column */}
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#05445E] mb-1 ">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-[312px] px-3 py-2 border text-sm text-[#BEBEBE] border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#05445E] mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-[312px] px-3 py-2 text-sm text-[#BEBEBE] border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="email@gmail.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#05445E] mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-[312px] px-3 py-2 text-sm text-[#BEBEBE] border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="1234567890"
                                    />
                                </div>
                            </div>
                            
                            {/* Second Column */}
                            <div className="space-y-4 -ml-70">
                                <div>
                                    <label htmlFor="age" className="block text-sm font-medium text-[#05445E] mb-1">Age</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        className="w-[312px] px-3 py-2 border text-sm text-[#BEBEBE] border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="E.g. 21"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="language" className="block text-sm font-medium text-[#05445E] mb-1">Language</label>
                                    <div className="relative w-[312px]">
                                        <select
                                            id="language"
                                            name="language"
                                            value={formData.language}
                                            onChange={handleInputChange}
                                            className="w-[312px] px-3 py-2 border text-sm text-[#BEBEBE] border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none pr-8"
                                        >
                                            <option value="">E.g. Pune</option>
                                            {languageOptions.map((lang) => (
                                                <option key={lang} value={lang}>{lang}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-[#05445E] mb-1">Current Location</label>
                                    <div className="relative w-[312px]">
                                        <select
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-[312px] px-3 text-sm text-[#BEBEBE] py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none pr-8"
                                        >
                                            <option value="">E.g. Pune</option>
                                            {locationOptions.map((loc) => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>
                        <div className="font-[poppins] flex items-start gap-4">
                        <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Username*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
        This will also act as your profile URL slug (Nghr/
        <br/>@username).
      </p>
    </div>
  </div>
  
  <input 
    type="text" 
    className="border ml-35 mt-2 text-[#A4A4A4] border-[#D8D8D8] rounded px-3 py-2 text-sm w-[150px] h-[38px] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] "
    placeholder="@Johndoe123"
  />
</div>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>



<div className="font-[poppins] flex items-start gap-4">
                        <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">What country do you currently reside in?*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
      This helps us match you with companies that are 
      <br/>open to hiring talent in your country.
      </p>
    </div>
  </div>
  
  <select 
    className="border ml-30 mt-2 text-[#A4A4A4] border-[#D8D8D8] rounded px-3 py-2 text-sm w-[150px] h-[38px] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
    placeholder="Select Country"
>
    <option value="">Select Country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="UK">United Kingdom</option>
    <option value="AU">Australia</option>
    <option value="DE">Germany</option>
    <option value="FR">France</option>
    <option value="JP">Japan</option>
    <option value="IN">India</option>
    <option value="BR">Brazil</option>
    <option value="MX">Mexico</option>
    <option value="SG">Singapore</option>
    <option value="ZA">South Africa</option>
</select>
</div>
<div className="border-b border-[#D8D8D8] mt-12 my-6 h-[1px]"></div>

<div className="font-[poppins] flex items-start gap-4">
                        <div>
    <div className="flex items-center">
      <h2 className="text-sm font-semibold mb-2 ml-2 text-[#000000]">Your bio*</h2>
    </div>
    <div>
      <p className="text-xs ml-2 text-[#AEAEAE]">
      Tell us about your career and interests. The more 
      <br/>detailed you provide about yourself and your 
      <br/>achievements, the better we can match you with
      <br/> companies that are hiring.      </p>
    </div>
  </div>
  
  <input 
    type="text" 
    className="border ml-30 mt-2 text-[#A4A4A4] border-[#D8D8D8] rounded px-3 py-2 text-sm w-[320px] h-[89px] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] "
    placeholder="E.g. I love to travel...."
  />
</div>
<div className="mt-20 font-[poppins]">
<button className="w-[163px] h-[45px] px-4 py-2 bg-[#05445E] text-white rounded-md text-sm font-medium hover:bg-blue-700">
Update Profile
                            </button>
                            </div>
</div>

                  
                    
                );
        }
    };

    const getHeadingText = () => {
        switch (activeTab) {
            case 'preferences':
                return 'Preferences';
            case 'experience':
                return 'Experience';
            default:
                return 'Overview';
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar - Fixed position */}
            <div className="fixed h-screen w-64 bg-gray-100 border-r border-gray-200">
                <Sidebar />
            </div>
            
            {/* Dashboard Content - Offset by sidebar width and scrollable */}
            <div className="flex-1 ml-64 overflow-auto">
                <Navbar1/>
                
                {/* Profile Section */}
                <div className="p-6">
                    {/* Heading below navbar */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">{getHeadingText()}</h1>
                        <div className="flex space-x-4 font-[poppins]">
                            <button className="px-4 py-2 border text-[#05445E] border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                                Copy Link
                            </button>
                            <button className="px-4 py-2 bg-[#05445E] text-white rounded-md text-sm font-medium hover:bg-blue-700">
                                View Public Profile
                            </button>
                        </div>
                    </div>
                    
                    {/* Navigation tabs */}
                    <div className="flex border-b border-gray-200 mb-6 font-[poppins]">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`px-4 py-2  font-medium text-sm ${activeTab === 'overview' ? 'border-b-2 border-[#05445E] text-[#05445E]' : 'text-[#00A7AC] hover:text-[#00A7AC]'}`}
                        >
                            Overview
                        </button>
                        <button 
                            onClick={() => setActiveTab('preferences')}
                            className={`px-4 py-2 ml-10 font-medium text-sm ${activeTab === 'preferences' ? 'border-b-2 border-[#05445E] text-[#05445E]' : 'text-[#00A7AC] hover:text-[#00A7AC]'}`}
                        >
                            Preferences
                        </button>
                        <button 
                            onClick={() => setActiveTab('experience')}
                            className={`px-4 py-3  ml-10 font-medium text-sm ${activeTab === 'experience' ? 'border-b-2 border-[#05445E] text-[#05445E]' : 'text-[#00A7AC] hover:text-[#00A7AC]'}`}
                        >
                            Experience
                        </button>
                    </div>
                    
                    {/* Render the content based on active tab */}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Profile;