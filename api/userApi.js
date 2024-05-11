import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPostsScreen = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Function to fetch user posts
    const fetchUserPosts = async () => {
      try {
        // Make HTTP request to fetch user posts
        const response = await axios.post(
          'https://api.phonebook.lol/read-content-file',
          {
            "number": userId,
            "site-name": "user-subdomain", // Replace with actual subdomain
            // Add any other parameters needed for fetching posts
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'your-api-key', // Replace with actual API key
            },
          }
        );

        // Update state with fetched user posts
        setUserPosts(response.data.post_content);
      } catch (error) {
        console.error('Error fetching user posts:', error);
        // Handle error
      }
    };

    // Call the fetchUserPosts function
    fetchUserPosts();
  }, [userId]); // Run effect when userId changes

  return (
    <div>
      {/* Render user posts */}
      <h1>User Posts</h1>
      <ul>
        {Object.values(userPosts).map((post) => (
          <li key={post.sender}>
            {/* Render post details */}
            <p>Sender: {post.sender}</p>
            <p>Date: {post.date}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPostsScreen;