// main.js or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Slider_details from "./Component/Home/Slider_details.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Login/Signup.jsx";
import { ToastBar, Toaster } from "react-hot-toast";
import DashboardLayout from './Component/Dashboard/Dashboard.jsx'
import ProfileForm from "./Component/Dashboard/ProfileForm.jsx";
import MyResume from "./Component/Dashboard/MyResume.jsx";
import Selectionresume from "./components/Selectionresume.jsx"; // Ensure this path is correct
import Uploadresume from "./components/Uploadresume.jsx";
import Form from "./components/Forms.jsx"; // Ensure this path is correct
import Notification from "./Component/Dashboard/Notification.jsx";
import Payment from "./Component/Dashboard/Payment.jsx";
import Addreferall from "./Component/Dashboard/Addreferall.jsx";
import Changepassword from "./Component/Dashboard/Changepassword.jsx";
import Skills from "./Component/Dashboard/Skilltest/Skills.jsx";
import Testpaper from "./Component/Dashboard/Skilltest/Testpaper.jsx";
import Paymentpage from "./Component/Dashboard/Paymentpage.jsx";
import AdminLayout from './Component/Admin/Admin.jsx'
import ProfileForm1 from "./Component/Admin/ProfileForm1.jsx";
import MyResume1 from "./Component/Admin/MyResume1.jsx";
import Notification1 from "./Component/Admin/Notification1.jsx";
import Payment1 from "./Component/Admin/Payment1.jsx";
import Addreferall1 from "./Component/Admin/Addreferall1.jsx";
import Changepassword1 from "./Component/Admin/Changepassword1.jsx";
import Refferallbycustomer from "./Component/Admin/Refferallbycustomer.jsx";
import Paymentpage1 from "./Component/Admin/Paymentpage1.jsx";
import AdminLogin from "./Component/Login/AdminLogin.jsx";
import Self from "./Component/Admin/Self.jsx";
import Download from "./components/forms/Download.jsx";

import { DownloadProvider } from './components/forms/DownloadContext'; // Import the DownloadProvider
import { TemplateProvider } from "./components/forms/TemplateContext.jsx";

import Aboutus from "./Component/Footer/Aboutus.jsx";
import Navbarcontent from "./Component/Footer/Navbarcontent.jsx";
import Careers from "./Component/Footer/Careers.jsx";
import Placement from "./Component/Footer/Placement .jsx";
import Salarytools from "./Component/Footer/Salarytools.jsx";
import TermsandConditions from "./Component/Footer/TermsandConditions.jsx";
import PrivacyPolicy from "./Component/Footer/PrivacyPolicy.jsx";
import AiResumeBuilder from "./Component/Footer/AiResumeBuilder.jsx";
import AiSkillTests from "./Component/Footer/AiSkillTests.jsx";
import AiCVParsing from "./Component/Footer/AiCVParsing.jsx";
import AIEnhancedResumeAccuracy from "./Component/Footer/AIEnhancedResumeAccuracy.jsx";
import AiJobMatchApply from "./Component/Footer/AiJobMatchApply.jsx";
import SearchJobsApply from "./Component/Footer/SearchJobsApply.jsx";
import AiResumeEnhancer from "./Component/Footer/AiResumeEnhancer.jsx";
import Templatelist from "./Component/Admin/Templatelist.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Transactions from "./Component/Home/Transations.jsx";
import Forgotpassword from "./Component/Login/Forgotpassword.jsx";
import Resetpassword from "./Component/Login/Resetpassword.jsx";
import Verifyaccount from "./Component/Login/Verifyaccount.jsx";
import Subscriberslist from "./Component/Admin/Subscriberslist.jsx";
import Reffreraladmin from "./Component/Admin/Reffreraladmin.jsx";
import Reffreraluser from "./Component/Admin/Reffreraluser.jsx";
import Reffrerallist from "./Component/Dashboard/Reffrerallist.jsx";
import Addreferalladmin from "./Component/Admin/Addreferalladmin.jsx";
import Skillhistory from "./Component/Dashboard/Skillhistory.jsx";


const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "slide/:id",
        element: <Slider_details />,
      },
      {
        path: "transaction",
        element: <Transactions />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "user/reset-password/:token",
        element: <Resetpassword />,
      },
      {
        path: "user/verify/:token",
        element: <Verifyaccount />,
       
      },
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "navbarcontent",
        element: <Navbarcontent />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "Placement",
        element: <Placement />,
      },
      {
        path: "Salarytools",
        element: <Salarytools />,
      },
      {
        path: "TermsandConditions",
        element: <TermsandConditions />,
      },
      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "AiResumeBuilder",
        element: <AiResumeBuilder />,
      },
      {
        path: "AiSkillTests",
        element: <AiSkillTests />,
      },
      {
        path: "AiCVParsing",
        element: <AiCVParsing />,
      },
      {
        path: "AIEnhancedResumeAccuracy",
        element: <AIEnhancedResumeAccuracy />,
      },
      {
        path: "AiJobMatchApply",
        element: <AiJobMatchApply />,
      },
      {
        path: "SearchJobsApply",
        element: <SearchJobsApply />,
      },
      {
        path: "AiResumeEnhancer",
        element: <AiResumeEnhancer />,
      },
      {
        path: "dashboard",
        element: <PrivateRoute element={DashboardLayout} />, // Make dashboard private
        children: [
          {
            path: "",
            element: <Navigate to="profile" replace />,
          },
          {
            path: "profile",
            element: <ProfileForm />,
          },
          {
            path: "resumes",
            element: <MyResume />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "paymentpage",
            element: <Paymentpage />,
          },
          {
            path: "addreferall",
            element: <Addreferall />,
          },
          {
            path: "reffrerallist",
            element: <Reffrerallist />,
          },
          {
            path: "changepassword",
            element: <Changepassword />,
          },
          {
            path: "ai-resume-builder",
            element: <Selectionresume />,
          },
          {
            path: "uploadresume",
            element: <Uploadresume />,
          },
          {
            path: "form/:id",
            element: <Form />,
          },
          {
            path: "download",
            element: <Download />,
          },
          {
            path: "skilltest",
            element: <Skills />,
          },
          {
            path: "skillhistory",
            element: <Skillhistory />,
          },
          {
            path: "testpaper/:skillId/:skillName",
            element: <Testpaper />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: <Navigate to="profile1" replace />,
          },
          {
            path: "profile1",
            element: <ProfileForm1 />,
          },
          {
            path: "resumes1",
            element: <MyResume1 />,
          },
          {
            path: "notification1",
            element: <Notification1 />,
          },
          {
            path: "templatelist",
            element: <Templatelist />,
          },
          {
            path: "payment1",
            element: <Payment1 />,
          },
          {
            path: "subscriberslist",
            element: <Subscriberslist />,
          },
          {
            path: "reffreraluser",
            element: <Reffreraluser />,
          },
          {
            path: "reffreraladmin",
            element: <Reffreraladmin />,
          },
          
          {
            path: "addreferall1",
            element: <Addreferall1 />,
          },
          {
            path: "Refferallbycustomer",
            element: <Refferallbycustomer />,
          },
          {
            path: "self",
            element: <Self />,
          },
          {
            path: "changepassword1",
            element: <Changepassword1 />,
          },
          {
            path: "addreferalladmin",
            element: <Addreferalladmin />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemplateProvider>
      <DownloadProvider>
        <RouterProvider router={route} />
        <Toaster />
      </DownloadProvider>
    </TemplateProvider>
  </React.StrictMode>
);