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

  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? `${pageTitle.slice(0, 77)} - Where2Be`
            : defaultSEOValues.defaultTitle}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          property="og:title"
          content={
            pageTitle
              ? `${pageTitle.slice(0, 77)} - Where2Be`
              : defaultSEOValues.defaultTitle
          }
        />
        <meta
          property="og:description"
          content={
            pageDescription
              ? pageDescription.length > 180
                ? `${pageDescription.slice(0, 180)}...`
                : pageDescription
              : defaultSEOValues.defaultDescription
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={defaultSEOValues.siteURL} />
        <meta
          property="og:image"
          content={pageImage || defaultSEOValues.defaultImage}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={pageTitle || defaultSEOValues.defaultTitle}
        />
        <meta
          name="twitter:description"
          content={pageDescription || defaultSEOValues.defaultDescription}
        />

        <meta
          name="twitter:image:src"
          content={pageImage || defaultSEOValues.defaultImage}
        />
        <meta name="theme-color" content={defaultSEOValues.defaultThemeColor} />
        <meta name="keywords" content={defaultSEOValues.defaultKeywords} />
        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="/w2b-favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
