import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyResume1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://api.resumeintellect.com/api/admin/users', {
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
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Mobile</th>
              <th className="py-2 px-4">Created At</th>
              <th className="py-2 px-4">Updated At</th>
              <th className="py-2 px-4">Resume Status</th>
              <th className="py-2 px-4">Resume Files</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-700 text-center">
                <td className="py-2 px-4">{user.first_name || "N/A"}</td>
                <td className="py-2 px-4">{user.last_name || "N/A"}</td>
                <td className="py-2 px-4">{user.email || "N/A"}</td>
                <td className="py-2 px-4">{user.mobile || "N/A"}</td>
                <td className="py-2 px-4">{new Date(user.created_at).toLocaleDateString()}</td>
                <td className="py-2 px-4">{new Date(user.updated_at).toLocaleDateString()}</td>
                <td className="py-2 px-4">{user.resume_status.name || "N/A"}</td>
                <td className="py-2 px-4">
                  {user.resume_file_path ? user.resume_file_path.join(", ") : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyResume1;
