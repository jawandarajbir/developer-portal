---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/101/Sitecore_Experience_Platform_101_Update1/Release_Notes
---


Release Notes
=============

**June 2021 – released Sitecore Experience Platform 10.1.1**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

*   [New features/improvements](#New)
*   [Resolved issues](#Resolved)

New features/improvements
-------------------------

| Context | Description | Ref. ID |
| --- | --- | --- |
| Containers | Sitecore Identity Server supports ASP.NET Core Runtime 2.1.28. | 479052 |
| Installation | Sitecore Install Assistant 1.2.3 supports Sitecore XP 10.1.1, | 475141 |
| Platform | In the `prerequisites.json` file, the dotnet core runtime version has been u​pdated to 2.1.28​. | 479185 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Ref. ID |
| --- | --- | --- |
| Containers | ​The 7-zip installer prevents the Solr-init image from being built. | 463219 |
| --- | --- | --- |
| Email Experience Manager | The _Preference Center_ does not update a user's subscription preferences. | 459455 |
| --- | --- | --- |
| Experience Optimization | ​The datasource of the original variant is overridden by the context item if you add a new variation during component testing. | 393648 |
| --- | --- | --- |
| Experience Optimization | ​The active page test is overwritten when you create and save a new page test​. | 474259 |
| --- | --- | --- |
| Experience Optimization | ​The _Default_ personalization rule cannot be removed.​ | 477131 |
| --- | --- | --- |
| Horizon | ​.NET Core Remote Code Execution Vulnerability CVE-2021-26701 has been fixed. | 487513 |
| --- | --- | --- |
| Marketing Foundation | ​If xConnect experiences any issues, _Task Manager_ tasks are interrupted. | 461138 |
| --- | --- | --- |
| Marketing Foundation | ​The Collection Search SOLR WDP is configured incorrectly. | 473204 |
| --- | --- | --- |
| Marketing Foundation | ​The `CursorScheduler.TryGetNextAsync` cursor gets completed before the work is finished​. | 476817 |
| --- | --- | --- |
| Marketing Foundation | ​If you stop the _Collection ​Search Indexworker_ service, the `Sitecore.XConnectSearchIndexer.exe` process stays alive for a long time. | 478798 |
| --- | --- | --- |
| Platform | If the end date for a publishing restriction is set​ to yesterday, the _MaxAge_ media cache header causes an error. | 473233 |
| --- | --- | --- |
| Platform | If the HTTP cookies domain attribute is set to _.930.cm_, an infinite loop occurs on logout. | 473231 |
| --- | --- | --- |
| Platform | If the value of the language cookie (_website#lang_) is set to an incorrect value, the _Could not parse the language_ message is shown. | 473235 |
| --- | --- | --- |
| Platform | If you delete a version of a media item from the _Recycle Bin​_, ​Blobs are not removed​. | 473237 |
| --- | --- | --- |
| Platform | ​Broken links are not deleted from fields that are based on the `Sitecore.Data.Fields.ReferenceField` type​. | 473239 |
| --- | --- | --- |
| Platform | ​If the _Item name_ and _Display name_ contain special characters, they are double-encoded. | 473238 |
| --- | --- | --- |
| Platform | ​If the _Range_ value is larger than the size of the file, the partial retrieval of media files fails. | 473236 |
| --- | --- | --- |
| Platform | If the `AllowDuplicateItemNamesOnSameLevel` setting is set to _false​_, the ​_PublishAgent_ can fail under some conditions. | 473241 |
| --- | --- | --- |
| Platform | ​Sitecore queries that contain the pipe '|' symbol return incorrect results when searching an item and its children. | 473243 |
| --- | --- | --- |
| Platform | ​The _Language Fallback_ functionality can change the _Standard Values_ of an item. | 473242 |
| --- | --- | --- |
| Platform | ​The _User Role_ condition does not work for virtual users​. | 473230 |
| --- | --- | --- |
| Platform | ​The _Default_ personalization rule cannot be removed in some circumstances​. | 473227 |
| --- | --- | --- |
| Platform | ​The _BreakingLinks_ dialog is not shown when you delete an item. | 473228 |
| --- | --- | --- |
| Platform | If you change the sort order in the Experience Editor, ​the _revision_ field is not updated​. | 473244 |
| --- | --- | --- |
| Platform | ​If you enter special characters in a rule condition, they are encoded.​ | 473226 |
| --- | --- | --- |
| Platform | Some security vulnerabilities have been fixed. | 473246, 477634 |
| --- | --- | --- |
| Platform | ​The link for the _Web Platform Installer_ is out of date.​ | 479292 |
| --- | --- | --- |
| Sitecore Forms | ​If you resubmit a form, robot detection becomes disabled. | 452462 |
| --- | --- | --- |
| Sitecore Forms | If tracking is disabled, the _Save Data_ submit action does not save any data. | 468105 |
| --- | --- | --- |
| Solr | Items that are created and updated by an Admin​ uswer are listed as having been created and updated by _Anonymous_.​​​​ | 470931, 470558, 455017, 454481 |
| --- | --- | --- |