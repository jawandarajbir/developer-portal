---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update4/Release_Notes
---


Release Notes
=============

**June 2017 – released Sitecore Experience Platform 8.2 Update 4 (rev. 170614)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| API | The scope of the _Caching.DebugEnabled_ setting on the _Remove(object key)_ and _Remove(Predicate predicate)_ methods has been extended. |   
 | 156443 |
| Configuration | In DEBUG mode, all the boosting logs are set to _Verbose_. |   
 | 96907, 453974 |
| Item Buckets API | The facet-related code was optimized for better performance. |   
 | 145292, 146428, 145306, 96751, 451348 |
| Miscellaneous | The _CdnPath_ and _CdnDebugPath_ URLs now use HTTPS. |   
 | 147276 |
| Web Forms for Marketers | When you create a form, the default engagement value is 100. |   
 | 162879 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| API | _DeviceItem.FindBestMatch_ does not fallback to the default device when an exception is raised in _MatchesRules_. |   
 | 150302 |
| API | An incorrect value in the _SourceItem_ field causes _GetItemUriFromSourceItem_ to fail. |   
 | 143799 |
| API | An incorrect value in the _\_\_Source Item_ field breaks all the API calls to the item.  |   
 | 153466 |
| Caching | The ItemCache is not updated after the _RestoreItemCompletedEvent_.   |   
 | 131115 |
| Content Editor | The Content Editor behaves unreliably when an item contains more than 255 fields. |   
 | 145054 |
| Content Editor | When you rename an item, its new name is not published. |   
 | 160787,161148,160040 |
| Content Editor | The field description is shown in the content language. |   
 | 109793 |
| Content Editor | Searching in the content tree opens an item in the default language. |   
 | 94798, 404768 |
| Content Editor | In the Media Library, the _Upload Files_ dialog fails to handle errors correctly and hangs when using Flash. |   
 | 125233 |
| Content Editor | The _Rebuild All_, _Rebuild Index_, and _Refresh Tree_ commands cause a serialization exception. |   
 | 141098 |
| Content Editor | If you insert a long text (more than 2000 characters) into any field, an exception occurs. |   
 | 156878 |
| Content Editor | Time is not shown in a _DateTime_ field. |   
 | 90361 |
| Content Editor | Breaking changes in the behavior of _UserOptions.View.UseDisplayName_ cause names in the content tree to be displayed incorrectly. |   
 | 154346 |
| ContentSearch.Azure | The ​Azure Search provider does not support full-text search.​ | 482343, 483099, 481732 | 157546 |
| ContentSearch.Azure | The _Take, Skip,_ and _Page_ methods do not work.​ | 479281 | 150080 |
| ContentSearch.Azure | Search queries may use the wrong syntax,​ ​​​ignoring​​​​​ Azure Search schema settings​.​ | 485228 | 162451 |
| ContentSearch.Azure | Exceptions occur when deleting non-existent documents​​​.​​ | 485681, 486771, 487667, 490105, 492778, 495086 | 162750, 164633 |
| ContentSearch.Azure | ​The \_content field must not be marked as retrievable​. |   
 | 161450 |
| ContentSearch.Azure | ​The _NotSupportedException_ exception is thrown when indexing the \_\_semantics fields.​​​ | 478680, 481403 | 146415 |
| ContentSearch.Azure | Collection fields contain old value in the index when emptied. | 482169 | 155653 |
| ContentSearch.Azure | ​​_CloudSearchDocumentBuilder_ is not taken from the documentBuilderType node of the index configuration.​​​ | 478680, 486819 | 146322 |
| ContentSearch.Azure | Linq provider parses a service response multiple times. | 479281 | 150103 |
| ContentSearch.Azure | CloudSearchProviderIndex queries are logged incorrectly​​ as DEBUG​ level.​ | 479281, 483094 | 147541 |
| Item Buckets | The Item Bucket sync job does not display a count of the processed units. |   
 | 96608, 448409 |
| Item Buckets Content Search | Content search tries to access the master DB from a CD server. |   
 | 141738 |
| Item Buckets Content Search | A _Multilist_ field that contains IDs without brackets is not indexed.  |   
 | 96010, 433710 |
| Language fallback | During buckets operations, an English version of an item is created when language fallback is enabled. |   
 | 149157 |
