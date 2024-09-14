import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Payment1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://api.resumeintellect.com/api/admin/payment-history', {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 text-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-dark text-black rounded-md text-center">
          <thead>
            <tr className='bg-violet-300'>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Received Amount</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Remark</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-700 text-center">
                <td className="py-2 px-4">{user.id || "N/A"}</td>
                <td className="py-2 px-4">{user.name || "N/A"}</td>
                <td className="py-2 px-4">{user.email || "N/A"}</td>
                <td className="py-2 px-4">{user.phone || "N/A"}</td>
              
                <td className="py-2 px-4">{user.amount || "N/A"}</td>
                <td className="py-2 px-4">{user.status || "N/A"}</td>
                <td className="py-2 px-4"><input type='text' className='border-2'/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment1;
