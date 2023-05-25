---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101/Release_Notes
---


Release Notes
=============

**Feb 2021 – released Sitecore Experience Platform 10.1.0**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

*   [Highlights](#Highlights)
*   [New features/improvements](#New)
*   [Deprecated/Removed](#Deprecated)
*   [Breaking changes](#Breaking)
*   [Resolved issues](#Resolved)

Highlights
----------

Sitecore Experience Platform 10.1.0 includes:

*   ​You can now use the content hierarchy to assign a behavior profile to multiple items.
*   ​​You can now use content tags to assign a behavior profile to multiple items.​
*   The _Collection_ database now supports scalable reads.
*   You can now use the new ​Data Purge CLI tool to remove unwanted contact data from the Experience Database​.
*   Sitecore Fast Query has been deprecated.
*   Email Experience Manager - ​​​​​Mutli-Language Management - Marketers can now create HTML emails in any language, regardless of the context language. You can also activate Email campaigns without the need for an English language variant regardless of the language being used.
*   Email Experience Manager - ​We have introduced a configurable retry mechanism that allows users to configure how many times they would like the system to retry if an error or failure occurs when you send out a campaign.
*   Email Experience Manager - ​You can now use the following new email templates:​  
    *   Two Column
    *   2 Column 1 CTA
    *   3 Column Long
    *   3 Column Short
*   The upgrade process has been simplified and streamlined. You can upgrade from Sitecore XP 8.1.0 or later directly to Sitecore XP 10.1.0 in one straightforward procedure.  
    The Upgrade Guide has been updated and simplified to reflect these changes.
*   Experience Analytics - ​The Reporting and CM server roles have been combined to run on the same server role, thereby reducing hosting costs for containers, PaaS and On-Prem solutions.
*   SXA and Horizon​  
    You can now create:  
    *   Extensions in the Selection Details area.
    *   Extensions that edit the properties of a selected rendering.
    *   Extensions that can initialize the parameters of a rendering or perform additional actions when a rendering is added to a page
*   ​The majority of the Microsoft/System libraries that we use in Sitecore XP have been updated.​
*   The `IAsyncEnumerable<T>` and `IAsyncEnumerator<T>` interfaces as well as the `AsyncEnumerator` class from the `System.InteractiveAsync` assembly have been replaced with their respective counterparts from the `Microsoft.Bcl.AsyncInterfaces` library. We have therefore updated the signature of every method that receives or returns an object of these types and every class that implements these interfaces.  
    To minimize the amount of changes required in the customer’s code, we have implemented a set of extensions in the `Sitecore.Async.Extensions.Legacy` assembly. This is a temporary assembly and will be removed in the next version of Sitecore.
*   ​The new _Async Redis Session State Provider_ and the updated _Stack Exchange Redis Driver_ give us a faster and more stable tracker.
*   Sitecore.UpdateApp 1.1.0 - This is the ​initial release​​​​ ​of the Sitecore.UpdateApp tool.

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Email Experience Manager | Marketers can now create HTML emails in any language, regardless of the context language. You can also activate Email campaigns without the need for an English language variant regardless of the language being used. |  |  |
| Email Experience Manager | ​​​​We have introduced a configurable retry mechanism that allows users to configure how many times they would like the system to retry if an error or failure occurs when you send out a campaign. |  |  |
| Email Experience Manager | We have introduced the following new email templates:​  
*   Two Column
*   2 Column 1 CTA
*   3 Column Long
*   3 Column Short

 |  |  |
| Experience Analytics | ​The _Reporting_ and _CM_ server roles have been combined to run on the same server role. |  | 410785 |
| Experience Optimization | ​​​​We have optimized the amount of storage space used by the _FACT\_PAGEVIEWS_ table in the _Reporting_ database​.​ |  | 407722 |
| Horizon | ​​​​_Droplink_ fields display items as a drop-down list. An author can only select one item from the drop-down list. |  | 419375 |
| Installation | ​​​​SIA 1.2.2 supports Sitecore XP 10.1.0.​ |  | 454343 |
| Marketing Foundation | ​​​If xConnect fails to add the referenced device profile, it still adds an interaction. |  | 152105 |
| Marketing Foundation | In the XDB Upgrade Tool an ​infinite loop can occur because the percentile limit is hardcoded to <1E-7​. | CS0197377 | 445585 |
| Marketing Foundation | ​​​​The XDB Update Tool does not notify users about any problems that occur during execution and fails silently​​​. |  | 443205 |
| Marketing Foundation | The new ​Data Purge CLI tool lets you remove unwanted contact data from the Experience Database​. |  | 402358 |
| Marketing Foundation | ​The new _Async Redis Session State Provider_ and the updated _Stack Exchange Redis Driver_ give us a faster and more stable tracker. |  | 436550 |
| Marketing Foundation | ​​​The _Collection_ database now supports scalable reads. |  | 378577 |
| Marketing Foundation | ​​You can now use content tags to assign a behavior profile to multiple items.​ |  | 411105 |
| Marketing Foundation | ​​​​You can now use the content hierarchy to assign a behavior profile to multiple items. |  | 411108 |
| Miscellaneous | Each database tnow contains it's own links table. |  | 402711 |
| Miscellaneous | ​​​​We have disabled the _TaskDatabaseAgent_ on every Sitecore instances except the content manager. |  | 346543 |
| Miscellaneous | ​The _IContentSearchQueryable_ interface is now public​. |  | 323667 |
| Miscellaneous | ​​​The majority of the Microsoft/System libraries that we use in Sitecore XP have been updated. |  | 427029 |
| Miscellaneous | You can now cancel a cortex Distributed Task​. |  | 442392 |
| Miscellaneous | The name of the task status item has been updated. |  | 443715 |
| Miscellaneous | ​The​ _Reporting_ role has been removed from the XP1 topology.​ |  | 431017 |
| Miscellaneous | ​The _HtmlCacheClearer_ agent has been introduced to partially clear HTML caches. |  | 92709 |
| Sitecore Containers | ​The _Sitecore Upgrade_ container supports upgrading from Sitecore XP 10.0.x to Sitecore XP 10.1.0. |  | 444388 |
| Sitecore Containers | ​​​The Sitecore Docker Tools have been updated for Sitecore XP 10.1.0 with new features. For more information, see https://github.com/Sitecore/docker-tools. |  | 444563 |
| Sitecore.ContentSearch | ​We have added some popular Content Search features to ​​Sitecore that allow the handling Solr exceptions in custom code, and have added circuit breaker/retry logic. |  | 367264 |
| Sitecore.ContentSearch | ​​​​The `HtmlCacheClearer` agent partially clears HTML caches. |  | 92709 |
| Sitecore.ContentSearch | The logic used to suppress exceptions during search​ has been improved. |  | 95498 |
| Sitecore Forms | ​Sitecore can now use a form without an additional _MVCOuterLayout.cshtml_ layout​.​​​ |  | 196722 |
| Sitecore Forms | ​Sitecore Forms are now able to load the scripts at the bottom of the page and this improves performance. |  | 367668 |
| Sitecore.UpdateApp 1.1.0 | ​The _Sitecore.UpdateApp_ ​tool ​updates databases to Sitecore 10.1.0.​​​ |  | 447041 |
| Sitecore.UpdateApp 1.1.0 | This is the ​initial release​​​​ ​of the Sitecore.UpdateApp tool. |  | 455244 |
| Solr | ​​​​We have introduce retry logic into the _IndexingStateSwitcher_. |  | 409536 |
| Solr | You can now determine whether Solr is available when searching from the API. |  | 137660 |
| Solr | ​​​​A field type in the _Sitecore Solr_ config file is now mapped to the _lowercase Solr_ field type. |  | 94968 |
| SXA and Horizon | ​​​In Horizon, only editable rendering parameters are diaplyed in the RHS panel. |  | 447823 |
| SXA and Horizon | ​​​You can now create extensions that initialize the parameters of a rendering or perform additional actions when a rendering is added to a page.  
You can create extensions that edit the properties of a selected rendering. |  |  |
| SXA and Horizon | ​​​Multi-line rendering parameter fields are now editable in the Horizon RHS panel. |  | 435044 |
| SXA and Horizon | Single line rendering parameter fields are now editable in the Horizon RHS panel. |  | 435055 |
| SXA and Horizon | ​​​Dropdown/Selector rendering parameter fields are now editable in the Horizon RHS panel. |  | 435058 |
| SXA and Horizon | SXA now supports local data sources in Horizon. |  | 444865 |
| SXA and Horizon | ​​​In Horizon​, you can now open Meta Partial Designs and you have access to some rudimentary editing capabilities. |  | 446768 |

Deprecated/Removed
------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Marketing Foundation | The _MongoDB Collection Provider_ has been removed. |  | 437928 |
| Marketing Foundation | The _​​​MongoDb Session State Provider_ has been removed. |  | 437926 |
| Marketing Foundation | In the `Sitecore.Processing.Cursors.Abstractions.ICursorDataProvider` interface, the `Task<bool> AreAllCursorsCompletedAsync();` has been deprecated and is no longer supported. |  | 438624 |
| Marketing Foundation | ​The `/sitecore/templates/System/Analytics/Profile Card - Persona` template is now marked as obsolete. You should use the `/sitecore/templates/System/Analytics/Profile Card` template instead.​​​ |  | 458660 |
| Marketing Foundation | The following items were removed:  

*   `Sitecore.Marketing.Definitions.IDefinitionManager<TDefinition>.FieldLabelResolver` property
*   `Sitecore.Marketing.Definitions.DefinitionManagerBase<TDefinition, TRecord>.FieldLabelResolver` property
*   `Sitecore.Marketing.Definitions.IDefinitionFieldLabelResolver` interface
*   `Sitecore.Marketing.Definitions.ItemBasedDefinitionFieldLabelResolver` class
*   `Sitecore.Marketing.Definitions.NotConfiguredDefinitionFieldLabelResolver` class
*   `Sitecore.Marketing.Definitions.DefinitionFieldLabel` class
*   `Sitecore.Marketing.xMgmt.Logging.SitecoreLoggingServicesConfigurator` class
*   `Sitecore.Marketing.xMgmt.Extensions.ServiceCollectionExtensions` class
*   `Sitecore.Marketing.xMgmt.Caching.IdsByAliasesCacheClearer.ProcessDeleteChanges(Item item, ID parentID)` method
*   `Sitecore.Marketing.xMgmt.Caching.IdsByAliasesCache.GetCacheKey(ID containerItemId, ID templateId, string name)` field
*   `Sitecore.Marketing.Definitions.WellKnownIdentifiers.MarketingDefinition.DefinitionNestedItemsTemplateIds` field
*   `Sitecore.Marketing.Definitions.ContactLists.Fields.CustomValues.PredefinedSourceType` field
*   `Sitecore.Marketing.Definitions.ContactLists.Fields.CustomValues.PredefinedParameters` field
*   `Sitecore.Marketing.Definitions.MarketingAssets.Data.ItemDb.MarketingAssetDefinitionItemRepository.CreateRecordFromItem(Item source)` method
*   `Sitecore.Marketing.Client.Resources.Texts.PublishTaxonomies` field
*   `Sitecore.Shell.Client.Applications.Marketing.Utilities.DeployMarketingDefinitions.DeployMarketingDefinitionsController.Database` property
*   `Sitecore.Shell.Client.Applications.Marketing.Utilities.DeployMarketingDefinitions.DeployMarketingDefinitionsController.StartTaxonomiesDeploymentJob` method
*   `Sitecore.Analytics.DataAccess.Configuration.AnalyticsSettings.LocationsDictionaryCacheExpiration` property
*   `Sitecore.Analytics.DataAccess.Configuration.AnalyticsSettings.LocationsDictionaryCacheSize` property
*   `Sitecore.Analytics.DataAccess.DataAdapterProvider.LoadVisits` method
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesLocationsReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesLocationsCacheHits` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesLocationsDataStoreReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesLocationsWrites` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesLocationsDataStoreReadTime` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesLocationsDataStoreWriteTime` property
*   `Sitecore.Analytics.DataAccess.Null.NullDataAdapterProvider.LoadVisits` method
*   `Sitecore.Analytics.DataAccess.Stub.DataAdapterProviderStub.LoadVisits` method
*   `Sitecore.Analytics.XConnect.DataAccess.XConnectDataAdapterProvider.LoadVisits` method
*   `Sitecore.Analytics.Configuration.AnalyticsSettings.LogLevel` property
*   `Sitecore.Analytics.Data.BehaviorProfileConverter.Convert(IBehaviorProfileContext source)` method
*   `Sitecore.Analytics.Data.BehaviorProfileConverterBase.Convert(IBehaviorProfileContext source)` method
*   `Sitecore.Analytics.Data.Items.VendorSpecificFilterItem` class
*   `Sitecore.Diagnostics.AnalyticsLogger` class
*   `Sitecore.Analytics.Pipelines.CreateVisits.XForwardedFor.HeaderIpIndex` property
*   `Sitecore.Analytics.Pipelines.GetRenderingRules.FromRendering` class
*   `Sitecore.Analytics.Pipelines.GetRenderingRules.FilterForEditing` class
*   `Sitecore.Analytics.Pipelines.GetRenderingRules.GetRenderingRulesArgs` class
*   `Sitecore.Analytics.Pipelines.GetRenderingRules.GetRenderingRulesPipeline` class
*   `Sitecore.Analytics.Pipelines.GetRenderingRules.GetRenderingRulesProcessor` class
*   `Sitecore.Analytics.Pipelines.HttpRequest.StartDiagnostics` class
*   `Sitecore.Analytics.Pipelines.InsertRenderings.Personalization` class
*   `Sitecore.Analytics.Pipelines.RegisterPageEvent.RegisterPageEventArgs ctor without params` class
*   `Sitecore.Analytics.Pipelines.RenderingRuleEvaluated.RenderingRuleEvaluatedArgs` class
*   `Sitecore.Analytics.Pipelines.RenderingRuleEvaluated.RenderingRuleEvaluatedPipeline` class
*   `Sitecore.Analytics.Pipelines.RenderingRuleEvaluated.RenderingRuleEvaluatedProcessor` class
*   `Sitecore.Analytics.Pipelines.StartTracking.ProcessQueryStringCampaign.SubscribeTrafficTypeRollbackToOnCurrentPageCancelled` method
*   `Sitecore.Analytics.Pipelines.TrafficTypes.Initialize` class
*   `Sitecore.Analytics.Pipelines.TrafficTypes.SearchKeywords` class
*   `Sitecore.Analytics.Pipelines.TrafficTypes.TrafficTypeArgs` class
*   `Sitecore.Analytics.Pipelines.TrafficTypes.TrafficTypePipeline` class
*   `Sitecore.Analytics.Pipelines.TrafficTypes.TrafficTypeProcessor` class
*   `Sitecore.Analytics.Rules.Conditions.CampaignWithCustomDataWasTriggeredDuringPastOrCurrentInteractionCondition` class
*   `Sitecore.Analytics.Rules.Conditions.ChannelWithCustomDataOfPastOrCurrentInteractionCondition` class
*   `Sitecore.Analytics.Rules.Conditions.VenueWithCustomDataOfPastOrCurrentInteractionCondition` class
*   `Sitecore.Analytics.Tracking.BehaviorProfileContext.SetScore` method
*   `Sitecore.Analytics.Tracking.BehaviorProfileContext.Remove` method
*   `Sitecore.Analytics.Tracking.BehaviorProfileContext.Reset`method
*   `Sitecore.Analytics.Tracking.ContactBehaviorProfilesContext.Add` method
*   `Sitecore.Analytics.Tracking.ContactBehaviorProfilesContext.Remove` method
*   `Sitecore.Analytics.Tracking.ContactBehaviorProfilesContext.RemoveAll` method
*   `Sitecore.Analytics.Tracking.ContactManager.constructor(SharedSessionStateManager sharedSessionStateManager)`
*   `Sitecore.Analytics.Tracking.ContactManager.constructor(SharedSessionStateManager sharedSessionStateManager, ContactRepositoryBase contactRepository)`
*   `Sitecore.Analytics.Tracking.IBehaviorProfileContext.SetScore` method
*   `Sitecore.Analytics.Tracking.IBehaviorProfileContext.Remove` method
*   `Sitecore.Analytics.Tracking.IBehaviorProfileContext.Reset` method
*   `Sitecore.Analytics.Tracking.IContactBehaviorProfilesContext.Add` method
*   `Sitecore.Analytics.Tracking.IContactBehaviorProfilesContext.Remove` method
*   `Sitecore.Analytics.Tracking.IContactBehaviorProfilesContext.RemoveAll` method
*   `Sitecore.Analytics.Tracking.Session.Identify` method
*   `Sitecore.Analytics.Tracking.Session.IdentifyAs` method
*   `Sitecore.Analytics.Tracking.SharedSessionState.SharedSessionStateManager` class
*   `Sitecore.Analytics.Tracking.StandardSession.Identify` method
*   `Sitecore.Analytics.Tracking.StandardSession.IdentifyAs` method
*   `Sitecore.Analytics.Tracking.StandardSession.EnsureIgnoredNonAutoDetectedRobotIsNotSaved` method
*   `Sitecore.Analytics.Tracking.StandardSession.SplitLogicalVisit` method
*   `Sitecore.Analytics.Tracking.StandardSession.GetContactByKnownIdentifier` method
*   `Sitecore.Analytics.Tracking.StandardSession.GetContactByIdentifier(string source, string identifier, ContactManager contactManager)` method
*   `Sitecore.Analytics.Tracking.StandardSession.SetSessionIdentifier` method
*   `Sitecore.Analytics.Web.ContactKeyCookie.IsNewContact` property
*   `Sitecore.Analytics.Web.ContactKeyCookie.ContactId` property
*   `Sitecore.Mvc.Analytics.Pipelines.Response.CustomizeRendering.Personalize` class
*   `Sitecore.Mvc.Analytics.Pipelines.Response.CustomizeRendering.CustomizeRenderingArgs` class
*   `Sitecore.Mvc.Analytics.Pipelines.Response.CustomizeRendering.CustomizeRenderingProcessor` class
*   `Sitecore.Mvc.Analytics.Pipelines.Response.GetRenderer.CustomizeRendering` class
*   `Sitecore.Mvc.Analytics.Presentation.EmptyRenderer` class
*   `configuration/sitecore/settings/Analytics.LogLevel` setting
*   `configuration/sitecore/settings/Analytics.LocationsDictionaryCacheExpiration` setting
*   `configuration/sitecore/pipelines/createVisit/processor[type=Sitecore.Analytics.Pipelines.CreateVisits.XForwardedFor]/HeaderIpIndex` setting
*   `configuration/sitecore/pipelines/httpRequestBegin/processor[type=Sitecore.Analytics.Pipelines.HttpRequest.StartDiagnostics]` processor
*   `configuration/sitecore/pipelines/trafficTypes` pipeline
*   `/sitecore/system/Settings/Rules/Definitions/Obsolete/Common/Conditions/Visit/Campaign with custom data was triggered during a past or current interaction` item
*   `/sitecore/system/Settings/Rules/Definitions/Obsolete/Common/Conditions/Visit` item
*   `/sitecore/system/Settings/Rules/Definitions/Obsolete/Common/Conditions/Visit/Channel with custom data of a past or current interaction` item
*   `/sitecore/system/Settings/Rules/Definitions/Obsolete/Common/Conditions/Visit/Venue with custom data of a past or current interaction` item
*   `/sitecore/system/Settings/Rules/Definitions/Obsolete/Common/Conditions/GeoIP/Latitude` item
*   `/sitecore/system/Settings/Rules/Definitions/Obsolete/Common/Conditions/GeoIP/Longitude` item
*   `Sitecore.Analytics.Rules.Conditions.LongitudeCondition` class
*   `Sitecore.Analytics.Rules.Conditions.LatitudeCondition` class

 |  |  |
| Marketing Foundation | The following items were deprecated and marked as obsolete:  

*   `Sitecore.Marketing.xMgmt.Definitions.Profiles.Data.ItemDb:`  
    *   `.ctor(ILogger<ProfileDefinitionItemRepository>, string, IDefinitionRecordMapper<ProfileDefinitionRecord> mapper)`
    *   `.ctor(ILogger<ProfileDefinitionItemRepository>, string, IDefinitionRecordMapper<ProfileDefinitionRecord> mapper)`
    *   `.ctor(ILogger<ProfileDefinitionItemRepository>, IItemRepositoriesSettings, IDefinitionRecordMapper<ProfileDefinitionRecord> mapper)`
    *   `.ctor(ILogger<ProfileDefinitionItemRepository>, string, bool, IDefinitionRecordMapper<ProfileDefinitionRecord> mapper)`
    *   `.ctor(ILogger<ProfileDefinitionItemRepository>, Database, bool, IDefinitionRecordMapper<ProfileDefinitionRecord> mapper)`
*   `ItemName, ItemId, ItemTemplateId, ItemDatabase properties in Sitecore.Marketing.xMgmt.Pipelines.IsMarketingDefinition.IsMarketingDefinitionPipelineArgs` class
*   `Sitecore.Shell.Applications.Analytics.LegacyCommunicationFormat.Tracking` class
*   `Sitecore.Shell.Applications.Analytics.LegacyCommunicationFormat.TrackingDefaultConverter` class
*   `Sitecore.Shell.Applications.Analytics.TrackingField.TrackingFieldPageBase.GetEvents(Packet packet, IEnumerable<PageEventItem> pageEventDefinitions, CheckBoxList checkBoxList)` method
*   `Sitecore.Shell.Applications.Analytics.TrackingField.TrackingFieldPageBase.RenderCheckBoxList(CheckBoxList checkBoxList, IEnumerable<PageEventItem> query, List<string> selected)` method
*   `Sitecore.Shell.Applications.Analytics.TrackingField.TrackingFieldPageBase.AddExistingGoals(Packet packet, IEnumerable<PageEventItem> pageEventDefinitions)` method
*   `Sitecore.Shell.Applications.Analytics.TrackingField.TrackingFieldPageBase.AddExistingNoneGoals(Packet packet, IEnumerable<PageEventItem> pageEventDefinitions)` method
*   `Sitecore.Analytics.Media.MediaRequestSessionModule` class
*   `Sitecore.Analytics.Media.MediaRequestEventHandler` class
*   `Sitecore.Shell.Applications.Analytics.VisitorCssPage` class
*   `Sitecore.Analytics.Pipelines.InitializeTracker.Robots` class
*   `Sitecore.Analytics.Configuration.AnalyticsSettings.Patterns` class
*   `Sitecore.Analytics.Configuration.AnalyticsSettings.Patterns.MinimalProfileScoreCount` property
*   `Sitecore.Analytics.Tracking.Profile.MinimalProfileScoreCount` property
*   `Sitecore.Analytics.Tracking.CurrentVisitContext.constructor(StandardSession session, Guid visitId, Func<string, bool> isProfileDefinedInDatabase = null)` constructor
*   `Sitecore.Analytics.XConnect.DataAccess.Pipelines.ConvertToXConnectInteractionPipeline.ConvertToProfileScoresFacetProcessor` class
*   `Sitecore.Analytics.Configuration.AnalyticsSettings.PerformLookup` class
*   `Sitecore.Analytics.Lookups.GeoIpManager` class
*   `Sitecore.Analytics.Lookups.GeoIpOptions` class
*   `Sitecore.Analytics.Lookups.GeoIpResult` class
*   `Sitecore.Analytics.Lookups.IpHashProvider` class
*   `Sitecore.Analytics.Lookups.IpHashProviderBase` class
*   `Sitecore.Analytics.Lookups.IpHashProviderCollection` class
*   `Sitecore.Analytics.Lookups.LookupData` class
*   `Sitecore.Analytics.Lookups.UpdateOperation` class
*   `Sitecore.Analytics.Rules.Conditions.AreaCodeCondition` class
*   `Sitecore.Analytics.Rules.Conditions.CityCondition` class
*   `Sitecore.Analytics.Rules.Conditions.GeographicalCoordinatesCondition` class
*   `Sitecore.Analytics.Rules.Conditions.IpAddressCondition` class
*   `Sitecore.Analytics.Rules.Conditions.IspNameCondition` class
*   `Sitecore.Analytics.Rules.Conditions.LatitudePointCondition` class
*   `Sitecore.Analytics.Rules.Conditions.LongitudePointCondition` class
*   `Sitecore.Analytics.Rules.Conditions.MetroCodeCondition` class
*   `Sitecore.Analytics.Rules.Conditions.NameCondition` class
*   `Sitecore.Analytics.Rules.Conditions.PostalCodeCondition` class
*   `Sitecore.Analytics.Rules.Conditions.RdnsCondition` class
*   `Sitecore.Analytics.Rules.Conditions.RegionCondition` class
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPRequestsTotal` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPRequestsPages` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPRequestsBackground` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPMemoryLookups` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPDatabaseLookups` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPProviderLookups` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPFailedLookups` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPUnknownIPs` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPAverageResolveTime` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPCacheSize` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPVisitsUpdated` property
*   `Sitecore.Analytics.Tracking.Diagnostics.PerformanceCounters.AnalyticsTrackingCount.GeoIPAverageCallsBeforeIPResolved` property
*   `Sitecore.Analytics.DataAccess.Dictionaries.KnownDataDictionaries.GeoIPs` property
*   `Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.InitializeKnownDataDictionariesArgs.GeoIpDataDictionary` property
*   `Sitecore.Analytics.DataAccess.Dictionaries.GeoIpDataDictionary` class
*   `Sitecore.Analytics.DataAccess.Configuration.AnalyticsSettings.GeoIpDataDictionaryCacheSize` property
*   `Sitecore.Analytics.DataAccess.Configuration.AnalyticsSettings.GeoIpDataDictionaryCacheExpiration` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesGeoIpsReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesGeoIpsWrites` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesGeoIpsCacheHits` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesGeoIpsDataStoreReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesGeoIpsDataStoreReadTime` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesGeoIpsDataStoreWriteTime` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesUserAgentsReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesUserAgentsCacheHits` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesUserAgentsDataStoreReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesUserAgentsWrites` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesUserAgentsDataStoreReadTime` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesUserAgentsDataStoreWriteTime` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesDevicesReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesDevicesCacheHits` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesDevicesDataStoreReads` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesDevicesWrites` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesDevicesDataStoreReadTime` property
*   `Sitecore.Analytics.DataAccess.Diagnostics.PerformanceCounters.AnalyticsDataAccessCount.DataDictionariesDevicesDataStoreWriteTime` property
*   `Sitecore.Analytics.DataAccess.Configuration.AnalyticsSettings` class
*   `Sitecore.Analytics.DataAccess.Dictionaries.DataStorage.ReferenceDataClientDictionary` class
*   `Sitecore.Analytics.DataAccess.Dictionaries.DeviceDictionary` class
*   `Sitecore.Analytics.DataAccess.Dictionaries.KnownDataDictionaries` class
*   `Sitecore.Analytics.DataAccess.Dictionaries.UserAgentsDictionary` class
*   `Sitecore.Analytics.DataAccess.DictionaryBase` class
*   `Sitecore.Analytics.DataAccess.Pipelines.GetDictionaryDataStorage.GetDictionaryDataPipeline` class
*   `Sitecore.Analytics.DataAccess.Pipelines.GetDictionaryDataStorage.GetDictionaryDataPipelineArgs` class
*   `Sitecore.Analytics.DataAccess.Pipelines.GetDictionaryDataStorage.GetDictionaryDataProcessor` class
*   `Sitecore.Analytics.DataAccess.Pipelines.GetDictionaryDataStorage.GetDictionaryDataProcessorBase` class
*   `Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.DisableUserAgentDataDictionaryProcessor` class
*   `Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.InitializeKnownDataDictionariesArgs` class
*   `Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.InitializeKnownDataDictionariesPipeline` class
*   `Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.InitializeKnownDataDictionariesProcessor` class
*   `Sitecore.Analytics.DataAccess.Pipelines.InitializeKnownDataDictionaries.InitializeKnownDataDictionariesProcessorBase` class
*   `Sitecore.Analytics.DataAccess.Stub.DatabaseStub` class
*   `Sitecore.Analytics.DataAccess.Stub.DictionaryStub` class
*   `Sitecore.Analytics.XConnect.DataAccess.Dictionaries.XConnectDeviceDictionary` class
*   `Sitecore.Analytics.Data.Dictionaries.DictionaryData.Session.GetDictionaryDataProcessor` class
*   `Sitecore.Analytics.Tracking.CurrentInteraction.UserAgentId` property
*   `Sitecore.Analytics.Tracking.CurrentInteractionBridge.UserAgentId` property
*   `Sitecore.Analytics.Tracking.CurrentVisitContext.UserAgentId` property
*   `Sitecore.Analytics.Tracking.IInteractionData.UserAgentId` property
*   `Sitecore.Analytics.Tracking.Interaction.UserAgentId` property

 |  |  |
| Miscellaneous | ​​​Sitecore Fast Query has been deprecated.​​​​ |  | 96945 |
| Miscellaneous | ​The obsolete `Sitecore.Rules.Conditions.DateTimeConditions.DayOfWeekCondition` class has been removed.  
The obsolete `\master\sitecore\system\Settings\Rules\Definitions\Obsolete\Common\Conditions\Date\Day of Week` item has been removed.​ |  | 213815 |
| Miscellaneous | ​​​​The ```` \master\sitecore\system\Settings\Rules\Definitions\Elements\Date\Day of Week ``` item has been moved to the `` \master\sitecore\system\Settings\Rules\Definitions\Obsolete\Common\Conditions\Date\Day of Week `as SXA no longer uses fast query.the corresponding class is now obsolete.​` `` ``` ```` |  | 213815 |
| Miscellaneous | ​The `Sitecore.Rules.Conditions.DateTimeConditions.DayOfWeekCondition` class is now marked as _Obsolete_. |  | 213815 |
| Miscellaneous | ​​​​The `Sitecore.Nexus` library has made obsolete, all the code has been merged into `Sitecore.Kernel`. |  |  |

Breaking changes
----------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Marketing Foundation | In the `Sitecore.Processing.Tasks.Abstractions` assembly, the `Sitecore.Processing.Tasks.Abstractions.ITaskDataProvider` interface has been extended with the new `Task<IProcessingTaskData> RefreshTaskStatus(Guid)` method. |  | 438624 |
| Marketing Foundation | In the `Sitecore.Processing.Tasks.Abstractions` assembly, the `Sitecore.Processing.Tasks.Abstractions.ITaskDataProvider` interface has been extended with the new `Task<` |  | 442392 |
| Marketing Foundation | ​XConnect contact data extraction has been extended to return contacts that do not interact with the brand for a specific amount of time. XConnect `CollectionRoutes` has been updated to accept the nullable `cutoffDate` parameter in the `GetCreateContactCursorUri`. This parameter accepts the nullable date-time value for contact data extraction filtering. |  | 412111 |
| Marketing Foundation | ​​​​In xConnect, we have introduced the _Scalable Reads_ feature to support read operations from secondary instances of the xDB _collection_ database to unload the primary database. The `ReadPreference` parameter can be specified for most of the read operations including data extraction. The `IRepository` and `IDataProvider` interfaces have been extended with create cursor and split cursor methods that accept the new `InteractionCursorOptions`, `ContactCursorOptions`, `InteractionCursorSplitOptions`, and `ContactCursorSplitOptions` operations with the `ReadPreference` parameter. |  | 405346 |
| Miscellaneous | ​​​​​Items are now stored as resource data and are no longer stored in the database. |  | 441838 |
| Miscellaneous | The `IAsyncEnumerable<T>` and `IAsyncEnumerator<T>` interfaces as well as the `AsyncEnumerator` class from the `System.InteractiveAsync` assembly have been replaced with their respective counterparts from the `Microsoft.Bcl.AsyncInterfaces` library. We have therefore updated the signature of every method that receives or returns an object of these types and every class that implements these interfaces.  
To minimize the amount of changes required in the customer’s code, we have implemented a set of extensions in the `Sitecore.Async.Extensions.Legacy` assembly. This is a temporary assembly and will be removed in the next version of Sitecore. |  | 427029 |
| Platform | ​The dictionary items are stored in the `\App_Data\localization\*.xml` files and are no longer stored in the core database. These XML files have a priority over the dictionary API. |  | 441837 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Caching | ​​​When the _StandardValuesCache_ is populated during a background task, it does not contain the _Language Fallback_ values for items with Standard Values. |  | 343322 |
| --- | --- | --- | --- |
| Caching | ​​​​The _FilteredItemsCache_ is not cleared when the _CacheKeyIndexing_ setting is set to _true_. |  | 424654 |
| --- | --- | --- | --- |
| Email Experience Manager | ​When you rebuild the core link database, if an EXM item contains the ":" value in the _Final Renderings_ field, it generates XML errors. |  | 210892 |
| --- | --- | --- | --- |
| Email Experience Manager | You cannot create an email in a language other than the context language.​​​​ |  | 58589 |
| --- | --- | --- | --- |
| Email Experience Manager | ​If the _Sender_ header value is not set correctly, it generates a broken header in the message​. |  | 328606 |
| --- | --- | --- | --- |
| Email Experience Manager | ​​​​If the value of the _pageSize_ parameter is set to less than the current number of contact lists, ​a user who has been assigned restrictions on contact list items is shown incorrect recipients​ lists. |  | 359727 |
| --- | --- | --- | --- |
| Email Experience Manager | _​xConnectRetry_ does not handle xConnect conflicts correctly and this causes ​related clicks and open statistics to not be registered.​ |  | 434414 |
| --- | --- | --- | --- |
| Email Experience Manager | ​​​If you click an EXM page link when the _enableTracking_ value is set to _false_, a ​`System.NullReferenceException` is thrown. |  | 442594 |
| --- | --- | --- | --- |
| Email Experience Manager | ​The item name of an email is overwritten by the display name when the email is saved or activated.​ |  | 398255 |
| --- | --- | --- | --- |
| Email Experience Manager | ​​​The _ExmKeyBehaviorCache_ members are not serializable and this ​throws an exception.​ |  | 411097 |
| --- | --- | --- | --- |
| Email Experience Manager | ​If the current contact is identified as a robot and you try to unsubscribe it, a `​System.NullReferenceException`​ is thrown. |  | 435520 |
| --- | --- | --- | --- |
| Email Experience Manager | ​​​​When you are editing an email or a campaign, to exit the editing window, you must click _Cancel_ twice. |  | 391682 |
| --- | --- | --- | --- |
| Email Experience Manager | ​If the subject of an email contains special characters, they are displayed as encoded text in the UI.​ |  | 401984 |
| --- | --- | --- | --- |
| Email Experience Manager | ​​​​Custom SMTP bounces counters are not updated when new bounces are collected.​ |  | 410168 |
| --- | --- | --- | --- |
| Email Experience Manager | A user can create a language version of a campaign even when the user has not have write permission for that language.​ |  | 416354 |
| --- | --- | --- | --- |
| Experience Analytics | ​​​​The following error occurs: _Exception when executing agent pathAnalyzer/mapRebuildStatusCheckerAgent_​ when a processing task with the specified unique identifier does not exist.​ | CS0141107, CS0148766, CS0149264, CS0154560, CS0157278, CS0161069, CS0164366, CS0174859, CS0185346, CS0185583, CS0190709 | 421119 |
| --- | --- | --- | --- |
| Experience Analytics | ​If the site name contains "/", the Experience Analytics reports do not resolve correctly. | CS0189972 | 426581 |
| --- | --- | --- | --- |
| Experience Analytics | ​If you use the _ExperienceAnalytics.aspx_ page​​​ to synchronizing Experience Analytics, the _units processed_ value remains empty when the process is completed. | CS0194073 | 434357 |
| --- | --- | --- | --- |
| Experience Editor | ​If you select a component that contains a long text, in the background, the page scrolls to the top. |  | 163934 |
| --- | --- | --- | --- |
| Experience Editor | ​​​​If you create a non-english version of a campaign, it causes an internal error​. |  | 196557 |
| --- | --- | --- | --- |
| Experience Editor | The value in a _Single line text_ field can be modified with hot keys​. |  | 447828 |
| --- | --- | --- | --- |
| Experience Editor | The image on a rendering disappears after you edit the rendering parameters. |  | 431714 |
| --- | --- | --- | --- |
| Experience Editor | ​​​​If you switch from the Experience Explorer to the Experience Editor, the language version is reset. |  | 426780 |
| --- | --- | --- | --- |
| Experience Editor | In the Experience Editor, if you edit a General Link field that contains text and some additional parameters, it is rendered incorrectly. |  | 426644 |
| --- | --- | --- | --- |
| Experience Editor | ​​​If the `Languages.AlwaysStripLanguage` setting is set to _false_, ​switching language does not work correctly in the Experience Editor. |  | 420740 |
| --- | --- | --- | --- |
| Experience Editor | ​If you use the Chrome browser, you cannot paste text from the Experience Editor. |  | 418798 |
| --- | --- | --- | --- |
| Experience Editor | ​​​In the Experience Editor, you cannot ​insert an item with its default name​​. |  | 415604 |
| --- | --- | --- | --- |
| Experience Editor | If you click inside or outside a component​, the ​field value changes to _\[No text in field\]_. |  | 305756 |
| --- | --- | --- | --- |
| Experience Editor | In the Experience Editor, if there are no _shell#lang_ cookies, ​the labels on the rendering buttons are not displayed. |  | 402418 |
| --- | --- | --- | --- |
| Experience Editor | ​​​If there are no _shell#lang cookies_, the _No text in field_ label ​is not displayed. |  | 388571 |
| --- | --- | --- | --- |
| Experience Editor | The ​Experience Explorer does not resolve the correct pattern card​. |  | 369262 |
| --- | --- | --- | --- |
| Experience Editor | ​​​If you use a _Submit_ button that has comma in its label to go to the next page of a form​, a _​NullReferenceException_ occurs​. |  | 401410 |
| --- | --- | --- | --- |
| Experience Editor | ​The Field Editor loses the _scLanguage_ context​. |  | 409303 |
| --- | --- | --- | --- |
| Experience Editor | ​If you click the _Save_ button, e​xtra <br> tags are added to RTE fields in the Experience Editor. This is caused by Hotfix 396633/415404​. |  | 413366 |
| --- | --- | --- | --- |
| Experience Editor | `​Sitecore.BeginField()` adds paragraph tags in a _Single-Line Text_ field.​​​​ |  | 409828 |
| --- | --- | --- | --- |
| Experience Editor | If you use the _Before_ and _After_ attributes​, ​a _Cannot read property 'toLowerCase' of undefined_ error occurs.​​​ |  | 299554 |
| --- | --- | --- | --- |
| Experience Editor | ​​​​If you edit an empty _Multi-Line Text_ field, it adds <p> tags when you save it. |  | 398289 |
| --- | --- | --- | --- |
| Experience Editor | In the Experience Editor, if you configure the _Custom Experience_ button for a _File_ field and then click _Open file_, the _Value cannot be null. Parameter name: name_ error occurs. |  | 400101 |
| --- | --- | --- | --- |
| Experience Editor | If you change the name of a form field, an ​exception is thrown during form aggregation. |  | 120569 |
| --- | --- | --- | --- |
| Experience Optimization | ​A full rebuild of the _sitecore\_suggested\_test\_index_ is triggered too often. |  | 336911 |
| --- | --- | --- | --- |
| Experience Optimization | ​​​In Experience Optimization, the ​_Active Tests_ tab opens items in _Experience Editor_ without the `sc_site` parameter in the URL​​​. | CS0183207 | 405796 |
| --- | --- | --- | --- |
| Experience Optimization | ​​If you repeatedly edit an RTE field or add a rendering as a non-administrator, the concurrent insertions into the current item cause a _NullReferenceExcepion_.​ |  | 221156 |
| --- | --- | --- | --- |
| Experience Optimization | ​​​In the _Personalize the component_ dialog, ​if a rule name​ is empty, the _The name cannot be blank_ message appears continuously in Safari and Chrome.​ |  | 257477 |
| --- | --- | --- | --- |
| Experience Optimization | ​In _Content Testing_, the context site for the _Generate Screenshot_ functionality is not resolved correctly.​ |  | 194113 |
| --- | --- | --- | --- |
| Experience Optimization | ​​​In the Content Editor if you cancel the creation of a resuable test, the Content Editor displays the notification for the draft resuable test. |  | 447990 |
| --- | --- | --- | --- |
| Experience Profile | ​​​​If a contact makes several simultaneous visits to a site, the Experience Profile hangs. | CS0147941 | 291232 |
| --- | --- | --- | --- |
| Experience Profile | If the profile type is set to _Average_​, the _​Radar_ chart is empty​. | CS01155246 | 316235 |
| --- | --- | --- | --- |
| Links | ​​​​Cross-site links contain `sitecore/content/`. |  | 422970 |
| --- | --- | --- | --- |
| Login | When you login after trying to access a `sitecore/path`, you are not redirected to the Launchpad. |  | 380821 |
| --- | --- | --- | --- |
| Login | ​​​You cannot log in to the Sitecore client if one of the databases in not accessible. |  | 411647 |
| --- | --- | --- | --- |
| Marketing Foundation | If Marketing Automation changes a profile during an active session, ​the profiles are lost after the session is submitted​. |  | 407652 |
| --- | --- | --- | --- |
| Marketing Foundation | ​The performance of tracking fields with a large number of profile mapping rules​​ is poor. |  | 410594 |
| --- | --- | --- | --- |
| Marketing Foundation | ​The `ItemEventHandler's isMarketingDefinition` check fails on `item:create`. This causes issues when you create media items that have special characters in their names. | CS0191872, CS0203313, CS0205684, CS0217531 | 427368 |
| --- | --- | --- | --- |
| Miscellaneous | ​Access to an item is denied if the _Enforce Version Presence_ setting is enabled and the items' parent has no version in the current language​. |  | 435442 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​The `GetPublishedVersionOfItem` method is not thread-safe. |  | 346937 |
| --- | --- | --- | --- |
| Miscellaneous | ​A number of classes in the Sitecore Kernel are dependent on _Fast Query_. |  | 137916 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​The _Save changes_ dialog does not refresh the Content Editor.​ |  | 126958 |
| --- | --- | --- | --- |
| Miscellaneous | The _Enabled clones_ feature decreases field-read performance for non-cloned items. |  | 227274 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​Dictionary translation does not work for language fallback items that are updated remotely or through publishing. |  | 156715 |
| --- | --- | --- | --- |
| Miscellaneous | ​The current implementation of the 'RestrictedControllerProvider' is not optimal. |  | 188887 |
| --- | --- | --- | --- |
| Miscellaneous | `​​​LinkManager.GetItemUrl` does not resolve sites correctly when `alwaysIncludeServerUrl` is set to _false_​. |  | 391005 |
| --- | --- | --- | --- |
| Miscellaneous | Editing an item that has several delegated items can throw an error. |  | 369243 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​If you use the _Revert_ command, item serialization creates an extra version of the edited item. |  | 193263 |
| --- | --- | --- | --- |
| Miscellaneous | ​The `LinkProvider.ResolveTargetSite(Item item)` method does not resolves the site. |  | 299874 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​`ContetxtItemId` is not set inside the `GetRenderingDatasourceArgs` class​. |  | 415979 |
| --- | --- | --- | --- |
| Miscellaneous | ​The _Select Rendering_ functionality does not respect the language of the current item.​ |  | 88236 |
| --- | --- | --- | --- |
| Miscellaneous | Validation ignores changes that have been made to fields that inherit from Standard Values. |  | 415683 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​If lambda methods are present in the stacktrace​, the _LocationInfo_ constructor​​ throws a NullReferenceException. |  | 437603 |
| --- | --- | --- | --- |
| Miscellaneous | If the parent of an item is unpublished​, data sources are not rendered on the item​. |  | 437895 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​A JS file does not contain the logic required to pass the context language to a dialog box. |  | 441767 |
| --- | --- | --- | --- |
| Miscellaneous | It takes too long to load LanguageMapping. |  | 442879 |
| --- | --- | --- | --- |
| Miscellaneous | ​The _General Link_ dialog box displays the _Media Preview_ icon in EN language and not in the current language. |  | 446587 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​The _General Link_ dialog box displays the content tree in EN language and not in the current language. |  | 434464 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​The cumulative hotfix for Sitecore XP 9.2.0 breaks the SSL offloading feature for media links​. |  | 426276 |
| --- | --- | --- | --- |
| Miscellaneous | ​When you log in through Azure AD​​, URLs that contain non-ASCII characters are not encoded correctly on Azure. |  | 428679 |
| --- | --- | --- | --- |
| Miscellaneous | ​The _Suppress Validation Rule_ functionality does not work on the _component_ field type​. |  | 419674 |
| --- | --- | --- | --- |
| Miscellaneous | ​The _Sitecore.zip_ functionality has been deprecated, and it will be completely removed in a later version. |  |  |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​The _Select Media_ dialog does not respect the current content language​. |  | 184883 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​The _Select Media_ dialog​ duplicates the `la=` language ​query string parameter for versioned media items​. |  | 405280 |
| --- | --- | --- | --- |
| Miscellaneous | When hotfix 402039-1 is installed, the _UserRoleCondition_ does not work for virtual users. |  | 442097 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​If you remove a version of an ite​m that contains several links, it is removed very slowly. |  | 411100 |
| --- | --- | --- | --- |
| Miscellaneous | The translation cache reloads very slowly. |  | 406777 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​The Redis Session Provider performs poorly in high-stress situations.​ |  | 436550 |
| --- | --- | --- | --- |
| MVC | If you use a controller rendering, the data source does not contain a value. |  | 300536 |
| --- | --- | --- | --- |
| Path Analyser | The ​Path Analyzer contains some outdated 3rd party JavaScript libraries.​​​ | CS0162399, CS0162401 | 341306 |
| --- | --- | --- | --- |
| Platform | `ItemInformation.ChildIDs` has been optimized to improve handling of concurrent requests. |  | 439228 |
| --- | --- | --- | --- |
| Platform | The `Sitecore.ExperienceEditor.Pipelines.RenderField.EncodeTextFieldValue` processor has been added to the `renderField` pipeline. It prevents scripts from being executed in simple text fields and ensures that HTML contents in simple text fields are encoded in edit mode but rendered in preview or normal mode. |  | 319982, 410513, 482842 |
| --- | --- | --- | --- |
| Platform | The unversioned `Phrase` field in en language is still present even if there is no English(region) version of the dictionary item. |  | 406889 |
| --- | --- | --- | --- |
| Publishing | ​​​During publication the `LoadInitialItemDefinitions` method does not respect the configuration of retryers. |  | 443201 |
| --- | --- | --- | --- |
| Rich Text Editor | ​​​In the Rich Text Editor, when you click _Insert Sitecore Link_, the default en version of the item _Display Name_ is always inserted as the link text. |  | 318519 |
| --- | --- | --- | --- |
| Rich Text Editor | You cannot paste formatted text from Word into the Rich Text Editor. |  | 362810 |
| --- | --- | --- | --- |
| Serialization | ​Non-existent FallBack langauge versions of items are serialized with YAML serialization. |  | 418685 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | The ​`SearchContentSearchIndex` class does not support search by criteria​. |  | 94749 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | The ​​​​​​​​​SLOP parameter is ignored​​​​​​.​​​ |  | 94796 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | Proximity search does not work with hyphenated​ word​s. |  | 413873 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​​Language fallback items are not deleted from the _web_ index​​​. |  | 220361 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | Media items with language versions can cause UI labels to not be displayed. |  | 404553 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | The CurrentLanguage token does not work​​ in a search query.​​​ |  | 398616 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​​​In a patch file, the files specified in the `<loadOrder>` section are not excluded from the resulting configuration when the _mode_ setting is set to _Off_. |  | 391721 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​Use _IndexCustodian_ for index operations (Update, Refresh, Delete, Rebuild) instead of _ISearchIndex_. |  | 346932 |
| --- | --- | --- | --- |
| Sitecore Forms | If you create a new form based on a template​, ​an error is displayed. |  | 401422 |
| --- | --- | --- | --- |
| Sitecore Forms | ​You cannot add two actions of the same type to a form​.​​​ |  | 398965 |
| --- | --- | --- | --- |
| Sitecore Forms | If more than one _RegularExpressionValidation_ is defined in a field, an ​_InvalidOperationException_ occurs​. |  | 409302 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​When unexpected behavior is detected in multi-page forms, ​​no alert message​ is displayed.​​​ |  | 431196, 446817 |
| --- | --- | --- | --- |
| Sitecore Forms | ​A _/fieldtracking/register_ call returns non valid json​. |  | 421156 |
| --- | --- | --- | --- |
| Sitecore Forms | ​If you use a GET request, the _An item with the same key has already been added_ error occurs. |  | 400109 |
| --- | --- | --- | --- |
| Sitecore security | In the _User Manager_, a request to unlock a user times out if the user making the request is not an _admin_. |  | 416025 |
| --- | --- | --- | --- |
| Solr | ​​​​Searching by the _\_templatename_ field is case-sensitive for Solr. |  | 307597 |
| --- | --- | --- | --- |
| Solr | If a value of the _index id_ field contains uppercase letters, searching does not return any results. |  | 140821 |
| --- | --- | --- | --- |
| Solr | ​​​Queries that contain spaces do not work correctly. |  | 177874 |
| --- | --- | --- | --- |
| Solr | ​​​​Queries that use the Contains method do not work correctly. |  | 206650 |
| --- | --- | --- | --- |
| Solr | ​Search terms that are used in the _Contains_, _StartsWith_, _EndsWith_ methods are wrapped in quotation marks​ and the queries do not work correctly.​​​ |  | 233988 |
| --- | --- | --- | --- |
| SPEAK | The _Select Media_ dialog caches image thumbnail​​s. |  | 436697 |
| --- | --- | --- | --- |
| Workbox | In the Workbox, when you submit an item based on the _Standard Comment Template_, the item is moved to the next workflow state even when a _Fatal Validation_ error is thrown. |  | 196255 |
| --- | --- | --- | --- |