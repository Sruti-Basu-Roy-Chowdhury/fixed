import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PiSquaresFourBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaBookBookmark } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const SidebarContainer = styled.div`
  width: 250px;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SidebarNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: rgba(36, 34, 32, 0.56);
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-weight: 500;
    

    &:hover {
      background: #00A7AC0A;
      color: #05445E;
      bg-shadow: 0 0 0.5px background: rgba(0, 167, 172, 0.04);
;
    }
  }

  

  i {
    margin-right: 10px;
    width: 20px;
    text-align: center;
  }
`;

const ProfileCompletion = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;

  p {
    margin: 0 0 5px 0;
    font-weight: 500;
  }

  small {
    color: rgba(36, 34, 32, 0.56);
    font-size: 12px;
    display: block;
    margin-bottom: 10px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 7px;
  background: #D9D9D9;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 15px;

  &::after {
    content: '';
    display: block;
    width: 30%;
    height: 7px;
    background: #00A7AC;
    border-radius: 24px;
  }
`;

const RadioOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: #333;

    &:hover {
      color: #05445E;
    }
  }

  input[type="radio"] {
    accent-color: #00A7AC;
  }
`;

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('overview');
  const [activeNavItem, setActiveNavItem] = useState('dashboard');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <SidebarContainer>
      <UserProfile>
        <h1 className="mt-5 ml-5 font-[inter] font-bold text-[#05445E] text-xl">NGHR</h1>
      </UserProfile>
      
      <SidebarNav>
        <ul>
          <li className={activeNavItem === 'dashboard' ? 'active' : ''}>
            <Link 
              to="/dashboard2" 
              onClick={() => handleNavItemClick('dashboard')}
            >
              <PiSquaresFourBold className="-ml-5 w-[24px] h-[24px]"/>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li className={activeNavItem === 'profile' ? 'active' : ''}>
            <Link 
              to="/profile"
              onClick={() => handleNavItemClick('profile')}
            >
              <FaRegUser className="-ml-5 w-[17px] h-[17px]" />
              <span className="ml-4">Your Profile</span>
            </Link>
          </li>
          <li className={activeNavItem === 'applied-jobs' ? 'active' : ''}>
            <Link 
              to="/applied-jobs"
              onClick={() => handleNavItemClick('applied-jobs')}
            >
              <PiSuitcaseSimpleBold className="-ml-6 w-[21px] h-[21px]" />
              <span className="ml-3">Applied Jobs</span>
            </Link>
          </li>
          <li className={activeNavItem === 'saved-jobs' ? 'active' : ''}>
            <Link 
              to="/saved-jobs"
              onClick={() => handleNavItemClick('saved-jobs')}
            >
              <FaBookBookmark className="-ml-5 w-[18px] h-[18px]" />
              <span className="ml-3">Saved Jobs</span>
            </Link>
          </li>
          <li className={activeNavItem === 'resume' ? 'active' : ''}>
            <Link 
              to="/resume"
              onClick={() => handleNavItemClick('resume')}
            >
              <GoFileDirectory className="-ml-5 w-[20px] h-[20px]" />
              <span className="ml-3">View Resume</span>
            </Link>
          </li>
          <li className={activeNavItem === 'messages' ? 'active' : ''}>
            <Link 
              to="/messages"
              onClick={() => handleNavItemClick('messages')}
            >
              <FaRegMessage className="-ml-5 w-[20px] h-[20px]"/>
              <span className="ml-3">Messages</span>
            </Link>
          </li>
          <li className={activeNavItem === 'settings' ? 'active' : ''}>
            <Link 
              to="/settings"
              onClick={() => handleNavItemClick('settings')}
            >
              <IoSettingsOutline className="-ml-5 w-[20px] h-[20px]" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </SidebarNav>

      <ProfileCompletion>
        <p className="text-[#A9A9A9]">Complete your profile</p>
        <small>A complete profile helps us match you with relevant jobs.</small>
        <ProgressBar />
      </ProfileCompletion>

      <RadioOptions>
        <label className="-mt-6 ">
          <input
            className="ml-8 "
            type="radio"
            name="options"
            value="overview"
            checked={selectedOption === 'overview'}
            onChange={() => handleOptionClick('overview')}
          />
          <span className="text-[#A9A9A9]">Overview</span>
        </label>
        
        <label>
          <input
            className="ml-8"
            type="radio"
            name="options"
            value="preferences"
            checked={selectedOption === 'preferences'}
            onChange={() => handleOptionClick('preferences')}
          />
          <span className="text-[#A9A9A9]">Preferences</span>
        </label>
        
        <label>
          <input
            className="ml-8 "
            type="radio"
            name="options"
            value="experience"
            checked={selectedOption === 'experience'}
            onChange={() => handleOptionClick('experience')}
          />
          <span className="text-[#A9A9A9]"> Experience</span>
        </label>
      </RadioOptions>
    </SidebarContainer>
  );
};

export default Sidebar;