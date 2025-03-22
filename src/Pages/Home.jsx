import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import logo from "/src/assets/Images/logo.png";
import group from "/src/assets/Images/Group.png";
import "@fontsource/lato";
import "@fontsource/poppins";
import "@fontsource/inter";
import companiesImage from "/src/assets/Images/Group1.png";
import circleImage1 from "/src/assets/Images/image 7.png";
import circleImage2 from "/src/assets/Images/image 17.png";
import circleImage3 from "/src/assets/Images/image 4.png";
import circleImage4 from "/src/assets/Images/image 9.png";
import SpeakerIcon from "/src/assets/images/Speaker.png";
import MessageIcon from "/src/assets/images/message.png";
import Icon from "/src/assets/images/Icon.png";
import Status from "/src/assets/images/status-up.png";
import Money from "/src/assets/images/money-add.png";
import  Charger from "/src/assets/images/cpu-charge.png";
import Image1 from"/src/assets/images/image 16.jpg";
import Image2 from"/src/assets/images/image (2).jpg";
import Image3 from"/src/assets/images/image (3).jpg";
import Image4 from"/src/assets/images/1.png";
import Image5 from"/src/assets/images/2.png";
import Image6 from"/src/assets/images/3.png";
import Image7 from"/src/assets/images/new.png";
import Image8 from"/src/assets/images/new1.png";
import Image9 from"/src/assets/images/new2.png";
import Image10 from"/src/assets/images/new3.png";














