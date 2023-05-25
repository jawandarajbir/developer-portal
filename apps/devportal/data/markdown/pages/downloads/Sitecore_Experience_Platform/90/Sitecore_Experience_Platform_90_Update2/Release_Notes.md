---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/90/Sitecore_Experience_Platform_90_Update2/Release_Notes
---


Release Notes
=============

**June 2018 – released Sitecore Experience Platform 9.0 Update 2 (rev. 180604)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Marketing Automation | ​The introduction of a cache for the evaluation of live event definitions has improved the performance of Marketing Automation processing.​​ |  | 205903 |
| Marketing Foundation | ​​New XP cloud WDPs have been introduced that support the use of existing Solr instances. |  | 216764 |
| Marketing Foundation | There is now extended logging for the failed contacts merge operation. The new log message lists the xDB operations in the batch with their statuses and other details that can help handle any failed merges.​​ |  | 205733 |
| Marketing Foundation | ​XConnect search index only contains target contacts and their interactions when it performs a contact merge. The new model file _Sitecore.XConnect.Collection.ContactMerge.Model, 1.0.json_ is required by the XConnect Search Indexer.​ |  | 203524 |
| Marketing Foundation | ​​XConnect now copies interactions to the target contact of a contact merge.​​ |  | 203217 |
| Marketing Foundation | ​​In xConnect, data extraction now returns the interactions of merged contacts that point to the merge's target contact. |  | 203522 |
| Marketing Foundation | ​​​​​​​​​Solr Cloud is now supported in both Experience Management (XM) and the Experience Platform (XP). We support Solr Cloud with Content Search and Behavioural (Experience) Analytics Search through xConnect. Scaling is supported through replicas and shards via the standard Solr Cloud functionality. ​ |  | 186565 |
| Marketing Foundation | ​​xConnect now supports significantly more types of list queries. |  | 183635, 193119 |
| Marketing Foundation | ​​The _Segmentation Engine_ now contains additional conditions that use the newly supported xConnect queries. |  | 197847 |
| Marketing Foundation | ​XConnect now supports index rebuilding in cloud deployments.​​ |  | 173495, 219041 |
| Marketing Foundation | When a visit comes from a known referrer but the url contains no keywords, the web visit keywords are filled with the _Not Provided_ string​​.​ |  | 96029 |
| Miscellaneous | xConnect now supports MongoDB storage for the collection database. It is disabled by default.​ |  | 211772 |
| Miscellaneous | ​Sitecore XP 8.2 Update 7 is merged into Sitecore XP 9.0 Update 2.​ |  |  |
| MVC | ​​​​The _ParseDataSource_ pipeline now parses rendering data sources. |  | 191068 |
| MVC | ​Lower _StringWriter_ use optimizes the performance of the _Placeholder helper_ method and the memory usage of _ControllerRenderer_.​ |  | 171436 |
| MVC | ​​There are some grammar errors in the _Sitecore.Owin.Authentication.config_ file​. |  | 181639 |
| Sitecore.ContentSearch.Azure | To avoid downtime, you can now switch Azure Search indexes on rebuild. ​​​ | 495279, 486505, 485220, 493588, 491750, 478130, 485664, 484750 | 146822 |
| Sitecore Services Client | Web APIs can now be restricted with rate limiting controlled either by code attributes or API key configuration.​ |  | 175268 |
| Solr | The connection string for Solr server has been renamed and moved to the _ConnectionStrings.config_ file.​​ |  |  |
| Update Installation Wizard | ​The new Update Center application has been introduced.
The Update Center recommends the updates and hot fixes that should be automatically downloaded and installed based on your current instance of Sitecore XP and the modules that you have installed|  |  |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Configuration | ​​The _<sc.include>_ tag cannot be resolved correctly when it is used in a separate configuration file in the _Include_ folder​​​​. | 91385, 334965 |  |
| Content Editor | ​Placeholder settings are not synchronized correctly between the item and standard values. |  | 95102, 412219 |
| Content Editor | ​Links to the placeholder settings item are stored as paths instead of as IDs.​​ |  | 96322, 440335 |
| Device Detection | ​The _Discovery_ service returns null when the _X-ScS-Api-Version_ header is not included in the request. ​ |  | 204514 |
| Email Experience Manager | The _​HostNameMapping_ definitions do not work with a "/" at the end of the definition.​​ |  | 214105 |
| Email Experience Manager | ​​The component name is missing in the global header. |  | 198856 |
| Email Experience Manager | The encoding of the message text changes after it is saved.​​ |  | 196523 |
| Email Experience Manager | Attachments cannot be removed from a message.​​ |  | 201444 |
| Email Experience Manager | The _ConvertPageEventDataToEmailEvent_ processor can crash the _convertToXConnectEvent_ pipeline​​.​ |  | 203891 |
| Email Experience Manager | Dispatch does not support segmented lists​​.​​ |  | 202052 |
| Email Experience Manager | ​​Duplicate interactions are created for sent events​​. |  | 204727 |
| Email Experience Manager | Message Statistics do not update regularly because cached data​​ is used.​​ |  | 204936 |
| Email Experience Manager | ​Usage data for a subscription cannot be seen, if the UI is not in English. |  | 212505 |
| Email Experience Manager | ​​An email campaign is only published in the client language. |  | 211150 |
| Email Experience Manager | The number of recipients that are included/excluded in the message info panel may change after the dispatch has started/finished.​​ |  | 205093 |
| Email Experience Manager | Some items have broken links in the core database.​​ |  | 206470 |
| Email Experience Manager | _WebContent.DownloadString_ hides exception details.​​ |  | 216385 |
| Email Experience Manager | The number of recipients that are logged for automated campaigns is incorrect.​​ |  | 196902 |
| Email Experience Manager | ​The _Unsubscribe from all_ action does not work for automated campaigns​. |  | 214063 |
| Email Experience Manager | ​​Personalization does not work. |  | 214131 |
| Email Experience Manager | ​​​A _NullReferenceException_ occurs if no Email facets are set for the contact​. |  | 216851 |
| Email Experience Manager | ​Bounced messages are not recognized by EXM. |  | 220196 |
| Email Experience Manager | The _BouncedMessageHandler_ contains a _Null reference_ exception.​ |  | 220189 |
| Experience Analytics | ​​​​In flexible dimensions, the _Expression_ field on a metric does not work as expected. | 502300 | 20796 |
| Experience Analytics | ​The monetary value metrics are not available in the metric drop down list. |  | 19373 |
| Experience Editor | ​​​A _Multi-Line Text_ field does not work correctly when you press enter ​in Firefox. | 505515 | 217458 |
| Experience Editor | ​The _Web Edit_ dialog overrides the standard values if the field is not rendered with _<sc:Control ../>_​. | 467502, 479847 | 120811 |
| Experience Editor | ​​When you paste text from the clipboard to a _Rich Text_ field, the new lines are wrapped in extra _<div>_ tags. | 430850, 402015, 454161, 478715 | 94681, 402492 |
| Experience Editor | ​The _One or more items have been changed._​ warning dialog appears unnecessarily when you edit a page with datasources. | 503366, 448849, 466312, 469064, 471940, 474816, 470397, 479680, 482342, 490818, 494914, 494913, 495678, 496623, 493503, 498146, 499759, 500580, 504613, 500163 | 76398 |
| Experience Editor | ​​When language fallback is enabled​, ​unlocking an item creates a new version of the item. | 458603, 464410, 468730, 471168 | 100325 |
| Experience Editor | ​If a page has numerous datasources, the ​Experience Editor can hang for a long time​. | 503276, 504556, 487406, 493522, 492186, 495332, 489411, 498875, 499884, 500516, 501558, 504864, 500370 | 171097 |
| Experience Editor | ​​​In CMS-only mode, the Experience Editor uses Content Testing's search indexes. | 494959, 497696, 474809 | 193566 |
| Experience Editor | ​When you add a rendering to the shared layout of the _Base Template_ item, it is not saved. | 496462, 500298 | 194671 |
| Experience Editor | ​​​Renderings on the shared layout of the Base Template are displayed in the Experience Editor when the renderings are only added to the _Final Layout_.​​ | 496462, 500298 | 194672 |
| Experience Editor | ​If the datasource of the selected rendering refers to many items, the _Usages_ dialog takes a long time to load. | 499860 | 204256 |
| Experience Editor | If an item has many versions in many languages, it takes a long time to unlock the page in the Experience Editor. | 501644 | 206645 |
| Experience Profile | ​​Search filters behave inconsistently. |  | 195151 |
| Experience Profile | ​​The position of the _Header_ is inconsistent with the rest of Sitecore. |  | 195153 |
| Experience Profile | The filter and the search results are not aligned correctly.​​ |  | 195252 |
| Experience Profile | ​When you select a node in a filter, it does not propagate to its descendant nodes. | 499379 | 201779 |
| Experience Profile | ​​The page views are shown in the event list. | 499986 | 202620 |
| Experience Profile | ​​The _Latest visit_ column in the search results shows incorrect values. | 502658 | 209357 |
| Experience Profile | ​​The root page of a website does not display properly in event views. | 499808,504074,504429 | 210047 |
| Experience Optimization | ​​Errors are thrown when a personalization test is not shown to every visitor. | 498334 | 200951 |
| Experience Optimization | ​​The screenshots for content testing are not generated correctly in some cases. | 497718, 502501 | 198419 |
| Experience Optimization | ​​An exception occurs if the original test variant is renamed. | 440560, 478138, 477917 | 149565 |
| Experience Optimization | ​A Page test doesn't work when the _New page version_ option is selected. | 503650, 477174, 478905, 484565, 492604, 503917 | 145021 |
| Experience Optimization | ​​​An exception occurs in Content Testing when it is configured to use SOLR. | 439573, 444037, 430516, 439249, 438067, 440238, 438839, 493669 | 95883, 431160 |
| Experience Optimization | ​​The _Personalized Experience_ report can show incorrect data​ in specific cases. | 463200, 483148, 491878 | 115389 |
| Editor Optimization | ​​When the latest version of an item is locked​, you cannot personalize any other version of the item. | 501166 | 153687 |
| Federated Experience Manager (FXM) | ​​​Renderings based on a custom template that is inherited from the standard templates don't work in the FXM. | 502080 | 208830 |
| Marketing Automation | ​Certain _Automation Plan_ designs can lead to contacts being caught in an infinite loop inside the plan, bypassing the logic of the _Plan Regulator_.​ |  | 195988 |
| Marketing Automation | ​The _Select activity_ modal dialog only shows the activity type name instead of the entered name.​​ |  | 199631 |
| Marketing Automation | ​A condition sometimes prevented live events from being processed inside the session. |  | 221685 |
| Marketing Automation | Purging a contact from a specific automation plan may remove the _AutomationPlanEnrollmentCache_ facet, even if the contact is enrolled in other plans.​​ |  | 204270 |
| Marketing Foundation | ​The Experience Analytics and Path Analyzer applications fail to start on a Sitecore instance that is configured with the following role combination: _Content Management, Processing, and Reporting_ . |  | 205757 |
| Marketing Foundation | The _Sitecore.Xdb.Configuration.DefinitionDatabase.Name_ property returns an incorrect database name when the _analyticsDefinitions_ attribute of the site is set to content.​​​ |  | 197098 |
| Marketing Foundation | ​​​Search and indexing do not support ​the properties of _Dictionary_ collections. |  | 200659 |
| Marketing Foundation | ​Search and indexing do not support the properties of Dictionary type collections. |  | 200659 |
| Marketing Foundation | In xConnect, search and indexing do not access a custom facets' properties if they are in nested collections.​ |  | 200659, 201243 |
| Marketing Foundation | ​​In xConnect, the following performance counters do not include time when they are used in async operations:
*   CreateInteractionCursorAvgTime
*   CreateContactCursorAvgTime
*   SplitInteractionCursorAvgTime
*   SplitContactCursorAvgTime
*   ReadInteractionCursorAvgTime
*   ReadContactCursorAvgTime
*   GetContactsByIdAvgTime
*   GetContactsByIdentifierAvgTime
*   GetDeviceProfilesAvgTime
*   GetInteractionsByIdAvgTime
*   GetInteractionsByContactIdAvgTime
*   GetDataCurrentIndexedTokenAvgTime​​

 |  | 205487 |
