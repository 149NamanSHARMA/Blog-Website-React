// src/components/BlogItem.js
import React from 'react';

const BlogItem = ({ post }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg bg-opacity-90" style={{ backgroundImage: "url('/memphis-mini.png')" }}>
            <h3 className="text-2xl font-bold mb-2 text-pink-700">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
        </div>
    );
};

export default BlogItem;
