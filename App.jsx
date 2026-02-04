import { useState } from "react";
import Message from "./Message";

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "how are you", sender: "them" },
    { id: 2, text: "how’s school", sender: "them" },
    { id: 3, text: "It’s good", sender: "me" },
  ]);

  const updateMessage = (id, newText) => {
    setMessages(messages.map(m =>
      m.id === id ? { ...m, text: newText, edited: true } : m
    ));
  };

  return (
    <div className="chat">
      <header className="chat-header">
        <span>tiktok_user</span>
      </header>

      <div className="messages">
        {messages.map(msg => (
          <Message
            key={msg.id}
            message={msg}
            onEdit={updateMessage}
          />
        ))}
      </div>
    </div>
  );
}
