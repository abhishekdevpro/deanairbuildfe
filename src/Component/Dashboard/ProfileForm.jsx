import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    professionalTitle: '',
    languages: '',
    age: '',
    currentSalary: '',
    expectedSalary: '',
    description: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="p-2 md:p-6 ">
      <div className="w-[15rem] md:w-full mx-auto rounded-lg shadow-lg px-4 py-2 md:p-6">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">BASIC INFORMATION</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2">Change Your Image:</label>
            <div className="md:flex items-center">
              <input type="text" className="flex-grow border p-2 mr-2" placeholder="Upload Image" readOnly />
              <button className="bg-gray-200 px-4 py-2">Browse</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Professional Title:</label>
              <input type="text" name="professionalTitle" value={formData.professionalTitle} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Languages:</label>
              <input type="text" name="languages" value={formData.languages} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Age:</label>
              <input type="text" name="age" value={formData.age} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Current Salary ($):</label>
              <input type="text" name="currentSalary" value={formData.currentSalary} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Expected Salary ($):</label>
              <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 h-32"></textarea>
          </div>

          <h2 className="text-xl font-bold mb-4">CONTACT INFORMATION</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Phone:</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Email Address:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">Country:</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">State:</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block mb-2">City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border p-2" />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-navy-700 text-white px-6 py-2 rounded bg-indigo-700 transition duration-200">
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
