import React from "react";
import dynamic from "next/dynamic";
const BlogArea = dynamic(() => import('../landingPage/component/blogArea'), {
  ssr: false
})
import About from "../landingPage/component/about";
import Footer from "../landingPage/component/footer";
import Speakers from "./speakers";
import Breadcrumb from "../common/breadcrumb/breadcrumb";

const AboutMainArea = () => {
  return (
    <section className="dark_light_class">
      <Breadcrumb title="About Us" subTitle="About Us" />
      <About pb="pb-80" />
      <Speakers />
      <BlogArea about_blog_space="pt-95"  />
      <Footer />
    </section>
  );
};

export default AboutMainArea;
