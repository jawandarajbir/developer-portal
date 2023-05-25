---
title: Sitecore Experience Platform 10.3
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/103/Sitecore_Experience_Platform_103.aspx
---

# Sitecore Experience Platform 10.3x

Sitecore® Experience Platform 10.3 delivers new capabilities and quality improvements that enable organizations to deliver unforgettable experiences with increased ease and convenience.

Whether self-hosted, implemented in Sitecore Managed Cloud, or used as Experience Manager (XM) through Sitecore Experience Manager Cloud (XM Cloud), the 10.3 release improves how organizations extend and integrate the Sitecore Experience Platform (SXP) with other applications in their marketing tech stack. New management and administration APIs and webhooks enable developers to take an API-first and industry-standard approach to customization, reducing the reliance on in-process custom code. This separation of concerns makes it easier for developers to upgrade to new versions of the Experience Platform in the future.

Additionally, the introduction of Headless SXA, Headless Services 21.0, and enhancements to developer tools with 10.3 makes it easier for organizations to use SXP as a headless CMS, and to build engaging experiences using modern front-end frameworks.

Other highlights include:

- Headless SXA: Benefit from site scaffolding and templating, and new Next.js components, when building applications with XM as a headless CMS.

- EXM enhancements: Added OAuth support for custom SMTP deployments.

- Headless Services 21.0: Includes the new starter framework to accelerate the creation of new projects, and support for Next.js 12.3.x and React 18.

- Management Services 5.0: Enhanced Experience Edge publishing, resolved default publishing target, added support for single-item publishing.

- Sitecore CLI 5.0: Added Linux support, new telemetry, and XM Cloud support.

- System updates: Upgraded Identity Server and Publishing Service to support .NET 6, added support for Solr 8.11.2, and support for Windows Server 2022 coming in January.

For developer documentation please refer to documentation website.

