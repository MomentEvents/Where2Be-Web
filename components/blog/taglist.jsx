import Link from 'next/link';
import React from 'react';

const TagList = () => {
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                Tags List
            </h3>
            <ul className="tags_list unordered_list">
                <li><Link href="/blog">Business</Link></li>
                <li><Link href="/blog">UI/UX</Link></li>
                <li><Link href="/blog">Development</Link></li>
                <li><Link href="/blog">Design</Link></li>
                <li><Link href="/blog">Programing</Link></li>
                <li><Link href="/blog">Social</Link></li>
            </ul>
        </div>
    );
};

export default TagList;