import React, { useState } from 'react';
import './Chatbot.scss';
import axios from 'axios';
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message: input });
      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error.message);
      const botError = { sender: 'bot', text: 'Error communicating with the server' };
      setMessages((prev) => [...prev, botError]);
    }

    setInput('');
  };

  return (
    <div className="chatbot">
      <IoChatboxEllipsesOutline />
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type in your question"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend(); 
          }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