| Marketing Foundation | ​​The _TaxonomyTypeMapper_ class is not thread safe. |  | 207975 |
| Marketing Foundation | ​When you merge calculated facets, the _XdbContext Batch Execution_ and _DuplicateTargetException_ exceptions occur. ​ |  | 162617 |
| Marketing Foundation | ​An ISO date time is converted to an invalid format in conditions when an automation plan is deserialized​.​​ |  | 205994 |
| Marketing Foundation | The _Sitecore.Marketing.xMgmt.Definitions.ItemEventHandler​_ class throws a NullReferenceException when you save an item and the template for the item cannot be found.​ |  | 218508 |
| Marketing Foundation | ​The _GenericProcessing\_GetState_ routine returns the state for the entire _GenericProcessingPool_ table instead of returning the state for a specific processing pool. |  | 218475 |
| Marketing Foundation | ​​The _MergeInfo_ facet is copied from the source contact to the target contact when you run the merge data upgrade tool.​ |  | 216819 |
| Marketing Foundation | ​​The ​​Marketing Operations API fails to log messages that contain curly brackets and this prevents exceptions from being logged. |  | 215146 |
| Marketing Foundation | ​The _Select Media_ dialogue returns no results when the Solr search provider is configured. |  | 96333 |
| Miscellaneous | ​Using some specific culture may lead to an ​exception when you update the index through the API. | 178247 |  |
| Miscellaneous | ​​Cache sizes can be greatly underestimated. |  | 186408 |
| Miscellaneous | ​​​_InstallLanguage.aspx_ does not install languages correctly in the _Sitecore.DefaultLanguage.config_ ​file. |  | 193842 |
| Miscellaneous | ​​_SheerResponse.CheckModified()_ behaves incorrectly in the _<uiNewFileFolder>_ pipeline​. |  | 196038 |
| Miscellaneous | ​​​_SheerResponse.CheckModified()_ does not respect postback requests in the _<uiNewFileFolder>_ pipeline.​ |  | 196041 |
| Miscellaneous | It takes a long time to render pages that contain a large number of renderings.​ |  | 197284 |
| Miscellaneous | When you run the SolrCloud setup, the code executes _Commit_ commands.​ |  | 196510 |
| Miscellaneous | ​When the _EnforceAliasCreation_ setting is disabled, indexes are not swapped by the _SwitchOnRebuildSolrCloudSearchIndex_ method. |  | 200229 |
| Miscellaneous | ​​​Resetting child item sorting creates new versions for those child items that did not have any versions. |  | 201483 |
| Miscellaneous | A general link fails when no item ID is provided for the internal link.​ |  | 203014 |
| Miscellaneous | When there is more than one typeMatch with the same _type _attribute, the Search Log is flooded with WARN messages.​​__ |  | 204414 |
| Miscellaneous | ​​A custom language is not resolved as item.​ |  | 206103 |
| Miscellaneous | When the _Publishing.CheckSecurity_ setting is set to _true_, non-admin users are not able to publish content items even when they have all the appropriate security permissions |  | 206940 |
| Miscellaneous | ​​In the Rich Text Editor, there are labels missing in the _Table Wizard_ and _Style Builder_ dialogs.​ |  | 208388 |
| Miscellaneous | ​​The search handler allows cross-site request forgery. |  | 214241 |
| Miscellaneous | ​​A _NOT\_A\_VALID\_FILESYSTEM\_PATH_ file in the website folder breaks media resolution and causes memory leaks. |  | 219814 |
| Miscellaneous | ​The _Change Icon_ dialog does not open correctly. |  | 221573 |
| Miscellaneous | ​When you save an item that has fatal validation errors, the workflow state is changed.​​ |  | 91876, 347304 |
| Miscellaneous | ​​Extra index updating jobs are registered. |  | 92575, 365210 |
| Miscellaneous | ​​The _Change Password_ dialog throws an exception when the user is locked out. |  | 94099, 392305 |
| Miscellaneous | The _returnURL_ is encoded twice on the login page. ​​ |  | 108874 |
| Miscellaneous | ​​Item changes are processed multiple times during indexing. |  | 94995, 409267 |
| Miscellaneous | ​​​The Indexing manager always updates the last item in the history.​ |  | 95244, 416108 |
| Miscellaneous | ​​​A new language version is added when you change the sorting​. |  | 95401 |
| Miscellaneous | When using the Redis session state provider, a non-optimal mechanism for processing expired sessions data causes Sitecore to crash due to the heavy load.​​​ | 500283 | 204592 |
| MVC | ​​​If you implement a custom DI container, it causes a memory leak. | 500310, 489556, 486797, 487898, 485967 | 166675 |
| MVC | There is an _Open Red​irect_ issue in the _Sitecore.MVC.dll_ file.​ |  | 206202 |
| Path Analyzer | ​​In the _Sitecore.PathAnalyzer.RemoteClient.config_ and _Sitecore.PathAnalyzer.Services.RemoteServer.config​_ files, the _role:require_ values are incorrect. | 500473, 500838, 501465, 502229 | 203749 |
| Path Analyzer | ​​​Path Analyzer maps relating to language are in an incorrect workflow state. |  |  |
| Platform | ​There are some grammatical errors in the _Sitecore.Owin.Authentication.config_ file​.​​ |  | 205319 |
| Sitecore.ContentSearch.Azure | ​The _ComputedIndexField_ cannot be computed for the _Home_ item during a full index rebuild​.​​ |  | 211597 |
| Sitecore.ContentSearch.Azure | ​​Search results only contain 50 items by default.​​ | 492451, 491431, 481646, 479281, 497256, 495805, 492125 | 147550, 147551 |
| Sitecore.ContentSearch.Azure | ​​​​In the Content Editor, when a user filters search results by language, the filter is not applied. ​​ |  | 205818 |
| Sitecore.ContentSearch.Azure | ​Searching by _\_fullpath_ does not return any results if the _\_fullpath_ includes empty spaces.​​ |  | 200381 |
| Sitecore.ContentSearch.Azure | ​​Corrupted items prevent users from rebuilding indexes in Azure deployments.​ | 498128, 500140, 498447, 495086 | 198669 |
| Sitecore.ContentSearch.Azure | ​​​When you use Azure search queries to search for items in a specific language that contains a hyphen in its name, for example, en-AU, the results contain items from every language.​​ | 502743, 491928, 487773, 501874, 496438 | 171546 |
| Sitecore.ContentSearch.Azure | ​Searches that contain multiple words return documents that don't match the whole search phrase. ​​ | 500897, 491064, 481633, 501874, 498841 | 147386 |
| Sitecore.ContentSearch.Azure | ​​​On Azure, web indexes can not be rebuilt from a CM server. ​​​ | 499125, 495819 | 194495 |
| Sitecore.ContentSearch.Azure | ​​​The return type is not resolved correctly for computed field. ​​​ | 502689, 506226, 510589 | 209312 |
| Sitecore.ContentSearch.Azure | ​​​ Ports leak when requests are throttled.​​​ | 498961, 502945, 517404, 528788 | 203909 |
| Sitecore Forms | ​Internet Explorer crashes when a user tries to close the _Currency_ drop-down list. |  | 166595 |
| Sitecore Forms | ​​When a form is created in a language that is not the default language (and the default language is not created), the form is not shown in the general list in the Forms application. The form is available, but is only shown when the user selects the relevant selected client language in the Forms application.​ |  | 183845 |
| Sitecore Services Client | ​OData Item API search queries do not respect the _orderby_ query option. |  | 192850 |
| Sitecore Services Client | The _AssembliesFromResolver_ property from the _Sitecore.Services.Infrastructure.Sitecore.ApplicationContainer_ sometimes causes unacceptably large memory allocation, high CPU usage, and increased garbage collection.​​​ |  | 206938 |