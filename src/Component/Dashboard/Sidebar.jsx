import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsLoggedIn(false); // Update login state
  };
  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "flex items-center p-2 bg-violet-900 border-b-2 rounded font-semibold text-white"
      : "flex items-center p-2 hover:bg-violet-900  border-b-2 rounded font-semibold  ";
  };

  return (
    <div className="bg-white h-screen p-4 border-r border-gray-200 md:block">
      {/* Sidebar links */}
      <ul className="space-y-2 mt-4">
        <li>
          <Link
            to=""
            className="flex items-center p-2 bg-blue-900 border-b-2 border-black font-semibold text-white"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-10 ">🖥️</span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="profile"
            className={getLinkClassName("/dashboard/profile")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👤</span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="ai-resume-builder"
            className={getLinkClassName("/dashboard/ai-resume-builder")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🤖</span>
            <span>AI Resume Builder</span>
          </Link>
        </li>
        <li>
          <Link
            to="resumes"
            className={getLinkClassName("/dashboard/resumes")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📑</span>
            <span>My Resumes</span>
          </Link>
        </li>
        <li>
          <Link
            to="notification"
            className={getLinkClassName("/dashboard/notification")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔔</span>
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link
            to="skilltest"
            className={getLinkClassName("/dashboard/skilltest")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📝</span>
            <span>Skill Test</span>
          </Link>
        </li>
        <li>
          <Link
            to="addreferall"
            className={getLinkClassName("/dashboard/addreferall")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👥</span>
            <span>Add Referral</span>
          </Link>
        </li>
        <li>
          <Link
            to="payment"
            className={getLinkClassName("/dashboard/payment")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💳</span>
            <span>Payment</span>
          </Link>
        </li>
        <li>
          <Link
            to="Changepassword"
            className={getLinkClassName("/dashboard/Changepassword")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔑</span>
            <span>Change Password</span>
          </Link>
        </li>
        <li>
          
          <Link
            to="/"
            className="flex items-center p-2 hover:bg-violet-900  border-b-2 rounded font-semibold"
            onClick={() => { handleLogout(); }}>  
          
            <span className="mr-2 ">🔓</span>
            <span>Log Out</span>
          </Link>
          
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
