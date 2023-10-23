import Link from 'next/link';
import React from 'react';

const Pagination_Data = ({ wrapClass, navClass }) => {
    return (
        <div className={`${wrapClass ? wrapClass : "pagination_wrap"}`}>
            <ul className={`${navClass ? navClass : "pagination_nav unordered_list_center"}`}>
                <li><Link href="#!"><i className="far fa-angle-left"></i></Link></li>
                <li className="active"><Link href="#!">1</Link></li>
                <li><Link href="#!">2</Link></li>
                <li><Link href="#!">3</Link></li>
                <li><Link href="#!"><i className="far fa-angle-right"></i></Link></li>
            </ul>
        </div>
    );
};

export default Pagination_Data;