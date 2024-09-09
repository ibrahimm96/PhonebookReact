import React, { useState } from "react";
import { useEffect } from 'react';

export default useSendOTP = (phoneNumber) => {
  const phonebookNumber = '';

  const apiURL = "https://api.phonebook.lol/send-message";
  const apiKey = "";

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          'to_number': phoneNumber,
          'from_number': phonebookNumber,
          'message_contents': '000000 Test Message!'
        })
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      const data = await res.json();
      setResponse("abcd");
      console.log('Message sent successfully:', data);

    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.message || 'An error occurred while sending the message');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sendMessage();
  }, []); // Empty dependency array to run only once on mount

  return { response, loading, error };
};