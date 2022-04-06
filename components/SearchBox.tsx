import Head from 'next/head';

const SearchBox = (): JSX.Element => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://static.cloud.coveo.com/searchui/v2.7610/css/CoveoFullSearch.css"
        />
        <script src="https://static.cloud.coveo.com/searchui/v2.7610/js/CoveoJsSearch.Lazy.min.js"></script>
        <script src="https://static.cloud.coveo.com/searchui/v2.7610/js/templates/templates.js"></script>

        <script
          dangerouslySetInnerHTML={{
            __html:
              `
            document.addEventListener("DOMContentLoaded", function() {
              Coveo.SearchEndpoint.configureCloudV2Endpoint(` +
              process.env.COVEO_ENV +
              `,` +
              process.env.COVEO_API_KEY +
              `);       
              var root = document.getElementById("searchBox");
              Coveo.initSearchbox(root, "/search");
            });
                        `,
          }}
        />
      </Head>

      <div className="coveo-search-section">
        <div className="CoveoAnalytics" data-search-hub="devPortalSearch"></div>
        <div id="searchBox" className="CoveoSearchbox"></div>
      </div>
    </>
  );
};

export default SearchBox;
