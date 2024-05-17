import React, { useState, useEffect } from 'react';

const useSendOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const apiURL = "https://api.phonebook.lol/send-message";
  const apiKey = "CCc6OH6HZ84LTHLUhdWI55pOBR681neJ4UktgqtZ";

  const handleUsernameSubmit = async () => {
    const myNumber = '+19172883884';
    const phonebookNumber = '+15103301270';

    const data = {
      from_number: phonebookNumber,
      nick: "savine63",
      message_contents: "Hello, this is a test message!"
    };

    console.log("Username:", phoneNumber);

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const responseData = await response.json();
      console.log('Message sent successfully:', responseData);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    if (phoneNumber) {
      handleUsernameSubmit();
    }
  }, [phoneNumber]);

};

export default useSendOTP;
