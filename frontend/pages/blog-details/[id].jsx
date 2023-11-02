
import React from 'react';
import { useRouter } from 'next/router';
import blog_data from '../../data/_blogdata';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import BlogDetalsArea from '../../components/blog/blogDetails';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogItem = blog_data?.find((item) => item.id == id);
  if (!blogItem) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
    <SEO pageTitle={'Blog Details'} />
    {/* <BlogDetailsArea item={news} /> */}
    <BlogDetalsArea blog={blogItem}/>
</Wrapper>
  );
};

export default BlogDetails;
