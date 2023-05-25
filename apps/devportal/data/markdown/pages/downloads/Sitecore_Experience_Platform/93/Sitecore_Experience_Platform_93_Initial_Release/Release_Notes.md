---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/93/Sitecore_Experience_Platform_93_Initial_Release/Release_Notes
---


Release Notes
=============

**November 2019 – released Sitecore Experience Platform 9.3.0**

This is a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

*   [Highlights](#Highlights)
*   [New features/improvements](#New)
*   [Deprecated/Removed](#Deprecated)
*   [Breaking changes](#Breaking)
*   [Resolved issues](#Resolved)

Highlights
----------

Sitecore Experience Platform 9.3.0 includes:

*   You can now publish a form from the forms list.
*   To add file upload functionality to your forms, you can now use the _File upload_ forms element.
*   We have introduced Sitecore Blob storage. Sitecore stores media items, such as documents or images, in a Sitecore database by default. Sitecore Blob Storage allows you to store these files in Azure Blob Storage, thereby reducing the hosting costs and improving performance.
*   The performance of the reference data service has been improved.
*   ​You can now use the Sitecore bot detection functionality to verify whether visitor is human. This removed the need for a _Captcha_ element.
*   The performance of the session state providers​ has been improved by optimizing the amount of data that is saved to the session state.
*   The performance of the web tracker has been improved by saving expired sessions to xConnect in batches.
*   ​A new interaction aggregation pipeline that can handle batches of interactions has been added.
*   We have implemented some GDPR improvements to support the right to be forgotten.
*   We have introduced expand options for devices.
*   The _Collection_ database schema has been updated to store a shard key value.
*   ​We have refreshed the HTML templates and improved the template manager experience.
*   The Sitecore Install Assistant now supports the optional installation of Solr and Sitecore Experience Accelerator.​​​

New features/improvements
-------------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Configuration | ​​​The XP platform counters are now disabled by default for cloud deployments just like the CMS counters​. |  | 293114 |
| Email Experience Manager | We have added 2 new settings to the _Sitecore.EDS.Core.config_ file:
*   EXM.DispatchProvider.RetryCount (default value: 3) - specifies the number of retries for transient exceptions.
*   EXM.DispatchProvider.RetryDelay (default value: 1000) - specifies the time to wait in ms between retries. This time is multiplied by the current retry number.

These settings are used when a dispatch provider attempts to send an email.

​​ |  | 340051 |
| Email Experience Manager | EXM URLs are now case-sensitive.​​​ |  | 201065 |
| Email Experience Manager | The HTML templates have been refreshed and the template manager experience has been improved.​​ |  |  |
| Experience Analytics | ​The performance of Experience Analytics has been improved by removing redundant processing and introducing caches to improve memory consumption. ​​ |  | 324065 |
| Experience Analytics | ​​​The _Conversion Rate_ and _Bounce Rate_ calculations have been improved. |  | 308223 |
| Experience Editor | The _General link with search_, _Date_, and _Datetime_ fields now have _Clear_ buttons in the floating toolbar that you can use to clear the field values.​​ | 415207, 415551, 444327 | 49564, 68761 |
| Experience Editor | ​​​​​The _Navigation_ and _Control_ bars are now enabled by default. |  | 331562 |
| Experience Editor | ​​In the inline Rich Text Editor, standard link texts are converted into links when you enter or paste the text. For example _http://domain.com_, _https://domain.com_ or _[\[email protected\]](/cdn-cgi/l/email-protection)_ are converted to the appropriate links​. |  | 309417 |
| Experience Editor | ​​​We have added a new _IsExploring_ property to _Sitecore.Context.PageMode_ to detect if a page is in Explore mode. |  | 256914 |
| Experience Editor | ​​​In the Experience Editor, the image selection and link dialogs are now aligned with the functionality that is available in the Content Editor. | 412414 | 51621 |
| Experience Editor | ​​​In the Experience Editor, when you create a new page, the first available template is preselected by default to improve usability. |  | 300587 |
| Installation | ​​Sitecore XP 9.3.0 supports Windows Server 2019. |  | 256276 |
| Installation | ​​​​​In the Sitecore Install Assistant, we have added a minimize window button​ and improved the minimize behavior from the taskbar. |  | 339078 |
| Installation | ​We have added the Sitecore brand logo to the Sitecore Install Assistant​.​ |  | 343338 |
| Installation | ​​​The Sitecore Install Assistant now prompts the user to run under Administrator credentials​. |  | 319280 |
| Installation | In the Sitecore Install Assistant, you can now decide whether or not to install Sitecore Experience Accelerator.​ |  | 318518 |
| Installation | In the Sitecore Install Assistant, you can now decide whether or not to install Solr.​​​ |  | 318529 |
| Installation | In the Sitecore Install Assistant, the _Install Complete_ page now contains ​​a _Launch Sitecore_ button that opens the installation in a browser. ​ |  | 333676 |
| List Manager | ​​New telemetry measurements are now available:

*   Number of times a new list is created.
*   Number of times a new segmented list is created.
*   Number of times a segmented list is saved.
*   Number of times a list is exported to a CSV file.
*   Number of times a segmented list is converted to a contact list|  | 318355 |
| Marketing Automation | ​Marketing Automation now lets you specify date and time in the criteria for entering a contact in an enrollment plan.  
This new feature allows marketers to enroll contacts from a segment list based on a schedule, and configure an automation plan based on three criteria: a specific time of the day, a specific day of the week, or a specific date. |  | 307797 307798 |
| Marketing Foundation | ​​We have introduced expand options for devices.

The Tracker can now load information about the last known contact and the device in one request and use this information for personalization|  | 339305 |
| Marketing Foundation | ​​​You can now customize the validation of the names of _Marketing Definition Items_. |  |  |
| Marketing Foundation | ​​You can now check the status of the xConnect search index rebuild process. In a command line, run the following command:

`Sitecore.XConnectSearchIndexer.exe - RebuildMonitor`

Or

`Sitecore.XConnectSearchIndexer.exe – rm`

 |  | 166962, 289794 |
| Marketing Foundation | ​The xConnect search index rebuild process has been improved.  
The indexes are rebuilt in several parallel tasks. If one of the tasks fails with an error, the other tasks are cancelled and this allows you to identify and address rebuild issues earlier.​​ |  | 166898 |
| Marketing Foundation | ​​​The SolrCloud search functionality now contains a retry feature.

In the `sc.Xdb.Collection.IndexReader.SOLR.xml` file, in the `Settings/Sitecore/XConnect/CollectionSearch/Services/Solr.SolrReaderSettings/Options` section, the `RetryCount` and `MaximumRetryDelayMilliseconds` settings have been added to configure the behavior of the new feature. The setting can be configured on xConnect Collection Search service instances|  | 220902 |
| Marketing Foundation | ​​New settings have been introduced in the `Sitecore.Analytics.config` file to control the reporting dimensions cache:

*   `​Analytics.Aggregation.Dimensions.MaxCacheSize`  
    Determines the maximum cache size in bytes of the _Dimension Key_ in the Cache Manager.  
    ​Default value: 100000
*   `​Analytics.Aggregation.Dimensions.EnableCaching`  
    Determines whether _Dimension Key_ is cached by default.  
    NOTE: You can also use the `Dimension.EnableCaching` property to change this setting programmatically.
    
    Default value: true
    

The cache is only used for immutable dimensions - inherited from the `Dimension`, or `Dimension` classes, but not from the `MutableDimensionDimension<TKey, TValue>` class, or for implementing `IMutableDimension`|  | 336135 |
| Marketing Foundation | ​A new interaction aggregation pipeline that can handle batches of interactions has been added.​​​ |  | 308302 |
| Marketing Foundation | A new command has been introduced to remove obsolete index data after you rebuild the index.  
`.\Sitecore.XConnectSearchIndexer.exe -cri`  
or  
`.\Sitecore.XConnectSearchIndexer.exe -cleanuprebuildindex` |  | 162236 |
| Marketing Foundation | ​​​The MongoDB database provider has been upgraded to Mongo Server 4.0.10. |  | 337277 |
| Marketing Foundation | ​​We have implemented some GDPR improvements to support the right to be forgotten.

The right to be forgotten now deletes every interaction, interaction facet, calculated facet, and executes the right to be forgotten for the whole tree of merged contacts. You cannot use the XConnect public API to delete interactions and interaction facets. This is only supported as part of the right to be forgotten|  | 313231, 321543, 321550, 321556, 332352, 333162, 330419, 336116, 337599, 335175 |
| Media | ​​The language parameter is now embedded in media links. |  | 95419 |
| Media | We have introduced Sitecore Blob storage. Sitecore stores media items, such as documents or images, in a Sitecore database by default. Sitecore Blob Storage allows you to store these files in Azure Blob Storage, thereby reducing the hosting costs and improving performance.​​ |  |  |
| Miscellaneous | The _Collection_ database schema has been changed to store a shard key value. This is a requirement for the Microsoft _Split-Merge_ service that is used to rebalance data between shards.  
The _Database Deployment Tool_ has been extended with the new operations such as _addShard_, _deleteShard_, _printMapping_ and _registerSchema_. These new operations are required for data rebalancing, to scale-out (add new shard), and to scale-in (delete existed shard).  
An upgrade tool that fills the shard key value for data that had been collected before Sitecore XP 9.3.0 has also been introduced. |  | 313239, 313274, 313275, 313281, 339243, 342128, 343302, 343739, 351316, 317885 |
| Performance | The performance of the _Reference Data_ service has been improved.​​ |  | 255280 |
| Performance | ​​The number of calls made from the web tracker to _Reference Data_ has been reduced by 50%. |  | 336373 |
| Performance | ​​​When you start a session, xConnect loads the last known contact by _DeviceID_ in one request, thereby improving performance. |  | 336126 |
| Performance | The performance of the session state providers​ has been improved by optimizing the amount of data that is saved to the session state.​​ |  | 311281 |
| Performance | The performance of the web tracker has been improved by saving expired sessions to xConnect in batches.​​ |  | 309323 |
| Platform | ​​​Improvements to the Indexer.  
The stability and performance of indexing and index rebuilding has been improved.

*   Batching & parallelization during the rebuild process.
*   We have reduced the SplitRecordsThreshold from 25k to 1k.
*   We have reduced ParallelizationDegree of the rebuild by 50<%>%.
*   The sync stage of rebuild can now finish if there is an indexing cycle where less than 25k of changes are detected|  | 340608 |
| ​Platform | ​​​The `XConnectSearchIndexer.exe` file has been renamed to `Sitecore.XConnectSearchIndexer.exe`. |  | 235420 |
| Platform | We have implemented fault tolerance to the index rebuild process. Temporary infrastructure hiccups no longer make the rebuild to stop and it will now retry automatically. After a restart, the rebuild process now resumes where it left off.​​ |  | 162809 |
| Publishing | ​​​The `Sitecore.Publishing.HtmlCacheClearer` method now takes the sites for which the html cache should be cleared from the _sites_ section of the _web.config_ file. |  | 96358 |
| Search | ​​​Sitecore now supports permission enabled search. Search queries now contain information about the Sitecore permissions of the user who initializes the search. |  | 312641 |
| Sitecore Forms | ​​We have improved database performance by increasing our ability to prevent deadlocks.​ |  |  |
| Sitecore Forms | ​​​You can now use the client-side API to retrieve form fields, for example when you build a custom submit action that needs to show all the form fields. |  |  |
| Sitecore Forms | We have implemented a forms element that allows you to add email confirmation to a form.​​ |  |  |
| Sitecore Forms | ​​You can now use the Sitecore bot detection functionality to verify whether visitor is human. This removed the need for a _Captcha_ element. |  |  |
| Sitecore Forms | ​​You can now publish a form from the forms list. |  |  |
| Sitecore Forms | ​​​You no longer need to rebuild the _master_ index after you install Sitecore XP. |  |  |
| Sitecore Forms | ​​​Users can now use the _Redirect_ submit action to redirect to a URL and pass parameters to it. |  |  |
| Sitecore Forms | Users can now delete submitted data for a particular form and specify a date range.​​ |  |  |
| Sitecore Security | ​​Support has been added for Bearer tokens of Client Credentials flow. |  | 348633 |
| Sitecore Forms | ​​To add file upload functionality to your forms, you can now use the File upload forms element. |  |  |
| Solr | We have implemented two new _ConnectionTimeout_ settings​; one for the defailt Solr operations and one for performing queries.​​​ |  | 151181 |
| Solr | ​​When you generate a​ Solr schema, we now add more languages. |  | 96387 |

Deprecated/Removed
------------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Experience Optimization | ​​​The _ContactId_ column has been removed from the _Fact\_PageViews_ and _Fact\_Visits_ tables​. |  | 333197 |
| Miscellaneous | ​​Deprecated SQL Server data types​ have been replaced. |  | 250522 |
| Miscellaneous | ​All code that was marked as _Obsolete_ in Sitecore XP 9.2.0 or earlier has been removed from the product. The code that will be removed in the next major release is now marked as _Obsolete​​_.​​ |  | 301983 |
| Miscellaneous | ​The `Sitecore.Data.Fields.WordDocumentField, Sitecore.Kernel`​ type was marked as obsolete in Sitecore 9.2.0 or earlier and removed from the platform code in Sitecore 9.3.0.​​​ |  | 323293 |
| Multibrowser fixes | ​​Support for Internet Explorer 11 has been deprecated in Sitecore 9.3.0 and will be completely removed in the next major release. |  |  |
| Search | ​​​The _ISearchIndexSummary_, _IsHealthy_, and _IsClean_ properties​ have been removed. |  | 331295 |
| Search | Support for Lucene has been ​​removed. |  |  |
| Templates | ​​​NVelocity​ has been removed. |  | 300371 |

Breaking changes
----------------

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Email Experience Manager | ​​​
*   The EXM URLs have changed and as a result, bookmarked URLs no longer work.
*   The updated EXM UI is no longer SPEAK-based and does not support EXM SPEAK UI customizations - in the list pages and the Campaign builder. In short:
    *   Existing SPEAK customizations no longer work.
    *   Existing SPEAK customizations cannot be adapted for new versions of Sitecore.
    *   You cannot create new SPEAK customizations.
*   EXM URLs are now case-sensitive|  | 201065 |
| Marketing Foundation | ​​In Sitecore xDB Processing Q​ueue:

In `Sitecore.Xdb.Processing.Queue.SqlServer`, the reference to `Sitecore.Xdb.Sql.Common` has been replaced with a reference to `Sitecore.Framework.TransientFaultHandling.Sql`.

The `Sitecore.Xdb.Sql.Common.IRetryManager retryManager` parameter has been replaced with `Sitecore.Framework.TransientFaultHandling.IRetryerRegistry retryerRegistry` in the constructors of the following classes:

*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerContactProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerGenericProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerInteractionHistoryProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerInteractionLiveProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerInteractionProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerProcessingPoolFactory`

The `IRetryerManager RetryManager` protected property has been replaced with the `IRetryer RetryPolicy` protected property in the following classes:

*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerProcessingPool`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerProcessingPoolFactory`

The `string retryerName` parameter has been added to the constructors and the new `string RetryerName` public property has been added to:

*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerProcessingPoolFactorySettings`
*   `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerProcessingPoolSettings`

In the `Sitecore.Xdb.Processing.Queue.SqlServer.SqlServerGenericProcessingPool` class, the `GetSqlMataDataForKey` protected method has been renamed as `GetSqlMetaDataForKey`.

In the `App_Data/Config/Sitecore/Collection/sc.Xdb.Processing.Queue.SqlServer.xml` configuration file, the `Sitecore/XConnect/Collection/Services/Xdb.Processing.Queue.SqlServer.SqlServerProcessingPoolSettings/Options/RetryerName` parameter has been added|  | 328222 |
| Marketing Foundation | ​​In Sitecore xDB:

In `Sitecore.Analytics.Sql`, the reference to `Sitecore.Xdb.Sql.Common` has been replaced with a reference to `Sitecore.Framework.TransientFaultHandling.Sql`.

The `Sitecore.Xdb.Sql.Common.IRetryManager retryManager` parameter has been replaced with the `Sitecore.Framework.TransientFaultHandling.IRetryerRegistry retryerRegistry` and `string retryerName` parameters in the constructors of the following classes:

*   `Sitecore.Analytics.Aggregation.History.SqlHistoryCursorDataProvider`
*   `Sitecore.Analytics.Aggregation.History.SqlHistoryCursorDataProviderFactory`
*   `Sitecore.Analytics.Aggregation.History.SqlHistoryTaskDataProvider`
*   `Sitecore.Analytics.Aggregation.History.SqlRebuildProcessStateDataProvider`
*   `Sitecore.Analytics.Processing.SqlProcessingCursorDataProvider`
*   `Sitecore.Analytics.Processing.SqlProcessingCursorDataProviderFactory`
*   `Sitecore.Analytics.Processing.SqlTaskDataProvider`
*   `Sitecore.Analytics.SqlCursorDataProvider`
*   `Sitecore.Analytics.SqlDataProvider`

In the `Sitecore.Analytics.SqlDataProvider` class, the `IRetryerManager RetryManager` protected property has been replaced with the `IRetryer Retryer` protected property.

In the `App_Config/Sitecore/Marketing.xDB/Sitecore.Analytics.Processing.Aggregation.config` configuration file:

*   The `sitecore/aggregation/retryManager` configuration node has been removed.
*   In the `sitecore/aggregation/historyTaskManager/param[@desc='taskDataProvider']` and `sitecore/aggregation/historyTaskManager/param[@desc='cursorDataProviderFactory']` configuration nodes, the `<param desc="retryManager" ref="aggregation/retryManager" />` node has been replaced with the `<param desc="retryRegistry" type="Sitecore.Framework.TransientFaultHandling.IRetryerRegistry, Sitecore.Framework.TransientFaultHandling.Abstractions" resolve="true" />` and `<param desc="retryerName">Analytics.Aggregation.SqlServer.Retryer </param>` nodes.

In the `App_Config/Sitecore/Marketing.xDB/Sitecore.Analytics.Processing.Aggregation.ProcessingPools.config` configuration file:

*   In the `sitecore/aggregationProcessing/processingPools/live, sitecore/aggregationProcessing/processingPools/history` and `sitecore/aggregationProcessing/processingPools/contact` configuration nodes, the `<param desc="retryManager" ref="aggregation/retryManager" />` node has been replaced with the `<param desc="retryRegistry" type="Sitecore.Framework.TransientFaultHandling.IRetryerRegistry, Sitecore.Framework.TransientFaultHandling.Abstractions" resolve="true" />` node.

In the `App_Config/Sitecore/Marketing.xDB/Sitecore.Analytics.Processing.config` configuration file:

*   In the `sitecore/processing/TaskDataProvider` and `sitecore/processing/CursorDataProviderFactory` configuration nodes, the `<param desc="retryManager" ref="processing/retryManager" />` node has been replaced with the `<param desc="retryRegistry" type="Sitecore.Framework.TransientFaultHandling.IRetryerRegistry, Sitecore.Framework.TransientFaultHandling.Abstractions" resolve="true" />` and `<param desc="retryerName">Analytics.Aggregation.SqlServer.Retryer</param>` nodes.
*   In the `sitecore/processing/ProcessingPoolFactory` configuration node, the `<param desc="retryManager" ref="processing/retryManager" />` node has been replaced with the `<param desc="retryRegistry" type="Sitecore.Framework.TransientFaultHandling.IRetryerRegistry, Sitecore.Framework.TransientFaultHandling.Abstractions" resolve="true" />` node|  | 301891 |
| Marketing Foundation | ​​​In the Reference Data Service, the maximum size of the _Moniker_ has been reduced to 300 characters. |  | 336131 |
| Marketing Foundation | We have removed a large number of redundant methods and classes from the MRSClient and merged the MRSClient into the Processing Engine.​​​ |  | 328970 |
| Marketing Foundation | In the Sitecore Xdb ReferenceData Service:

In `Sitecore.Xdb.ReferenceData.SqlServer`, the reference to `Sitecore.Xdb.Sql.Common` is replaced with a reference to `Sitecore.Framework.TransientFaultHandling.Sql`.​

Breaking changes in the code:

In the following classes:

*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.DeleteDefinitionTypeCommand`
*   `Sitecore.Xdb.ReferenceData.Sq​​lServer.Commands.DeleteDefinitionsCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.EnsureDefinitionTypeCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.GetByDefinitionTypesCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.GetDefinitionTypeCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.GetDefinitionsCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.SaveDefinitionCulturesCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.SaveDefinitionsCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.SaveDefinitionsCommonDataCommand`
*   `Sitecore.Xdb.ReferenceData.SqlServer.Commands.SqlServerReferenceDataProviderCommand`

the:

*   `public .ctor(string, ILogger, ITvpConverter, IRetryManager)` constructor is replaced with `public .ctor(string, ILogger, ITvpConverter, IRetryer)`.
*   `protected IRetryManager RetryManager { get; }` property is replaced with `protected IRetryer Retryer { get; }`.

In the `​Sitecore.Xdb.ReferenceData.SqlServer.SqlServerReferenceDataProvider` class:

*   The `public .ctor(IConfiguration, ILogger, IRetryManager)` constructor is replaced with `public .ctor(IConfiguration, ILogger, IRetryerRegistry)`.
*   The `public .ctor(string, ILogger, IRetryManager)` constructor is replaced with `public .ctor(string, ILogger, IRetryerRegistry, string)`.
*   The `public .ctor(IConfiguration, ILogger, ITvpConverter, IRetryManager)` constructor is replaced with `public .ctor(IConfiguration, ILogger, ITvpConverter, IRetryerRegistry)`.
*   The `public .ctor(string, ILogger, ITvpConverter, IRetryManager)` constructor is replaced with `public .ctor(string, ILogger, ITvpConverter, IRetryerRegistry, string)`.
*   The `protected IRetryManager RetryManager { get; }` property is replaced with `protected virtual IRetryer Retryer { get; }`.

In the `App_Config\Sitecore\Marketing.Xdb.ReferenceData.SqlServer\Sitecore.Xdb.ReferenceData.SqlServer.config` configuration file, in the `configuration/sitecore/xdb.referenceData.sql/sqlDataProvider` node, the `<param name="retryManager" type="Sitecore.Xdb.Sql.Common.IRetryManager, Sitecore.Xdb.Sql.Common"resolve="true">` node is replaced with these two nodes:

*   `<param name="retryerRegistry" type="Sitecore.Framework.TransientFaultHandling.IRetryerRegistry, Sitecore.Framework.TransientFaultHandling.Abstractions" resolve="true">`
and*   `<param name="retryerName">Sitecore.Xdb.ReferenceData.SqlServer.Retryer</param>​`

 |  | 301889 |
| Marketing Foundation | ​​​The xConnect model has been updated - an _AreaCode_ property has been introduced for _PhoneNumber_. |  | 211033 |
| Marketing Foundation | ​​​The SQL provider for the XConnect _Collection_ database now uses the _Sitecore.Framework.TransientFaultHandling_ library. The retryer configuration has been moved to the new _sc.Xdb.Collection.Retryers.Sql.xml_ file. |  | 255421, 324968, 301888 |
| Marketing Foundation | ​​The SQL provider for the _Collection_ database has been updated to .NET Standard. |  | 313214, 315295, 332327, 337494, 332319 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Customer ticket ID (or other) | TFS no. |
| --- | --- | --- | --- |
| Content Editor | ​In the Content Editor, when you click the folder tab it can cause an exception.​​ |  | 163956 |
| --- | --- | --- | --- |
| Content Editor | ​When you preview an item, the wrong version​ is shown.​​ |  | 418769 |
| --- | --- | --- | --- |
| Content Editor | ​​​URLs that contain fragment identifiers are resolved incorrectly. |  | 304977 |
| --- | --- | --- | --- |
| Content Editor | In the _Media Library_, in a media item, in the _Media_ field, when you click _Attach_, Sitecore doesn\`t prompt you to save your changes and all your changes are lost.​ ​​ |  | 348439 |
| --- | --- | --- | --- |
| Content Editor | ​​​In a content item that contains a field of the _File_ field type, when you upload a media item from the _File_ field, a version is created in the wrong language. |  | 328316 |
| --- | --- | --- | --- |
| Content Editor | ​​​​The _Screenshot_ functionality does not work. |  | 299347 |
| --- | --- | --- | --- |
| Content Editor | ​​​​When the _AllowDuplicateItemNamesOnSameLevel_ setting is set to _false_ you can create multiple items with the same name but with different cases on the same level in the content tree​. |  | 315775 |
| --- | --- | --- | --- |
| Device Detection | ​​When a new updated device detection db is detected, the new db is downloaded and used but old unused db is not deleted. |  | 328306 |
| --- | --- | --- | --- |
| Device Detection | ​​​When deployed to the Azure Web Apps, the _Device Detection_ databases are not moved from the shared file system to the local one.​ |  | 328319 |
| --- | --- | --- | --- |
| Experience Analytics | ​​There is an arithmeticoverflow error in Experience Analytics reports. | 531334 | 331564 |
| --- | --- | --- | --- |
| Experience Analytics | ​​​The _Experience Analytics Goal_ report shows an incorrect value. | 532400 | 338284 |
| --- | --- | --- | --- |
| Experience Analytics | You cannot drill down into the list control reports.​​ |  | 345996 |
| --- | --- | --- | --- |
| Experience Analytics | There are some compatibility issues between the _Reporting_ database and _Azure SQL_ database.​​ | 483153 | 158825 |
| --- | --- | --- | --- |
| Experience Analytics | ​​You cannot create a custom flexible dimension due to class protection level. | 528946 | 326385 |
| --- | --- | --- | --- |
| Experience Analytics | ​​​Obsolete legacy dimensions are still available. |  | 338382 |
| --- | --- | --- | --- |
| Experience Editor | ​​In the Experience Editor, you can edit the time in a _Date_ field. | 401405, 401607, 430293, 453589 | 49526 |
| --- | --- | --- | --- |
| Experience Editor | ​​​In some situations, you cannot modify a personalized Rich Text field for non default conditions. | 436907 | 60251 |
| --- | --- | --- | --- |
| Experience Editor | ​​​When you use the _Field Editor_ button​, some fields are not updated immediately. | 443105 | 67861 |
| --- | --- | --- | --- |
| Experience Editor | ​​​The Experience Editor doesn't encode HTML entities, such as, _&reg;_ when they are saved. | 465276, 466489, 468164 | 114860 |
| --- | --- | --- | --- |
| Experience Editor | ​​If a field contains quotation marks ("") in the description, the floating toolbar doesn't appear. | 465935, 473397, 485999,489801, 493941 | 118340 |
| --- | --- | --- | --- |
| Experience Editor | ​​In the Experience Editor, the inline Rich Text Editor wraps the content with unnecessary <p> tags. | 479815, 499730, 511835 | 153508 |
| --- | --- | --- | --- |
| Experience Editor | ​​​When you ​save a page that contains multiple RTE fields, new Regex instances​ must be compiled and this degrades performance. | 525443 | 314053 |
| --- | --- | --- | --- |
| Experience Editor | ​On a multi-site solution, you cannot switch between the final and the shared layout.​​ | 526371, 530698, 532566, 538820 | 315995 |
| --- | --- | --- | --- |
| Experience Editor | ​​​The Experience Editor removes tags from single line and multi-line text fields if the field type is removed from the _Rendering.HtmlEncodedFieldTypes​_ configuration. | 528144, 529435, 536195, 537657 | 319982 |
| --- | --- | --- | --- |
| Experience Editor | ​​On Sitecore PaaS, when _isPersistentUser_ is set to _false_ in the configuration, ​a server error occurs in the Experience Editor. | 533548 | 341058 |
| --- | --- | --- | --- |
| Experience Editor | ​​In the _RTE_ or in a _Multi-Line Text_ field, ​if you click Enter, it breaks the fields in an MVC layout. | 534866 | 341988 |
| --- | --- | --- | --- |
| Experience Editor | ​​​Field validation processes the values from the previous associated content item. | 535264 | 343755 |
| --- | --- | --- | --- |
| Experience Editor | ​​​If you edit a _General Link_ field that contains a text field, it is rendered incorrectly in the Experience Editor.​ | 537068 | 350189 |
| --- | --- | --- | --- |
| Experience Optimization | ​​​​If a page contains a large number of personalization rules, it generates a lot of server traffic when interactions are saved to the _reporting_ database and this can degrade data aggregation.​ |  | 319956 |
| --- | --- | --- | --- |
| Federated Experience Manager (FXM) | ​​The _Reach_ and _Effect_ personalization values are not calculated. | 494500 | 196927 |
| --- | --- | --- | --- |
| Installation | ​​​On Cloud deployments, the same connection string is used both for collection and search requests. |  | 338268 |
| --- | --- | --- | --- |
| Installation | The Sitecore Install Assistant process remains active if you close the application from the Windows context menu.​​​ |  | 330125 |
| --- | --- | --- | --- |
| Installation | If you run the Sitecore Install Assistant from a command line, file path validation fails. |  | 341353 |
| --- | --- | --- | --- |
| Item buckets | ​​​A _Checkbox_ field can be edited when _Field Write_ permission is denied. |  | 169753 |
| --- | --- | --- | --- |
| Item buckets | ​​​​Facets and the search result totals do not respect Sitecore security restrictions. |  | 96596, 93481 |
| --- | --- | --- | --- |
| Item buckets | ​If you search the _\_\_lock\_s:\[\* TO \*\]_ index, the results contain entries where the _\_\_lock\_s_ field is empty. ​ |  | 150433 |
| --- | --- | --- | --- |
| Language fallback | ​The `LanguageFallbackFieldValuesProvider.IsValidForFallback` method ignores the standard value of the _Enable Shared Language Fallback_ field.​​​ |  | 318506 |
| --- | --- | --- | --- |
| Language fallback | ​​​If the original item is changed, the Sitecore caches are not cleared for the language fallback version​ of a clone. |  | 211627 |
| --- | --- | --- | --- |
| Language fallback | ​​​The _LanguageFallback_ value for deleted item versions is displayed in the _Master_ database​. |  | 214055 |
| --- | --- | --- | --- |
| Language fallback | ​​​​An error occurs when _Language fallback_ is enabled for the client language and _AllowStandardValuesForSharedLanguageFallback_ is set to _true_. |  | 257222 |
| --- | --- | --- | --- |
| Links | ​​The _master_ database contains ​6 broken links. |  | 222261 |
| --- | --- | --- | --- |
| Login | ​​​You cannot log in to Sitecore if you have already multiple open sessions as the same user. |  | 94909 |
| --- | --- | --- | --- |
| Marketing Automation | ​​​When you create a Marketing Automation plan in a language that is not the default language, errors occur. |  | 329905 |
| --- | --- | --- | --- |
| Marketing Automation | Marketing Automation campaigns are still active when the end date is in the past. ​​​ |  | 296743, 349293 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​Indexing long strings that contain special UTF-8 characters that use more than two bytes can sometimes cause an exception like _Field contains a term that is too large to process. The max length for UTF-8 encoded terms is 32766 bytes._ |  | 332296 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​Two Sitecore XP 8.X gutters are missing in Sitecore XP 9​.0. | 529746 | 327922 |
| --- | --- | --- | --- |
| Marketing Foundation | Solr Cloud does not provide a retry feature.​​ |  | 220902 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​​On xConnect instances that are deployed in Azure and that use the Azure search provider, when you rebuild the xConnect search index, "Web client was changed/swapped" exceptions are written to the log files. | 525454, 529287 | 312499 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​You can not select a profile key in ​the _Where Contact Has Matched Profile Key Value in Profile_ rule. |  | 191318 |
| --- | --- | --- | --- |
| Marketing Foundation | When you rebuild the xConnect search index on an instance that uses SolrCloud, if the SolrCloud Zookeeper or the majority of the SolrCloud nodes are down, the log files are filled with exceptions and SolrCloud does not return a response.​​ |  | 220901 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​The performance of the stored procedures in the _Reference_ database is poor. |  | 312397 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​The _Title_ field is empty in the following templates:

*   /sitecore/templates/System/Analytics/Vendor Specific Filter/Configuration/ConstructorParameters
*   /sitecore/templates/System/Analytics/Vendor Specific Filter/Configuration/FilteringKey
*   /sitecore/templates/System/Analytics/Vendor Specific Filter/Configuration/Type
*   /sitecore/templates/System/Analytics/Vendor Specific Filter/Mapping/FilterEntry​

 |  | 223637 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​In the Sitecore Processing Engine, the host does not support the `Sitecore:XConnect:Initialize` configuration sections. |  | 334899 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​In the _Sitecore Reference Data_, _Sitecore Processing_, _Sitecore Processing Queue_, and _Sitecore Processing Engine_ databases, the _GrantLeastPrivilege_ stored procedure does not accept a domain user name as a parameter. |  | 331327 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​​​On scaled Cloud deployments, collection requests are redirected to the xConnect search instance​ instead of to the xConnect collection instance, and this degrades performance. |  | 338268 |
| --- | --- | --- | --- |
| Marketing Foundation | ​​When empty _RelatedInteractionsExpandOptions_ are specified, the XConnect client returns null instead of a contact. |  | 196480 |
| --- | --- | --- | --- |
| Marketing Foundation | `​​​ItemEventHandler` does not check if media items have marketing assets before validation. | CS0127572, CS0137883, CS0144664, CS0146544, CS0147485, CS0147621, CS0147874, CS0148079, CS0150962, CS0151085, CS0151393, CS0153404, CS0156155, CS0156536, CS0159171, CS0159217, CS0162620, CS0166738, CS0167123, CS0168259, CS0168617, CS0168942, CS0180945 | 197107 |
| --- | --- | --- | --- |
| Marketing Foundation | In the Media Library, item name validation is hardcoded. ​​ | CS0133485, CS0142535, CS0147861, CS0148397, CS0152643, CS0156155, CS0156936, CS0163316, CS0165778, CS0167353, CS0168942 | 211785 |
| --- | --- | --- | --- |
| Media | ​​​If you use the _Upload Files (Advanced)_ dialog and select the _Unpack ZIP Archives_ option to upload zip file that contains MAC OS files to the _Media Library_, an exception occurs. |  | 91750 |
| --- | --- | --- | --- |
| Media | When you upload a media item, the fields contain incorrect media/exif data.​​​ |  | 326783 |
| --- | --- | --- | --- |
| Media | In the _Sitecore.config_ file, if the _Media.AlwaysAppendRevision_ setting is set to _true_​, an _​Unrecognized Guid format_ error occurs.​​​ |  | 219261 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​You can modify a versioned presentation without locking​ it. |  | 117110 |
| --- | --- | --- | --- |
| Miscellaneous | ​​​​Profile cards are rendered for the incorrect item. | CS0162701 | 343324 |
| --- | --- | --- | --- |
| Miscellaneous | ​The _FatalError_ validator reverts unsaved changes instead of canceling the command/action​.​​​ |  | 95852 |
| --- | --- | --- | --- |
| Miscellaneous | ​When you delete the last item version for a language, the link is not removed from the database when fallback language is on​.​​ |  | 187476 |
| --- | --- | --- | --- |
| Miscellaneous | ​If the _Tracking_ field is empty, `MediaRequestTrackingInformation.IsTrackedRequest` returns _false_​​ |  | 342784 |
| --- | --- | --- | --- |
| Path Analyzer | ​​​The Path Analyzer cannot deploy more than one map from the same map group. | 533364 | 214388 |
| --- | --- | --- | --- |
| MVC | In the _Views\\web.config​_ file, the MVC version is incorrect.​​ |  | 325979 |
| --- | --- | --- | --- |
| MVC | ​​The SwitchContextItem method uses original item in the rendering​. | 526612 | 314879 |
| --- | --- | --- | --- |
| Path Analyzer | ​​​The _First Visits_ map does not display any data. | 528278 | 320393 |
| --- | --- | --- | --- |
| Performance | ​​The architecture of the _LayoutField_ seriously degrades performance. |  | 325642 |
| --- | --- | --- | --- |
| Platform | ​​When you tag content​ the wrong database is selected to retrieve the _Tag Repository_. |  | 258101 |
| --- | --- | --- | --- |
| Platform | ​​​​Some security vulnerabilities have been fixed. |  | 342388 |
| --- | --- | --- | --- |
| Publishing | ​`Sitecore.Publishing.DefaultPublishManager.AddToPublishQueue` tries to retrieve clones even when clones are disabled​.​​ |  | 337643 |
| --- | --- | --- | --- |
| Publishing | ​​​If you are logged in as an administrator and reset the standard values on an item, your changes are not published the first time you republish the item. ​ |  | 334586 |
| --- | --- | --- | --- |
| Publishing | ​You can preview an item that has Publish Restrictions set on it at item level when _ItemCache_ indexing is enabled and the size of the _filteredItemsCache_ is set to 0.​​​​ |  | 257901 |
| --- | --- | --- | --- |
| Publishing | ​​​The _scheme_ site property is ignored in media URLs when the _AlwaysIncludeServerUrl_ setting is set to _true_. |  | 170025 |
| --- | --- | --- | --- |
| Rich Text Editor | ​In the RTE, when you click _Accept_ an extra _rel="noopener noreferrer"_ substring is added to the markup.​​​ |  | 223855 |
| --- | --- | --- | --- |
| Rich Text Editor | ​​​When you double click or select some words in an RTE field, ​the _Cannot read property 'toUpperCase' of undefined_ error occurs in the browser and appears in the client log. |  | 325886 |
| --- | --- | --- | --- |
| Search | ​​When indexing and ​generating a schema, the Sitecore XConnect Search Indexer adds fields with the _\_hasValue_ suffix for ​complex lists.​​​ |  | 201033 |
| --- | --- | --- | --- |
| Search | ​​​Sitecore uses different dynamicField names when generating a schema and updating indexes​. |  | 96385 |
| --- | --- | --- | --- |
| Search | ​In the SPEAK _Select Media_ dialog, if the default language is not English, Danish, Japanese or German, search does not work.​​​ |  | 95444 |
| --- | --- | --- | --- |
| Search | ​​When a search index has more than one crawler​, indexing dependencies are sometimes skipped. |  | 104301 |
| --- | --- | --- | --- |
| Search | A _Multilist with Search_ field does not respect security restrictions when displaying search results.​​​ |  | 314476 |
| --- | --- | --- | --- |
| Search | ​Azure Cognitive Search index is updated in multiple threads even when _ParallelIndexing_ is disabled​. | 535535 | 348448 |
| --- | --- | --- | --- |
| Search | ​Rule-based boosting does not work with Azure Cognitive Search​. | 531608 | 332265 |
| --- | --- | --- | --- |
| Search | ​In Azure Cognitive Search​, the reference field type is not culture independent. | 532226 | 332958 |
| --- | --- | --- | --- |
| Search | ​CompositeSearchService.cs can log the following message: _Service {searchService.Name} is not available. Data from the commit can be lost on this search service._ The message refers to the commit but does not contain any useful info about it​. | 537524 | 351347 |
| --- | --- | --- | --- |
| Search | Azure usage contains a memory leak. | 526765, 532705, 533228, 533931, 536021, 542931, 0170445 | 322151 |
| --- | --- | --- | --- |
| Search | In Azure Cognitive Search, index rebuild fails because the _boost\_2_ field is not in the configuration. | 529059, 529237, 531851 | 325955 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​If Solr is down when you start Sitecore, the _SwitchOnRebuildSolrCloudSearchIndex_ indexes are not initialized.​​​ |  | 171950 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​A _NullReferenceException_ occurs when the _Field_ name is not configured and the _Context.ContentDatabase_ is set to null​. |  | 160699 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​The `Sitecore.ContentSearch.SolrProvider.Agents.IsSolrAliveAgent.Run` method​ is implemented incorrectly. |  | 163850 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​Numeric value search does not work for all cultures​.​​ |  | 193751 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​Index update operations may never end if one of the indexing threads encounters an exception. |  | 257220 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​The number of index update threads created by the _OnPublishEndAsynchronousSingleInstanceStrategy_ is not controlled. |  | 285903 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​When you use Solr search, bucket items are not searchable in the _Media Library_. |  | 333317 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​The Document Builder does not respect the language fallback settings for computed index fields​. |  | 96931 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​​If you rebuild a search index when the _GetSitecoreItemChildren_ processor is disabled, you get a StackOverflow excpetion. |  | 334980 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | The _IsOnline_ (TestConnection) check throws an exception when the connection fails. ​​ |  | 326866 |
| --- | --- | --- | --- |
| Sitecore.ContentSearch | ​​​When content search fails, it does not retry to create aliases. |  | 326759 |
| --- | --- | --- | --- |
| Sitecore Azure | When securing xDB data with Azure Key Vault, sending lots of emails in one dispatch throws a _Request was not processed because too many requests were received_ error. |  | 410078 |
| --- | --- | --- | --- |
| Sitecore Forms | ​The _ExportData_ functionality does not encode Danish characters.​​​​ | 532588 | 333885 |
| --- | --- | --- | --- |
| Sitecore Forms | A timeout​​​ on a multi-page form causes unexpected behaviour.​​ | 520976 | 303423 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​A number of fields that should be validated allow you to enter invalid values.​ |  | 176429 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​When a form is submitted, the _Submit_ button is not disabled. | 527847 | 318918 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​​When you add conditions, the l​ist of form elements does not show the correct elements. |  | 353299 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​Multi-region Sitecore deployments​ have a deadlock issue. | 534642 | 328777 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​If the _indexAllFields_ setting is set to _false_, ​forms are not displayed. | 532120 | 331742 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​If you add an MVC form to a page in the Experience Editor,​ a Javascript error occurs. | 532326 | 333305 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​If a form contains a _next page_ navigation step, an incorrect website is resolved for the next page. | 528570 | 324029 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​Sitecore Forms throws a JS error in an SXA site​.​​ | 530484, 538456 | 329236 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​​If you use a query string that contains parameter without a value to open a page that contains a form, the form is not rendered​. | 529758, 537905 | 324457 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​If you make a _HEAD_ request to an item that contains a form, an exception​ occurs. | 519914, 525198, 527380, 530589, 533536, 535505, 536349 | 294567 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​​The _CSS class_ value of a _Radio button list_ field​ is not applied. | 526775, 532738, 533456 | 315905 |
| --- | --- | --- | --- |
| Sitecore Forms | Forms lists are sorted incorrectly.​​ | 528330, 528885, 532115 | 124756 |
| --- | --- | --- | --- |
| Sitecore Forms | If an MVC form rendering contains an e​mpty datasource, it throws a 404 status code error​. | 524580 | 310438 |
| --- | --- | --- | --- |
| Sitecore Forms | ​​The Sitecore Forms `RegularExpressionValidation` class should not IgnoreCase​. | 525583 | 312153 |
| --- | --- | --- | --- |
| Sitecore Security | ​​​There is a potential CORS defect in Sitecore Identity​. |  | 312831 |
| --- | --- | --- | --- |
| Sitecore Security | _​​Web Browser XSS Protection_ is not enabled. |  | 313727 |
| --- | --- | --- | --- |
| Sitecore Security | ​​​The _X-Content-Type-Options_ header is missing​. |  | 313742 |
| --- | --- | --- | --- |
| Sitecore Security | There is a potential cross-site scripting defect.​​​ |  | 325648 |
| --- | --- | --- | --- |
| Sitecore Security | ​​In _Sitecore Identity_, there is a potential application error disclosure​ issue. |  | 313719 |
| --- | --- | --- | --- |
| Sitecore Security | ​​The _PasswordRecoveryUrl_ is patched incorrectly during deployment.​ |  | 347183 |
| --- | --- | --- | --- |
| Sitecore Security | ​​​_MembershipUserStore_ fails to create a user when the _requiresUniqueEmail_ setting is set to _true_. | 531702 | 221700 |
| --- | --- | --- | --- |
| Sitecore Security | ​​When you start the application, a deadlock occurs in the _RegExpExpander_ processor. | 531030, 531883, 532641 | 329897 |
| --- | --- | --- | --- |
| Sitecore Security | ​​Properties mapped from external users are stored in Sitecore. | 528038 | 322839 |
| --- | --- | --- | --- |
| Sitecore Security | ​​The _Remove Inherit_ preset disables security inheritance for the _\_\_Everyone_ security role instead of the _Everyone_ security role. There is no _\_\_Everyone_ security role. |  | 90446 |
| --- | --- | --- | --- |
| Sitecore Services Client | ​​​There is a potential risk with SQL injections​. |  | 315824 |
| --- | --- | --- | --- |
| Sitecore Services Client | ​​The lifetime of some services is registered incorrectly in DI. |  | 331759 |
| --- | --- | --- | --- |
| Solr | ​​​_FirstOrDefault_ retrieves every record from SOLR. |  | 185485 |
| --- | --- | --- | --- |
| Solr | ​​Sitecore uses different dynamic field names when you generate Solr schemas and update indexes for the Czech, Norwegian, and Indonesian languages. |  | 96385 |
| --- | --- | --- | --- |
| Solr | ​​​When Sitecore generates a Solr schema it only adds 30 languages. |  | 96387 |
| --- | --- | --- | --- |
| Solr | ​​When Sitecore generates a _schema.xml_ file for Solr​, it doesn't add ​a dynamic field for Chinese. |  | 149901 |
| --- | --- | --- | --- |
| Solr | ​_SolrFieldNameTranslator's_ ​use of _Regex_ causes a performance degradation. ​​​ |  | 160464 |
| --- | --- | --- | --- |
| Solr | ​​You cannot define custom fields in the Solr managed schema. |  | 209851 |
| --- | --- | --- | --- |
| Solr | Sitecore starts very slowly if Solr is unavailable.​​ |  | 314454 |
| --- | --- | --- | --- |