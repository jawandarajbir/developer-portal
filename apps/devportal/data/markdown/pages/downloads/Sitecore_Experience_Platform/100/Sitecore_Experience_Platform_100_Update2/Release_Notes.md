---
title: Release Notes
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/100/Sitecore_Experience_Platform_100_Update2/Release_Notes
---


Release Notes
=============

**June 2021 – released Sitecore Experience Platform 10.0.2**

This is a product update. Sitecore recommends that you upgrade to this release.

*   [New features/improvements](#New)
*   [Resolved issues](#Resolved)

New features/improvements
-------------------------

| Context | Description | Ref. ID |
| --- | --- | --- |
| Installation | ​SIA 1.2.4​ supports Sitecore Experience Platform 10.0.2​​​. | 482329 |
| Installation | ​​Azure Toolkit 2.5.2 is compatible with Sitecore Experience Platform 10.0.2. | 482329 |
| Containers | ​Sitecore Identity Server uses ASP.NET Core Runtime 2.1.28. | 479052 |

Resolved issues
---------------

The following issues have been fixed:

| Context | Description | Ref. ID |
| --- | --- | --- |
| Containers | The solr-init image build fails because of the 7-zip installer. | 463219 |
| Platform | ​If item cloning is enabled, the field read performance for non-cloned items is degraded. | 227274 |
| Platform | ​In the `Sitecore.config` file, if `InheritWorkflowData` setting is set to _true_, cloned items are published in the _Draft_ workflow state. | 116954 |
| Platform | If the # symbol is entered as a fragment identifier, ​it is duplicated. | 405403 |
| Platform | ​If you use a _Custom Experience_ button in the Experience Editor, and in a _File_ field click _Open file_, the _Value cannot be null. Parameter name: name_ error occurs. | 400101 |
| Platform | ​The performance of the translation cache _reload_ operation performance is very poor. | 406777 |
| Platform | If the _Enforce Version Presence_ setting is enabled, access to an item is denied​ if its parent item has no version in the current language. | 435442 |
| Platform | If a request to the _Items_ controller is too long​, the `Microsoft.AspNet.OData.Query.Validators.FilterQueryValidator.IncrementNodeCount` method throws an exception. | 441621 |
| Miscellaneous | The `CheckRevision` processor​ does not work correctly. | 483261 |
| Miscellaneous | ​​If you edit an empty _Multi-Line Text Field_,
tags are displayed when you save your changes​| 483259 |