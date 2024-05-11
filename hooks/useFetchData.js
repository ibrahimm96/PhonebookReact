import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [postData, setPostData] = useState({});
  const [textContent, setTextContent] = useState([]);
  const [imageContent, setImageContent] = useState([]);
  const [userPreferences, setUserPreferences] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  const apiURL = "https://api.phonebook.lol/read-content-file";
  const apiKey = "CCc6OH6HZ84LTHLUhdWI55pOBR681neJ4UktgqtZ";

  useEffect(() => {
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        'site-name': 'savine63'
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('API Response:', data)

      const obj = JSON.parse(data);
      const postContent = obj.post_content;
      const postContentKeys = Object.keys(postContent);
      setPostData(postContent);

      const userPreferencesData = obj.user_preferences;
      setUserPreferences(userPreferencesData);

      const textContents = [];
      const imageContents = [];
      for (const key in postContentKeys) {    
        const itemKeyText = postContentKeys[key];
        const item = postContent[itemKeyText];

        textContents.push(item.textual_content);
        imageContents.push(item.media_metadata);
      }
      setTextContent(textContents);
      setImageContent(imageContents);
      console.log("TEXTCONTENT: ", textContent)
      console.log("IMAGECONTENT: ",imageContent)
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);

  return { postData, textContent, imageContent, userPreferences, isLoading };
};

export default useFetchData;
