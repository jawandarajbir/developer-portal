// Global
import { TTailwindString } from 'tailwindcss-classnames';
import { classnames } from 'tailwindcss-classnames';
import { useId } from 'react-id-generator';
import Script from 'next/script';

const SearchBox = (): JSX.Element => {
  /**
   *  React hook for unique IDs using react-unique-id.
   *  Avoid generating new ID on every rerender.
   */
  const [idSeed] = useId(1, 'scdp-search');
  const searchId = idSeed;
  const inputId = `${idSeed}--search-input`;

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://static.cloud.coveo.com/searchui/v2.7610/js/CoveoJsSearch.Lazy.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="https://static.cloud.coveo.com/searchui/v2.7610/js/templates/templates.js"
      ></Script>

      <div id={searchId} data-enable-history="true">
        <div className={classnames('relative', 'items-center', 'w-full')}>
          <label className={classnames('sr-only')} htmlFor={inputId}>
            Search:
          </label>
          <div className="coveo-search-section">
            <div
              id={inputId}
              className="CoveoSearchbox"
              data-placeholder="What are you looking for?"
              data-add-search-button="true"
            ></div>
          </div>
        </div>
      </div>

      <Script
        id="initSearchbox"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              Coveo.SearchEndpoint.configureCloudV2Endpoint('${process.env.COVEO_ENV}','${process.env.COVEO_API_KEY}');       
              var root = document.getElementById('${searchId}');
              Coveo.initSearchbox(root, "/search");
            `,
        }}
      />
    </>
  );
};

export default SearchBox;
