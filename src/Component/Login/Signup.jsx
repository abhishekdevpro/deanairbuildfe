// // import React, { useState } from 'react';
// // import logo from './logo.jpg';
// // import axios from 'axios';
// // import toast from 'react-hot-toast';
// // import { useNavigate } from 'react-router-dom';

// // function Signup() {
// //   const [registerValues, setRegisterValues] = useState({
// //     first_name: '',
// //     last_name: '',
// //     email: '',
// //     phone: '',
// //     password: '',
// //   });
  
// //   const navigate = useNavigate();
// //   const [errors, setErrors] = useState({});

// //   const handleRegisterChange = (e) => {
// //     const { name, value } = e.target;
// //     setRegisterValues({ ...registerValues, [name]: value });

// //     // Perform validation on change
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     let error = '';

// //     switch (name) {
// //       case 'first_name':
// //       case 'last_name':
// //         if (value.length < 2 || value.length > 40) {
// //           error = `${name.replace('_', ' ')} must be between 2 and 40 characters`;
// //         }
// //         break;
// //       case 'password':
// //         if (value.length < 6 || value.length > 12) {
// //           error = 'Password must be between 6 and 12 characters';
// //         }
// //         break;
// //       default:
// //         break;
// //     }

// //     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
// //   };

// //   // const handleSignup = async (e) => {
// //   //   e.preventDefault();

// //   //   if (Object.values(errors).some((error) => error)) {
// //   //     toast.error('Please fix the errors before submitting');
// //   //     return;
// //   //   }

// //   //   if (!registerValues.email || !registerValues.password) {
// //   //     toast.error('Email and Password are required');
// //   //     return;
// //   //   }

// //   //   const body = {
// //   //     first_name: registerValues.first_name,
// //   //     last_name: registerValues.last_name,
// //   //     email: registerValues.email,
// //   //     phone: registerValues.phone,
// //   //     password: registerValues.password,
// //   //   };
// //   //   console.log(`${process.env.NODE_ENV === 'development' ? '' : 'https://api.resumeintellect.com'}/api/user/auth/signup`)

// //   //   try {
// //   //     console.log('Request Body:', body);
// //   //     const response = await axios.post(
// //   //       `https://api.resumeintellect.com/api/user/auth/signup`,
// //   //       `${process.env.NODE_ENV === 'development' ? '' : 'https://api.resumeintellect.com'}/api/user/auth/signup`,
// //   //       body,
// //   //       { 
// //   //         withCredentials:true,
// //   //         headers: {
// //   //           'Content-Type': 'application/json'
// //   //         },
// //   //       }
// //   //     );

// //   //     console.log('Response:', response.data);

// //   //     if (response.status === 200) {
// //   //       toast.success('Signed up successfully! Login Now');
// //   //       navigate('/');
// //   //     } else {
// //   //       toast.error('Failed to sign up.');
// //   //     }
// //   //   } catch (err) {
// //   //     console.error('Error Response:', err.response); // Log the error response
// //   //     if (err.response && err.response.data && err.response.data.message) {
// //   //       if (err.response.data.message.includes('duplicate key value')) {
// //   //         toast.error('An account with this email already exists.');
// //   //       } else {
// //   //         toast.error(`Error: ${err.response.data.message}`);
// //   //       }
// //   //     } else {
// //   //       toast.error('An error occurred. Please try again later.');
// //   //     }
// //   //   }
// //   // };

// //   const handleSignup = async (e) => {
// //     e.preventDefault();

// //     if (
// //       !formData.first_name ||
// //       !formData.last_name ||
// //       !formData.email ||
// //       !formData.phone ||
// //       !formData.password
// //     ) {
// //       toast.error("All fields are required");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post("https://api.resumeintellect.com/api/user/auth/signup", formData, {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         withCredentials: true,
// //       });

