---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1030/Release_Notes
---


Release Notes
=============

**December 2022 – released Sitecore Experience Accelerator 10.3.0**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

*   [Highlights](#Highlights)
*   [New features/improvements](#New)
*   [Breaking changes](#Breaking)
*   [Resolved issues](#Resolved)

Highlights
----------

*   ​You can now specify site-specific Standard Values.
*   ​Dynamic placeholders are now supported for headless sites.
*   ​​Both `sitemap.xml` and `robots.txt` are now supported for headless sites.
*   Redirect maps and redirect items are now supported for headless sites.
*   You can now use components, such as _Image_, _Link List_, _Navigation_, _Page Content_, _Promo_, _Rich Text_, _Title_, and _Container_, for headless sites.
*   ​Error pages and error handling are now supported for headless sites.

New features/improvements
-------------------------

| Description | ADO no. |
| --- | --- |
| ​Security setup scripts are now available for headless tenants and sites.  | 295343 |
| ​An example configuration file for switching indexes to the SolrCloud SwitchOnRebuild type has been added. | 305550 |
| ​​The option for sorting in descending order has been added to the filter components. | 321408 |
| The _Select a Rendering_ dialog user experience has been improved. | 332410 |
| ​You can now specify site-specific Standard Values. | 440650 |
| It is now possible to pull dependencies from `node_modules` in the custom script using SXA CLI. | 489360 |
| You can now create page branches for headless sites.​ | 494033 |
| ​Dynamic placeholders are now supported for headless sites. | 494038 |
| You can now duplicate a page item containing only the page data folder and related data sources but not the subpages. | 496811 |
| The first page of pagination no longer contains a query string. | 499815 |
| You can now filter multiple search results with one search filter. | 503450 |
| ​​Both `sitemap.xml` and `robots.txt` are now supported for headless sites. | 504753 |
| ​Redirect maps and redirect items are now supported for headless sites. | 504754 |
| Parameterized `DataSource` and Sitecore Query can now be combined for `TreelistEx` fields in SXA. | 505558 |
| The _Page Selector_ is now hidden when the page size is equal to the result count. | 509188 |
| The `XA.Foundation.Multisite.Environment` is now logged on Sitecore initialize. | 524420 |
| ​The headless layout now contains three placeholders: _Header_, _Main_, and _Footer_. | 526106 |
| ​​​​​If both `pre-optimized-min` and `optimized-min` are present, the `GetOptimizedItemLink` implementation serves the `pre-optimized-min` file. | 534223 |
| For headless sites, the term _App Route_ has been changed to _Page_.​ | 537806 |
| The sitemap performance has been improved. | 441521, 495426, 478843,374386 |
| You can now use components, such as _Image_, _Link List_, _Navigation_, _Page Content_, _Promo_, _Rich Text_, _Title_, and _Container_, for headless sites. | 494036, 516313 |
| ​Error pages and error handling are now supported for headless sites. | 504755, 388663 |

Breaking changes
----------------

| Description | ADO no. |
| --- | --- |
| The following Flash types have been removed:*   `Sitecore.XA.Feature.Media.Repositories.FlashRepository`
*   `Sitecore.XA.Feature.Media.Repositories.IFlashRepository`
*   `Sitecore.XA.Feature.Media.Models.FlashRenderingModel`
*   `Sitecore.XA.Feature.Media.Models.FlashWmode`
*   `Sitecore.XA.Feature.Media.Controllers.FlashController` |  |
| The following Publishing type has been removed:*   `Sitecore.XA.Foundation.Publication.Pipelines.PublishEndResultBatch.CheckMediaItemPath` |  |

Resolved issues
---------------

The following issues have been fixed:

| Description | ADO no. |
| --- | --- |
| ​If you are moving a subitem of the original item in the content tree, the structure of the delegated area is not updated. | 337330 |
| ​The _Ignore other caching settings override with defined below \[shared\]_ check box is missing in the caching properties of Metadata renderings. | 371363 |
| ​Empty non-editable placeholders are rendered in Experience Editor after SXA is installed. | 381218 |
| If you create an item with a layout, the computed `HasLayout` field is incorrect because the code only checks the `FinalRenderings` field. | 393561 |
| If you use the wrong text case when triggering index resolution, the `IndexResolver` logic does not work. | 402408 |
| If you upload media items under the _Media_ item of your site, an error occurs. | 414453 |
| If you edit _Base Variant Field_ and select a _Bucketing_ condition, an error occurs when you request a page that references that field. | 423936 |
| If the `Host Name` field is not empty and does not have a _\*_ value, ​the static server error page is not generated. | 445471 |
| If you view the row or columns splitter of a duplicated snippet, a `GridParameters` rendering parameter that does not exist in the original snippet is added. | 453354 |
| If you create a new theme using SXA CLI with a password that contains special characters, an error occurs, and the theme is not created. | 460821 |
| If you create an item from a template that has a `Taglist` field, an error occurs. | 463301 |
| The `this.manageVisibilityByData` method results to an error in the browsing console when using the search drop-down filter. | 464003 |
| If links are defined in different domains, the SXA cross-site links do not work. | 466226 |
| If you duplicate an item with spaces in its name, SXA doesn't prepend the duplicated item's name with _Copy of_.__ | 466513 |
| ​If a _site/Home_ item has _Enforce Version Presence_ enabled and published using a non-existing language, the custom 404 page is not shown. | 479794 |
| If you enable _Language Embedding_ on a site, the SXA sitemap contains duplicated nodes. | 482136 |
| If you open a specific language version of a page using a language code and _Enforce Version Presence_ is set to _true_, an error is shown. | 482314 |
| The _INFO Excessive index crawling ID:{47017C3D-10B2-4916-956B-6239546D232C}_ message is shown in the log files. | 486723 |
| If you link a data source item to a personalization variant of a component, the page item does not have a link to the data source item. | 486936 |
| ​The canonical URL is always constructed based on the request scheme. | 488748 |
| ​The _Link List_ component displays empty links for items that do not exist in the current language version. | 489205 |
| The _Upload File_ dialog does not have the correct size. | 489320 |
| The _Page Selector_ does not return to the first page where the results are located. | 489409 |
| In the Experience Editor, if you edit a link pointing to a broken link, a _System.ArgumentNullException_ is thrown. | 490009 |
| If a component is on a partial design, the theme is not loaded on the device fallback. | 491679 |
| If a query is used in the field source, the field control fails and throws a _System.ArgumentNullException_ error. | 492086 |
| If you add a new version to a source item, the cloned item in the delegated area does not display a new version notification. | 492143 |
| The `MediaItemContentExtractor.ComputeFieldValue` method extracts content twice using duplicate logic. | 493561 |
| If you clone a site that contains a key and a phrase in the _Dictionary Entry_, the cloned site displays the phrase of the original site. | 494770 |
| The `Sitecore.XA.Foundation.Publication.Pipelines.PublishEndResultBatch.CheckMediaItemPath` processor triggers too many publishing jobs in Sitecore Publishing Service. | 495691 |
| If you click the _Show More_ or _Show Less_ button in a _Filter (Checklist)_ component, the selected check boxes are cleared. | 496213 |
| If you enter a value in a search box and press _Enter_, search boxes having different signatures are populated with the same value. | 496257 |
| In the Experience Editor, the _Insert a Link_ dialog does not consider the link source value. | 496855 |
| ​The `Sitecore.XA.Feature.SiteMetadata.Services.ExternalLinkGenerator.GetExternalUrl` method does not respect the SXA site scheme. | 497016 |
| If you render a metadata partial design, the HTML output ends with a _/_ tag. | 499630 |
| If a _Twitter_ component on a page uses a username and hashtag in the _Twitter data_, the component does not show any tweets. | 499925 |
| If you add nested items using a local data source, the items are not created in the context language. | 500500 |
| If you enter text in a search box, click the search phrase prediction, and then click any part of the page, the prediction in the search box changes to the entered text. | 500952 |
| If you add a new language version to a source item, the cloned item in the delegated area does not create the new language. | 501147 |
| If a composite rendering has personalization, a lock convoy appears when the site is under load. | 501653 |
| If you change a _Page Size_ component's default value, the page size shown by the _Search Result_ component does not change. | 501762 |
| If you edit the properties of a toggle component and select any value from the _Easing function_ drop-down, the toggle rendering does not work. | 503030 |
| If an SXA page has personalization on a non-composite component, ​the `InjectCompositeComponents` processor does not cache the results. | 504495 |
| The `publish:end` event can throw an _Identifier, GUID or "\*" expected at position 50_ error when publishing some items. | 505094 |
| If you add a page branch in Experience Editor using the _Page Branch_ functionality, an exception for the `item:saving` event occurs. | 505384 |
| If you create items using a page branch, the items are added to the root node of the bucket item. | 505430 |
| The `Convert data sources to GUID` script fails with a shared layout. | 505516 |
| If you use the _Load More_ component, not all the search results are shown when you use the _Dropdown Filter_ component. | 505518 |
| If an A/B test is running for two versions of a page, the browser title of the page doesn't change. | 505812 |
| ​The _Cannot destructure property 'datasource' of 'props.fields.data' as it is undefined_ error can be thrown when pre-rendering a page. | 506046 |
| If you enable _Language Embedding_ on an SXA site, the redirect URL contains duplicate query string parameters. | 506172 |
| If you request the JSON data of a page with an image using `sc_device=json`, _the​ArgumentNullException_ is thrown. | 506611 |
| ​A duplicate of `<renderingContentsResolver>` in the SXA configuration causes an error. | 506612 |
| If you request a page having a navigation component with a Scriban item in the rendering variant, an ​_ArgumentNullException_ occurs for `sc_device=json`. | 506615 |
| If the `Dynamic Placeholder ID` field is not empty, SXA composite items have missing grid values. | 507121 |
| In the SXA site definition, if you set ​the `Disable Browser Caching` field to _Yes_, browser caching is not disabled. | 507660 |
| The _Cleanup Data Folder_ script removes the data source that is referenced using a `page:` prefix. | 507883 |
| If there is no `sxasitename#sc_mode=edit` cookie, ​the rendering variants drop-down list is not shown. | 508788 |
| The SXA implementation of `RenderingParameters` is not thread-safe. | 509855 |
| ​The `CustomRenderingViewPathCacheClearer` handler of the `publish:end:remote` event fails on the CD instance. | 509873 |
| If a `Responsive Image variant` field points to a broken link, a _NullReferenceException_ error occurs. | 510088 |
| ​If you сlick the _Edit the variations_ button on a page using partial design with a component rendering variant, an error is thrown. | 512464 |
| ​The _GeneralLinkFieldSerializer_ functionality does not work correctly. | 513054 |
| ​The `Sitecore.XA.Foundation.Multisite.SiteInfoResolver.IsMatchingPath` method has been optimized to better handle concurrent requests. | 513267 |
| If you wrap a content token in a span, ​the `RenderContentToken` processor incorrectly replaces the content token. | 513565 |
| If you publish a master item with a selected language, the cloned item in the delegated area is always published in all languages. | 513594 |
| If the default content language is not English, the _Media_ folder of the site cannot be expanded. | 513790 |
| The SXA Razor views are not precompiled causing a slow application startup. | 514329 |
| If you publish scripts under _Commerce Components Theme_, the `optimized-min` file is not deleted. | 514374 |
| In the _Hyperlink manager_ dialog, the `​Target` value of an RTE field is not shown correctly. | 514460 |
| ​If you create a new version of a page or a component, the cloned item in the delegated area does not create a new version. | 515282 |
| ​In an SXA _Twitter_ component, the `tweetItem.IsRetweeted` value is always _false_. | 515300 |
| ​The `SiteInfoResolver` only uses `rootPath` and does not use `startItem` when resolving a site for items. | 515338 |
| ​The performance of the _SearchDataSource_ component can be slow if many data sources are found. | 516002 |
| `DictionaryCache` is not thread-safe and causes infinite loop when updated concurrently. | 516880 |
| If you enable _Language Embedding_ and _useDisplayName_ is set to _true_, the `hreflang="x-default"` link in the SXA sitemap is incorrect. | 518783 |
| The SXA search requests contain a double slash. | 520431 |
| If you create a datasource for a link component, the link to the file is incorrect and cannot be downloaded. | 521591 |
| If a parent item has _Modified \[Not set\] by -._, media folders are removed when publishing using the Publishing Service. | 522438 |
| If you add a link using the _Hyperlink Manager_, the `ID` field of the _Anchor_ is missing. | 522559 |
| If ​`InitializeSites` is done in the context of a user request, the site definition is incorrect. | 522598 |
| If child tabs are stored at the same level as parent tabs and a `page:` prefix is applied, ​publishing related items doesn't publish the content of related child tabs. | 523261 |
| The _Personalize the component_ functionality can throw an error. | 525283 |
| If you edit a general link in Experience Editor, a _Null identifiers are not allowed_ error is thrown. | 525404 |
| If you publish changes in the presentation details in partial design from a shared site, old content is shown because the HTML cache is not cleared. | 525943 |
| The `SiteInfoResolverCacheClearer` method clears the cache of the entire database on each item update which can lead to performance issues in the Experience Editor. | 526006 |
| ​If you edit the _Custom Metadata_ section, the metadata tag is created with capitalized attribute names. | 526251 |
| If an item contains a `Multilist` field named _links_, ​the site clone script fails, and an error is shown. | 526965 |
| If you create an item with many languages and _enableItemLanguageFallback_ is set to _true_, the sitemap takes a long time to load. | 527119 |
| If a user doesn't have read access to SXA JSS sites, the configuration for the SXA JSS sites is incorrect. | 528580 |
| If you personalize the component, changes for variant conditions are not saved. | 528882 |
| If you use an apostrophe in a facet value, the SXA _Checklist_ search filter does not work correctly. | 529041 |
| ​If you publish a cloned SXA item, there is an inconsistency in the user doing the publish operation. | 529400 |
| If you use the `Is download link` field in a rendering variant, the _Search Results_ component does not work. | 529903 |
| The `DictionaryCache` usage is not thread-safe. | 533273 |
| If you add nested items using a local data source, the items are duplicated for each context language. | 533662 |
| If you publish using Sitecore Publishing Service, subitems of default SPE/SXA items are not published as resources. | 536718 |
| ​The `publish:end:remote` event can throw an _Invalid event arg type: Sitecore.Data.Events.PublishEndRemoteEventArgs_ error. | 537078 |
| If the `Link Provider name` field is set to _switchableLinkProvider_, performance degradation occurs. | 537659 |
| If a _Scope_ uses a sort by date query, a _Specified time is not supported in this calendar_ error appears in the search results. | 539302 |
| The `og:image` URL is generated twice creating duplicate `hostNames`. | 540860 |
| The `Sitecore.XA.Foundation.Multisite.Services.PushCloneService.Move` method can throw a _​NullReferenceException_ error. | 542592 |
| If you load the email body of an EXM email, an _Uncaught TypeError: Cannot read properties of undefined (reading 'PageEditor')_ error is displayed. | 544266 |
| If you use _Creative Exchange_ to export a site with a custom link provider that is set with `alwaysIncludeServerUrl='false'`, the created content structure is incorrect. | 547159 |
| ​The _Container_ component's `Background Image` field is published by `sitecore\Anonymous`. | 549696 |
| ​​Some security vulnerabilities have been fixed. | 528929, 520366, 524045 |