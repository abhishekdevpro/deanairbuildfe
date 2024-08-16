import React, { useEffect } from 'react';
import { loadScript } from '@paypal/paypal-js';

const PayPalButton = () => {
  useEffect(() => {
    // Load the PayPal script
    loadScript({ 'client-id': 'YOUR_CLIENT_ID' }).then(paypal => {
      // Create the PayPal buttons
      paypal.Buttons({
        createOrder: async (data, actions) => {
          // Call your backend to create the PayPal order
          const response = await fetch('https://api.resumeintellect.com/api/user/paypal/create-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // Pass any additional data required by your backend
              amount: '0.01',
            }),
          });

          const orderData = await response.json();
          return orderData.id; // Use the order ID from your backend response
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            // Optionally call your backend to mark the order as completed
          });
        },
        onError: err => {
          console.error('Error during PayPal transaction', err);
        },
      }).render('#paypal-button-container');
    });
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
