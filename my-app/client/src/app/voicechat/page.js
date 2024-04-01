
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const VoiceAssistant = () => {
  const [userInput, setUserInput] = useState('');
  const [assistantResponse, setAssistantResponse] = useState('');

  const handleSpeechRecognition = async () => {
    const recognition = new webkitSpeechRecognition();
    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript);
      const response = await axios.post('/api/assistant', { text: transcript });
      setAssistantResponse(response.data.voiceUrl);
    };
    recognition.start();
  };

  return (
    <div>
      <button className="bg-white text-red-700"onClick={handleSpeechRecognition}>Start Listening</button>
      <p>User: {userInput}</p>
      {assistantResponse && <audio src={assistantResponse} controls />}
    </div>
  );
};

export default VoiceAssistant;