| Layouts and renderings | The layout delta is generated incorrectly for the _\_standard values_ and the additional attributes of the rendering of the context item. |   
 | 157536, 159275, 159276 |
| Layouts and renderings | Incorrect _Placeholder was not found_ warnings are added to the log file for cached renderings. |   
 | 100334 |
| Layouts and renderings | An exception occurs when you open the presentation details of a SPEAK item. |   
 | 96422, 442312 |
| List Manager | Importing csv files in the List Manager on xDB Cloud was slow and has now been improved. |   
 | 149805 |
| Media | In some scenarios, media items with the same name are not overwritten when _Upload.SimpleUploadOverwriting=true_. |   
 | 145832 |
| Miscellaneous | On slow environments, AlarmClock breaks processing. |   
 | 161393 |
| Miscellaneous | On the Sitecore Desktop, the _Control Panel_ shortcut opens the _Log Viewer_ application. |   
 | 145105 |
| Miscellaneous | The _AddToPublishQueue_ method does not work with the Oracle data provider. |   
 | 154851, 158554 |
| Miscellaneous | The _XFrameOptionsHeaderModule_ module picks up front-end requests. |   
 | 122317 |
| Miscellaneous | When _SitecoreADMembershipProvider_ is configured, the application crashes when you attempt to log in. |   
 | 139945 |
| Miscellaneous | During password recovery, sending an email can fail silently without entering an exception in the log file. |   
 | 103775 |
| Miscellaneous | In the Export language wizard, the _Download_ button doesn't work if the path to the language file doesn't contain the '/' symbol. |   
 | 116714 |
| Miscellaneous | A direct link to a folder can cause a _NullReferenceException_. |   
 | 149586 |
| Miscellaneous | An authenticated user is redirected to the login page when they access an item that they don't have read permission for. |   
 | 127175 |
| Miscellaneous | When you click the _Forgot your Password_ link, an exception occurs when you reset the password in the German and Danish languages. |   
 | 124719 |
| Miscellaneous | An incorrect client IP is displayed when the Sitecore servers are behind a proxy load balancer.  |   
 | 136023 |
| MVC | Anonymous users can preview an unpublished version of an item that has an MVC layout​​. |   
 | 153472 |
| Performance | There is a memory leak when _Caching.CacheKeyIndexingEnabled.AccessResultCache=true_. |   
 | 153306 |
| Performance | The number of records in the log file that are created by the _IndexDependentHtmlCacheManager_ class has been minimized. |   
 | 95130, 412932 |
| Publishing | Old blobs are not deleted from the web database when it is published. | 93755 | 93755, 385967 |
| Publishing | If the shared field of an item is changed, too many entries appear in the _PublishQueue_. |   
 | 146630 |
| Publishing | The _Object reference not set to an instance of an object_ exception sometimes occurs when publishing items. |   
 | 94993, 409190 |
| Publishing | Tracing failed requests break publishing. |   
 | 95730, 428310 |
| Rich Text Editor | The _Format HTML_ command doesn't work. |   
 | 91462, 336490 |
| Security API | When a user tries to upload a file to the Media Library, an unhandled exception occurs. |   
 | 148993 |
| Security API | Enabling _Failed Request Tracing_ can cause the _RemoveFromActiveList_ in MediaCache to fail. |   
 | 96555, 447399 |
| Security API | Enabling _Failed Request Tracing_ can cause RuleCache clearing to fail. |   
 | 96556, 447400 |
| Security API | Enabling _Failed Request Tracing_ can cause a rule which operates with items to fail to execute. |   
 | 96557, 447401 |
| Solr | Escape characters generate an incorrect query. |   
 | 131992 |
| Solr | Search terms that contain dashes "-" give incorrect search results. |   
 | 147167 |
| Solr | A language specific field is not created in the default language for items. |   
 | 148802 |
| Web Forms for Marketers | Creating a new field in a blank form throws a _\[NotSupportedException: Collection is read-only.\]_ error. |   
 | 139810 |
| Workbox | When you move an item from one workflow state to another, the Workbox lists the old workflow state as "?". |   
 | 91681 |
| Workbox | In the Workbox, the Content Editor does not open correctly when _addAspxExtensionis=false_. |   
 | 93149, 375687 |