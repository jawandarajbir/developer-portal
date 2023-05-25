---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Accelerator/18/Sitecore_Experience_Accelerator_181/Release_Notes
---


Release Notes
=============

**April 2019 – released Sitecore Experience Accelerator 1.8 Update 1(rev. 190319)**

Sitecore Experience Accelerator (SXA) enables parallel work streams (content, creative design, UX, coding) to not only reduce the time required to produce a website, but also improve the quality by allowing all contributors to validate each other's contributions. SXA provides reusable user experience layouts and components that are fully integrated into the Sitecore editing experience.

New feature/improvements
------------------------

| Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- |
| In the Content Editor, the tooltips for the _Tags_, _CSS Class_, and _Data Attributes_ fields have been improved. | ​​ | 250866 |
| The _Variant_ tag is no longer rendered when the tag is not selected. | 515121​​ | 253519 |
| You can now pass the _Rendering Variant_ model object to the _RuleContext_. | ​​ | 296284 |
| ​You can now skip scanning for related items in the _AggregatedContent_ computed field by inheriting from an additional data template. | ​​​ | 297946 |

Resolved issues
---------------

The following issues have been fixed:

| Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- |
| The _Location finder_ is not pre-populated with the locations based on the geo-coordinates in the URL. | ​​509173 | 247183 |
| The gallery splash image for video services other than _YouTube_ is not shown in some geographical locations. | ​​516834 | 247273 |
| The _Server Error Page_ should return HTTP code 500 instead of 200. | ​​ | 247325 |
| ​On a mobile device, a visitor is unable to swipe up or down in the _Carousel_. | 40805​​​ | 250221 |
| The _Date Picker_ component should use the current context language to display translated calendars. | ​​514515 | 250618 |
| The _Variant_ tag should not be rendered when the tag is not selected​. | 515121​​ | 253519 |
| The _Multiroot Treelist_ item selector does not support multiple roots. | 515219​​ | 253926 |
| The _Data source_ of a rendering is always created in the English language instead of the current language​ of the page. | ​​514683, 518445, 518957, 521666 | 254850 |
| In the _EXM Experience Editor_, in the _Data source_ dialog, the _Create_ button doesn't work correctly. | 516129, 518595​​​ | 255361 |
| In the _Internal Link_ field, the _Edit link experience_ button does not show a link selection dialog. | 515600​​ | 255525 |
| Facet filters do not pass the _Item ID_ to the server and this results in the wrong indexes being queried. | ​​520809 | 255689 |
| When handling a 500 error, the _customErrors_ setting in the _Web.config_ file is not taken into account. | ​​516062 | 255691 |
| The placeholders of a shared site are not listed in the _Placeholder settings_ dialog. | ​​516611 | 256433 |
| The _Local Placeholder_ setting displays incorrect names for dynamic placeholders​​. | 517440​​​ | 258360 |
| When you select a variant of a component, no value is displayed. | 517688​​ | 286579 |
| Fields with GUID based values in an SXA site are not properly replaced when the site is cloned. | ​​517886 | 287628 |
| The content in a snippet can't be removed if the snippet is in a splitter component​. | ​​517827 | 287678 |
| The _Image_ component defaults to _style="margin: 0px 0px"_ if the _Space_ settings of the image are empty. | ​​​518291 | 288593 |
| In SXA, search only works for items under the _Home_ site. | 518430​​ | 288824 |
| A _SectionVariant_ with the _IsLink_ field selected, throws a Null exception if the _Field used as link target_ field of the datasource item is not set. | ​​518301 | 289780 |
| In preview mode, the _Accordion Item 1_ text is not fully displayed in the rendering. | ​​ | 289932 |
| In the Experience Editor, if the tenant name contains a hyphen, the _Site Page Designs_ button returns an error. | 518303​​ | 289938 |
| You cannot remove or add components from a snippet in any language​ other than the UI language. | 517827, 521866​​​ | 290142 |
| When you publish, the caching options may not be properly flushed because the wrong site is resolved on the CD server. | ​​517830, 523390 | 290325 |
| SXA cross-site links do not work if the links are defined in different domains​. | ​​ | 290329 |
| In the Experience Editor, media items that are uploaded from a _Rich Text_ component, are not created in the context language​. | 518949​​ | 290662 |
| When you apply personalization to an SXA rendering, the _Solr Error : \["undefined field local"\]_ error is shown. | 516932​​ | 290802 |
| In the _Creative Exchange Export settings_ dialog, unexpected additional sites may be displayed in the _Site context_ section. | ​​ | 293640 |
| The _Insert link _window doesn't show the current site's home node and it's child items.__ | ​​519867, 522154, 523301, 523870 | 293880 |
| A page does not inherit the placeholder settings that are defined for a Partial Design​. | ​​519571 | 293964 |
| In a _Snippet_ component, nested data sources are not searchable.​ | 519933​​​ | 295374 |
| Search does not work with a facet when it has a space in its name. | ​​520829 | 298497 |
| The _Inheritance_ computed index field causes a _NullReferenceException_ when you rebuild the _analytics_ index. | 521422​​ | 300208 |
| Links in a _Rich Text_ field are rendered incorrectly in the _Privacy Warning_ component. | ​​521839 | 301848 |
| ​When you use the _Bootstrap 4_ grid, an extra unwanted row class is added around some placeholders. | ​​522563, 522590 | 301904 |
| When you create a new version of an item that is cloned using the _Delegated Areas_ feature, a permissions issue causes an error. | 520423​​ | 296374 |
| When you enter special characters like _&_ or _?_ in the _Search_ box, no results are returned and a JavaScript error appears in the browser console. | ​​516898 | 257237 |
| The multisite link provider can cause problems when generating a customized error page. | 520345​​ | 295034 |
| The following error appears in the Internet Explorer​ browser console: _Object doesn't support the property or method 'parseInt'_. | ​​​520179, 521301, 525215 | 295759 |
| A potential memory leak is caused by using a platform method that is not suited for production code. | ​​522137 | 300071 |