// src/App.js
import React, { useEffect, useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPost = async (post) => {
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            await response.json();
            fetchPosts();  // Fetch the updated list of posts
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold text-center mb-8 text-white">Simple Blog</h1>
            <div className="bg-white bg-opacity-100 p-8 shadow-lg rounded-lg mb-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 shadow-lg rounded-lg" style={{ backgroundImage: "url('/memphis-mini.png')" }}>
                <h2 className="text-3xl font-bold mb-4 text-center text-pink-700">Create a New Blog Post</h2>
                <BlogForm addPost={addPost} />
            </div>
            </div>
            <BlogList posts={posts} />
        </div>
    );
};

export default App;
