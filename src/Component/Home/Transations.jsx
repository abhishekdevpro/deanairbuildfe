import { useLocation } from 'react-router-dom';
import React from 'react';
// Aboutus1 :
function Transactions() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('s');
  return (
    <>

      <div className="text-center py-5  bg-black">
      <h1 className='text-5xl py-10 font-serif bg-sky-900 text-white' >💲Transaction</h1>
      {status === 'success' && <p style={{fontSize:"40px"}} className="py-40  bg-green-200">
      💵 Your Payment is 
        Successfull!</p>}
      {status === 'failed' &&  <p style={{fontSize:"40px"}} className="py-40 bg-red-700 font-bold text-white">❌ Your Payment is Failed❗❗</p>}
      {/* Render transactions based on the status */}
    </div>
     
    </>
  );
}

export default Transactions;