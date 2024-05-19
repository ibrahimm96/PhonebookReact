import React from "react";
import { useState, useEffect } from "react";

export default useFetchData = () => {
  const [textContent, setTextContent] = useState([]);
  const [imageContent, setImageContent] = useState([]);
  const [userPreferences, setUserPreferences] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  const apiURL = "https://api.phonebook.lol/read-content-file";
  const apiKey = "CCc6OH6HZ84LTHLUhdWI55pOBR681neJ4UktgqtZ";

  // Initial API Fetch returns object containing post_content and user_preferences
  useEffect(() => {
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        // Adjust site name to change user, setup for my site
        'site-name': 'savine63',
        'start-date': `2020-01-13 01:07:20.294135`
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => { 
      // Parse the API response to sort elements in post_content and user_preferences:
      console.log('API Response:', data);

      const obj = JSON.parse(data);
      const postContent = obj.post_content;

      const textContentArray = [];
      const imageContentArray = [];
      
      Object.values(postContent).forEach(item => {
        const timestamp = new Date(item.date);
        
        // Sorts out 'None' from textual_content, then fetches the text data from the url and finally pushes the text to a dictionary
        // Both textContent, imageContent are dictionaries in format (data : timestamp)
        if (item.textual_content !== "None") {
          fetch(item.textual_content)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.text();
            })
            .then(text => {
              textContentArray.push({ text, timestamp });
              setTextContent([...textContentArray]);
            })
            .catch(error => {
              console.error('Error fetching text content:', error);
            });
        }
        
        item.media_metadata.forEach(url => {
          if (url !== "None") {
            imageContentArray.push({ url, timestamp });
          }
        });
      });

      setImageContent(imageContentArray);
      setUserPreferences(obj.user_preferences);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);


  // For debugging--as each const gets updated the values are relogged. 
  // Initially, they appear empty, but as data is fetched they fill with data as expected.
  console.log("IMAGES -> ", imageContent);
  console.log("TEXT -> ", textContent);
  console.log("USERPREF -> ", userPreferences);

  return { textContent, imageContent, userPreferences, isLoading };
};
