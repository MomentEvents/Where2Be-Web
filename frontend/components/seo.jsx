import Head from "next/head";

const SEO = ({ pageTitle, font, pageImage }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} - Where2Be`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Host and navigate your school events with ease"
      />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#212121" />

      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image" content="<generated>" />}

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/w2b-favicon.png" />
    </Head>
  </>
);

export default SEO;
