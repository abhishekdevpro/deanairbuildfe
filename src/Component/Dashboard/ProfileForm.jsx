import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    professional_title: '',
    languages: '',
    age: '',
    current_salary: '',
    expected_salary: '',
    description: '',
    country: '',
    state: '',
    city: '',
    uploadPhoto: null
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const userProfileResponse = await axios.get('https://api.perfectresume.ca/api/user/user-profile', {
          headers: {
            Authorization: token,
          },
        });
        
        if (userProfileResponse.data.status === 'success') {
          const userData = userProfileResponse.data.data;

          setFormData(prevData => ({
            ...prevData,
            first_name: userData.first_name || '',
            last_name: userData.last_name || '',
            professional_title: userData.professional_title || '',
            languages: userData.languages || '',
            age: userData.age || '',
            current_salary: userData.current_salary || '',
            expected_salary: userData.expected_salary || '',
            phone: userData.phone || '',
            email: userData.email || '',
            description: userData.description || '',
            country: userData.country || '',
            state: userData.state || '',
            city: userData.city || ''
          }));
        }

        const countriesResponse = await axios.get('https://api.perfectresume.ca/api/user/countries');
        if (countriesResponse.data.status === 'success') {
          setCountries(countriesResponse.data.data);
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = async (e) => {
    const selectedCountryName = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      country: selectedCountryName,
      state: '',
      city: ''
    }));
    setStates([]);
    setCities([]);

    const selectedCountry = countries.find(country => country.name === selectedCountryName);

    if (selectedCountry) {
      try {
        const statesResponse = await axios.get(`https://api.perfectresume.ca/api/user/stats/${selectedCountry.id}`);
        if (statesResponse.data.status === 'success') {
          setStates(statesResponse.data.data);
        }
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    }
  };

  const handleStateChange = async (e) => {
    const selectedStateName = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      state: selectedStateName,
      city: ''
    }));
    setCities([]);

    const selectedState = states.find(state => state.name === selectedStateName);

    if (selectedState) {
      try {
        const citiesResponse = await axios.get(`https://api.perfectresume.ca/api/user/cities/${selectedState.id}`);
        if (citiesResponse.data.status === 'success') {
          setCities(citiesResponse.data.data);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      uploadPhoto: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formDataToSend = new FormData();

    formDataToSend.append('first_name', formData.first_name);
    formDataToSend.append('last_name', formData.last_name);
    formDataToSend.append('professional_title', formData.professional_title);
    formDataToSend.append('languages', formData.languages);
    formDataToSend.append('age', formData.age);
    formDataToSend.append('current_salary', formData.current_salary);
    formDataToSend.append('expected_salary', formData.expected_salary);
    formDataToSend.append('description', formData.description);

    const selectedCountry = countries.find(country => country.name === formData.country);
    const selectedState = states.find(state => state.name === formData.state);
    const selectedCity = cities.find(city => city.name === formData.city);

    if (selectedCountry) formDataToSend.append('country_id', selectedCountry.id);
    if (selectedState) formDataToSend.append('state_id', selectedState.id);
    if (selectedCity) formDataToSend.append('city_id', selectedCity.id);

    if (formData.uploadPhoto) {
      formDataToSend.append('upload_photo', formData.uploadPhoto);
    }

    try {
      const response = await axios.patch('https://api.perfectresume.ca/api/user/user-profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });

      if (response.data.status === 'success') {
        toast.success('Profile updated successfully');
      } else {
        toast.error('Failed to update profile:', response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred during profile update:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="p-2 md:p-6">
        <div className="text-center text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-6">
      <div className="w-[15rem] md:w-full mx-auto rounded-lg shadow-lg px-4 py-2 md:p-6">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">BASIC INFORMATION</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2">Change Your Image:</label>
            <div className="md:flex items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="flex-grow border p-2 mr-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">First Name:</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Professional Title:</label>
              <input
                type="text"
                name="professional_title"
                value={formData.professional_title}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Languages:</label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border p-2"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Current Salary ($):</label>
              <input
                type="number"
                name="current_salary"
                value={formData.current_salary}
                onChange={handleChange}
                className="w-full border p-2"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Expected Salary ($):</label>
              <input
                type="number"
                name="expected_salary"
                value={formData.expected_salary}
                onChange={handleChange}
                className="w-full border p-2"
                min="0"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 h-32"
              required
            ></textarea>
          </div>

          <h2 className="text-xl font-bold mb-4">CONTACT INFORMATION</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                className="w-full border p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="w-full border p-2"
                readOnly
              />
            </div>

            <div>
              <label className="block mb-2">Country:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                className="w-full border p-2"
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">State:</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleStateChange}
                className="w-full border p-2"
                disabled={!states.length}
              >
                <option value="">Select a state</option>
                {states.map(state => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">City:</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border p-2"
                disabled={!cities.length}
              >
                <option value="">Select a city</option>
                {cities.map(city => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-700 text-white px-6 py-2 rounded transition duration-200 hover:bg-indigo-600"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
