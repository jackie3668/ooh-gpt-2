import React, { useState } from 'react';
import axios from 'axios';

const Seaplane = () => {
  const [chatHistory, setChatHistory] = useState('');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      // Concatenate chat history and query into a single string
      const inputText = chatHistory + ' ' + query;
  
      console.log('Input Text:', inputText); // Debug: Log input text
  
      // Make a GET request to the specified URL
      const response = await axios.get('http://localhost:5000/api', {
        params: { inputText },
        responseType: 'json' // Parse response as JSON
      });
  
      console.log('Response:', response); // Debug: Log response object
  
      // Handle the response from the server
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter chat history"
        value={chatHistory}
        onChange={(e) => setChatHistory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {/* Display the response */}
        {response && <p>Response: {JSON.stringify(response)}</p>}
      </div>
    </div>
  );
};

export default Seaplane;
