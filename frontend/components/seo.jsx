import Head from "next/head";
import LINKS from "../constants/links";

const SEO = ({ pageTitle, font, pageImage, pageDescription }) => {
  // Construct the title and truncate it to 80 characters if necessary
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

  const title = pageTitle
    ? `${pageTitle.slice(0, 77)} - Where2Be`
    : defaultSEOValues.defaultTitle;

  const image = pageImage || defaultSEOValues.defaultImage;
  const description = pageDescription
    ? pageDescription.length > 180
      ? `${pageDescription.slice(0, 180)}...`
      : pageDescription
    : defaultSEOValues.defaultDescription;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={defaultSEOValues.siteURL} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />
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
    </>
  );
};

export default SEO;