// //       if (response.status === 201) {
// //         toast.success("Signup successful!");
// //         navigate("/login"); // Redirect to login page after successful signup
// //       } else {
// //         toast.error("Failed to sign up");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.response?.data?.message || "An error occurred");
// //     }
// //   };

// //   return (
// //     <div className='flex justify-center items-center h-screen w-full'>
// //       <div className='flex justify-end py-2'>
// //         <div className='p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg'>
// //           <div className='hidden md:flex justify-center'>
// //             <div><img src={logo} className='h-10 w-20' alt='Logo'/></div>
// //           </div>
// //           <div className='text-2xl text-black text-center font-bold'>Let's Get Started</div>
// //           <h3 className='text-xl text-black font-semibold py-5 text-center'>People across the globe are joining us to upgrade their career with our Robust AI</h3>

// //           <form onSubmit={handleSignup}>
// //             <div className='flex justify-between gap-4'>
// //               <div className='mb-4'>
// //                 <label className='block text-black'>First Name</label>
// //                 <input
// //                   type='text'
// //                   name='first_name'
// //                   className='w-full px-3 py-2 border rounded-md'
// //                   placeholder='Enter your First Name'
// //                   value={registerValues.first_name}
// //                   onChange={handleRegisterChange}
// //                   required
// //                   minLength={2}
// //                   maxLength={40}
// //                 />
// //                 {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
// //               </div>
// //               <div className='mb-4'>
// //                 <label className='block text-black'>Last Name</label>
// //                 <input
// //                   type='text'
// //                   name='last_name'
// //                   className='w-full px-3 py-2 border rounded-md'
// //                   placeholder='Enter your Last Name'
// //                   required
// //                   value={registerValues.last_name}
// //                   onChange={handleRegisterChange}
// //                   minLength={2}
// //                   maxLength={40}
// //                 />
// //                 {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
// //               </div>
// //             </div>

// //             <div className='flex justify-between gap-4'>
// //               <div className='mb-4'>
// //                 <label className='block text-black'>Email ID</label>
// //                 <input
// //                   type='email'
// //                   name='email'
// //                   className='w-full px-3 py-2 border rounded-md'
// //                   value={registerValues.email}
// //                   onChange={handleRegisterChange}
// //                   placeholder='Enter your email ID'
// //                   required
// //                 />
// //                 {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
// //               </div>
// //               <div className='mb-4'>
// //                 <label className='block text-black'>Password</label>
// //                 <input
// //                   type='password'
// //                   name='password'
// //                   className='w-full px-3 py-2 border rounded-md'
// //                   value={registerValues.password}
// //                   onChange={handleRegisterChange}
// //                   placeholder='Enter your password'
// //                   required
// //                   minLength={6}
// //                   maxLength={12}
// //                 />
// //                 {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
// //               </div>
// //             </div>

// //             <div className='flex flex-col justify-between gap-2'>
// //               <div className='mb-4'>
// //                 <label className='block text-black'>Phone</label>
// //                 <input
// //                   type='number'
// //                   name='phone'
// //                   value={registerValues.phone}
// //                   onChange={handleRegisterChange}
// //                   className='w-full px-3 py-2 border rounded-md'
// //                   placeholder='Enter your number'
// //                 />
// //                 {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
// //               </div>
// //             </div>

// //             <p className='text-base'>By registering, I am agreeing to the Terms and Conditions and Privacy Policy of this site.</p>
// //             <button type='submit' className='w-full py-2 mt-2 px-4 bg-sky-600 text-black font-semibold rounded-md'>
// //               Sign Up
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import logo from "./logo.jpg";
// // import Modal from "./Modal";
// // import "./Login.css";

