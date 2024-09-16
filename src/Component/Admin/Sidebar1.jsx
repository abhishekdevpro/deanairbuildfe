import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar1 = ({ onClose }) => {
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
            to="/"
            className={getLinkClassName("/")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🏠</span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="profile1"
            className={getLinkClassName("/admin/profile1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🛡️</span>
            <span>Admin</span>
          </Link>
        </li>
        
        <li>
          <Link
            to="resumes1"
            className={getLinkClassName("/admin/resumes1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👨🏻‍👩🏻‍👦🏻‍👦🏻</span>
            <span>All Customers</span>
          </Link>
        </li>
        <li>
          <Link
            to="notification1"
            className={getLinkClassName("/admin/notification1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📋</span>
            <span>My Templates</span>
          </Link>
        </li>
       
        <li>
          <Link
            to="addreferall1"
            className={getLinkClassName("/admin/addreferall1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📊</span>
            <span>Leads</span>
          </Link>
        </li>
        <li>
          <Link
            to="payment1"
            className={getLinkClassName("/admin/payment1")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Payment</span>
          </Link>
        </li>
        <li>
          <Link
            to="subscriberslist"
            className={getLinkClassName("/admin/subscriberslist")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Subscribers List</span>
          </Link>
        </li>
        <li>
          <Link
            to="reffreraluser"
            className={getLinkClassName("/admin/reffreraluser")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Referral User</span>
          </Link>
        </li>
        <li>
          <Link
            to="addreferalladmin"
            className={getLinkClassName("/admin/addreferalladmin")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Add Referral </span>
          </Link>
        </li>
        <li>
          <Link
            to="reffreraladmin"
            className={getLinkClassName("/admin/reffreraladmin")}
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💷</span>
            <span>Referral </span>
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

export default Sidebar1;
