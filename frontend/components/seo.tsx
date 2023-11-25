import Head from "next/head";

const defaultSEOValues = {
  defaultTitle: "Where2Be",
  defaultDescription: "Your central school events hub",
  defaultOGType: "website",
  defaultOGImageType: "image/png",
  defaultThemeColor: "#000000",
};

const SEO = ({ pageTitle, font, pageImage, pageDescription }) => {
  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? `${pageTitle} - ${defaultSEOValues.defaultTitle}`
            : defaultSEOValues.defaultTitle}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content={pageDescription || defaultSEOValues.defaultDescription}
        />
        <meta
          name="og:description"
          content={pageDescription || defaultSEOValues.defaultDescription}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content={defaultSEOValues.defaultThemeColor} />

        {pageImage && (
          <>
            <meta property="og:image" content={pageImage} />
            <meta
              property="og:image:type"
              content={defaultSEOValues.defaultOGImageType}
            />
          </>
        )}

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            pageTitle
              ? `${pageTitle} - ${defaultSEOValues.defaultTitle}`
              : defaultSEOValues.defaultTitle
          }
        />
        <meta
          name="twitter:description"
          content={pageDescription || defaultSEOValues.defaultDescription}
        />
        {pageImage && <meta name="twitter:image:src" content={pageImage} />}

        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="/w2b-favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
