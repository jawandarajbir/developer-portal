---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update5/Release_Notes
---


Release Notes
=============

**August 2017, released Sitecore Experience Platform 8.2 Update 5 (rev. 170728)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Configuration | ​Sitecore CMS​ is now FIPS compatible.​  
Note: FIPS is only supported in CMSOnlyMode and it does not work with XDB enabled functionality. |   
 | 92850, 371339 |
| Marketing Foundation | The Mongo .NET driver has been upgraded to version 2.4.4. |   
 |   
 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| API | ​​​The Template item is created in the default language instead of the content language.​ |   
 | 93789, 386244 |
| API | ​Enabling the _ItemCloning.RelinkClonedSubtree_ setting does not ​​work when accepting the _ChildCreatedNotification_ ​notification.​​ |   
 | 143267 |
| API | ​The ReflectionUtil.LoadAssembly method places an excessive load on the file system.​​ |   
 | 164945 |
| API | ​The XSL watcher causes an ​​_InternalBufferOverflow_ ​exception. |   
 | 165124 |
| API | The ​_Login_ page calls an external resource.​ |   
 | 163328 |
| API | ​The performance of the Logger functionality is slow. |   
 | 171429 |
| API | The ​_LinkManager.GetDefaultUrlOptions_ method ignores the _SiteResolving_ setting in the _web.config_​ file. |   
 | 92682, 367702 |
| API | In the _GetQueryable_ method, ​_CultureExecutionContext_ does not affect field name translation. ​ |   
 | 155596 |
| API | When access to fonts.googleapis.com is disabled, users wait too long for a timeout. |   
 | 160615 |
| Caching | ​The _Sitecore.Caching.CacheManager.FindCacheByName(string)_ method does not work properly.​ |   
 | 157082 |
| Caching | The _​​PathCache_ cache is no​t cleared after publishing​. |   
 | 169501 |
| Configuration | ​Sitecore does not work when a site name starts with a number and some attributes are missing. ​ |   
 | 131829 |
| Content Editor | ​The _RequireLockBeforeEditing_ setting and disabling write permission does not work for the following field types: droptree, treelist, treelistEx, droplink, grouped droplist, and grouped droplink. |   
 | 163859 |
| Content Editor | The _Multilist with Search_ field does not work with the _EditFrame_ control. ​ |   
 | 108890, 106439 |
| Content Editor | ​When the _RequireLockBeforeEditing_ setting is set to false, the _Edit_ button and workflow actions are disabled. |   
 | 131668 |
| Content Editor | ​Replacing tokens does not work for base items in languages that have a fallback language set​.​ |   
 | 158413 |
| Content Editor | ​The _\_\_Source Item_ field is not excluded from indexing. ​ |   
 | 164087 |
| Content Editor | ​A wildcard item (\*) cannot be resolved if the path to the item contains any items with a display name when the _ItemResolving.FindBestMatch_ setting is set to _DeepScan_. |   
 | 166890 |
| Content Editor | ​Search operations do not respect the context item. ​ |   
 | 166639 |
| Experience Analytics | The analytics reducer agent clears all the caches on the servers, instead of clearing just the analytics-related caches.​ |   
 | 21517 |
| Experience Analytics | ​Some charts do not cap the number of results displayed and, as a result, these charts are unreadable. |   
 | 168419 |
| Item Buckets Content Search | Update operations for _IEnumerable<iindexableuniqueid>_ produce excessive commits.​​​​​​​​ |   
 | 142962 |
| Item Buckets Content Search | ​​The Solr FieldMap is not thread safe.​​ |   
 | 168850 |
| Item Buckets Content Search | ​The following Search operations do not respect the start item: Move results to, Copy results to, Clone results to, and Delete results. |   
 | 170415 |
| Item Buckets Content Search | Escaping ​​symbols cause an incorrect query.​ |   
 | 131992 |
| Item Buckets Content Search | The ​​​_IndexingStateSwitcher_ floods the​​ log files​.​​ |   
 | 142961 |
| List Manager | ​​An incorrect list count is displayed in large lists. | 173622 |   
 |
| Marketing Foundation | ThreadAbortException can stall an historic rebuild process.​ |   
 | 169825 |
| Miscellaneous | ​​​Error levels on the client side are incorrectly set to _Fatal_ instead of _Error_. |   
 | 165961 |
| Platform | ​​​If you modify a lot of files in the wwwroot folder, it can bring down the website. |   
 | 170790 |
| Publishing | ​A deleted language version of an item in the master database exists in the web database after publishing.​ |   
 | 165460 |
| Publishing | ​Smart Publishing does not unpublish invalid item versions.​ |   
 | 162501 |
| Rich Text Editor | ​Empty <a> tags in a RTE field cause a field rendering error. |   
 | 149817 |
| Sitecore.ContentSearch.Azure | ​Azure Search responds with 207 Partial Content when all the documents cannot be processed​. |   
 | 169846 |
| Sitecore.ContentSearch.Azure | ​Searching with fractions does not work. |   
 | 173999 |
| Sitecore.ContentSearch.Azure | ​Search operations degrade performance. | 488394 | 173202 |
| Sitecore Services Client | ​The _IsAuthenticated_ property is false when token authorization is used​. |   
 | 166698 |
| Sitecore Services Client | The _AnonymousUserFilter_ filter only checks extranet domain users. |   
 | 166739 |
| Sitecore Services Client | ​​There are double references in the _Sitecore.Services.Infrastructure.dll_ file to _System.Web.Http_.​​ |   
 | 169514 |
| SPEAK | ​The Uploader does not work if the _DestinationUrl_ property contains a GUID rather than a path. |   
 | 149701 |
| SPEAK | ​The Uploader control allows the end user to upload files even after their session has expired. |   
 | 150101 |
| SPEAK | ​The _Upload Media_ dialog ignores the _Media.UploadAsVersionableByDefault_ setting. |   
 | 162905 |
| SPEAK | ​When using a SPEAK application and logging out, Sitecore sometimes sends a request which returns the user to the Login page, rather than back to the visitor site. |   
 | 116855 |
| xDB and Content Delivery | Mongo driver has been upgraded to version 2.4.4, it is possible to reduce connection open timeout now. |   
 | 151475 |