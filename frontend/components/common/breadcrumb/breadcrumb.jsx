import React from "react";
import Link from "next/link";

const Breadcrumb = ({ title, subTitle }) => {
  return (
    <section className="page_banner text-center pt-150 pb-60">
      <div className="container decoration_wrap">
        <h1 className="page_title mb-15">{title}</h1>
        <ul className="breadcrumb_nav unordered_list_center">
          <li>
            <Link legacyBehavior href="/">Home</Link>
          </li>
          <li>{subTitle}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
