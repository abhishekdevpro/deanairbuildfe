import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Subscriberslist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://api.resumeintellect.com/api/admin/subscribes', {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        // Ensure response.data.data is an array before setting state
        const data = Array.isArray(response.data.data) ? response.data.data : [];
        setUsers(data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 text-center">
      <div className="overflow-x-auto">
        {users.length === 0 ? (
          <p className="text-lg text-gray-500">There is no data available.</p>
        ) : (
          <table className="min-w-full bg-dark text-black rounded-md text-center">
            <thead>
              <tr className='bg-violet-300'>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Subscription Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-700 text-center">
                  <td className="py-2 px-4">{user.email || "N/A"}</td>
                  <td className="py-2 px-4 ">
                    <button className='border px-8 rounded-3xl py-2 bg-green-700 text-white'>{user.is_subscribe === 1 ? "Subscribed" : "Not Subscribed"}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}


export default Subscriberslist;