// // function Signup() {
// //   const [formData, setFormData] = useState({
// //     first_name: "",
// //     last_name: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //   });
// //   const navigate = useNavigate();

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSignup = async (e) => {
// //     e.preventDefault();

// //     if (
// //       !formData.first_name ||
// //       !formData.last_name ||
// //       !formData.email ||
// //       !formData.phone ||
// //       !formData.password
// //     ) {
// //       toast.error("All fields are required");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post("https://api.resumeintellect.com/api/user/auth/signup", formData, 
// //         {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         withCredentials: true,
// //       }
// //       );

// //       if (response.status === 201) {
// //         toast.success("Signup successful!");
// //         navigate("/login"); 
// //       } else {
// //         toast.error("Failed to sign up");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.response?.data?.message || "An error occurred");
// //     }
// //   };

// //   return (
// //     <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
// //       <div>
// //         <img src={logo} className="w-20 h-10" alt="Logo" />
// //       </div>
// //       <div className="text-2xl text-black text-center font-bold align-middle">
// //         Create an Account
// //       </div>
// //       <form onSubmit={handleSignup}>
// //         <div className="mb-4">
// //           <label className="block text-black">First Name</label>
// //           <input
// //             type="text"
// //             name="first_name"
// //             value={formData.first_name}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your first name"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-black">Last Name</label>
// //           <input
// //             type="text"
// //             name="last_name"
// //             value={formData.last_name}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your last name"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-black">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your email"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-black">Phone</label>
// //           <input
// //             type="text"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your phone number"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-black">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your password"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md"
// //         >
// //           Signup
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import logo from "./logo.jpg";
// // import "./Login.css"; // Ensure this file exists and is correctly linked

// function Signup() {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.first_name ||
//       !formData.last_name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.password
//     ) {
//       toast.error("All fields are required");
//       return;
//     }
//    console.log("Data" , formData)
//     try {
//       const response = await axios.post("https://api.resumeintellect.com/api/user/auth/signup", formData, 
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       //  console.log("RES Status",response.status)
//       if (response.status === 200) {
//         toast.success("Signup successful!");
//         navigate("/login"); 
//       } else {
//         toast.error("Failed to sign up");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
//         <div className="flex justify-center mb-4">
//           <img src={logo} className="w-20 h-10" alt="Logo" />
//         </div>
//         <div className="text-2xl text-black text-center font-bold">
//           Create an Account
//         </div>
//         <form onSubmit={handleSignup}>
//           <div className="mb-4">
//             <label className="block text-black">First Name</label>
//             <input
//               type="text"
//               name="first_name"
//               value={formData.first_name}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your first name"
//               required
//               minLength={2}
//               maxLength={40}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Last Name</label>
//             <input
//               type="text"
//               name="last_name"
//               value={formData.last_name}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your last name"
//               required
//               minLength={2}
//               maxLength={40}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your password"
//               required
//               minLength={6}
//               maxLength={12}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md"
//           >
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// // // const body = {
// //   first_name: registerValues.firstName,
// //   last_name: registerValues.lastName,
// //   company_name: registerValues.company,
// //   // jobtitle: registerValues.jobTitle,
// //   email: registerValues.email,
// //   phone: registerValues.phone,
// //   password: registerValues.password,
// // };
// // console.log(body);
// // try {
// //   axios({
// //     url: "https://novajobs.us/api/employeer/auth/signup",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authoriza


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "./logo.jpg";
import "./Login.css"; // Ensure this file exists and is correctly linked

function Signup() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      toast.error("All fields are required");
      return;
    }
  
    const body = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };
  
    try {
      const response = await axios.post(
        "https://api.resumeintellect.com/api/user/auth/signup",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        toast.success("Signup successful!");
        
        // Clear the form fields
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          password: "",
        });
  
        navigate("/login");
      } else {
        toast.error("Failed to sign up");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };
  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
        <div className="flex justify-center mb-4">
          <img src={logo} className="w-40 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold">
          Create an Account
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-black">First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your first name"
              required
              minLength={2}
              maxLength={40}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your last name"
              required
              minLength={2}
              maxLength={40}
            />
          </div>

          <div className="mb-4">
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Password</label>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
              required
              minLength={6}
              maxLength={12}
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
                className="mr-2"
              />
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
