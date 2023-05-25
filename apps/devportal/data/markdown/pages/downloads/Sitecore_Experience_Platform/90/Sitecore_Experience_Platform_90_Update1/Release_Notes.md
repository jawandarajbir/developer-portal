---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/90/Sitecore_Experience_Platform_90_Update1/Release_Notes
---


Release Notes
=============

**January 2018 – released Sitecore Experience Platform 9.0 Update 1 (rev. 171219)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Email Experience Manager | The new _exmEnabled:define_ setting in the _web.config_ file specifies whether you want to enable or disable EXM. |  | 190429 |
| Email Experience Manager | A submit action has been added to the Forms component that allows you to send an automated message​​​​​​. |  | 190241 |
| Email Experience Manager | ​A send email action has been added to Marketing Automation.​​​ |  | 136680 |
| Email Experience Manager | ​​All custom EXM events now use the xConnect event model. |  | 137520 |
| Email Experience Manager | You can now specify the target language when you send an automated message through the client API. |  | 190924 |
| Email Experience Manager | ​The new _EXM.DispatchBatchSize_ setting specifies the number of contacts that are processed at a time.​​​​​​ |  | 168073 |
| Email Experience Manager | ​​The _Reporting_ list now includes _Bounce type_ and _Reason_ columns. |  | 187582 |
| Email Experience Manager | The new _EXM.IncludePIIinLogFiles_ setting specifies if EXM should log PII-sensitive data.​​​ |  | 97103 |
| Email Experience Manager | ​​​​​​The new _eds:define_ setting in the _web.config_ file specifies whether you use the _CustomSmtp_ or the _EmailCloud_ provider. |  | 182515 |
| Email Experience Manager | Automated messages have a new _Import HTML_ option. |  | 192699 |
| ​​​​​​Email Experience Manager | The following segmentation rules have been added to the rule set editor:​
*   where the contact clicked email
*   where the contact clicked any email
*   where the contact clicked  email and produced a productive visit
*   where the contact opened email 
*   where the contact opened any email
*   where the contact was sent the email that bounced
*   where the contact was sent any email that bounced
*   where the contact was sent the email that resulted in a spam complaint
*   where the contact was sent any email that resulted in a spam complaint

 |  | 170500 |
| Experience Editor | ​You can now use different queries and pass in multiple datasources to render components in the Experience Editor.​​​ |  | 181739 |
| Experience Editor | ​My Items, and the Active, Suggested, and Historical tests count requests are now made asynchronously to improve the Experience Editor's loading time.​​​​​​ |  | 190602, 184948 |
| Experience Profile | ​​​​​​Users can now anonymize a contact. |  |  |
| List Manager | ​​​​​​You can now create and manage reusable segments in List Manager. |  |  |
| Marketing Automation | The ability to search for items (for example, Goals, Campaign and Outcomes) has been added to Marketing Automation activities.

You can search for items, such as goals, campaigns, or outcomes, then add them to Marketing Automation activities|  |  |
| Marketing Automation | ​​​​​​​The report view now includes a date range selector. |  |  |
| Marketing Automation | ​You can now set a campaign start date to schedule automatic campaign activation. |  |  |
| Marketing Automation | ​​​​​​The _XConnectClientConfigurationConfigurator_ now supports loading custom models. This enables you to use of all custom xDB model types within your custom activities. |  | 152588 |
| Marketing Automation | The Marketing Automation Engine now includes a configurator that automatically scales the number of pool workers based on the current machine. This removes the need to manually configure more workers. |  | 123846 |
| Marketing Automation | The performance of the Marketing Automation Engine has been improved.​​​​​​ |  |  |
| Marketing Automation | ​The Marketing Automation Engine includes access to the new Message Bus that provides support for EXM. |  | 191383 |
| Marketing Foundation | ​The _Sitecore.Analytics.Tracking.CurrentInteraction.RegisterOutcome_ method lets you register ​outcomes with custom values for an interaction.​​​ |  | 185650 |
| Marketing Foundation | ​The _Sitecore.Analytics.XConnect.DataAccess.Constants.IdentifierSource_ field lets ​you construct the tracker identifier.​​​ |  | 188052 |
| Marketing Foundation | The _Sitecore.Analytics.Tracking.ContactManager.RemoveFromSession_ method lets you reload a cached contact in a shared session state. ​​​​​​ |  | 189332 |
| Marketing Foundation | ​Historical aggregation now supports time slices. This allows you to rebuild a specific portion of the _Collection_ database, for example, from the last three months.​​​​​​​ |  | 191328 |
| Marketing Foundation | ​When you use the Sitecore Installation Framework, users are automatically created in the xDB _Collection_ database. |  | 175389 |
| Marketing Foundation | Retry logic of XConnect operations has been extended with incremental and random exponential strategies. |  | 187634 |
| Marketing Foundation | The xConnect Search Indexer includes the following performance improvements:

