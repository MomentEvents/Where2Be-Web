import React from 'react';
import icon_search from '../../public/assets/img/icons/icon_search_white.svg'
const BlogSearch = () => {
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                Search
            </h3>
            <div className="form-group kyeword_search_form mb-0">
                <input className="form-control" type="search" name="search" placeholder="Enter Kyeword" />
                <button type="submit">
                    <img src={icon_search.src} style={{ height: 'auto', width: 'auto' }}  alt="Search Icon" />
                </button>
            </div>
        </div>
    );
};

export default BlogSearch;