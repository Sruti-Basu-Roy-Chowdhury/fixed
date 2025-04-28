import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Pages/First";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Signup from "./Pages/Signup";
import Otp from "./Pages/Otp";
import Otp1 from "./Pages/Otp2";
import Dashboard from "./Pages/Dashboard";
import Adhaar from "./Pages/Adhaar";
import Otp2 from "./Pages/Otp3";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";
import Step5 from "./Pages/Step5";
import Step6 from "./Pages/Step6";
import Step7 from "./Pages/Step7";
import Step8 from "./Pages/Step8";
import Step9 from "./Pages/Step9";
import Step10 from "./Pages/Step10";
import Step11 from "./Pages/Step11";
import Step12 from "./Pages/Step12";
import AddExperience from "./Pages/Addexperience";
import Step13 from "./Pages/Step13";
import Home from "./Pages/Home";
import Jobs from "./Pages/Job";
import Job1 from "./Pages/Job1";
import Job2 from "./Pages/Job2";
import Home2 from "./Pages/Home2";
import Dashboard2 from "./Pages/Dashboard2";
import Profile from "./Pages/Profile";
import AplliedJob from"./Pages/AplliedJob";
import SavedJob from"./Pages/SavedJob";
import Resume from"./Pages/Resume";
import Message from"./Pages/Message";
import Companie from"./Pages/Companie";
import Companies1 from"./Pages/Companies1";
import Com from"./Pages/Com";
import Pricing from"./Pages/Pricing";









function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onbody" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PhoneVerify" element={<Otp1 />} />
        <Route path="/Adhaar" element={<Adhaar />} />
        <Route path="/Verify" element={<Otp2 />} />
        <Route path="/Step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
        <Route path="/step8" element={<Step8 />} />
        <Route path="/step9" element={<Step9 />} />
        <Route path="/step10" element={<Step10 />} />
        <Route path="/step11" element={<Step11 />} />
        <Route path="/step12" element={<Step12 />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/step13" element={<Step13 />} />
        <Route path="/Job" element={<Jobs/>} />
        <Route path="/job1" element={<Job1/>} />
        <Route path="/job2" element={<Job2/>} />
        <Route path="/Home2" element={<Home2/>} />
        <Route path="/dashboard2" element={<Dashboard2/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/applied-jobs" element={<AplliedJob/>} />
        <Route path="/saved-jobs" element={<SavedJob/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/messages" element={<Message/>} />
        <Route path="/companies" element={<Companie/>} />
        <Route path="/Companies1" element={<Companies1/>} />
        <Route path="/com" element={<Com/>} />
        <Route path="/pricing" element={<Pricing/>} />




      </Routes>
    </Router>
  );
}

export default App;
