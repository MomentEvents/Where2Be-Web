import React from 'react';
import blog_data from '../../data/_blogdata';
import Link from 'next/link';

const PostCategories = () => {
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                Recent Post
            </h3>
            <ul className="recent_post_list unordered_list_block">
                {
                    blog_data.slice(4, 7).map((item) => (
                        <li key={item.id}>
                            <div className="recent_post_item">
                                <Link href={`/blog-details/${item.id}`}>
                                    <a className="item_image"><img src={item.thumbnail.src} style={{ height: 'auto', width: '100%' }} alt="Paradox Blog Image" /></a>
                                </Link>
                                <div className="item_content">
                                    <ul className="meta_list unordered_list">
                                        <li><Link href="/blog-details">{item.blogCat}</Link></li>
                                        <li><span>{item.date}</span></li>
                                    </ul>
                                    <h3 className="item_title">
                                        <Link href={`/blog-details/${item.id}`}>
                                        {item.title.length >= 30 ? `${item.title.slice(0,40)} ...` : item.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostCategories;