import React, { useState } from "react";
import { useEffect } from 'react';

export default useSendOTP = () => {
  const phonebookNumber = '+15103301270';
  const myNumber = '+19172883884';

  const apiURL = "https://api.phonebook.lol/send-message";
  const apiKey = "CCc6OH6HZ84LTHLUhdWI55pOBR681neJ4UktgqtZ";

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
          'to_number': myNumber,
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