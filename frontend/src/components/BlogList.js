// src/components/BlogList.js
import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
                <BlogItem key={post._id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;