*   Changes made to _IDataProvider.GetChanges_ result in reduced memory consumption.
*   The speed of interaction retrieval, search, and indexing has been improved.
*   The collection speed of small batches for both interactions and contacts has been improved.
*   The Indexer now only reads once all facet keys per entity type from _ISchema.GetAllFacetKeys_.
*   The new, specialized RevolvingIndexer, that uses _IDataProvider.GetChange_ facilitates the retrieval of the next set of IDs to index while the current set is being indexed.

​​​​​​ |  | 182638, 185165 |
| Performance | ​​​​​​The performance of _save_ and _get_ operations for contact identifiers has been improved for the _Collection_ database. |  | 188565 |
| Performance | ​The performance of _Get_ operations has been improved for the _Collection_ database. |  | 175367 |
| Sitecore.ContentSearch.Azure | ​​​​​​​Azure Search now allows​ fields with the same name and different types to be stored next to each other in the index. | 483540 | 164142, 170084, 170254 |
| Sitecore.ContentSearch.Azure | Azure Search now supports indexing in several langauges. |  | 151795, 156686 |
| Sitecore.ContentSearch.Azure | The ​number of fields that are indexed by default has been reduced​. |  | 196551 |
| Sitecore Services Client | The Sitecore services client login controller now supports CORS.​​​​​​ |  | 192848 |
| Sitecore Services Client | MVC and SSC now use the same assembly scanner. |  | 181643 |

