import React, { useState } from 'react';
import Navbar from "../component/Navbar";
import Footer from "/src/component/Footer";
import StarterImg from "/src/assets/images/Icon (1).png";
import ProfessionalImg from "/src/assets/images/Icon (2).png";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    return (
        <div className="min-h-screen">
            <Navbar activePage="pricing" />
            
            {/* Full-width Header Section */}
            <div className="w-full mt-20 h-[347px] bg-gradient-to-r from-white to-blue-50 py-8 ">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex-1 text-center mt-10">
                            <h1 className="text-2xl md:text-5xl  text-[#000000] mb-2  font-[poppins]">
                                Find Your Perfect Plan
                            </h1>
                            <p className="font-[poppins] text-lg text-[#797878] mt-4">
                            Discover the ideal plan to fuel your career growth. Our pricing options are 
                            <br/>carefully crafted to cater to Success.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center border-2 w-[326px] rounded-xl h-[65px] justify-center border-[#00A7AC45] gap-4 mt-8 mx-auto">
                                <button
                                    onClick={() => setBillingCycle('monthly')}
                                    className={`px-6 py-2 rounded-xl font-medium transition-all ${
                                        billingCycle === 'monthly'
                                            ? 'border-2 border-[#00A7AC45] bg-blue-50 text-[#1B223C]'
                                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setBillingCycle('yearly')}
                                    className={`px-6 py-2 rounded-xl font-medium transition-all ${
                                        billingCycle === 'yearly'
                                            ? 'border-2 border-[#00A7AC45] bg-blue-50 text-[#1B223C]'
                                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    Yearly
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing content section */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                        {/* Pricing Card 1 */}
                        <div className="border border-[#DBDBDB] rounded-lg p-6 shadow-md bg-[#FFFFFF] hover:shadow-lg w-[350px] h-[597px] transition-shadow flex flex-col relative">
                            {/* Image at top left */}
                            <div className="absolute top-6 left-6 w-16 h-16">
                                <img src={StarterImg} alt="Starter" className="w-[56px] h-[56px] object-contain" />
                            </div>

                            <div className="mt-30">
                                <h1 className="font-bold font-[poppins] text-xl">Free</h1>
                            <p className="text-xs mt-10 font-semibold mb-4 text-[#797878]">
                            Unleash the Power of Your Business with Pro Plan.
                            </p>
                            <ul className="space-y-2 flex-grow mt-10 ">
                                <li>✓ Enhanced Analytics</li>
                                <li>✓ Custom Domain</li>
                                <li>✓ E-commerce Integration</li>
                                <li>✓ Priority Support</li>
                                <li>✓ Advanced Security</li>
                            </ul>
                            <button className="mt-25 w-[270px] border border-[#00A7AC] bg-white text-[#00A7AC] py-2 rounded-lg  ml-3 ">
                                Get Started
                            </button>
                            </div>
                        </div>
                        
                        {/* Pricing Card 2 - Featured */}
                        <div className="border-2 border-[#DBDBDB] bg-[#00A7AC12] rounded-lg p-6 shadow-lg w-[350px] h-[597px] flex flex-col relative">
                            {/* Image at top left */}
                            <div className="absolute top-6 left-6 w-16 h-16">
                                <img src={StarterImg} alt="Professional" className="w-[56px] h-[56px] object-contain" />
                            </div>
                            <div className="mt-20">
                            <h1 className="mt-10 font-bold font-[poppins] text-xl">Basic</h1>

                            <p className="mt-10 text-xs font-semibold text-[#797878] mb-4">
                            Unleash the Power of Your Business with Pro Plan.
                            </p>
                            <p className="text-3xl font-bold text-[#05445E] mb-4"> $34 <span className="text-lg font-normal">per month</span></p>
                            <ul className="space-y-2 flex-grow">
                                <li>✓ All Starter features</li>
                                <li>✓ Priority support</li>
                                <li>✓ Unlimited job matches</li>
                                <li>✓ Career coaching</li>
                                <li>✓ Resume optimization</li>
                            </ul>
                            <button className="mt-17 ml-3 w-[270px] bg-[#05445E] text-white py-2 rounded-lg transition-colors">
                                Get Started
                            </button>
                        </div>
                        </div>
                        
                        {/* Pricing Card 3 */}
                        <div className="border border-[#E7EBFF] rounded-lg p-6 w-[350px] h-[597px] shadow-[0px_26px_40px_0px_#BCCAFF21] hover:shadow-[0px_26px_50px_0px_#BCCAFF33] transition-shadow flex flex-col bg-[#00A7AC40] relative">
                            {/* Image at top left */}
                            <div className="absolute top-6 left-6 w-16 h-16">
                                <img src={ProfessionalImg} alt="Enterprise" className="w-[56px] h-[56px] object-contain" />
                            </div>
                            <div className="mt-20">
                            <div className="flex items-center justify-between mt-10">
                                <h1 className="font-bold font-[poppins] text-xl">Premium</h1>
                                <span className="bg-transparent border border-white text-white px-3 py-1  rounded-full text-xs font-medium">Best Offer</span>
                            </div>

                            <p className="mt-10 text-xs font-semibold text-[#797878] mb-4">
                            Unleash the Power of Your Business with Pro Plan.
                            </p>
                            <p className="text-3xl font-bold text-[#05445E] mb-4">$56 <span className="text-lg font-normal">per month</span></p>
                            <ul className="space-y-2 flex-grow">
                                <li>✓ All Starter features</li>
                                <li>✓ Priority support</li>
                                <li>✓ Unlimited job matches</li>
                                <li>✓ Career coaching</li>
                                <li>✓ Resume optimization</li>
                            </ul>
                            <button className="mt-17 ml-3 w-[270px] bg-[#05445E] text-white py-2 rounded-lg transition-colors">
                                Get Started
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frequently Asked Questions Section */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00A7AC] to-[#05445E] bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto space-y-6">
                    {/* FAQ Item 1 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            What is the difference between Website Builder and Website Integration?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            What is the Assessment and Question Bank feature?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            What payment gateways are supported?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            How easy is migration?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 5 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            Do you support landing pages?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 6 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            How do text and email campaigns work?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 7 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            How do memberships work?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset] text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 8 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            How do payments work, and are you PCI compliant?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[#1D2130] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 9 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            Can I cancel my account?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[[#1D2130]] text-xl font-bold">+</div>
                    </div>

                    {/* FAQ Item 10 */}
                    <div className="w-full h-[114px] rounded-2xl p-10 bg-white shadow-[0px_4px_4px_0px_#BDBDBD40] flex items-center justify-between">
                        <h3 className="text-[#1D2130] font-bold text-2xl font-roboto">
                            Do you offer training, coaching, or support?
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_4px_4px_0px_#FFFFFF40_inset]  text-[[#1D2130]] text-xl font-bold">+</div>
                    </div>
                </div>
            </div>
            {/* New section above footer */}
<div className="container mx-auto px-4 md:px-6 py-12">
  <div 
    className="w-full max-w-[1170px] h-[200px] rounded-[26px] p-6 flex items-center justify-between mx-auto"
    style={{
      background: 'linear-gradient(90deg, rgba(1, 198, 215, 0.34) 0%, rgba(0, 85, 166, 0.34) 100%)'
    }}
  >
    <div className="text-[#0055A6]">
      <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
      <p className="text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
    </div>
    <button 
      className="bg-white text-[#0055A6] rounded-[17px] px-5 py-2 h-[48px] w-[164px] flex items-center justify-center"
    >
      Get in touch
    </button>
  </div>
</div>


            <Footer />
        </div>
    );
};

export default Pricing;