const Home = () => {
    return (
        <div className="bg-[#061421] min-h-screen relative">
            <nav className="w-full h-[110px] bg-gradient-to-r from-[#05445E] to-[#061421] shadow-lg flex items-center justify-between px-6 rounded-lg fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-[80px]" />
                </div>
                <div className="flex space-x-8 text-white text-lg font-[lato]">
                    <a href="#" className="hover:underline">Jobs</a>
                    <a href="#" className="hover:underline">Companies</a>
                    <a href="#" className="hover:underline">Consultancy</a>
                </div>
                <div className="flex items-center space-x-6 text-white text-lg font-[lato]">
                    <a href="/login" className="hover:underline">Login</a>
                    <a href="/signup" className="hover:underline">Signup</a>
                    <div className="relative group">
                        <button className="flex items-center space-x-2 hover:underline">
                            <span>Job Seeker</span>
                            <FaChevronDown />
                        </button>
                        <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg font-[lato]">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Applications</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Section */}
            <div className="flex items-center justify-between min-h-screen px-12 relative">
                {/* Text Content */}
                <div className="text-white text-left max-w-lg font-[poppins]">
                    <h1 className="text-5xl font-bold">Find Your</h1>
                    <h2 
                        className="text-5xl font-bold bg-clip-text text-transparent" 
                        style={{ backgroundImage: "linear-gradient(90deg, #00A7AC 0%, #0076B2 69.26%)" }}
                    >
                        Perfect Job
                    </h2>
                    <h4 className="text-sm mt-8">Whether you’re looking for your dream role or 
                        searching for top talent, we’ve got you covered. 
                        Explore thousands of opportunities, connect with
                        expert consultants, and take the next step in your 
                        career with ease.</h4>
                    <button className="mt-8 px-6 py-3 bg-white text-[#00709E] rounded-xl text-sm font-semibold hover:bg-gray-400">Sign Up for Free</button>
                </div>

                {/* Bigger Group Image on the right side */}
                <img 
                    src={group} 
                    alt="Group" 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[750px] w-auto"
                />
            </div>

            {/* New White Background Section */}
            <div className="bg-white py-20 px-12 text-black text-center">
                <h2 className="text-lg text-[#05445E] font-[inter]">The world’s best Companies are hiring on NGHR</h2>
                <img src={companiesImage} alt="Companies Hiring" className="mt-10 mx-auto" />
                <p className="text-lg mt-4 max-w-3xl mx-auto"></p>
            </div>

            {/* New Gradient Background Section */}
            <div className="py-20 px-12 text-black text-center" style={{ background: "linear-gradient(180deg, #FFFCEF 0%, #FFFFFF 23.99%, #FFFCEF 59.81%, #FFFFFF 78.05%, #FFFCEF 95.38%)" }}>
                    <div className="flex justify-center w-70 h-10 -ml-10 ">
                    <img src={circleImage1} alt="Find a Job" />
                        <img src={circleImage2} alt="Find a Job" className="-ml-5" />
                        <img src={circleImage3} alt="Find a Job" className=" border-[#AA0000] -ml-5"  />
                        <img src={circleImage4} alt="Find a Job" className="-ml-5"  />

                        <p className="p-2 text-[#00709E] font-semibold flex items-center">
    Find a Job
    <FaArrowRight className="text-[#00709E] text-xs  w-4 ml-2" />
</p>


                        
           </div>

<div className="mt-6 flex justify-between items-center">
    <div>
        <p className="text-left text-[#00709E] text-2xl font-bold font-[poppins]">
            Explore 50,000+ Job Opportunities
        </p>
        <p className="text-left text-[#8D8D8D] mt-2 text-sm font-[poppins]">
            Personalized filters make it quick and easy to find the jobs you care about.
        </p>
    </div>
    <button className="bg-[#05445E] text-white w-[144px] h-[52px] rounded-xl hover:bg-[#005D7E]">
        Search Job
    </button>
</div>

            <div className="  grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center space-1 m-30  ">

            <div className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
    style={{
        background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
    }}
>   
<h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Development roles</h1>

    {/* Circular div containing the icon (fully centered) */}
    <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
         <img src={MessageIcon} alt="Message Icon" className="w-8 h-8  " />
        
         </div>
         <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
        <img src={Image1} alt="img" className="w-9 h-9 object-cover rounded-full " />
        <img src={Image2} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3 " />
        <img src={Image3} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3" />

    </div>
   
</div>

        <div  className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
           <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Design roles</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
                 <img src={Icon} alt="Icon" className="w-8 h-8" />




    </div>
    <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
        <img src={Image4} alt="img" className="w-9 h-9 object-cover rounded-full " />
        <img src={Image5} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3 " />
        <img src={Image6} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3" />

    </div>
        </div>
        <div  className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
           <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Sales roles</h1>

            
            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
                 <img src={Status} alt="Status Icon" className="w-8 h-8" />

        </div>
        <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
        <img src={Image1} alt="img" className="w-9 h-9 object-cover rounded-full " />
        <img src={Image2} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3 " />
        <img src={Image3} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3" />

    </div>
        </div>
        <div  className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
        <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Marketing roles</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
         <img src={SpeakerIcon} alt="Speaker Icon" className="w-8 h-8" />
        
    </div>
    <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
        <img src={Image1} alt="img" className="w-9 h-9 object-cover rounded-full " />
        <img src={Image2} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3 " />
        <img src={Image3} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3" />

    </div>
        </div>
        <div  className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
                    <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left"> Finance roles</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
                 <img src={Money} alt="Message Icon" className="w-8 h-8" />

    </div>
    <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
        <img src={Image4} alt="img" className="w-9 h-9 object-cover rounded-full " />
        <img src={Image5} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3 " />
        <img src={Image6} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3" />

    </div>
        </div>
        
        <div  className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
        style={{
        background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
    }}>
                    <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left"> Tech roles</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >         <img src={Charger} alt="Message Icon" className="w-8 h-8" />

    </div>
    
    <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
        <img src={Image1} alt="img" className="w-9 h-9 object-cover rounded-full " />
        <img src={Image2} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3 " />
        <img src={Image3} alt="img" className="w-9 h-9 object-cover rounded-full -ml-3" />

    </div>
            
            
       </div>


        </div>

        
        </div>
        <div className="py-20 px-12 text-black text-center" style={{ background: "linear-gradient(180deg, #FFFCEF 0%, #FFFFFF 23.99%, #FFFCEF 59.81%, #FFFFFF 78.05%, #FFFCEF 95.38%)" }}>
                    <div className="flex justify-center w-70 h-10 -ml-10 ">
                    <img src={Image7} alt="Find a Job" />
                        <img src={Image8} alt="Find a Job" className="-ml-5" />
                        <img src={Image9} alt="Find a Job" className=" -ml-5"  />
                        <img src={Image10} alt="Find a Job" className="-ml-5"  />

                        <p className="p-2 text-[#00709E] font-semibold flex items-center">
    Find a Job
    <FaArrowRight className="text-[#00709E] text-xs  w-4 ml-2" />
</p>


                        
           </div>
{/*Another div start*/ }
<div className="mt-6 flex justify-between items-center">
    <div>
        <p className="text-left text-[#00709E] text-2xl font-bold font-[poppins]">
        Discover the world’s best Companies
        </p>
        <p className="text-left text-[#8D8D8D] mt-2 text-sm font-[poppins]">
        Discover tech stacks, employee benefits, and open roles.        </p>
    </div>
    <button className="bg-[#05445E] text-white w-[150px] h-[45px] rounded-xl hover:bg-[#005D7E]">
    View all companies
    </button>
</div>

{/*first card*/}
            <div className="  grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center space-1 m-30 ">

            <div className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
    style={{
        background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
    }}
>   
<h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Zuro<br/></h1>



    {/* Circular div containing the icon (fully centered)   */}

    <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
         <img src={Image2} alt="Message Icon" className="w-full h-full object-cover rounded-full " />
        
        
         </div>

         
   
</div>
        {/*card1*/}

        <div  className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
           <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Picop</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
                 <img src={Image10} alt="Icon" className="w-full h-full" />




    </div>
    {/*card2*/}
        </div>
        <div  className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
           <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Bluefeed</h1>

            
            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
                 <img src={Image9} alt="Status Icon" className="w-full h-full" />

        </div>
       
        </div>

        {/*card3*/}
        <div  className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
        <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Zuro</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
         <img src={Image2} alt="Speaker Icon" className="w-full h-full object-cover rounded-full" />
        
    </div>
   
        </div>
        {/*card4*/}
        <div  className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
         style={{
            background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
        }}>
                    <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left">Picop</h1>

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >
                 <img src={Image10} alt="Message Icon" className="w-full h-full" />

    </div>
    
        </div>
        {/*card5*/}
        
        <div  className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
        style={{
        background: "linear-gradient(112.06deg, rgba(212, 235, 255, 1) 1.18%, rgba(230, 254, 255, 1) 100%)"
    }}>
                    <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left"> Bluefeed</h1>
                    

            <div
        className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center"
    >         <img src={Image9} alt="Message Icon" className="w-full h-full" />

    </div>
    
    
    </div>
    </div>
    </div>
    </div>
    

    );
};

export default Home;
