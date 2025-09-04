const API_BASE = 'http://localhost:5001/api';

export const fetchMentors = async () => {
  const res = await fetch(`${API_BASE}/mentors`);
  if (!res.ok) throw new Error('Failed to fetch mentors');
  return res.json();
};

export const toggleMentorFollow = async (id) => {
  const res = await fetch(`${API_BASE}/mentors/${id}/follow`, { method: 'PATCH' });
  if (!res.ok) {
    let message = 'Failed to toggle follow';
    try {
      const data = await res.json();
      if (data && data.message) message = data.message;
    } catch {}
    throw new Error(message);
  }
  return res.json();
};

export const fetchTasks = async (date) => {
  const url = date ? `${API_BASE}/tasks?date=${encodeURIComponent(date)}` : `${API_BASE}/tasks`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
};

export const fetchMessages = async () => {
  const res = await fetch(`${API_BASE}/messages`);
  if (!res.ok) throw new Error('Failed to fetch messages');
  return res.json();
};

export const postMessage = async (sender, text) => {
  const res = await fetch(`${API_BASE}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sender, text }),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
};

export const fetchRecentConversations = async () => {
  const res = await fetch(`${API_BASE}/messages/recent`);
  if (!res.ok) throw new Error('Failed to fetch recent conversations');
  return res.json();
};

export const fetchConversation = async (sender) => {
  const res = await fetch(`${API_BASE}/messages/with/${encodeURIComponent(sender)}`);
  if (!res.ok) throw new Error('Failed to fetch conversation');
  return res.json();
};