Breaking Changes
----------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Email Experience Manager | ​​The _/sitecore/layout/Layouts/Email Campaign_ folder and the _/sitecore/layout/Layouts/Email Campaign Sample Newsletter_ item have been moved to the _/sitecore/layout/Layouts/System/Email_ folder. |  | 190819 |
| Email Experience Manager | The _/sitecore/layout/Renderings/Email Campaign_ folder and the _/sitecore/layout/Renderings/Email Campaign Sample Newsletter_ item have been moved to the _/sitecore/layout/Renderings/System/Email​​​_ folder. |  | 190819 |
| Email Experience Manager | The _​​​​​​/sitecore/system/Modules/E-mail Campaign Manager_ folder has been moved to the _/sitecore/system/Settings/Email_ folder. |  | 190819 |
| Email Experience Manager | The _/sitecore/templates/Branches/Email Campaign_ folder and the _/sitecore/templates/Branches/Email Campaign Sample Newsletter_ item have been moved to the _/sitecore/templates/Branches/System/Email Campaign_ folder. |  | 190819 |
| Email Experience Manager | ​​​​​​The _/sitecore/templates/Email Campaign_ folder and the _/sitecore/templates/Email Campaign Sample Newsletter_ item have been moved to the _/sitecore/templates/System/Email​ Campaign_ folder. |  | 190819 |
| Experience Profile | Some security and performance improvements have led to minor API changes in _Citecre.Cintel.dll_.​​​ |  |  |
| List Manager | ​​​​​​​​List Manager uses the new segmentation definitions provided by xConnect. Users who have created segmented lists need to recreate them based on the new segment definitions.​ |  |  |
| Marketing Foundation | The _EmailAddressList_ facet was changed. The _PreferredEmail_ property is not longer marked as PIISensitive. Only the SmtpAddress of the EmailAddress type has to be marked as PIISensitive. |  | 197114 |
| Path Analyzer | Performance and security improvements have led to some minor API changes in _Sitecore.PathAnalyzer.dll_, _Sitecore.PathAnalyzer.Services.dll_, and _Sitecore.SequenceAnalyzer.dll_. |  |  |
| Sitecore.ContentSearch.Azure | ​Interface ISearchServiceManagmentOperationsProvider​ has been refactored due to languages support​. |  |  |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| API | Caches may be corrupted due to a race condition in _SqlDataProvider.GetPrefetchData_. |  | 178649 |
| Caching | When search runs in the Content Editor, a _NullReferenceException_ can occur in the log file when the _IsDisplayedInSearchResults\[master\]_ cache is populated. |  | 185484 |
| Email Experience Manager | An email that you send using emulation mode creates an _Email Sent_ interaction.​​​​ |  | 177381 |
| Email Experience Manager | The UTC offset is now shown for the _Time of day_ report.​​​ |  | 167180 |
| Email Experience Manager | You should disable Automated message activation if you have not configured the Dispatch manager .​​​​​​ |  | 137745 |
| Email Experience Manager | ​EXM makes un​necessary status requests​​ from dispatch​ servers for sent messages​.​​​ |  | 172604 |
| Email Experience Manager | When you navigate to the message list using a breadcrumb link, an incorrect menu icon displays. ​​​ |  | 190177 |
| Email Experience Manager | ​​​​​​In message lists, search terms do not properly trim for spaces. |  | 170929​ |
| Email Experience Manager | ​When EXM checks the recipient count for a message, the excluded lists are not checked.​​​ |  | 165596 |
| Email Experience Manager | An error occurs if a space is entered in the _Reply_ to or _From_ email​​ fields​​. ​​​ |  | 172983 |
| Email Experience Manager | ​​​​​​When you save a message, the _Use preferred language_ check box's selection status does not save properly unless you send the message. |  | 167282 |
| Email Experience Manager | ​​​​​​Sending a campaign in emulation mode creates failed interactions.​ |  | 191714 |
| Email Experience Manager | ​In some cases, the _Dispatch completed_ notification email is sent even when the dispatch has not completed. |  | 192365 |
| Email Experience Manager | ​An exception occurs when you delete an item after you have deleted the template that it is based on.​ |  | 194388 |
| Experience Analytics | The _Page URL_ report displayed an incorrect number of rows in the list control​​​​​​ |  | 180649 |
| Experience Analytics | ​​The _Analytics Data Controller_ overrides the browsing users language. |  | 184552 |
| Experience Analytics | Interaction aggregation would fail if the marketing definition could not be found. |  | 186470 |
| Experience Analytics | There are two ​​Example configuration files ​in the wrong location.​​​​​​ |  | 187526 |
| Experience Analytics | ​The _Reports_ graphs display the wrong units for goals and outcomes.​​​ |  | 188528 |
| Experience Analytics | ​​Some charts use an incorrect format when displaying dates. |  | 191798 |
| Experience Editor | ​​​​​​​The backslash is removed from a field value after you edit it with the Field Editor​. | 461855, 497095, 437047, 448324, 441708, 486689, 438066 | 54843 |
| Experience Editor | ​​​​​​The _Bootstrap.css_ styles change the appearance of some Experience Editor UI elements. | 457282, 428251, 471044 | 97939 |
| Experience Editor | ​​​​​​​Users do not get redirected to the login screen from the Experience Editor after a session expires​. | 494226, 467630, 494127, 480697 | 122942 |
| Experience Editor | The Experience Editor does not support login functionality for a website when it is in Preview mode​.​​​​​​ | 469002, 471006 | 125781 |
| Experience Optimization | ​​​​​​​The _Personalization_ dialog does not show data when Sitecore is set up in mixed mode. Mixed mode is when the Processing server is deployed in the Cloud and the Content Management server is deployed on premise. This error occurs because in mixed mode, the Processing and CM servers use different _Master_ databases. |  | 186028 |
| Experience Optimization | ​You can create a component test even if a page test is already running on the page.​​​​​​ | 487672 | 177477 |
| Experience Profile | The E​xperience Profile icon appears in the Launchpad when running in CMS-only mode. |  | 189784 |
| Experience Profile | ​Experience Profile displays an error when a contact has a non-web interaction. ​​​ |  | 183703 |
| Experience Profile | In the Experience Profile, an exception occurs when a contact's preferred email is not available.​​​ |  | 173810 |
| Experience Profile | ​​​​​​Event definitions do not display correctly in the _Events_ sections of Experience Profile. |  | 173908 |
| Experience Profile | ​​​​​​Only 50 search results are displayed. | 495805 | 198583 |
| Experience Profile | ​The ​_Date picker_ for search has an error |  | 187153, 193487 |
| Federated Experience Manager (FXM) | ​​​​​​Tracking page events on FXM sites after a session timeout causes incorrect tracking and site resolving. | 489691 | 183196 |
| Federated Experience Manager (FXM) | ​FXM does not work on an​​ Azure Web App when the _Temp_ folder path is outside of the _Website_ folder.​​​ | 496581, 486486, 487275 | 170911, 190405 |
| Federated Experience Manager (FXM) | You cannot track with FXM if an external site uses _RequireJS_.​​​ | 491935, 472651, 489619, 491857 | 132468 |
| Federated Experience Manager (FXM) | ​The _visitSuccess_ method fails to check for document readiness and does not find the parent control that lets you insert FXM content on websites​​ that ​require JS. | 437744, 489367, 490880 | 135966 |
| Federated Experience Manager (FXM) | Javascript errors appear because of a code issue in the _Api.js >> insertBefore_ function​.​​​​​​ | 476239, 490203, 491964, 490216 | 142195 |
| Federated Experience Manager (FXM) | ​​FXM duplicates the _TriggerElementMatch_ request when the element is a hyperlink​.​​​ | 481137, 490624 | 158124 |
| Item Buckets Content Search | Search does not work properly on GUIDs in Sitecore fields. |  | 190076 |
| List Manager | ​If you add a condition to a segmented list that has multiple contact lists as sources, an exception is thrown.​ |  | 131527 |
| Marketing Automation | ​Marketing Automation is now fully supported in Safari.​ |  |  |
| Marketing Automation | You can enter an invalid date in the Date field for Delay activity.​ |  | 154257 |
| Marketing Automation | ​​​​​​​Contacts are incorrectly processed when they move to another inactive campaign. |  | 186685 |
| Marketing Automation | ​You cannot listen for a combinations of goals, outcomes or campaign actvities by using the And/Or toggle. The listener listens for an Or query by default.​​​​​​​ |  | 186644 |
| Marketing Automation | ​You cannot create a campaign that contain multi-language characters, for example an umlaut or hieroglyph. If you try to save the campaign, the Campaign name is invalid error appears.​​​ |  | 185923 |
| Marketing Automation | The _Change engagement score_ activity cannot subtract engagement points. It can only add engagement value points.​ |  | 169936 |
| Marketing Automation | The _View contacts_ dialog does not work in Cloud environments.​​​​​​​ |  | 185958 |
| Marketing Foundation | A database deadlock can occur when you add a large number of contacts to the processing pool​.​​​ |  | 182335 |
| Marketing Foundation | Fail over of the _Shards_ db causes data loss in List Manager import operations. |  | 186921 |
| Marketing Foundation | ​When the system is idle, high CPU usage is caused by the Indexer executing unnecessary _GetChanges_ calls. |  | 189340 |
| Marketing Foundation | ​The _XdbUnavailableException_ is not thrown when _IdentifiedContactReference_ is used. |  | 186414 |
| Marketing Foundation | The _InteractionsCache_ facet is merged incorrectly for collections that are populated from the _UserAgentInfo_, _WebVisit_, and _IpInfo_ facets.​ |  | 189877 |
| Marketing Foundation | ​The contact's email address should be deleted when the user decides to _Anonymize_. ​​​ |  | 188912 |
| Marketing Foundation | The XConnect Search Indexer replication timeout setting does not work correctly. |  | 185938 |
| Marketing Foundation | ​The Solr core can fail to initialize due to a bug in Solr version 6.6.1.​ |  | 190445 |
| Miscellaneous | ​The _e​​xecutionTimeout_ setting​ in the ​_web.config _file is set​ to 3600.__ |  | 184688 |
| Miscellaneous | When a page renders, Preview ignores the general link text between < and >. |  | 184363 |
| Miscellaneous | In xConnect search, complex Solr list queries could include extra unrelated contacts and interactions.  
This happened very rarely and only under very specific conditions. |  | 187098 |
| Miscellaneous | ​​​​​​License files are stored with an incorrect naming convention. |  | 182755 |
| Miscellaneous | When deploying via ARM templates or the Azure Marketplace, Application insight logging does not work for XConnect web services and jobs. |  | 286852 |
| Miscellaneous | Various logging improvements have been implemented for the xConnect indexer.​​​​​​ |  | 187708, 183388, 187122, 186798 |
| Miscellaneous | ​​Sitecore 8.2 update 6 has been merged into Sitecore 9.0 update 1. Sitecore 9.0 update 1 contains all of the​​ fixes and new features from both updates. |  |  |
| Miscellaneous | ​​​​The xConnect search indexer may slow down due to Azure logging an exception. |  | 187120 |
| MVC | ​The additional rendering parameters for dynamic placeholders do not properly parse dashes. |  | 191830 |
| MVC | When logged in as an anonymous user, the login control does not render under View Renderings.​​​​​​ | 401446,401877 | 94634 |
| MVC | ​TempData values do not persist after subsequent requests to the controller rendering. | 406181, 406955,410370, 427731 | 94903 |
| MVC | The rendering html helper does not respect the _Data source_ field value from a rendering item. | 443823, 443967 | 96499 |
| MVC | The Field HTML helper does not handle null parameters values​.​​​​​​ | 455542, 455548 | 96983 |
| MVC | ​The _XSLT Rendering_ parameters are empty in MVC layout​s. | 461846 | 108638 |
| Path Analyzer | ​​​​​​The browser title was not set in Path Analyzer. |  | 185818 |
| Sitecore.ContentSearch.Azure | Sitecore fields marked as non-searchable can be ​found using search​.​​​​​​​ |  | 192278 |
| Sitecore.ContentSearch.Azure | ​​When a user performs a content search based on facets, an error occurs. |  | 189117 |
| Sitecore.ContentSearch.Azure | Language-based content searches return results from all available languages. |  | 156686 |
| Sitecore.ContentSearch.Azure | The Integer field does not map to Edm.Int32 by default.​​​​​​ | 483540 | 164142 |
| Sitecore.ContentSearch.Azure | ​Complex search queries which contain OR statement return incorrect search results.​​​​ | 485763, 492251 | 166765 |
| Sitecore Services Client | ​​​​​​Service client API returns the HTTP 400 error when it uses a context language other than English​.​ |  | 194521 |
| Sitecore Services Client | The _Sitecore.​Services.Client.config_ file does not include the​ _Sitecore.Updatecenter_ assemblies.​​​ |  | 188431 |
| Sitecore Forms | The _List_ control can't show more data because the scrollbar is not displayed​.​​​​​​ |  | 162752 |
| Sitecore Forms | ​​The number markup for the min, max step uses a dot (.) instead of a comma (,) as the decimal separator. |  | 162729 |
| Sitecore Forms | When a user sets multiple checkboxes as checked by default, these settings are not always applied correctly on the form. This happens when you use a dynamic data source. |  | 173987 |
| Sitecore Forms | ​When a user navigates through a multi page form, every forward, back, or submit action is registered as a submit confirmation and this results in incorrect form metrics for the submit button(s).​​​​​​ |  | 160013 |
| SPEAK | Opening the Insert link dialog can cause an exception​.​​​ |  | 96011, 433804 |
| Web Forms for Marketers | In the Form Designer, the scroll bar does not appear in the window when you select item fields in the Selecting Sitecore Items mode.​​​ |  |  |

