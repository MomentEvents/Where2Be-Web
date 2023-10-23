
import React from 'react';
import BlogSearch from './blogSearch';
import Categories from './categories';
import PostCategories from './postCategories';
import TagList from './taglist';

const BlogSidebarSection = () => {
    return (
        <div className="sidebar">
            <BlogSearch />
            <Categories/>
            <PostCategories/>
            <TagList/>
        </div>
    );
};

export default BlogSidebarSection;