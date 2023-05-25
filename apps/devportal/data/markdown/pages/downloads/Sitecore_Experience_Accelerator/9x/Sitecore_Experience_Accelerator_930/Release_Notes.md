---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/9x/Sitecore_Experience_Accelerator_930/Release_Notes
---


Release Notes
=============

**November 2019 – released Sitecore Experience Accelerator 9.3.0**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

Highlights
----------

*   A new command line interface has been introduced to improve theme creation and configuration.
*   The Scriban templating engine has been added to the _Rendering Variants_ to give greater flexibility with generated HTML.

New feature/improvements
------------------------

| Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- |
| ​​You can now filter the items in the `ceExport.pageValidation` pipeline before they are exported with Creative Exchange. |  | 257357 |
| ​​The Creative Exchange Live tooling is now available as an NPM package​. |  | 291709 |
| All the variant fields no longer render a tag when the _Tag_ field is empty, and this produces cleaner HTML​​. | 521564, 529338 | 298945 |
| ​​A new command line interface has been introduced to improve theme creation and configuration. |  | 318366 |
| ​​A new _Aggregated Facet Filter_ component has been added​. |  | 319304 |
| A new _Facet Summary_ component has been added​.​​ |  | 319332 |
| The _Creative Exchange Live_ tool can now be configured to not upload partial CSS and JS sources files​. |  | 324423 |
| ​​Search filters are now hidden automatically if no facet values are available for them​. |  | 329848 |
| ​​The Basic2 theme is now available as an NPM package on Myget​. |  | 350089 |
| The Scriban templating engine has been added to the _Rendering Variants_ to give greater flexibility with generated HTML.​​ |  | 335204 |
| _Available Renderings_ items for Sitecore Forms items are no longer named in an ambiguous manner. | 533088 | 342636 |
| You can use Creative Exchange to export and re-import Scriban templates.​​ |  | 335198 |
| You can now add custom scaffolding actions to the site/tenant deletion process and execute additional code both before and after an SXA site or tenant is deleted.​​ |  | 335647 |
| SXA now supports basic editing of its pages in Horizon​.​​ |  | 336607 |
| Creative Exchange Live tooling is now available as NPM packages​. |  | 338480 |
| ​​You can now configure the number of characters that you must enter in the Search Box before it starts to make suggestions. |  | 337434 |

Resolved issues
---------------

The following issues have been fixed:

| Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- |
| When you use the _Layout details_ dialog to add placeholder settings, an error occurs. ​​ | 531965, 539472 | 247421 |
| ​​If the host name in the site definition includes a wildcard and a pipe character, the _500 Server Error_ page does not load. | 522592 | 302462 |
| _Composite Renderings_ do not work properly with _Content Testing_​. | 523633, 539092 | 306852 |
| ​​Composite specific _Rendering Variants_ are missing when you edit components that are embedded in the composites on a page​. | 524258, 432118 | 307728 |
| In _TreeView​_, the image thumbnail is not displayed.​​ | 523866 | 309346 |
| Any changes that you make to the ​_Editable_ settings of a placeholder are not reflected in a composite rendering​. ​​ | 524834, 535481 | 312679 |
| ​If you clone a rendering and the name of the new rendering does not form a valid path, ​it throws an uninformative error. | 525163, 529142 | 313420 |
| The _Asset Optimizer_ always adds a _?t=_ URL parameter even when other parameters are already defined​.​​ | 526061 | 313636 |
| When a page is rendered as JSON​, some characters are not correctly escaped.​​ | 526250 | 313759 |
| ​​​In the _Search box_ component, when you search for words that contain hyphens, the search does not return all the results. | 528811 | 313772 |
| _Link List_ does not work properly with language fallback​. | 525413, 537445 | 314016 |
| The _Checklist_ filter does not work with the _SxaTags_ facet in Azure Search​.​​ | 525702 | 314018 |
| ​​To facilitate load balanced environments, the _TargetHostName_ provided in the site definition is now used to generate links in the _sitemap.xml_ file rather than in the request host. | 526026 | 315140 |
| If you use the _Sitecore Form Wrapper_ with Sitecore Form, it causes a Javascript error​.​​ | 526784, 526786, 530484, 532466, 537859, 541268 | 315587 |
| When you clone a site, the _Signature_ field of a Partial Design is not updated correctly. | 525457 | 317458 |
| The _Page Selector_ makes several calls with ampersands in a query​.​​ | 527320, 531899 | 317982 |
| ​​The _LocalizableLinkProvider_ property does not respect the scheme setting at site level. | 526921, 529916, 530049, 537040, 539511, 540436 | 318160 |
| The _Toolbox_ is not rendered in IE 11​.​​ | 527313, 527979, 531585, 536673 | 318179 |
| An infinite recursion can occur in the `GetXmlBasedLayoutDefinition.InjectCompositeComponents` method due to the way that fallback device is configured. | 527534 | 318645 |
| The _Grid size_ settings do not influence the size of the _Map_ component. | 527068 | 318823 |
| ​​The scrollbar in the _Toolbox_ is not updated when you resize the window. | 530909 | 328249 |
| The _Learn More_ link is not displayed in the cookie message.​​ |  | 327034 |
| In the Content Editor, in the Rich Text Editor, you cannot add StyleLabs media. |  | 333595 |
| The _Search Filter_ dropdown does not support special characters.​​ | 530615 | 334356 |
| ​​In the _Location Filter_ component, _Mixed_ and _Location_ modes do not trigger a search​. | 529524 | 326012 |
| In the `sitemap.xml` file, the scheme for links is taken from the request rather than from the site configuration​.​​ | 529916, 530221, 537040 | 329878 |
| The `Sitecore.XA.Feature.ContentTokens.config` file can conflict with custom configurations​. | 529123 | 323807 |
| When you use the Bootstrap 3 grid, the Glyphicons fonts are missing.​​ | 529403 | 325475 |
| ​​When _Navigation_ component is embedded in rendering variants, it doesn't render the appropriate fields. | 529875 | 325707 |
| Facet filtering does not work on Solr if the facet value contains a space.​​ |  | 362577 |
| When personalization is applied, `rendering.DataSource` is null. | 540959 | 362374 |
| When you run the upgrade script, an exception is thrown by the `SaveCompositeItems` handler.​​ | 538394, 538394 | 356460 |
| The SXA datasource selection dialog overrides the default dialog for non-SXA sites without exposing the full functionality required to complete the task.​​ | 539268, 540792 | 355958 |
| ​​If you embed a component in the _Search Results_ rendering variant, it throws a null database exception. | 531466 | 338019 |
| If the title of a search facet contains a _+_, it does not return any results in _Search Result_ component.​ | 533234 | 337480 |
| ​​Reusable snippets are not published​. | 524074, 524313, 539479, 540326 | 339908 |
| `Sitecore.XA.Foundation.Publication.dll` references a non-existant Publishing Service assembly.​​ | 538862, 541683 | 354891 |
| The `sitemap.xml` file contains redundant language URLS.​​ | 533334, 534193, 537473, 538300, 539766 | 335397 |
| Renderings are not saved in the _Accordion\\Tabs_ components. | 537157 | 353118 |
| ​​The `sitemap.xml` file contains URLs with a double hostname when you use the default link provider​. | 532088, 536328 | 337372 |
| In a multisite setup​, if you set the sitemap mode to _Stored in file_, only a single sitemap is generated.​​ | 533307, 533318, 537472 | 336464 |
| ​​In a partial/page design, personalization rules that change the data source of an item do not work. | 533915 | 337972 |
| If you use the Azure search provider​, the _Distance_ facet ignores the scope of the search. | 533796 | 340597 |
| ​​If you run search queries against the SXA search indexes​, a _MissingMethodException_ can be thrown. | 534017, 534897, 535109 | 341746 |
| The SXA _Video_ component shows a low resolution image on large screens​.​​ | 534070 | 342282 |
| ​​If you use Creative Exchange for pages that are not in the _English_ language​, CSS styles are not imported back. | 534713, 536058 | 342611 |
| The `Sitecore.XA.Foundation.Multisite.EventHandlers.HttpRoutesRefresher.PopulateRoutes()` method does not acquire a write lock before it updates routes. | 536552, 539039 | 352832 |
| If you change the template of the original item, the template of its cloned items is not updated.​​ | 535517 | 342776 |
| In Sitecore Forms, the checkboxes and radio buttons are not displayed correctly and cannot be used. ​​ | 534937, 540849 | 342993 |
| The _Results Count_ rendering does not support the _Search Signature_ parameter.​​ | 535508 | 343754 |
| ​​If you modify a _Component_ under the /sitecore/templates/Branches/Feature/Experience Accelerator item, a System.NullReferenceException is thrown. | 536329 | 345408 |
| If you delete classes in the HTML, importing with Creative Exchange does not remove these classes from the components. | 535315 | 343793 |
| If sites are not added to the SXA site registry, a large number of sites can result in a long warm-up time for the server.​​ | 535722, 535910 | 346210 |
| If a partial design is stored inside nested partial design folders, multiple placeholder wrappers created.​​ | 535487 | 347552 |
| ​​If a sitemap is stored in a file, only one sitemap file is generated for the whole Sitecore instance.​ |  | 334534 |
| During the SXA site scaffolding, if no _Insert Options_ are defined for a template, a Powershell error occurs.​​ | 531135 | 331514 |
| If you unlock a content page, the c​omposite datasource subitems remain locked. | 529122, 531509, 537040 | 324927 |
| ​​A component that is embedded in a _Rendering Variant_ will display error on a page if the component is not fully configured​. |  | 333646 |
| When the URL for a facet is created, _q=_ is added twice and this breaks the filter components. ​​ | 530947, 541075 | 332347 |
| A Geolocation search does not include associated content in the search.​​ | 536929 | 347831 |
| `​​resolveRenderingDatasource` is not called when trying to resolve an item query for a _Page List_ component. | 537465 | 349142 |
| Creative Exchange does not to create a CSS class for the rendering inside a snippet that is defined for a partial design. | 534713 | 348752 |
| Creative Exchange can fail when it is called from the API.​​ |  | 349905 |
| ​​Regular JSS sites don't have the option to create a new datasource when SXA is installed. | 537652, 539268 | 352703 |
| Delegated areas do not support Item Buckets.​​ | 537715 | 350376 |
| The _Range Slider_ filter does not work when multiple fields are defined in a facet item.​​ | 538017, 541075 | 350835 |
| The _Page Selector_ makes several calls when a query contains special symbols.​ | 531899 | 351678 |
| In a scaled environment, duplicate optimized files can be generated.​​ | 537204 | 351658 |
| ​​Workflows for multi-language delegated areas contain inconsistent values. | 537991 | 351396 |
| In a _Container_ component that has custom placeholder settings defined, incorrect placeholder names are displayed. ​​ | 532303, 538817, 539505 | 333663 |
| ​​_FullSize mode_ for YouTube videos is not available on Android devices​. | 530214, 537040 | 331135 |
| A static error page can be generated for the wrong site. | 526257, 528873 | 322199 |
| ​​Creative Exchange export that is performed on an Apple computer cannot be imported correctly on a Windows computer. |  | 309580 |
| If a target hostname is specified​​, the OpenGraph `og:url` metatag is displayed without encoded spaces.​​ | 542859 | 367756 |
| ​​The _Responsive Image_ renderer does not work with the _Reference_ renderer​. |  | 354642 |
| When the search results are empty​, the _Checklist_ filter is not cleared. | 537015 | 351616 |
| ​A Page List that uses Item Query does not resolve sxa: tokens. | CS0155960, CS0217612 | 324371 |