import Link from 'next/link';
import React from 'react';

const Categories = () => {
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                Categories
            </h3>
            <ul className="icon_list unordered_list_block">
                <li>
                    <Link href="/blog">Marketing (03)</Link>
                </li>
                <li>
                    <Link href="/blog">Digital Agency (04)</Link>
                </li>
                <li>
                    <Link href="/blog">Creative Agency (06)</Link>
                </li>
                <li>
                    <Link href="/blog">Business Consulting (03)</Link>
                </li>
                <li>
                    <Link href="/blog">IT Solution (02)</Link>
                </li>
            </ul>
        </div>
    );
};

export default Categories;