import React, { useEffect, useRef, useState } from 'react';
import { fetchRecentConversations, fetchConversation, postMessage } from '../utils/api';

const Messages = () => {
  const [recent, setRecent] = useState([]);
  const [currentSender, setCurrentSender] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState('You');
  const [text, setText] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    fetchRecentConversations()
      .then((rows) => {
        setRecent(rows);
        if (rows[0]) setCurrentSender(rows[0].sender);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!currentSender) return;
    fetchConversation(currentSender)
      .then((data) => setMessages(data))
      .catch(console.error);
  }, [currentSender]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const saved = await postMessage(me, text.trim());
      setMessages((prev) => [...prev, saved]);
      setText('');
      requestAnimationFrame(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="p-6">Loading messages...</p>;

  return (
    <div className="flex h-full">
      <aside className="w-80 border-r bg-white h-full flex flex-col">
        <div className="px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
        </div>
        <div className="flex-1 overflow-auto">
          {recent.map((r) => (
            <button
              key={r.sender}
              onClick={() => setCurrentSender(r.sender)}
              className={`w-full text-left px-4 py-3 border-b hover:bg-gray-50 ${
                currentSender === r.sender ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{r.sender}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[220px]">{r.lastMessage}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">{new Date(r.lastTimestamp).toLocaleTimeString()}</span>
                  <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-[10px] rounded-full bg-blue-100 text-blue-700">
                    {r.count}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-gray-50">
        <div className="px-6 py-4 border-b bg-white">
          <h3 className="font-semibold text-gray-900">{currentSender || 'Select a conversation'}</h3>
        </div>

        <div ref={listRef} className="flex-1 overflow-auto p-6 space-y-3">
          {messages.map((msg) => {
            const mine = msg.sender === me;
            return (
              <div key={msg._id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm shadow-sm ${mine ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-900 rounded-bl-none border'}`}>
                  <div className="font-medium text-xs opacity-80 mb-1">{msg.sender}</div>
                  <div>{msg.text}</div>
                  <div className="text-[10px] opacity-60 mt-1">{new Date(msg.timestamp).toLocaleTimeString()}</div>
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSend} className="p-4 bg-white border-t flex items-center gap-2">
          <input
            className="border rounded-lg px-3 py-2 text-sm flex-1"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            className="border rounded-lg px-2 py-2 text-sm w-32"
            placeholder="Your name"
            value={me}
            onChange={(e) => setMe(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default Messages;