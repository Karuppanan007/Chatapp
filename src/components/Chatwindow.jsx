import React, { useState } from 'react';
import Message from '../components/Message';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length, text: input }]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-2xl rounded-lg overflow-hidden border border-gray">
      <div className="bg-green-500 text-white p-4 font-bold text-lg">Chat App</div>
      <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
