// Global
import { TTailwindString } from 'tailwindcss-classnames';
import { classnames } from 'tailwindcss-classnames';
import { useId } from 'react-id-generator';
import Head from 'next/head';

type SearchPageProps = {
  className?: TTailwindString;
};

const SearchPage = ({ className }: SearchPageProps): JSX.Element => {
  /**
   *  React hook for unique IDs using react-unique-id.
   *  Avoid generating new ID on every rerender.
   */

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
            __html: `
              document.addEventListener('DOMContentLoaded', function () {
                Coveo.SearchEndpoint.configureCloudV2Endpoint(
                  "sitecorenet34jt6lbn",
                  "xx797e74e3-585c-421d-97e9-7bbe015c7af9"
                );                
                Coveo.init(document.getElementById("search"));
              })
                        `,
          }}
        />
      </Head>

      <div
        id="search"
        className="CoveoSearchInterface"
        data-search-hub="devPortalSearch"
        data-pipeline="DeveloperPortalPipeline"
        data-design="new"
        data-enable-history="true"
        data-expression='NOT @source="Coveo_master_index - SitecoreComProd" AND NOT @source="Coveo_staging_index - SitecoreComProd" AND NOT @source="Coveo_web_index - SitecoreComProd"'
      >
        <div className="CoveoFolding"></div>
        <div className="CoveoAnalytics"></div>
        <div className="coveo-tab-section">
          <a
            className="CoveoTab"
            data-id="All"
            data-caption="All Content"
            data-expression="@language==English"
          ></a>
          <div
            className="CoveoTab"
            data-id="Documentation"
            data-caption="Documentation"
            data-expression='@source="sitecore documentation"'
          ></div>
          <div
            className="CoveoTab"
            data-id="KnowledgeBase"
            data-caption="Knowledge Base"
            data-expression='@source="KnowledgeBase"'
          ></div>
          <div
            className="CoveoTab"
            data-id="StackExchange"
            data-caption="Stack Exchange"
            data-expression='@source="StackExchange"'
          ></div>
        </div>
        <div className="coveo-search-section">
          <div
            className="CoveoSearchbox"
            data-enable-omnibox="true"
            data-search-as-you-type-delay=""
          ></div>
        </div>
        <div className="coveo-main-section">
          <div className="coveo-facet-column" style={{ width: 405 }}>
            <div
              className="CoveoFacet"
              data-title="Version"
              data-field="@sitecoreversion"
              data-number-of-values=""
              data-sort-criteria="alphadescending"
              id="versionFacet"
            ></div>
            <div className="CoveoFacet" data-title="Product" data-field="@product"></div>
            <div
              className="CoveoFacet"
              data-title="Site"
              data-field="@source"
              data-custom-sort="sitecore documentation, content hub documentation, sitecore videos, moosend documentation, ordercloud documentation, sitecore powershell extension documentation, helix documentation, sitecore developer portal, jss documentation, sitecore stackexchange"
              data-tab="All"
              data-number-of-values="10"
            ></div>
            <div className="CoveoFacet" data-title="Year" data-field="@year" data-tab="All"></div>
            <div
              className="CoveoFacet"
              data-title="FileType"
              data-field="@filetype"
              data-tab="All"
            ></div>
            <div
              className="CoveoFacet"
              data-title="Language"
              data-field="@language"
              id="languageFacet"
            ></div>
          </div>
          <div className="coveo-results-column">
            <div className="CoveoShareQuery"></div>
            <div className="CoveoPreferencesPanel">
              <div className="CoveoResultsPreferences"></div>
              <div className="CoveoResultsFiltersPreferences"></div>
            </div>
            <div className="CoveoTriggers"></div>
            <div className="CoveoBreadcrumb"></div>
            <div className="CoveoDidYouMean"></div>
            <div className="coveo-results-header">
              <div className="coveo-summary-section">
                <span className="CoveoQuerySummary">
                  <div className="coveo-show-if-no-results"></div>
                </span>
                <span className="CoveoQueryDuration"></span>
              </div>
              <div className="coveo-result-layout-section">
                <span className="CoveoResultLayout"></span>
              </div>
              <div className="coveo-sort-section">
                <span
                  className="CoveoSort"
                  data-sort-criteria="relevancy"
                  data-caption="Relevance"
                ></span>
                <span
                  className="CoveoSort"
                  data-sort-criteria="@publisheddate descending,@publisheddate ascending"
                  data-caption="Date"
                  data-tab="KnowledgeBase, StackExchange"
                ></span>
              </div>
            </div>
            <div className="CoveoHiddenQuery"></div>
            <div className="CoveoErrorReport" data-pop-up="false"></div>
            <div
              className="CoveoResultList"
              data-layout="list"
              data-wait-animation="fade"
              data-auto-select-fields-to-include="true"
            >
              <script
                type="text/html"
                data-field-source="knowledgebase"
                className="result-template"
                id="KnowledgeArticles"
              >
                <div className="coveo-result-frame">
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', textAlign: 'center', width: 32 }}
                  >
                    <span
                      className="CoveoIcon"
                      data-small="false"
                      data-with-label="false"
                      data-value="coveo-filetype-salesforce-standard-article"
                    ></span>
                    <div className="CoveoQuickview"></div>
                  </div>
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', paddingLeft: 16 }}
                  >
                    <div className="coveo-result-row" style={{ marginTop: 0 }}>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue source-badge sitecore-kb"
                            data-field="@source"
                            data-text-caption=""
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div
                          className="coveo-result-cell"
                          style={{ verticalAlign: 'top', fontSize: 16 }}
                          role="heading"
                          aria-level={2}
                        >
                          <a className="CoveoResultLink"></a>
                        </div>
                      </div>
                      <div
                        className="coveo-result-cell"
                        style={{ width: 120, textAlign: 'right', fontSize: 12 }}
                      >
                        <div className="coveo-result-row">
                          <span
                            className="CoveoFieldValue"
                            data-field="@publisheddate"
                            data-helper="dateTime"
                            data-html-value="false"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}>
                      <div className="coveo-result-cell">
                        <span className="CoveoExcerpt"></span>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}></div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}></div>
                    <div className="coveo-result-row"></div>
                  </div>
                </div>
              </script>
              <script
                type="text/html"
                data-field-source="sitecore website"
                className="result-template"
                id="Sitecore Website"
              >
                <div className="coveo-result-frame">
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', textAlign: 'center', width: 32 }}
                  >
                    <span className="CoveoIcon" data-small="false" data-with-label="false"></span>
                    <div className="CoveoQuickview"></div>
                  </div>
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', paddingLeft: 16 }}
                  >
                    <div className="coveo-result-row" style={{ marginTop: 0 }}>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue source-badge sitecore-website"
                            data-field="@source"
                            data-text-caption=""
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div
                          className="coveo-result-cell"
                          style={{ verticalAlign: 'top', fontSize: 16 }}
                          role="heading"
                          aria-level={2}
                        >
                          <a className="CoveoResultLink"></a>
                        </div>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}>
                      <div className="coveo-result-cell">
                        <span className="CoveoExcerpt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </script>
              <script
                type="text/html"
                data-field-source="sitecore forum"
                className="result-template"
                id="Sitecore Forum"
              >
                <div className="coveo-result-frame">
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', textAlign: 'center', width: 32 }}
                  >
                    <span
                      className="CoveoIcon"
                      data-small="false"
                      data-with-label="false"
                      data-value="coveo-filetype-folder"
                    ></span>
                    <div className="CoveoQuickview"></div>
                  </div>
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', paddingLeft: 16 }}
                  >
                    <div className="coveo-result-row" style={{ marginTop: 0 }}>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue source-badge sitecore-forum"
                            data-field="@source"
                            data-text-caption=""
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div
                          className="coveo-result-cell"
                          style={{ verticalAlign: 'top', fontSize: 16 }}
                          role="heading"
                          aria-level={2}
                        >
                          <a className="CoveoResultLink"></a>
                        </div>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}>
                      <div className="coveo-result-cell">
                        <span className="CoveoExcerpt"></span>
                      </div>
                    </div>
                    <div className="coveo-result-row">
                      <div className="coveo-result-cell">
                        <span
                          className="CoveoFieldValue clickable-field-value"
                          data-field="@forumsection"
                        ></span>
                        <span
                          className="CoveoFieldValue clickable-field-value"
                          data-field="@forumsubsection"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </script>
              <script
                type="text/html"
                data-field-source="sitecore videos"
                className="result-template"
                id="YouTube"
              >
                <div className="coveo-result-frame">
                  <div className="coveo-result-row">
                    <div className="coveo-result-cell" style={{ width: 220, paddingTop: 7 }}>
                      <span className="CoveoYouTubeThumbnail"></span>
                    </div>
                    <div className="coveo-result-cell">
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <div className="coveo-result-row">
                            <div className="coveo-result-cell">
                              <span
                                className="CoveoFieldValue source-badge sitecore-youtube"
                                data-field="@source"
                                data-text-caption=""
                                style={{ marginRight: 30 }}
                              ></span>
                            </div>
                          </div>
                          <div className="coveo-result-row">
                            <div
                              className="coveo-result-cell"
                              style={{ fontSize: 16 }}
                              role="heading"
                              aria-level={2}
                            >
                              <a className="CoveoResultLink"></a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="coveo-result-cell"
                          style={{ textAlign: 'right', width: 120, fontSize: 12 }}
                        >
                          <span
                            className="CoveoFieldValue"
                            data-field="@date"
                            data-helper="dateTime"
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row" style={{ marginTop: 10 }}>
                        <div className="coveo-result-cell">
                          <span className="CoveoExcerpt"></span>
                        </div>
                      </div>
                      <div className="coveo-result-row" style={{ marginTop: 10 }}>
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue"
                            data-field="@author"
                            data-text-caption="Author"
                            style={{ marginRight: 30 }}
                          ></span>
                          <span
                            className="CoveoFieldValue"
                            data-field="@ytvideoduration"
                            data-helper="timeSpan"
                            data-helper-options-is-milliseconds="false"
                            data-text-caption="Length"
                            style={{ marginRight: 30 }}
                          ></span>
                          <span
                            className="CoveoFieldValue"
                            data-field="@ytviewcount"
                            data-helper="number"
                            data-helper-options-format="n0"
                            data-text-caption="Views"
                            style={{ marginRight: 30 }}
                          ></span>
                          <span
                            className="CoveoFieldValue"
                            data-field="@language"
                            data-text-caption="Language"
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <div className="CoveoMissingTerms"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </script>
              <script
                type="text/html"
                data-field-source="documentation"
                className="result-template"
                id="Documentation"
              >
                <div className="coveo-result-frame">
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', textAlign: 'center', width: 32 }}
                  >
                    <span
                      className="CoveoIcon"
                      data-small="false"
                      data-with-label="false"
                      data-value="coveo-filetype-document"
                    ></span>
                    <div className="CoveoQuickview"></div>
                  </div>
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', paddingLeft: 16 }}
                  >
                    <div className="coveo-result-row" style={{ marginTop: 0 }}>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue source-badge sitecore-documentation"
                            data-field="@source"
                            data-text-caption=""
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div
                          className="coveo-result-cell"
                          style={{ verticalAlign: 'top', fontSize: 16 }}
                          role="heading"
                          aria-level={2}
                        >
                          <a className="CoveoResultLink"></a>
                        </div>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}>
                      <div className="coveo-result-cell">
                        <span className="CoveoExcerpt"></span>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}></div>
                    <div className="coveo-result-row">
                      <div className="coveo-result-cell">
                        <span
                          className="CoveoFieldValue product-className=clickable-field-value"
                          data-field="@product"
                        ></span>
                        <span
                          className="CoveoFieldValue version-className=clickable-field-value"
                          data-field="@sitecoreversion"
                          data-split-values="true"
                        ></span>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}></div>
                    <div className="coveo-result-row"></div>
                  </div>
                </div>
              </script>
              <script
                type="text/html"
                data-field-source="stackexchange"
                className="result-template"
                id="StackExchange"
              >
                <div className="coveo-result-frame">
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', textAlign: 'center', width: 32 }}
                  >
                    <span
                      className="CoveoIcon"
                      data-small="false"
                      data-with-label="false"
                      data-value="coveo-filetype-list"
                    ></span>
                    <div className="CoveoQuickview"></div>
                  </div>
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', paddingLeft: 16 }}
                  >
                    <div className="coveo-result-row" style={{ marginTop: 0 }}>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue source-badge sitecore-stackexchange"
                            data-field="@source"
                            data-text-caption=""
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div
                          className="coveo-result-cell"
                          style={{ verticalAlign: 'top', fontSize: 16 }}
                          role="heading"
                          aria-level={2}
                        >
                          <a className="CoveoResultLink"></a>
                        </div>
                      </div>
                      <div
                        className="coveo-result-cell"
                        style={{ width: 120, textAlign: 'right', fontSize: 12 }}
                      >
                        <div className="coveo-result-row">
                          <span
                            className="CoveoFieldValue"
                            data-field="@publisheddate"
                            data-helper="dateTime"
                            data-html-value="false"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="coveo-result-row">
                      <div className="coveo-result-cell">
                        Asked by:{' '}
                        <span
                          className="CoveoFieldValue"
                          data-field="@author"
                          data-text-caption=""
                          style={{ marginRight: 30 }}
                        ></span>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}>
                      <div className="coveo-result-cell">
                        <span className="CoveoExcerpt"></span>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}></div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}></div>
                    <div className="coveo-result-row"></div>
                  </div>
                </div>
              </script>
              <script type="text/html" className="result-template" id="Default">
                <div className="coveo-result-frame">
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', textAlign: 'center', width: 32 }}
                  >
                    <span
                      className="CoveoIcon"
                      data-small="false"
                      data-with-label="false"
                      data-value="coveo-filetype-salesforce-standard-document"
                    ></span>
                    <div className="CoveoQuickview"></div>
                  </div>
                  <div
                    className="coveo-result-cell"
                    style={{ verticalAlign: 'top', paddingLeft: 16 }}
                  >
                    <div className="coveo-result-row" style={{ marginTop: 0 }}>
                      <div className="coveo-result-row">
                        <div className="coveo-result-cell">
                          <span
                            className="CoveoFieldValue source-badge"
                            data-field="@source"
                            data-text-caption=""
                            style={{ marginRight: 30 }}
                          ></span>
                        </div>
                      </div>
                      <div className="coveo-result-row">
                        <div
                          className="coveo-result-cell"
                          style={{ verticalAlign: 'top', fontSize: 16 }}
                          role="heading"
                          aria-level={2}
                        >
                          <a className="CoveoResultLink"></a>
                        </div>
                      </div>
                    </div>
                    <div className="coveo-result-row" style={{ marginTop: 10 }}>
                      <div className="coveo-result-cell">
                        <span className="CoveoExcerpt"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </script>
            </div>
            <div className="CoveoPager"></div>
            <div className="CoveoLogo"></div>
            <div className="CoveoResultsPerPage"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