Deprecated/removed
------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Email Experience Manager | The _exm.web_ database has been removed. |  | 137525 |
| Email Experience Manager | The _Search_ box has been removed from the recipient activity tabs, because the search queries are not supported by Azure Search. |  | 168073 |
| Email Experience Manager | The _Email preview_ and _Spam check_ functionalities have been removed. |  | 184146 |
| Email Experience Manager | The _/sitecore/layout/Sublayouts/Email Campaign/Process Personalization Tokens_ item has been removed. |  | 190819 |
| Email Experience Manager | The _/sitecore/layout/Sublayouts/Email Campaign/Subscription Form_ item has been removed. |  | 190819 |
| Marketing Foundation | The _Sitecore.Analytics.DataAccess.Dictionaries.ReferringSitesDictionary_ class has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.Pipelines.TrafficTypes.ReferringSite_ class has been deprecated and removed from the configuration file. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.OmniChannel.Pipelines.DetermineInteractionChannel.ReferringSite_ class has been deprecated and removed from the configuration file. |  | 175825 |
| Marketing Foundation | The _Sitecore.sitecore.shell.Applications.Analytics.ReferringSiteClassification.ReferringSiteClassificationPage_ page has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.Environment_ class has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.Environment.TrafficTypes_ class has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.Data.Dictionaries.TrackingDictionaries.ReferringSites_ property has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.InitializeKnownDataDictionariesArg.ReferringSitesDictionary_ property has been deprecated and removed from the configuration file. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.DataAccess.Dictionaries.KnownDataDictionaries.ReferringSites_ property has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.Environment.TrafficTypes.ReclassifyReferringSite_ method has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.AnalyticsTexts.YourChangesWillBeAppliedImmediatelyButWillNotBeDisplayedInTheReportsUntilTheDataInTheCurrentCacheIsUpadetd _constant has been deprecated.__ |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.AnalyticsTexts.ChangTheTrafficTypeForTheReferringSiteWhereItIsCurrentlyClassifiedAs_ constant has been deprecated. |  | 175825 |
| Marketing Foundation | The _Sitecore.Analytics.AnalyticsTexts.NewTrafficType_ constant has been deprecated. |  | 175825 |