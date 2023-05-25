---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update7/Release_Notes
---


Release Notes
=============

**April 2018 – released Sitecore Experience Platform 8.2 Update 7 (rev. 180406)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Experience Analytics | ​​The ability to truncate query strings for URLs in page related dimensions has been added. |  | 19666 |
| Marketing Foundation | ​The _Contact Segmentation Index_ was updated to be compatible with the _Right to be forgotten_ feature.
This includes cases where tags, pages, and page event documents should be removed, as well as cases where the updates would have been ignored because of the setting to avoid indexing anonymous contacts|  | 210484 |
| Marketing Foundation | ​To enable an organization to implement the _Right to be informed_ as part of GDPR, the new _Sitecore.Analytics.Model.Entities​.IGdprStatus_ contact facet has been added. This facet contains the _ExecutedRightToBeForgotten_ boolean field that indicates whether the _Right To Be Forgotten_ has been executed for the contact. The facet also contains the _PrivacyPolicyAcknowledgement_ collection that contains an audit trail of when the contact acknowledged the organization's privacy policy. Each item contains the following fields:

*   Agreement Date - the date when the customer confirmed that they agreed to the organization's latest privacy policy.
*   Policy Identifier - the unique identifier for the policy. This can include the version number.​

​ |  |  |
| Marketing Foundation | A new pipeline _initializeMongoDbCollectionsIndexes _has been introduced that enables you to customize the initialization of the MongoDB indexes. It is run during Sitecore instance initialization process. You can extend the pipeline to ensure that all the required indexes are included or to drop obsolete index​es from the MongoDB collection.​__ |  |  |
| Marketing Foundation | ​To enable an organization to implement the _Right of access_ and the _Right to data portability_ as part of GDPR, the contact repository API was extended to retrieve the complete interaction history of a given contact. The _Sitecore.Analytics.Data.ContactRepositoryBase.GetInteractionCursor_ method can be used to enumerate the contact's historical interactions, loading them in batches of a desired size.​ |  | 201445 |
| Marketing Foundation | ​To enable an organization to implement the _Right to be forgotten_, a new _removeContactPiiSensitiveData_ pipeline has been implemented. |  | 201445 |
| Marketing Foundation | The default interval between attempts by Shared Session State to place a lock on a contact has been increased from 10 to 200 milliseconds to avoid unnecessary use of Shared Session Store resources. |  | 196356 |
| Marketing Foundation | ​​The _Sitecore.Analytics.ExcludeRobots.config_ file has been extended with new user agents for the _Googlebot/2.1_ and _BUbiNG_ bots. |  | 197618, 197619 |
| Sitecore.ContentSearch.Azure | To avoid downtime, you can now switch Azure Search indexes on rebuild. ​ | 495279, 486505, 485220, 493588, 491750, 478130, 485664, 484750 | 146822 |
| Sitecore.ContentSearch.Azure | ​​Azure Search now allows fields with the same name and different types to be stored next to each other in the index.​ | 483540 | 164142, 170084, 170254 |
| Sitecore.ContentSearch.Azure | ​Azure Search now supports indexing in several languages. |  | 151795, 156686 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| API | ​The _General Link Anchor_ saves to the wrong target. |  | 183327 |
| API | ​The roles assigned to a virtual user are lost if the user is redirected to another server. |  | 196266 |
| API | ​The order of the renderings changes when you remove a rendering from a layout. |  | 201886 |
| API | ​​Loging in when the _DisablePasswordRecovery_ setting is set to true breaks the _login.js_ file.​ |  | 193491 |
| API | Profile changes for virtual users are not shown unless you clear the _UserProfileCache​_. |  | 193799, 216247 |
| API | ​Automatic type conversion for _IEnumerable_​ doesn't work in the default Solr configuration.​ |  | 197659 |
| API | ​The _LinkUpdaterJob_ job updates links for the same item multiple times. |  | 192299 |
| Content Editor | ​​The _TreeListEx_ field type does not respect _ReadOnly_ permissions. |  | 94701, 402909 |
| Content Editor | ​You cannot expand sections in the Content Editor that contain non-ASCII characters. |  | 93699, 385145 |
| Content Editor | ​​Parameters are not sent to the _QueryState_ method. |  | 93409, 380595 |
| Content Editor | The _Gallery.Icons_ control is broken and does not pop up correctly. |  | 202331 |
| Content Editor | ​​The _Check in_ command only unlocks the latest version of an item in the Content Editor. |  | 207331 |
| Content Editor | ​​You always get old field values inside a validator. |  | 91313, 333285 |
| Content Editor | ​On the _Developer_ tab, the _Serialize Tree_ button throws an exception when there are big trees of items. |  | 95200, 415261 |
| Item Buckets Content Search | ​Fields with standard values are not indexed when the _indexAllFields_ setting is set to _false_.​ |  | 408318 |
| Language Fallback | ​​Disabling item language fallback on an item leads to outdated documents in indexes. |  | 154372 |
| Language fallback | Adding a new version of an item and publishing it removes documents in the fallback languages of the item from the web index. ​ |  | 153722 |
| Layouts and Renderings | When you publish a clone item, the final layout changes are missing. |  | 199088 |
| Layouts and Renderings | ​The delta for the _Final renderings_ field isn't updated for a different language if the _Renderings_ field is changed.​ |  | 196571 |
| Links | ​​The _EditingNotAllowedException_ exception occurs in rendering parameters. |  | 94858, 406071 |
| Links | _RemoveBrokenLinks.aspx_ does not work correctly. |  | 103875 |
| Links | ​​When you add an anchor to a link in the RTE, it may appear in the middle of the query string instead of at the end. |  | 120848 |
| Marketing Foundation | Historical aggregation only runs in a single thread.​ |  | 199888, 96210 |
| Marketing Foundation | During historical rebuilding, if you copy definitions with the _RebuildTargets_ setting set to _Index_, exceptions occur.​​ ​ |  | 196778 |
| Marketing Foundation | ​​The contact lease for the contact {GUID} exception is now renewed properly when the contact reaches the max page count threshold during one visit. |  | 198208 |
| Marketing Foundation | ​A contact value may be lost if it is assigned after the contact reaches the _MaxPageIndexThreshold_ during a parallel session. |  | 208784 |
| Marketing Foundation | ​Tracker.Current.Session.Identify performs a MergeVisits operation that can exceed the MongoDB sort operation memory usage limit. |  | 142272, 104465 |
| Marketing Foundation | ​A newly created campaign name is displayed as _$name_ in the _Attributes_ dialog, if the campaign item does not have a version in the default language. |  | 108531 |
| Marketing Foundation | ​​It is impossible to configure the timeout for the web request created by _Sitecore.Analytics.Commons.ConfigurationBasedHttpTransportFactory_. |  | 109562, 110296 |
| Marketing Foundation | During the _History Rebuild_ process, copying the definitions fails if _Rebuild Targets_ is set to _Index_. |  | 196778 |
| Media | ​Media hash generation change doesn't work correctly. |  | 192711 |
| Media | ​You cannot detach file-based media items.​ |  | 192625 |
| Miscellaneous | ​If you add an anchor to an internal link, it doesn't appear in the rendered link tag.​ |  | 202562 |
| Miscellaneous | ​FieldEditor validation does not run correctly. |  | 90837, 322849 |
| Miscellaneous | ​​The _virtualFolder_ site setting doesn’t work properly if the _physicalFolder_ property is not specified. |  | 91335, 334079 |
| Miscellaneous | ​The raw URL is encoded twice in the _HandleItemNotFound_ method. |  | 91478, 336908 |
| Miscellaneous | ​The website is resolved incorrectly when it's hostname is a substring of the requested hostname. |  | 91535, 338338 |
| Miscellaneous | ​The _DateTimeMacro_ does not switch to the selected date/time. |  | 94423, 398199 |
| Miscellaneous | Inline closing tags in HTML are removed and validation fails. |  | 139799 |
| Miscellaneous | ​Mixing display names with item names that contain hyphens causes links to break. |  | 163173 |
| Miscellaneous | When the user selects an item with a detached file-based media item, the logging message level has been changed from _Error_ to _Warning_.​ |  | 173436 |
| Miscellaneous | When you access an item with an MVC layout in the Experience Editor, the _The Controls collection cannot be modified_ error occurs. |  | 176688 |
| Miscellaneous | ​​The _RemoveLink_ method in the _Layout_ field doesn't delete every broken link. |  | 188475 |
| Miscellaneous | ​The _HashEncryption_ class is not thread safe. |  | 190277 |
| Miscellaneous | ​The _ContextCache_ does not have any scavenging functionality and this can cause the _OutOfMemoryException_. |  | 191831 |
| Miscellaneous | ​There are too many _disabled_ attributes in field controls.​ |  | 194585 |
| Miscellaneous | ​Implement a lock-free _DocumentTypeMapCache_. |  | 195244 |
| Miscellaneous | ​The grid view goes out of alignment when you add a new field to the search results. |  | 200327 |
| Miscellaneous | ​​The _item:saved_ event is fired more than once when you create items or add new versions. |  | 95306, 417978 |
| Miscellaneous | ​The _LanguageFallbackFieldValuesProvider.IsValidForFallback_ method ignores the standard value of the _Enable Shared Language Fallback_ field. |  | 105327 |
| Miscellaneous | ​Field level fallback indexing fails to update the fallback value when the original value is changed.​ |  | 130860 |
| Miscellaneous | When using the _Redis session state_ provider, a non-optimal mechanism for processing expired sessions data causes Sitecore to crash due to the heavy load. | 500283 | 204592 |
| Multibrowser fixes | ​The Rule Editor does not show the scroll bar. |  | 94730, 403632 |
| Multibrowser fixes | ​​Changing the sort order of an item creates a new version of the item. |  | 93017, 373687 |
| Multibrowser fixes | ​The Rich Text Editor incorrectly processes a _Delete Line_ operation in the HTML. |  | 93773, 386098 |
| Path Analyzer | ​​The standard values for Path Analyzer maps have a broken link that prevents you from deploying new maps. |  | 196134, 213960 |
| Pipelines | ​​The _rootItem_ is displayed instead of the _Login_ page when the visitor does not have permission to access an item. |  | 96219, 437738 |
| Publishing | Adding templates to the queue in the publish pipeline does not publish the templates correctly. |  | 94747, 404036 |
| Publishing | Templates with sections and fields are not published when the _Related Items_ check box is selected.​ |  | 94877, 406474 |
| Publishing | ​The _Publish related items_ feature publishes an item template without its subitems (sections, fields, \_\_StandardValues)​.​ |  | 94883, 406573 |
| Publishing | ​_Sitecore.Data.Items.ItemPublishing_ clogs up the _ContextCache_ with _null_ values during publishing. |  | 191837 |
| Publishing | ​The _Publishing Restrictions_ dialog causes unnecessary item re-saves.​ |  | 200552 |
| Rich Text Editor | ​The modal window of the Rich Text Editor is truncated if it is opened on a tablet device. |  | 131835 |
| Security API | ​There is double encoding in the _Sitecore.Pipelines.RenderLayout.SecurityCheck_ processor​. |  | 91438, 336004 |
| Sitecore.ContentSearch.Azure | ​Search results only contain 50 items by default. | 492451, 491431, 481646, 479281, 497256, 495805, 492125 | 147550, 147551 |
| Sitecore.ContentSearch.Azure | ​In the Content Editor, when a user filters search results by language, the filter is not applied. ​ |  | 205818 |
| Sitecore.ContentSearch.Azure | ​Searching by \_fullpath does not return any results if the \_fullpath includes empty spaces​.​ |  | 200381 |
| Sitecore.ContentSearch.Azure | Corrupted items prevent users from rebuilding indexes in Azure deployments. | 498128, 500140, 498447, 495086 | 198669 |
| Sitecore.ContentSearch.Azure | ​When you use Azure search queries, to search for items in a specific language that contains a hyphen in its name (for example, en-AU), the results incorrectly contain items for all languages.​ | 502743, 491928, 487773, 501874, 496438 | 171546 |
| Sitecore.ContentSearch.Azure | ​Searches that contain multiple words should only return documents that match the whole search phrase. ​ | 500897, 491064, 481633, 501874, 498841 | 147386 |
| Sitecore.ContentSearch.Azure | ​On Azure, web indexes can not be rebuilt from a CM server. ​​ | 499125, 495819 | 194495 |
| Sitecore.ContentSearch.Azure | ​The _Integer_ field does not map to _Edm.Int32_ by default. | 483540 | 164142 |
| Sitecore.ContentSearch.Azure | ​​Sitecore fields that are marked as non-searchable can be found using search.​​​​​​​ ​ |  | 192278 |
| Sitecore.ContentSearch.Azure | ​Complex search queries that contain _OR_ statements return incorrect search results. | 485763, 492251, 503065 | 166765 |