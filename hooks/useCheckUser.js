import React, { useState } from "react";
import { useEffect } from 'react';

const useCheckUser = (rawPhoneNumber) => {
  const [userExists, setUserExists] = useState(false)
  const [loading, setLoading] = useState(false)
  const phonebookNumber = '+15103301270';
  
  const apiURL = "https://api.phonebook.lol/get-site-from-number";
  const apiKey = "CCc6OH6HZ84LTHLUhdWI55pOBR681neJ4UktgqtZ";

  useEffect(() => {
    if (!rawPhoneNumber || rawPhoneNumber.length < 10) return; // Checks format of Number, returns if not a correct number
    
    const formattedPhoneNumber = `+1${rawPhoneNumber}`;

    const checkUser = async () => {
      setLoading(true)
      try {
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          },
          body: JSON.stringify({
            from_number: phonebookNumber,
            user_number: formattedPhoneNumber,
          })
        });
        const data = await response.json()
        
        if (response.ok) {
          if (data.number !== "Null") {
            console.log('User Exists: ', data);
            setUserExists(true);
          } else {
            console.log('User does not exist: ', data);
            setUserExists(false);
          }
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error:', error);
        setUserExists(false);
      } finally {
        setLoading(false)
      }
    };

    checkUser();
  }, [rawPhoneNumber]);

  return { userExists, loading };
};

export default useCheckUser;