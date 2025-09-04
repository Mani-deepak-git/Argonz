import React, { useState, useEffect } from 'react';
import { Star, UserPlus, MessageCircle, Search } from 'lucide-react';
import { fetchMentors as fetchMentorsApi, toggleMentorFollow } from '../utils/api';

const Mentors = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch mentors from backend API on component mount
  useEffect(() => {
    fetchMentorsApi()
      .then((data) => {
        // Assuming your backend returns an array of mentors with _id field
        // Map _id to id for consistency with your UI code
        const formattedMentors = data.map((mentor) => ({
          id: mentor._id,
          name: mentor.name,
          role: mentor.role,
          rating: mentor.rating,
          reviews: mentor.reviews,
          tasksCompleted: mentor.tasksCompleted,
          isFollowing: mentor.isFollowing || false,
          avatar: mentor.avatar || mentor.name.split(' ').map(n => n[0]).join(''), // fallback initials
          specialties: mentor.specialties || [],
        }));
        setMentors(formattedMentors);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleFollow = async (mentorId) => {
    try {
      const updated = await toggleMentorFollow(mentorId);
      setMentors((prev) =>
        prev.map((mentor) =>
          mentor.id === mentorId ? { ...mentor, isFollowing: updated.isFollowing } : mentor
        )
      );
    } catch (e) {
      setError(e.message || 'Failed to toggle follow');
    }
  };

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="p-6">Loading mentors...</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Find Your Mentor</h1>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={mentor.avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(mentor.name)}`}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.role}</p>
                </div>
              </div>
              <button
                onClick={() => toggleFollow(mentor.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  mentor.isFollowing
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {mentor.isFollowing ? 'Following' : '+ Follow'}
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{mentor.rating}</span>
                  <span className="text-xs text-gray-500">({mentor.reviews} reviews)</span>
                </div>
                <div className="text-sm text-gray-600">
                  {mentor.tasksCompleted} tasks completed
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {mentor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button onClick={() => setCurrentPage?.('messages')} className="flex-1 flex items-center justify-center space-x-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Message</span>
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <UserPlus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;