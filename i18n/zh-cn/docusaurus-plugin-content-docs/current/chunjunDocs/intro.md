---
title: Introduction
sidebar_position: 1
---

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
# Introduction

*[ChunJun 1.12 New Features](chunjunDocs/change-log.md)*

- Most plugins support concurrent reading and writing of data, which can greatly improve the speed of reading and writing;

- Limit the reading speed of source plugins and reduce the impact on business databases;

- Save the dirty data when writing data;

- Limit the maximum number of dirty data;

- Multiple running modes: Local,Standalone,Yarn Session,Yarn Per;

- **Synchronization tasks support transformer operations that execute flinksql syntax;**

The following databases are currently supported:

|                        | Database Type  | Source                          | Sink                          | Lookup
|:----------------------:|:--------------:|:-------------------------------:|:-------------------------------:|:-------------------------------:|
|                        | MongoDB        | [doc](chunjunDocs/connectors/mongodb/mongodb-source.md) | [doc](connectors/mongodb/mongodb-sink.md) |[doc](chunjunDocs/connectors/mongodb/mongodb-lookup.md) |


# Quick Start

Please click [Quick Start](chunjunDocs/quickstart.md)

# How to contribute ChunJun

Please click [Contribution](chunjunDocs/contributing.md)

# License

ChunJun is under the Apache 2.0 license. See the [LICENSE](http://www.apache.org/licenses/LICENSE-2.0) file for details.
