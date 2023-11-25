import Head from "next/head";
import LINKS from "../constants/links";

const defaultSEOValues = {
  defaultTitle: "Where2Be",
  defaultDescription: "Your central school events hub",
  defaultOGType: "website",
  defaultOGImageType: "image/png",
  defaultThemeColor: "#000000",
  defaultImage: "https://i.imgur.com/QxtpgIP.png",
  defaultAuthor: "Where2Be",
  defaultKeywords: "Where2Be, School, Events",
  siteURL: "https://where2be.app",
};

const SEO = ({ pageTitle, font, pageImage, pageDescription }) => {
  const title = pageTitle ? (pageTitle + " - Where2Be") : defaultSEOValues.defaultTitle
  const image = pageImage || defaultSEOValues.defaultImage;
  const description = pageDescription
    ? pageDescription.length > 200
      ? `${pageDescription.slice(0, 180)}...`
      : pageDescription
    : defaultSEOValues.defaultDescription;

  console.log(title, image, description);

  // return (
  //   <>
  //     <Head>
  //       <title>{title}</title>
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <meta name="theme-color" content={defaultSEOValues.defaultThemeColor} />
  //       <meta name="author" content={defaultSEOValues.defaultAuthor} />
  //       <meta name="keywords" content={defaultSEOValues.defaultKeywords} />
  //       <link rel="canonical" href={defaultSEOValues.siteURL} />

  //       <meta property="og:title" content={title} />
  //       <meta property="og:description" content={description} />
  //       <meta property="og:image" content={image} />
  //       <meta property="og:type" content={defaultSEOValues.defaultOGType} />
  //       <meta property="og:image:type" content={defaultSEOValues.defaultOGImageType} />

  //       {/* Twitter Card Tags */}
  //       <meta name="twitter:card" content="summary_large_image" />
  //       <meta name="twitter:title" content={title} />
  //       <meta name="twitter:description" content={description} />
  //       <meta name="twitter:image:src" content={image} />

  //       {font && <link href={font} rel="stylesheet" />}
  //       <link rel="icon" href="/w2b-favicon.png" />
  //     </Head>
  //   </>
  // );

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={defaultSEOValues.siteURL} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      <meta name="twitter:site" content="Where2Be" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={defaultSEOValues.defaultThemeColor} />
      <meta name="keywords" content={defaultSEOValues.defaultKeywords} />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/w2b-favicon.png" />
    </Head>
  );
};

export default SEO;