Please note that as part of your system upgrade to Sitecore Version 10.3, Sitecore may collect additional information such as product version, number of site visits, generic hardware and software information, and recovery actions. This information will be used to help us to optimize your experience. All data will be processed in accordance with Sitecore’s privacy policy [here](https://www.sitecore.com/trust/privacy-policy). Should you have any queries or wish to discuss this, [please refer to our FAQ](https://kb.sitecore.net/articles/424335), or contact your Sitecore Account Manager.

Sitecore Experience Platform 9.1 or later does not support the _Active Directory_ module.

Sitecore encourages customers to always install latest update of a given version to ensure latest fixes are included in their solution. See [all available versions here](/downloads/Sitecore_Experience_Platform).

This page contains all the resources for **Sitecore Experience Platform 10.3**.

## Download options for Sitecore Container deployments

|Resource | Description |
| --------------- | ----------- |
| [Container Deployment Package](https://github.com/Sitecore/container-deployment/releases/tag/sxp%2F10.3.0.008463.1135) | The Sitecore Container Deployment Package contains the Docker Compose and Kubernetes specification files used to deploy Sitecore in development and production container environments. |
| [Installation Guide for Developer Workstation with Containers](https://sitecoredev.azureedge.net/~/media/FA43D3DDF83E431A8239C748764665A0.ashx?date=20221128T154025) | This guide describes how to use Sitecore Containers with Docker Compose to deploy a developer workstation.|
| [Installation Guide for Production Environment with Kubernetes](https://sitecoredev.azureedge.net/~/media/63955220ECDD4F748FE4ACF7598FDCBA.ashx?date=20230404T133610) | This guide describes how to use Sitecore Containers with Kubernetes to deploy containers to the Azure Kubernetes Service.|
| [Image and Tags List](https://github.com/Sitecore/docker-images/tree/master/tags) | Link to the official tags list (.md and .json format) of all published Sitecore images available on Sitecore Container Registry (SCR). |
| [Upgrade Container Deployment Guide](https://sitecoredev.azureedge.net/~/media/AD808EF7AE7347458E76259A5C8056A3.ashx?date=20221129T135637) | Explains how to use the Sitecore Container Deployment Package to upgrade the SQL Server databases of an existing Sitecore XP 10.0.X installation to Sitecore XP 10.3.0.|

## Download options

| Resource                                                                                                                                         | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [Sitecore Installation Framework](/downloads/Sitecore Installation Framework/2x/Sitecore Installation Framework 230) | Follow this link to download the Sitecore Installation Framework (SIF) PowerShell module. Please refer to the Sitecore Experience Platform installation guide for further information on how to install Sitecore with SIF. |
| [Scripts for Sitecore Security database](/downloads/Scripts for Sitecore Security database) | The package contains the set of scripts for moving Sitecore Security membership provider from the Core database to individual or existing one. |
| [Sitecore Remote Distributed Deployment SIF Templates](https://sitecoredev.azureedge.net/~/media/7255CF98254347108E085DFBB6687E02.ashx?date=20181217T093828) | The package contains Sitecore Install Framework deployment templates that can be used to deploy Sitecore Experience Platform remotely to a scalable distributed server cluster from a single workstation or server. |

## Download options for On Premises deployment

| Resource                                                                                                                                      | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [Graphical setup package for XP Single](https://sitecoredev.azureedge.net/~/media/8F77892C62CB4DC698CB7688E5B6E0D7.ashx?date=20221130T160548) | The Sitecore Install Assistant's user interface guides you through the Sitecore XP Developer Workstation (XP Single) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
| [Graphical setup package for XM Scaled](https://sitecoredev.azureedge.net/~/media/2062AF6DE2F74F2EBA6A7FA5EEE58578.ashx?date=20221130T155208) | The Sitecore Install Assistant's user interface guides you through the Sitecore XM Developer Workstation (XM Scaled) installation. Use it to review system requirements, install prerequisites, and complete the entire installation process. |
| [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/698FD008261148CA96B828E06AB1732E.ashx?date=20221124T084006) | Packages for XP Single (XP0) Instance configuration. |
| [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/96E95C52EA88433593BED25C7907F793.ashx?date=20221124T085026) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
| [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/F822AC26C1AC4805BA78E36E82545093.ashx?date=20221124T084005) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Azure AppService

| Resource                                                                                                                       | Description                                                          |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [Packages for XP Single](https://sitecoredev.azureedge.net/~/media/B2E30CACE9764AECBC88A2E8B5F0ACEF.ashx?date=20221124T074607) | Packages for XP Single (XP0) Instance configuration.                 |
| [Packages for XP Scaled](https://sitecoredev.azureedge.net/~/media/DDD4614CC85E45CD82EA397F6F4451EF.ashx?date=20221124T081243) | Individual packages for each of the dedicated XP Scaled (XP1) roles. |
| [Packages for XM Single](https://sitecoredev.azureedge.net/~/media/5BE45992CBB7496F904FF84B89F8157D.ashx?date=20221124T074606) | Packages for XM Single (XM0) Instance configuration.                 |
| [Packages for XM Scaled](https://sitecoredev.azureedge.net/~/media/70D51D2B9E0540759EBBBFB0AA55E020.ashx?date=20221124T074606) | Individual packages for each of the dedicated XM Scaled (XM1) roles. |

## Download options for Content Delivery Network CDN

| Resource                                                                                                                                    | Description                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Package for XM Scaled and XP Scaled](https://sitecoredev.azureedge.net/~/media/00FA1A0D0C4045F5AF1615FF9D20EB91.ashx?date=20181127T104334) | CDN package for both XM Scaled and XP Scaled Content Delivery (CD) role. |

## Download options for Blob Storage

| Resource                                                                                                                       | Description |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [Package for XM and XP](/downloads/Sitecore Azure Blob Storage/1x/Sitecore Azure Blob Storage 501) | Blob Storage Package for XM Scaled, XP Scaled, XM Developer, XP Developer. |

## Release information

| Resource | Description|
| --- | --- |
| [Release notes](/downloads/Sitecore Experience Platform/103/Sitecore Experience Platform 103/Release Notes)  | A list of features, improvements, and fixes that have been implemented in this release. |
| [Known issues](https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fsupport.sitecore.com%2Fkb%3Fid%3Dkb_search%26kb_knowledge_base%3D3492d025db70dc109e54320a6896199f%26spa%3D1%26u_sxp_affected_versions%3Def85f7161b6b9d50722d4042b24bcbbd%26language%3Den&data=05%7C01%7Cjonas.christensen%40sitecore.com%7Cbddc1bdf999b41b6b23508dad76bee27%7C91700184c3144dc9bb7ea411df456a1e%7C0%7C0%7C638059155799746258%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=RKzA08xW%2BlzUEB62%2FvRvRZlKUct%2BLW8u5uOpu12DYDA%3D&reserved=0) | Choose this link to access the Sitecore Knowledge Base.                                 |
| [Sitecore Installation Framework (SIF) Configuration Guide](https://sitecoredev.azureedge.net/~/media/513F8E70FD0441168A4F0A884EFD94EB.ashx?date=20221128T223834) | Explains how to use the SIF Microsoft PowerShell module to deploy and configure a Sitecore topology. |
| [Installation Guide for the XM Scaled topology](https://sitecoredev.azureedge.net/~/media/B5439F69B8F54ABABE668E009DBC327F.ashx?date=20230511T131956) | Explains how to install the Sitecore Experience Management (XM1) topology to run the Content Delivery (CD) and Content Management (CM) server roles, and the Sitecore Identity server. This topology does not support xDB and xConnect. |
| [Installation Guide for the XP Scaled topology](https://sitecoredev.azureedge.net/~/media/A21F9050B0314D9BAD35B118044A4CE4.ashx?date=20230511T131931) | Explains how to install the fully featured Sitecore Experience Platform Installation (XP1) topology. This topology can be configured to run separated server roles. |
| [Quick Installation Guide for a Developer Workstation](https://sitecoredev.azureedge.net/~/media/8B960AEAB9EE476DBBFA72C7AEEE643D.ashx?date=20230511T131857) | Explains how to install the XP Single (XP0) topology on a workstation for development and testing purposes. |
| [Upgrade Guide](https://sitecoredev.azureedge.net/~/media/5524FBC869B34F8C8DCF3C9E4B055291.ashx?date=20221125T174413) |Explains how to directly upgrade from Sitecore XP 8.1.0 through 10.0.1 to Sitecore XP 10.3.0.|
| [Assembly list](https://sitecoredev.azureedge.net/~/media/D89E6D6EBF55406187B93FD6694039CC.ashx?date=20221124T124036) | Complete list of assemblies shipped with this release. |

## Modules

| Resource                                                                                 | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [Sitecore CLI](/downloads/Sitecore CLI/5x/Sitecore CLI 5125) | Download files and release information for latest compatible version of Sitecore CLI.|
| [Sitecore Connect for Microsoft Dynamics 365 for Sales](/downloads/Dynamics CRM Connect/8x/Sitecore Connect for Microsoft Dynamics 365 for Sales 800) | Download files and release information for latest compatible version of Sitecore Connect™ for Microsoft Dynamics 365 for Sales. |
| [Sitecore Connect for Salesforce CRM](/downloads/Salesforce Connect/8x/Sitecore Connect for Salesforce CRM 800) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce CRM.|
| [Sitecore Connect for Salesforce Marketing Cloud](/downloads/Sitecore Connect software for Salesforce Marketing Cloud/1x/Sitecore Connect software for Salesforce Marketing Cloud 80) | Download files and release information for latest compatible version of Sitecore Connect™ for Salesforce Marketing Cloud.|
| [Sitecore Connect for Content Hub](/downloads/Sitecore Connect for Content Hub/5x/Sitecore Connect for Content Hub 510) | Download files and release information for latest compatible version of Sitecore Connect for Content Hub.|
| [Sitecore Data Exchange Framework](/downloads/Data Exchange Framework/8x/Data Exchange Framework 800) | Download files and release information for latest compatible version of Sitecore Data Exchange Framework. |
| [Sitecore Experience Accelerator](/downloads/Sitecore Experience Accelerator/10x/Sitecore Experience Accelerator 1030) | Download files and release information for latest compatible version of Sitecore Experience Accelerator. |
| [Sitecore Headless Rendering](/downloads/Sitecore Headless Rendering/21x/Sitecore Headless Rendering 2100) | Download files and release information for latest compatible version of Sitecore Headless Rendering. |
| [Sitecore Identity](/downloads/Sitecore Identity/7x/Sitecore Identity 70325) | Download files and release information for latest compatible version of Sitecore Identity. |
| [Sitecore Publishing Service Module](/downloads/Sitecore Publishing Service Module/10x/Sitecore Publishing Service Module 1030) | Download files and release information for latest compatible version of Sitecore Publishing Service Module. |

## Upgrade options

| Resource                                                                                                                                | Description                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [Configuration files for upgrade](https://sitecoredev.azureedge.net/~/media/17C1D3ABDD714056BCCEE40BC3C11034.ashx?date=20221124T123835) | This package contains configuration files and database scripts for the upgrade. |
| [Sitecore UpdateApp Tool](/downloads/Sitecore UpdateApp Tool/1x/Sitecore UpdateApp Tool 131)                | Updates the Core, Master, and Web databases. |
| [Resource files for Modules](/downloads/Resource files for Modules/1x/Resource files for Modules 100) | Module resource files for upgrading Core, Master and Web.|

## Client translations

| Resource                                                                                                                                | Description                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Danish (da-DK)](https://sitecoredev.azureedge.net/~/media/CE62A8BDCB464E039D4EC36970AD5DE3.ashx?date=20221124T073715)                  | Danish language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation.   |
| [German (de-DE)](https://sitecoredev.azureedge.net/~/media/561F69767C104E62AF6BA47728833652.ashx?date=20221124T073716)                  | German language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation.   |
| [Japanese (ja-JP)](https://sitecoredev.azureedge.net/~/media/20A814F6985E4E61AFBE241E4628EB56.ashx?date=20221124T073716)                | Japanese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation. |
| [Chinese (zh-CN)](https://sitecoredev.azureedge.net/~/media/5E6BEFCF4BE8434DBAABEFF8CB7E9341.ashx?date=20221124T073716)                 | Chinese language client translation file. Read [instructions](~/link?_id=B685CC31771E466080080239FDBEA625&_z=z) how to import a new language into the Sitecore installation.  |
| [Chinese GeoIP Localization Pack](https://sitecoredev.azureedge.net/~/media/D75C7162A1B4435486BA30894A6CBA18.ashx?date=20180327T105123) | The pack provides enhanced region detection for China. The pack should be installed as a regular Sitecore module.                                                             |

## Usage policies

| Resource                                                                                                                                                               | Description                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Sitecore Device Detection Services usage policy](https://dev.sitecore.net/downloads/Sitecore%20Experience%20Platform/Sitecore%20Device%20Detection%20Services%20Usage%20Policy) | This policy is applicable if you are using Sitecore Device Detection Service. |
| [Sitecore IP Geolocation usage policy](/downloads/Sitecore Experience Platform/Sitecore IP Geolocation Usage Policy)                       | This policy is applicable if you are using Sitecore IP Geolocations Service.  |
| [Sitecore xDB Cloud usage policy](https://dev.sitecore.net/downloads/Sitecore Experience Platform/Sitecore xDB Cloud Usage Policy)                                 | This policy is applicable if you are using Sitecore xDB Cloud.                |
