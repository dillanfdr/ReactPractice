import { useState, useEffect } from 'react';
import axios from 'axios';

const PostApp = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [responseMessage, setResponseMessage] = useState('');

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the posts:', error);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (POST request)
  const handleSubmit = (e) => {
    e.preventDefault();

    // POST request to add a new post
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then((response) => {
        setResponseMessage('Post added successfully!');
        setPosts((prevPosts) => [response.data, ...prevPosts]);
        setFormData({ title: '', body: '' }); // Clear the form
      })
      .catch((error) => {
        setResponseMessage('Error adding post.');
        console.error('There was an error adding the post:', error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#121212] p-6">
      <h1 className="text-3xl font-bold text-[#E0E0E0] mb-6">JSONPlaceholder Posts</h1>

      <div className="w-full max-w-lg bg-[#1E1E1E] p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-4">Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-[#E0E0E0]">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-2 p-3 w-full border border-[#333] rounded-md bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="body" className="block text-[#E0E0E0]">Body</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              className="mt-2 p-3 w-full border border-[#333] rounded-md bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#591818] text-[#ffffff] rounded-lg hover:bg-[#3D0000] focus:outline-none"
          >
            Submit Post
          </button>
        </form>

        {responseMessage && (
          <div className="mt-4 text-sm text-center text-purple-500">{responseMessage}</div>
        )}
      </div>

      <div className="w-full max-w-4xl overflow-x-auto">
        <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-4">All Posts</h2>
        <table className="min-w-full bg-[#1E1E1E] shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b bg-[#2A2A2A]">
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#E0E0E0]">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#E0E0E0]">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="2" className="px-6 py-3 text-center text-sm text-[#888]">No posts available</td>
              </tr>
            ) : (
              posts.map((post, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-3 text-sm text-[#E0E0E0]">{post.title}</td>
                  <td className="px-6 py-3 text-sm text-[#E0E0E0]">{post.body}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostApp;
